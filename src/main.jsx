import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NutriOSLandingPage from './pages/NutriOSLandingPage'
import './styles/landing.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NutriOSLandingPage />
  </StrictMode>,
)
