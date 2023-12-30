# Text Similarity API App
This App is a full-stack application designed to compare and determine the similarity between two texts, developed using Next.js 14. It integrates Google authentication via NextAuth.js for secure and straightforward user access. The analysis is powered by OpenAI's API for sophisticated text embedding. Backend operations are managed by Prisma Client with a Planetscale database. We use Upstash Redis for performance enhancement and caching, along with implementing rate limiting to secure the server against an overload of requests. On the frontend, the application features a polished user interface with @mui/material and interactive elements from @radix-ui. 

## Technical Highlights

- **Next.js 14**: Utilized for creating dynamic, efficient web applications with both server-side and client-side rendering capabilities.
- **Prisma with MySQL**: Utilizes Prisma as the database client for MySQ.
- **Authentication**: Authentication: Implemented via next-auth with Google Authentication.
- **OpenAI Integration**: Incorporates OpenAI for advanced text analysis.
- **Redis with Upstash**: Uses Upstash Redis for effective rate limiting and caching.
- **UI/UX Design**: Crafted with `@mui/material`, `@eradix-ui`, and Tailwind CSS for an interactive and responsive interface.
- **Animation and Styling**: Enhanced with Framer Motion and Tailwind CSS Animate.
- **Font Optimization**: Employs `next/font` for optimized font handling.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Visit [http://localhost:3000](http://localhost:3000) for the application. Edit `app/page.tsx` for live updates.

## Deployment

Deploy with the [Vercel Platform](https://vercel.com/new) for optimal performance and scalability. Refer to [Next.js deployment documentation](https://nextjs.org/docs/deployment) for detailed guidance.



### installed package
@emotion/react @emotion/styled @mui/material @mui/system @mui/x-data-grid @next-auth/prisma-adapter @prisma/client @radix-ui/react-dropdown-menu @radix-ui/react-scroll-area @radix-ui/react-tabs @total-typescript/ts-reset @upstash/ratelimit @upstash/redis class-variance-authority clsx date-fns framer-motion lodash lucide-react nanoid next-auth next-themes openai prism-react-renderer prisma react-hot-toast sharp simplebar-react tailwind-merge zod tailwindcss postcss autoprefixer


### nextAuth.js
https://next-auth.js.org/getting-started/example 

### database

database using Prisma Client: https://app.planetscale.com
