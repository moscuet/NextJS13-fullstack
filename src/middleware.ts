import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'
import { withAuth } from 'next-auth/middleware'
import { z } from 'zod'


const redis = new Redis({
  url: process.env.REDIS_URL as string,
  token: process.env.REDIS_SECRET as string,
})

const limit = 10
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(limit, '1 h'),
})

export default withAuth(
  async function middleware(request) {
    const pathname = request.nextUrl.pathname

    // Manage rate limiting
    if (pathname.startsWith('/api')) {
      const ip = request.ip ?? '127.0.0.1'
      try {
        const { success } = await ratelimit.limit(ip)

        if (!success) return NextResponse.json({ error: `You have exceeded your request limits: ${limit} request /hour` })
        return NextResponse.next()
      
      } catch (error) {
        if (error instanceof z.ZodError) {
          return NextResponse.json({ error: error.issues });
        }

        return NextResponse.json({ error: 'Redis Server Error'  })
      }
    }

    // Manage route protection
    const token = await getToken({ req:request })
    const isAuth = !!token
    const isAuthPage = request.nextUrl.pathname.startsWith('/login')

    const sensitiveRoutes = ['/dashboard']

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }

      return null
    }

    if (
      !isAuth &&
      sensitiveRoutes.some((route) => pathname.startsWith(route))
    ) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  },
  {
    callbacks: {
      async authorized() {
        //  We return true here so that the middleware function above is always called as this workarounde is intended to redirect to pages.
        return true
      },
    },
  }
)

export const config = {
  matcher: ['/', '/login', '/dashboard/:path*', '/api/:path*'],
}