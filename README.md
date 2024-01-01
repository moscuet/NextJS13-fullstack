
<p align="center"><img align="center" width="280" src="./.github/logo-dark.svg#gh-dark-mode-only"/></p>
<p align="center"><img align="center" width="280" src="./.github/logo-light.svg#gh-light-mode-only"/></p>
<p align="center">
  <img src="https://skillicons.dev/icons?i=react,vite,ts" />
  <br/>
  <a href="https://discord.movie-web.app"><kbd>🔵 discord</kbd></a> <a href="https://movie-web.app"><kbd>🟢 website</kbd></a>
</p>
<br/><br/>


# Text Similarity API App

This App is a full-stack application designed to compare and determine the similarity between two texts, developed using Next.js 14
Check it out at <a href="https://movie-web.app"><kbd>movie-web.app</kbd></a>. 
[Access the Live App](https://textsimilarityapi-eight.vercel.app/)

## 🔥Features

## 🛠 Tech Stack
- Front-End: Next.js 14, Tailwind CSS, Radix UI Primitives, next/font, Lucide Icons, Framer Motion.
- Back-End: API Route Limiting, Sensitive Route Protection, OpenAI Integration, Redis/Upstash.
- Database: MySQL via Prisma (Planetscale).
- Authentication: Google Auth, API Key Management.
- Design & UX: Material-UI, Tailwind CSS Animate, next-themes for Dark Mode.
- Utilities: tailwind-merge, clsx, class-variance-authority.

##  📖 Project Story
The app focuses on delivering a minimalistic yet powerful tool for textual analysis, ensuring user-friendly interaction and efficient performance.


## ⚠️ Limitations
-  request limit 10/hour
-  only google authentication available now


# 🧬 Running locally for development

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
