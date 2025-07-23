# JobFinder React Project

JobFinder is a job board application built with React, allowing employers to post jobs and job seekers to browse and apply for opportunities. The project features a modern UI, job CRUD operations, and uses Tailwind CSS for styling.

## Features

- Browse all available jobs
- View detailed job information
- Add new job listings (for employers)
- Edit and delete existing jobs
- Responsive design with Tailwind CSS
- Toast notifications for user feedback
- Loading spinners for async actions
- Modular and reusable React components

## Tech Stack

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Sonner](https://sonner.emilkowal.ski/) (toast notifications)
- [React Spinners](https://www.davidhu.io/react-spinners/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/jobfinder-react.git
   cd jobfinder-react
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   ```
4. **Open your browser:**
   Navigate to `http://localhost:5173` to view the application.

### Mock API Setup

This project expects a REST API at `http://localhost:3000/jobs`. For local development, you can use [json-server](https://github.com/typicode/json-server):

```sh
npm install -g json-server
json-server --watch src/jobs.json --port 3000
```

## Project Structure

```
src/
  App.jsx
  main.jsx
  jobs.json
  tailwind.css
  components/
    Hero.jsx
    Homecards.jsx
    JobListing.jsx
    JobListings.jsx
    Navbar.jsx
  hooks/
    useFetch.jsx
  layouts/
    MainLayout.jsx
  pages/
    AddJobPage.jsx
    EditJobPage.jsx
    Homepage.jsx
    JobPage.jsx
    JobsPage.jsx
  assets/
    react.svg
public/
  vite.svg
```

- **components/**: Reusable UI components.
- **pages/**: Route-based page components.
- **hooks/**: Custom React hooks for data fetching and API actions.
- **layouts/**: Layout components for consistent structure.
- **jobs.json**: Sample job data for development with json-server.

## Available Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run preview` – Preview the production build
- `npm run lint` – Run ESLint

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

Feel free to reach out for any questions or suggestions.
