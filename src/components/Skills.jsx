import '../styles/skills.css'

function Skills() {
  const skillCategories = [
    {
      category: 'Front-end',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Vite']
    },
    {
      category: 'Back-end',
      skills: ['Node.js', 'Express', 'SQL', 'MongoDB', 'REST APIs']
    },
    {
      category: 'DevOps & Cloud',
      skills: ['Git', 'GitHub', 'Deployment']
    },
    {
      category: 'Suporte Técnico',
      skills: ['Windows Server', 'Redes', 'Hardware', 'Solução de problemas', 'Active Directory', 'Backup & Recovery']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Habilidades Técnicas</h2>
        <p className="section-subtitle">
          Expertise consolidada em diversas tecnologias e ferramentas
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
