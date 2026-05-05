import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [statusMessage, setStatusMessage] = useState('')

    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setStatusMessage('')

        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: import.meta.env.VITE_CONTACT_EMAIL
                }
            )

            if (result.text === 'OK') {
                setStatusMessage('✅ Mensagem enviada com sucesso! Entraremos em contato em breve.')
                setFormData({ name: '', email: '', subject: '', message: '' })
                setTimeout(() => setStatusMessage(''), 5000)
            }
        } catch (error) {
            console.error('Erro ao enviar email:', error)
            setStatusMessage('❌ Erro ao enviar mensagem. Tente novamente mais tarde.')
            setTimeout(() => setStatusMessage(''), 5000)
        } finally {
            setIsLoading(false)
        }
    }

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
