import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Digital Payments Consumer Behavior Study',
      description: 'Research project analyzing how digital payment adoption varies across different demographics and regions.',
      tech: ['Python', 'Data Analysis', 'Statistics'],
      link: '#'
    },
    {
      title: 'E-commerce Market Analysis Dashboard',
      description: 'Comprehensive analysis of e-commerce trends with interactive visualization of market data.',
      tech: ['Power BI', 'Excel', 'SQL'],
      link: '#'
    },
    {
      title: 'International Business Strategy Report',
      description: 'Strategic analysis of market entry opportunities in emerging markets with risk assessment.',
      tech: ['Market Research', 'Strategic Planning', 'Tableau'],
      link: '#'
    },
    {
      title: 'Consumer Preferences Analytics',
      description: 'Data-driven insights into consumer purchasing patterns and brand preferences.',
      tech: ['Python', 'Data Analysis', 'Visualization'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects & Research</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects