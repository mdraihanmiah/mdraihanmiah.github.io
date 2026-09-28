import { useState } from 'react'
import './Navbar.css'

interface NavbarProps {
  onThemeToggle: () => void
  currentTheme: 'dark' | 'light'
}

function Navbar({ onThemeToggle, currentTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <span>MD RAIHAN</span>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('education')}>Education</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          <li>
            <button className="theme-toggle" onClick={onThemeToggle} title="Toggle theme">
              {currentTheme === 'dark' ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar