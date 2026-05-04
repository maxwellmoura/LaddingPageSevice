import '../styles/header.css'

function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Dev & Tech</h1>
          <p className="tagline">Desenvolvimento • Tecnologia • Inovação</p>
        </div>
        
        <nav className="nav">
          <a href="#hero">Início</a>
          <a href="#services">Serviços</a>
          <a href="#skills">Habilidades</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#contact">Contato</a>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
