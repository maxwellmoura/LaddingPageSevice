import '../styles/services.css'

function Services() {
  const services = [
    {
      icon: '🎨',
      title: 'Desenvolvimento Web',
      description: 'Criação de sites e aplicações web responsivas com React, Vue ou tecnologias modernas.'
    },
    {
      icon: '⚙️',
      title: 'Suporte Técnico',
      description: 'Diagnóstico, manutenção e resolução de problemas de hardware e software.'
    },
    {
      icon: '🔒',
      title: 'Segurança da Informação',
      description: 'Implementação de práticas seguras, backups e proteção de dados.'
    },
    {
      icon: '☁️',
      title: 'Infraestrutura em Nuvem',
      description: 'Configuração e gestão de servidores em nuvem, deployment e CI/CD.'
    },
    {
      icon: '📊',
      title: 'Análise de Dados',
      description: 'Desenvolvimento de dashboards e ferramentas para análise de dados em tempo real.'
    },
    {
      icon: '🚀',
      title: 'Consultoria Técnica',
      description: 'Orientação estratégica para transformação digital e otimização de processos.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Meus Serviços</h2>
        <p className="section-subtitle">
          Ofereço soluções completas em desenvolvimento web e suporte técnico de TI
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
