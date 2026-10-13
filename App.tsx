import { useState } from 'react'

const EMAIL = 'mdraihanmiah270@gmail.com'
const PAPER =
  'https://www.researchgate.net/publication/405404194_The_Psychology_of_Invisible_Payments_Does_Tap-to-Pay_Make_Consumers_Spend_More'

const links = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/md-raihan-miah/' },
  { name: 'GitHub', url: 'https://github.com/mdraihanmiah' },
  { name: 'ORCID', url: 'https://orcid.org/0009-0005-3273-1187' },
  { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Raihan-Miah-2' },
]

const projects = [
  {
    title: 'Family Tradition',
    meta: 'Team university project',
    text: 'A multidisciplinary project on family traditions, intergenerational relationships and values. My part: preparing and presenting on traditions of Bangladesh.',
  },
  {
    title: 'Changing the Way Businesses and Economies Work in the Age of New Technology',
    meta: 'University presentation',
    text: 'How new technology is changing the way businesses and economies operate.',
  },
  {
    title: 'Sustainable Development Goals: Bangladesh vs Russia',
    meta: 'Comparative study',
    text: 'A comparison of sustainable development perspectives in Bangladesh and Russia.',
  },
]

const skills = ['Excel', 'Data analysis', 'Data cleaning', 'SQL', 'Research', 'B2B lead generation', 'Word', 'PowerPoint', 'Canva']
const learning = ['Python', 'Power BI', 'Project management']

const certificates = [
  ['UNICEF', 'Child Protection Systems Strengthening', 'January 2026'],
  ['UNICEF', 'Cash and Voucher Assistance in Humanitarian Coordination', 'January 2026'],
  ['UN Women', 'Introduction to Results-Based Management', 'August 2026'],
  ['NLC / BUKETOV', 'VII International Distance Student Research Paper Competition, FinTech', 'May 2026'],
]

const nav = [
  ['Home', '#top'],
  ['Education', '#education'],
  ['Research', '#research'],
  ['Contact', '#contact'],
]

export default function App() {
  const [theme, setTheme] = useState<string>(
    () => document.documentElement.getAttribute('data-theme') || '',
  )

  function toggle() {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const current = theme || (dark ? 'dark' : 'light')
    const next = current === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* storage unavailable */
    }
  }

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="bar">
        <a className="bar-name" href="#top" aria-label="MD RAIHAN MIAH, home">MD RAIHAN MIAH</a>
        <button className="theme" onClick={toggle} aria-label="Switch between dark and light theme">
          Theme
        </button>
      </header>

      <nav className="nav" aria-label="Main">
        {nav.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>

      <main id="main">
        <section className="hero wrap" id="top">
          <h1 className="mark" aria-label="MD RAIHAN MIAH">
            <span>MD RAIHAN</span>
            <span>MIAH</span>
          </h1>
          <p className="lead">
            Economics and international business student at Moscow Polytechnic University, researching
            consumer behaviour and digital payments.
          </p>
          <div className="actions">
            <a className="btn primary" href="#research">Read my research</a>
            <a className="btn" href={`mailto:${EMAIL}`}>Email me</a>
          </div>
        </section>

        <section className="wrap sec" id="about">
          <h2>About</h2>
          <p>
            I study economics and international business, with interests in business analytics, economic
            research and data analysis. I am building practical skills alongside my degree, and a body of
            research, projects and professional experience.
          </p>
        </section>

        <section className="wrap sec" id="education">
          <h2>Education</h2>
          <article className="edu now">
            <h3>Moscow Polytechnic University</h3>
            <p>Economics and Management: International Business and Foreign Economic Activity</p>
            <p className="muted">Faculty of Economics and Management · 2025 to 2029 (expected)</p>
          </article>
          <article className="edu">
            <h3>Islami Bank Institute of Technology</h3>
            <p>Diploma in Textile Engineering</p>
            <p className="muted">Bangladesh · 2019 to 2023</p>
          </article>
        </section>

        <section className="wrap sec" id="research">
          <h2>Research</h2>
          <article className="paper">
            <p className="muted">Preprint, May 2026. With Tijani Forgor Alhassan.</p>
            <h3>The Psychology of Invisible Payments: Does Tap-to-Pay Make Consumers Spend More?</h3>
            <p>
              Asks whether frictionless contactless payment leads consumers, particularly Generation Z,
              to spend more.
            </p>
            <a className="btn primary" href={PAPER} target="_blank" rel="noreferrer">Read on ResearchGate</a>
          </article>
        </section>

        <section className="wrap sec" id="projects">
          <h2>Projects</h2>
          <ul className="rows">
            {projects.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p className="muted">{p.meta}</p>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="wrap sec" id="skills">
          <h2>Skills</h2>
          <ul className="chips">
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
          <h3 className="sub">Currently learning</h3>
          <ul className="chips soft">
            {learning.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </section>

        <section className="wrap sec" id="certificates">
          <h2>Certificates</h2>
          <ul className="rows">
            {certificates.map(([org, title, date]) => (
              <li key={title}>
                <p className="muted">{org} · {date}</p>
                <h3>{title}</h3>
              </li>
            ))}
          </ul>
        </section>

        <section className="wrap sec" id="contact">
          <h2>Contact</h2>
          <p>For research collaboration, internships and professional opportunities.</p>
          <a className="btn primary wide" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <ul className="social">
            {links.map((l) => (
              <li key={l.name}>
                <a href={l.url} target="_blank" rel="noreferrer">{l.name}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="wrap foot">MD RAIHAN MIAH · Moscow, Russia</footer>
    </>
  )
}
