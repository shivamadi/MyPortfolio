# Personal Portfolio Website - Shivam Kumar

A modern, responsive, and company-ready personal portfolio built using **React**, **Vite**, and **Tailwind CSS**. It incorporates smooth scrolling, beautiful animations using **Framer Motion**, and sleek icons from **Lucide React**.

## Features

- **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop views.
- **Modern UI/UX**: Clean corporate design with a sleek dark theme and accent colors.
- **Animations & Hover Effects**: Used Framer Motion for scroll animations and Tailwind for micro-interactions.
- **Detailed Sections**: Home, About, Skills, Projects, Experience, Education, and Contact.
- **Smooth Navigation**: Single-page smooth scrolling using `react-scroll`.

## Tech Stack

- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Scrolling**: React Scroll

## Folder Structure

```
src/
├── assets/          # Images, CV PDFs, etc.
├── components/      # Reusable components (Navbar, Footer, etc.)
├── sections/        # Main landing page blocks (Hero, About, Projects, etc.)
├── App.jsx          # Main layout aggregator
├── index.css        # Tailwind configurations and CSS variables
└── main.jsx         # React application entry point
```

## Setup & Running Locally

1. **Install Dependencies**
   Run the following command to install required modules:
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for Production**
   ```bash
   npm run build
   ```
   This generates the optimized production-ready files in the `dist` folder.

## Customizing Content

To update the content of your portfolio, navigate to `src/sections/` and edit the respective `.jsx` files:
- **Hero.jsx**: Update your Name, Role, Tagline, and Social/CV Links. Note: If you have a profile picture, uncomment the `<img>` tag in this file and add your image path to `src/assets`.
- **About.jsx**: Modify the personal summary, CGPA, and other metrics.
- **Skills.jsx**: Edit the `SKILLS_DATA` array to add/remove your technical tools and languages.
- **Projects.jsx**: Update the `PROJECTS_DATA` array to include your actual GitHub and Live DEMO URLs.
- **Experience.jsx**: Edit the `EXPERIENCE` array to list your internships/jobs.
- **Education.jsx**: Change `EDUCATION` and `CERTIFICATIONS` entries. Provide real certificate verify URLs inside `link: '#'` values.
- **Contact.jsx**: Connect `handleSubmit` inside `Contact.jsx` via an API like Formspree or EmailJS to receive actual emails when users submit the form.

## Deployment Instructions

### Deploying to Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Sign up / Log in to [Vercel](https://vercel.com/).
3. Click "Add New..." -> "Project".
4. Import your GitHub repository.
5. Vercel will automatically detect Vite. The build settings should correctly show:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy". Your portfolio will be live in minutes.

### Deploying to Netlify
1. Pust your code to GitHub.
2. Sign up / Log in to [Netlify](https://netlify.com/).
3. Click "Add new site" -> "Import an existing project".
4. Connect GitHub and select your repository.
5. Set Build settings:
   - Base Directory: `/`
   - Build Command: `npm run build`
   - Publish Directory: `dist`
6. Click "Deploy Site".
