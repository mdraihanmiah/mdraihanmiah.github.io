import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      category: 'Business',
      skills: ['Market Research', 'Business Analysis', 'Strategic Planning', 'Data Analysis']
    },
    {
      category: 'Technical',
      skills: ['Python', 'SQL', 'Excel', 'Power BI', 'Tableau']
    },
    {
      category: 'Languages',
      skills: ['English', 'Bengali', 'Russian', 'Hindi', 'Spanish']
    },
    {
      category: 'Soft Skills',
      skills: ['Leadership', 'Communication', 'Problem Solving', 'Team Collaboration']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3>{category.category}</h3>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills