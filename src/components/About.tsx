import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm MD Raihan Miah, an Economics and International Business student at Moscow Polytechnic University with a passion for understanding global markets and consumer behavior.
            </p>
            <p>
              My research focuses on consumer behavior patterns in digital payments and e-commerce. I'm particularly interested in how technology shapes purchasing decisions and market dynamics across different cultures.
            </p>
            <p>
              I'm actively seeking opportunities in:
            </p>
            <ul className="about-interests">
              <li>International business development</li>
              <li>Market research and analysis</li>
              <li>Digital transformation projects</li>
              <li>Business intelligence roles</li>
              <li>Graduate programs and scholarships</li>
            </ul>
          </div>
          <div className="about-stats">
            <div className="stat">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">5+</div>
              <div className="stat-label">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About