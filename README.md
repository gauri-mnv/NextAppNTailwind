# 🚀 Next.js App Router Learning Project

This is a **basic learning project built using Next.js (App Router), Tailwind CSS, and DaisyUI** to understand and practice core Next.js concepts such as routing, layouts, server/client components, environment variables, and basic SEO.

---

## 🛠️ Tech Stack

* **Next.js (App Router)**
* **React**
* **Tailwind CSS**
* **DaisyUI**
* **TypeScript (optional if enabled)**

---

## 🎯 Learning Objectives

This project focuses on understanding the following **Next.js fundamentals**:

* App Router
* File-based routing
* Layouts
* Client vs Server Components
* Environment Variables
* Basic SEO using metadata

---

## 📂 Project Features & Concepts

### 1️⃣ App Router

* Uses the modern **`app/` directory** for routing and layouts.
* Enables server-first rendering and better performance.

```txt
app/
 ├─ page.tsx        → Home route (/)
 ├─ user/page.tsx   → User route (/user)
 ├─ layout.tsx      → Shared layout
```

---

### 2️⃣ File-Based Routing

* Routes are created automatically based on folder and file names.
* Example:

  * `/` → `app/page.tsx`
  * `/user` → `app/user/page.tsx`

---

### 3️⃣ Layouts

* Shared UI like header/footer is defined using `layout.tsx`.
* Layout remains persistent while page content changes.

---

### 4️⃣ Client vs Server Components

#### ✅ Server Components (default)

* Used for **data fetching**
* Faster rendering
* No browser JS required

#### ✅ Client Components

* Used for **interactivity**
* State, events, hooks
* Declared using `"use client"`

---

### 5️⃣ Environment Variables

* Used to store configuration values securely.
* Example:

```env
NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com/users
```

---

### 6️⃣ Basic SEO

* Implemented using **Next.js metadata**
* Improves search engine visibility

```ts
export const metadata = {
  title: "Users Page",
  description: "Server rendered users list",
};
```

---

## 📸 Screenshots

### 🟢 Home Page with Client Component (Button Interaction)

Demonstrates **Client Components** and UI styling using Tailwind + DaisyUI.

![Client Button](https://i.ibb.co/hR1mB09J/button.png)

---

### 🟢 Navigation & File-Based Routing

Shows **file-based routing** and navigation between routes.

![Navigation](https://i.ibb.co/5hY9mZMJ/cn.png)

---

### 🟢 Server-Side Data Rendering

Users data fetched and rendered using **Server Components**.

![Server Data Rendering](https://i.ibb.co/JjGLRjzk/serverdatarender.png)

---

## 📌 Key Takeaways

* App Router simplifies routing and layout management
* File-based routing removes manual route configuration
* Server Components improve performance
* Client Components handle interactivity
* Tailwind + DaisyUI speed up UI development
* SEO is easy with built-in metadata support

---

## ▶️ How to Run the Project

```bash
npm install
npm run dev
```

Open:
👉 `http://localhost:3000`

---

## 📚 Purpose

This project was created **purely for learning and practice** to build a strong foundation in **Next.js App Router architecture** and modern frontend development.

--- 
Thank You 




<!-- https://i.ibb.co/hR1mB09J/button.png
https://i.ibb.co/5hY9mZMJ/cn.png
https://i.ibb.co/JjGLRjzk/serverdatarender.png
 -->

<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
