import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AccountDeletion from './beewalls/AccountDeletion.jsx'
import PrivacyPolicy from './beewalls/PrivacyPolicy.jsx'
import TermsAndConditions from './beewalls/TermsAndConditions.jsx'
import './index.css'

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
  {
    path: '/beewalls/accountDeletion',
    element: <AccountDeletion />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
