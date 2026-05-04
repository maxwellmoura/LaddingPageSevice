import '../styles/hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h2 className="hero-title">Transformando Ideias em Soluções Digitais</h2>
          <p className="hero-description">
            Sou um desenvolvedor full-stack e técnico de TI com experiência em criar aplicações web modernas, 
            resolver problemas técnicos complexos e implementar soluções inovadoras para potencializar seu negócio.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Vamos Conversar</a>
            <a href="#portfolio" className="btn btn-secondary">Ver Projetos</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar">💻</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
