import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Name from './components/Name.jsx'
import AboutMe from './components/AboutMe.jsx'
import Skills from './components/Skills.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Name/>
    <AboutMe/>
    <Skills/>
  </StrictMode>,
)
