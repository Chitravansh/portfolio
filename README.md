# 🚀 Chitravansh Mohan – Developer Portfolio

🔗 **Live Website:** [https://chitravansh.vercel.app/](https://chitravansh.vercel.app/)

A modern, responsive, and production-grade **developer portfolio website** built with **Next.js App Router**. This portfolio showcases projects, skills, experience, blogs, and contact information, while following **best practices for Server and Client Component separation**.

---

## ✨ Overview

This portfolio is designed to represent my work as a **Full‑Stack / AI‑focused Web Developer**. It emphasizes:

* Clean architecture using **Next.js App Router**
* Performance, SEO, and maintainability
* Dynamic content (blogs from Dev.to)
* Smooth UI animations and modern design

The website is fully responsive and optimized for both desktop and mobile devices.

---

## 🛠 Tech Stack

### Core

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Icons:** React Icons

### Animations & UI

* **AOS (Animate On Scroll)** for scroll‑based animations

### Content & Data

* **Dev.to API** for dynamic blog content

### Deployment

* **Vercel**

---

## 🧠 Architecture & Design Decisions

This project follows **real‑world, production‑ready architecture**:

### Server Components

Used for:

* Page composition
* Data fetching
* Blog rendering using Dev.to API
* SEO‑friendly rendering

### Client Components

Used only where required:

* Components using React hooks (`useState`, `useEffect`)
* Animations (AOS initialization)
* Interactive sections like Contact forms

### Key Rule Followed

> **Server Components can render Client Components, but not vice versa.**

This ensures:

* No hydration issues
* Better performance
* Clean separation of concerns

---

## 📁 Project Structure

```
app/
 └── page.tsx                 # Entry point (Server Component)

components/
 ├── providers/
 │   └── AOSProvider.tsx      # Client-only animation provider
 │
 └── Home/
     ├── Home.tsx             # Server Component (page layout)
     ├── Hero/
     ├── Services/
     ├── Resume/
     ├── Projects/
     ├── Skills/
     ├── ClientReview/
     ├── Blog/                # Server Component (Dev.to blogs)
     ├── Contact/             # Client Component (form & state)
     └── Footer/
```

---

## 📰 Blog Integration (Dev.to)

The **Blog section** is fully dynamic and powered by the **Dev.to public API**.

### Features

* Fetches latest blog posts automatically
* Displays:

  * Cover image
  * Title
  * Description
  * Publish date
  * Reading time
  * Reactions
  * Tags
* Updates automatically when a new blog is published
* Uses **Incremental Static Regeneration (ISR)** for performance

### Example API

```
https://dev.to/api/articles?username=itsugo&per_page=3
```

---

## 🧾 Resume & Experience Section

* Modular **ResumeCard** components
* Supports:

  * Role / Education title
  * Date range
  * Custom description per entry
  * Icons for visual clarity

Easy to extend by simply adding data objects.

---

## 🎥 Animations

* Scroll animations powered by **AOS**
* Initialized via a **Client-only provider**
* Components remain Server Components where possible

This avoids unnecessary client-side rendering while keeping animations smooth.

---

## 🔗 External Links & Security

* All external project links open in a **new tab**
* Uses:

  ```
  target="_blank" rel="noopener noreferrer"
  ```
* Prevents tab‑nabbing and improves security

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Chitravansh/portfolio.git
cd portfolio
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 🌐 Deployment

This project is optimized for **Vercel**.

```bash
npm run build
```

Deploy using Vercel Dashboard or CLI.

---

## 🎯 Customization Guide

* **Projects:** `components/Home/Projects`
* **Resume / Education:** `components/Home/Resume`
* **Blogs:** Update Dev.to username in `Blog.tsx`
* **Animations:** Add `data-aos` attributes to components

---

## 📈 Performance & Best Practices

* No unnecessary client components
* Safe handling of external images
* ISR for dynamic data
* Clean and maintainable component hierarchy
* SEO‑friendly rendering

---

## 🙌 Acknowledgements

* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Dev.to API](https://developers.forem.com/api)
* [AOS](https://michalsnik.github.io/aos/)
* [React Icons](https://react-icons.github.io/react-icons/)

---

## 📬 Contact

* 🌐 Website: [https://chitravansh.vercel.app/](https://chitravansh.vercel.app/)
* 💻 GitHub: [https://github.com/Chitravansh](https://github.com/Chitravansh)

---

⭐ **If you like this project, feel free to star the repository!**
