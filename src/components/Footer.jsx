import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Dev & Tech</h3>
            <p>Transformando ideias em soluções digitais inovadoras.</p>
          </div>
          <div className="footer-section">
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="#hero">Início</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#portfolio">Portfólio</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <ul>
              <li><a href="https://github.com/maxwellmoura" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/maxwell-moura-80a33a6b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/max.frontendzin/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Dev & Tech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
