import './Education.css'

function Education() {
  const educationData = [
    {
      school: 'Moscow Polytechnic University',
      degree: 'Bachelor of Economics & International Business',
      period: '2022 - 2026',
      details: 'Focus on global markets, consumer behavior, and digital transformation'
    },
    {
      school: 'Dhaka International University',
      degree: 'Foundation in Business & Economics',
      period: '2020 - 2022',
      details: 'Strong foundation in business principles and economic theory'
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="timeline-marker"></div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <p className="school">{edu.school}</p>
                <p className="period">{edu.period}</p>
                <p className="details">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education