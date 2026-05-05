import '../styles/contact.css'

function Contact() {

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Entre em Contato</h2>
                <p className="section-subtitle">
                    Tem um projeto em mente ou quer conversar sobre uma oportunidade?
                </p>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-item">
                            <h3>📧 Email</h3>
                            <p><a href="mailto:maxwellcmoura@gmail.com">maxwellcmoura@gmail.com</a></p>
                        </div>
                        <div className="info-item">
                            <h3>📱 Telefone</h3>
                            <p><a href="tel:+5588999760102">(88) 99976-0102</a></p>
                        </div>
                        <div className="info-item">
                            <h3>🔗 Redes Sociais</h3>
                            <div className="social-links">
                                <a href="https://github.com/maxwellmoura" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="https://www.linkedin.com/in/maxwell-moura-80a33a6b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href="https://www.instagram.com/max.frontendzin/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Contact
