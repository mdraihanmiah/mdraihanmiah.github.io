import './Hero.css'

function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-slide-in">
          <h1>
            <span className="gradient-text">MD RAIHAN MIAH</span>
          </h1>
          <h2>Economics & International Business Student</h2>
          <p className="hero-description">
            Passionate about consumer behavior, digital payments, and international business.
            Currently studying at Moscow Polytechnic University.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
            <a href="#projects" className="btn">
              View My Work
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">Twitter</a>
          </div>
        </div>
        <div className="hero-visual animate-fade-in">
          <div className="avatar-placeholder">👋</div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-dot"></div>
      </div>
    </section>
  )
}

export default Hero