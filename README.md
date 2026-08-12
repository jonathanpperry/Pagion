# Pagion - Notion Clone

A Notion-style collaborative workspace application built with **Next.js**, **Convex**, and **Clerk**.

## Tech Stack

- [Next.js](https://nextjs.org/) 14
- [React](https://react.dev/)
- [Convex](https://www.convex.dev/) — backend/database and real-time data
- [Clerk](https://clerk.com/) — authentication
- TypeScript

---

# Getting Started

Follow these instructions to get the application running from a fresh clone.

## Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

Verify your installations:

```bash
node -v
npm -v
git --version
```

---

## 1. Clone the Repository

Clone the repository and enter the project directory:

```bash
git clone <repository-url>
cd <project-directory>
```

Replace `<repository-url>` and `<project-directory>` with the appropriate values for this repository.

---

## 2. Install Dependencies

Install the project's dependencies:

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env.local` file in the root of the project.

The application requires **four environment variables**:

```env
# Convex
CONVEX_DEPLOYMENT=dev:insightful-sockeye-423
NEXT_PUBLIC_CONVEX_URL=https://insightful-sockeye-423.convex.cloud

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
```

### Environment Variable Reference

| Variable                            | Purpose                                             | Secret? |
| ----------------------------------- | --------------------------------------------------- | ------- |
| `CONVEX_DEPLOYMENT`                 | Identifies the Convex development deployment        | No      |
| `NEXT_PUBLIC_CONVEX_URL`            | URL used by the frontend to communicate with Convex | No      |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk's browser-side publishable key                | No      |
| `CLERK_SECRET_KEY`                  | Clerk server-side authentication key                | **Yes** |

### Important

**Never commit `.env.local` to Git.**

The Clerk secret key must remain private. Do not put it directly into this README, source code, or any other committed file.

If `.env.local` is not already ignored by Git, add it to `.gitignore`:

```gitignore
.env.local
```

---

# 4. Start Convex

This application uses Convex as its backend and database.

From the project root, start the Convex development server:

```bash
npx convex dev
```

The first time you run this command, Convex may ask you to authenticate or select/configure a project.

For this project, the development deployment is:

```text
dev:insightful-sockeye-423
```

and the Convex deployment URL is:

```text
https://insightful-sockeye-423.convex.cloud
```

Keep the Convex process running while developing.

### What `npx convex dev` does

The Convex development process:

- Connects the local project to the Convex development deployment
- Watches the `convex/` directory for changes
- Pushes backend changes automatically
- Generates/updates Convex development code as needed
- Keeps the local application connected to the Convex backend

---

# 5. Start the Next.js Development Server

Open a **second terminal window** and run:

```bash
npm run dev
```

Then open:

http://localhost:3000

The normal development setup therefore requires **two terminal processes**:

### Terminal 1 — Convex

```bash
npx convex dev
```

### Terminal 2 — Next.js

```bash
npm run dev
```

Both should remain running during development.

---

# Starting the Application From Scratch

For future reference, the complete startup process is:

```bash
# 1. Clone the repository
git clone <repository-url>

# 2. Enter the project
cd <project-directory>

# 3. Install dependencies
npm install

# 4. Create/configure .env.local
# Add the four required environment variables

# 5. Start Convex
npx convex dev
```

Then, in a second terminal:

```bash
# 6. Start Next.js
npm run dev
```

Finally, open:

```text
http://localhost:3000
```

---

# Authentication

Authentication is handled by [Clerk](https://clerk.com/).

The application requires both Clerk environment variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
```

The publishable key is safe to expose to the browser and therefore uses the `NEXT_PUBLIC_` prefix.

The secret key is server-side only and **must never be exposed to the browser or committed to source control**.

If setting up the project with a different Clerk instance, obtain the appropriate keys from the Clerk dashboard and replace the values in `.env.local`.

---

# Convex

Convex provides the application's backend/database functionality.

The project is currently configured to use the following development deployment:

```text
dev:insightful-sockeye-423
```

with:

```text
https://insightful-sockeye-423.convex.cloud
```

The primary Convex backend code lives in:

```text
convex/
```

When `npx convex dev` is running, changes to the Convex backend are automatically synchronized with the development deployment.

---

# Project Structure

The project follows the standard Next.js App Router structure.

```text
.
├── app/                 # Next.js application routes and UI
├── components/          # Reusable React components
├── convex/              # Convex backend, queries, mutations, etc.
├── public/              # Static assets
├── .env.local           # Local environment variables (DO NOT COMMIT)
├── package.json
├── tsconfig.json
└── README.md
```

Your exact directory structure may contain additional folders as the application grows.

---

# Development Workflow

When returning to the project after shutting down your computer:

### Terminal 1

```bash
cd <project-directory>
npx convex dev
```

### Terminal 2

```bash
cd <project-directory>
npm run dev
```

Then visit:

```text
http://localhost:3000
```

You generally **do not need to reinstall dependencies every time**. Run `npm install` again only when dependencies have changed, the project is freshly cloned, or `node_modules` is missing.

---

# Troubleshooting

## `Module not found` errors

If dependencies are missing, run:

```bash
npm install
```

Then restart the development server:

```bash
npm run dev
```

---

## Convex connection errors

Make sure:

```bash
npx convex dev
```

is running.

Also verify that `.env.local` contains the correct:

```env
CONVEX_DEPLOYMENT=dev:insightful-sockeye-423
NEXT_PUBLIC_CONVEX_URL=https://insightful-sockeye-423.convex.cloud
```

Restart the Next.js development server after changing environment variables.

---

## Clerk authentication errors

Verify that both Clerk variables exist in `.env.local`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
```

If the keys were recently changed, restart the Next.js development server.

---

## Environment variables appear to be ignored

Next.js loads environment variables when the development server starts.

After changing `.env.local`, stop and restart:

```bash
npm run dev
```

---

# Useful Commands

Start the Next.js development server:

```bash
npm run dev
```

Start Convex development:

```bash
npx convex dev
```

Create a production build:

```bash
npm run build
```

Start the production server locally:

```bash
npm start
```

Run the linter:

```bash
npm run lint
```

---

# Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)
- [Convex Documentation](https://docs.convex.dev/)
- [Clerk Documentation](https://clerk.com/docs)
- [React Documentation](https://react.dev/)

---

# Deployment

The application can be deployed using [Vercel](https://vercel.com/).

When deploying, configure the same required environment variables in the deployment platform:

```env
CONVEX_DEPLOYMENT=...
NEXT_PUBLIC_CONVEX_URL=...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
```

Use the appropriate production Convex deployment and production Clerk credentials when deploying to production.

Do **not** use development credentials or a development Convex deployment for a production deployment.

---

# Quick Start

If the project has already been configured and `.env.local` exists, getting back to work only requires:

**Terminal 1**

```bash
npx convex dev
```

**Terminal 2**

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```
