import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import PrivacyPolicy from './beewalls/PrivacyPolicy.jsx'
import './index.css'
import TermsAndConditions from './beewalls/TermsAndConditions.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/beewalls/privacyPolicy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/beewalls/termsAndConditions',
    element: <TermsAndConditions />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
