import '../styles/portfolio.css'

function Portfolio() {
  const projects = [
    {
      title: 'SaaS Financeiro',
      description: 'Aplicação web para gestão financeira pessoal com controle de lançamentos e análises.',
      technologies: ['React', 'JavaScript', 'Vite', 'CSS'],
      
    },
    {
      title: 'Sistema de Gestão',
      description: 'Plataforma completa de gestão de projetos com dashboard e relatórios avançados.',
      technologies: ['Node.js', 'React', 'MongoDB', 'REST API'],
      
    },
    {
      title: 'API RESTful',
      description: 'Backend robusto com autenticação, validação de dados e documentação completa.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      
    },
    {
      title: 'E-commerce',
      description: 'Loja online com carrinho de compras, pagamento integrado e painel administrativo.',
      technologies: ['React', 'Node.js'],
      
    },
 
    {
      title: 'Dashboard Analítico',
      description: 'Visualização de dados em tempo real com gráficos interativos e filtros avançados.',
      technologies: ['React', 'Chart.js', 'D3.js', 'API REST'],
      
    }
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Portfólio de Projetos</h2>
        <p className="section-subtitle">
          Alguns dos projetos que já desenvolvemos com sucesso
        </p>

        <div className="portfolio-grid">
          {projects.slice(0, 3).map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-highlight">
          {projects.slice(3).map((project, index) => (
            <div key={index + 3} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
