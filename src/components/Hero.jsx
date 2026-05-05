import '../styles/hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h2 className="hero-title">Transformando Ideias em Soluções Digitais</h2>
          <p className="hero-description">
            Sou um desenvolvedor front-end e técnico de TI com experiência em criar aplicações web modernas,
            resolver problemas técnicos complexos e implementar soluções inovadoras para potencializar seu negócio.
          </p>
          <p>Desenvolvedor Front-End Júnior com foco em React. Possuo conhecimentos em JavaScript, React, Next.js, HTML, CSS, Tailwind CSS, consumo de APIs com Axios, além de versionamento com Git e integração com back-end (REST/JSON).

            Ao longo da minha formação e projetos práticos, desenvolvi aplicações utilizando React e Vite, com foco em componentização, gerenciamento de estado, consumo de APIs e boas práticas de organização de código.

            Destaco como diferencial meus 15 anos de experiência na área de suporte técnico em TI, atuando diretamente com diagnóstico e resolução de problemas, atendimento a usuários, análise de sistemas e infraestrutura. Essa vivência fortaleceu habilidades como pensamento lógico, troubleshooting avançado, comunicação clara e trabalho sob pressão, competências que aplico diretamente no desenvolvimento, principalmente na identificação e correção de bugs e na construção de soluções mais robustas.

            Estou em constante evolução na área de desenvolvimento e motivado a contribuir com soluções eficientes, além de crescer junto à equipe e aos projetos.</p>
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
