# Asimovx

**Tech Consulting Reimagined.**

Asimovx is a premium consulting platform specializing in AI solutions, Computer Vision, and Digital Transformation. This project is a modern, high-performance web application built with Next.js, featuring a futuristic "dark mode" aesthetic, smooth animations, and comprehensive multilingual support.

## 🚀 Features

-   **Premium UI/UX:** Futuristic dark theme with glassmorphism effects, gradient accents, and smooth scroll animations powered by Framer Motion.
-   **Multilingual Support:** Full content translation for English (EN), Spanish (ES), and Swedish (SV).
-   **Dynamic Careers Portal:**
    -   Search and filter job listings.
    -   Detailed job description pages with dynamic routing.
    -   **Application Form:** Modal-based application submission with validation and file upload.
-   **Comprehensive Service Showcase:** Detailed breakdowns of core AI services (CV, NLP, GenAI) and industry-specific solutions.
-   **Interactive Pages:**
    -   **Home:** Hero section, features, process timeline, and animated stats.
    -   **About Us:** Company vision, mission, and leadership team grid.
    -   **Services:** Extensive service catalog with "Contact Us" integration.
    -   **Portfolio:** Showcase of selected projects.
    -   **Blog:** Articles and news section.
    -   **Contact:** Office locations (Sweden, Spain, Latvia) and enquiry form.

## 🛠️ Tech Stack

-   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Language:** TypeScript

## 📂 Project Structure

```
src/
├── app/                  # App Router pages
│   ├── about/            # About Us page
│   ├── blog/             # Blog page
│   ├── careers/          # Careers listing & dynamic [slug] details
│   ├── contact/          # Contact Us page
│   ├── portfolio/        # Portfolio page
│   ├── services/         # Services page
│   ├── layout.tsx        # Root layout with language context
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   ├── Navbar.tsx        # Responsive navigation with language switcher
│   ├── Footer.tsx        # Site footer
│   ├── ApplicationForm.tsx # Job application modal
│   └── ... (Hero, Features, etc.)
├── data/                 # Static data files
│   └── jobs.ts           # Job listings database
├── context/              # React Contexts
│   └── LanguageContext.tsx # Language state management
└── utils/
    └── translations.ts   # Translation strings (EN, ES, SV)
```

## ⚡ Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/asimovx.git
    cd asimovx
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📝 License

This project is proprietary software of Asimovx Technologies AB.
