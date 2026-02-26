---
title: "Building Modern Web Apps with Next.js and Tailwind CSS"
date: "2024-01-20"
excerpt: "A comprehensive guide to building fast, beautiful web applications using Next.js 14 and Tailwind CSS."
tags: ["nextjs", "tailwind", "webdev", "tutorial"]
---

# Building Modern Web Apps with Next.js and Tailwind CSS

Next.js and Tailwind CSS have become the go-to stack for modern web development. In this guide, we'll explore why this combination is so powerful and how to get started.

## Why Next.js?

Next.js is a React framework that provides:

- **App Router** - File-based routing with layouts and server components
- **Static Generation** - Pre-render pages at build time for blazing fast load times
- **TypeScript Support** - First-class TypeScript integration
- **Image Optimization** - Automatic image optimization (disabled for static export)

## Why Tailwind CSS?

Tailwind takes a utility-first approach to CSS:

```css
/* Instead of writing custom CSS */
.button {
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.375rem;
}
```

```html
<!-- You write utilities directly in HTML -->
<button class="px-4 py-2 bg-blue-500 text-white rounded-md">
  Click me
</button>
```

## Setting Up the Project

### 1. Create a new project

```bash
npx create-next-app@latest my-app --typescript --tailwind --app
```

### 2. Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── blog/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── PostCard.tsx
└── lib/
    └── posts.ts
```

## Key Concepts

### Static Export

For GitHub Pages deployment, configure Next.js for static export:

```ts
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};
```

### generateStaticParams

For dynamic routes, use `generateStaticParams` to tell Next.js which pages to generate:

```ts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

## Conclusion

Next.js + Tailwind CSS is an incredibly productive combination. The utility-first CSS approach and the powerful Next.js features make it easy to build fast, maintainable web applications.

Happy coding! 🚀
