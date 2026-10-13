function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <h1>MD RAIHAN MIAH</h1>
        <p className="subtitle">Economics &amp; Management Student</p>
        <p className="university">Moscow Polytechnic University</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am an Economics and Management student with a strong interest in
          consumer behaviour and digital payments. My research focuses on how
          modern financial technologies shape the way people spend, save, and
          interact with money.
        </p>
      </section>

      <section className="research">
        <h2>Research Interests</h2>
        <ul>
          <li>Consumer Behaviour in Digital Markets</li>
          <li>Digital Payments &amp; Fintech</li>
          <li>International Business Strategy</li>
          <li>Economic Policy &amp; Development</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} MD RAIHAN MIAH. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
