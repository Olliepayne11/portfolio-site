import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import SkillsPage from './pages/SkillsPage.jsx'
import ExperiencePage from './pages/ExperiencePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <ErrorPage />,
},
{
  path: '/skills',
  element: <SkillsPage />,
},
{
  path: '/experience',
  element: <ExperiencePage />,
},
{
  path: '/projects',
  element: <ProjectsPage />,
},
{
  path: '/contact',
  element: <ContactPage />,
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)