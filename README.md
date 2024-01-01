
<p align="center"><img align="center" width="280" src="./.github/logo-dark.svg#gh-dark-mode-only"/></p>
<p align="center"><img align="center" width="280" src="./.github/logo-light.svg#gh-light-mode-only"/></p>
<p align="center">
  <img src="https://skillicons.dev/icons?i=react,vite,ts" />
  <br/>
  <a href="https://textsimilarityapi-eight.vercel.app"><kbd>🟢 website</kbd></a>
</p>

<br/><br/>


# Text Similarity API App

This App is a full-stack application designed to compare and determine the similarity between two texts, developed using Next.js 14
Check it out at [Text Similarity API](https://textsimilarityapi-eight.vercel.app/)

<br/>

## 🔥Features
- Google Authentication: Secure login to create a personal API key.
- API Key Management: Users can create, recreate, or revoke their API keys.
- Text Similarity Analysis: Utilize the API to compare the similarity between two pieces of text.
- User Dashboard: View and manage request history.

## 🛠 Tech Stack
- Front-End: Next.js 14, Tailwind CSS, Radix UI Primitives, next/font, Lucide Icons, Framer Motion.
- Back-End: API Route Limiting, Sensitive Route Protection, OpenAI Integration, Redis/Upstash.
- Database: MySQL via Prisma (Planetscale).
- Authentication: Google Auth, API Key Management.
- Design & UX: Material-UI, Tailwind CSS Animate, next-themes for Dark Mode.
- Utilities: tailwind-merge, clsx, class-variance-authority.

<br/>

##  📖 Project Story
The app focuses on delivering a minimalistic yet powerful tool for textual analysis, ensuring user-friendly interaction and efficient performance.

<br/>

## ⚠️ Limitations
-  request limit 10/hour
-  only google authentication available now

<br/>

# 🧬 Running  in local environment

First clone the repository, then run the following command in project root:

```bash
npm run dev
# or
yarn dev
```
Visit [http://localhost:3000](http://localhost:3000) for the application.

## Deployment

Deploy with the [Vercel Platform](https://vercel.com/new) for optimal performance and scalability. Refer to [Next.js deployment documentation](https://nextjs.org/docs/deployment) for detailed guidance.



### installed package
@emotion/react @emotion/styled @mui/material @mui/system @mui/x-data-grid @next-auth/prisma-adapter @prisma/client @radix-ui/react-dropdown-menu @radix-ui/react-scroll-area @radix-ui/react-tabs @total-typescript/ts-reset @upstash/ratelimit @upstash/redis class-variance-authority clsx date-fns framer-motion lodash lucide-react nanoid next-auth next-themes openai prism-react-renderer prisma react-hot-toast sharp simplebar-react tailwind-merge zod tailwindcss postcss autoprefixer
