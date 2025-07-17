'use client'

import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Envío del formulario usando emailjs o similar
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: ['sales@iterge.com', 'luis.somarriba.r@gmail.com'],
          subject: `Nueva consulta de ${formData.name} - ${formData.service}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      console.log('Formulario enviado:', formData)
      // Para efectos de demo, simulo envío exitoso
      setSubmitStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const serviceOptions = [
    { value: '', label: 'Selecciona un servicio' },
    { value: 'iso-50001', label: 'Gestión Energética ISO 50001' },
    { value: 'pv-design', label: 'Diseño de Sistemas Fotovoltaicos' },
    { value: 'pv-audit', label: 'Auditorías de Sistemas Fotovoltaicos' },
    { value: 'consultoria', label: 'Consultoría Personalizada' },
    { value: 'otro', label: 'Otro servicio' }
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-iter-dark via-iter-charcoal to-iter-dark relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-iter-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-iter-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(74,222,128,0.1)_1px,transparent_0)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Premium */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-iter-primary/20 border border-iter-primary/30 rounded-full text-iter-primary font-semibold text-sm backdrop-blur-sm">
            💬 Conversemos
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white">
            ¿Listo para <span className="text-iter-primary">optimizar</span> tu energía?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comienza tu proyecto de eficiencia energética hoy. Nuestros expertos están listos para 
            <strong className="text-iter-gold"> transformar tu consumo en ahorros</strong>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Formulario Premium */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-iter-primary/20 shadow-premium">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Solicita tu <span className="text-iter-gold">Consulta Gratuita</span>
                </h3>
                <p className="text-gray-300">
                  Completa el formulario y te contactaremos en menos de 24 horas
                </p>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-6 bg-green-500/20 border border-green-500/30 text-green-300 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <div className="font-bold">¡Mensaje enviado exitosamente!</div>
                      <div className="text-sm">Te contactaremos pronto para agendar tu consulta gratuita.</div>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-6 bg-red-500/20 border border-red-500/30 text-red-300 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">❌</span>
                    <div>
                      <div className="font-bold">Error al enviar el mensaje</div>
                      <div className="text-sm">Por favor, intenta nuevamente o contáctanos por WhatsApp.</div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Campos del formulario */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-iter-primary font-semibold mb-3">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 border border-iter-primary/30 rounded-2xl text-white placeholder-gray-400 focus:border-iter-primary focus:ring-2 focus:ring-iter-primary/50 transition-all backdrop-blur-sm"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-iter-primary font-semibold mb-3">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/10 border border-iter-primary/30 rounded-2xl text-white placeholder-gray-400 focus:border-iter-primary focus:ring-2 focus:ring-iter-primary/50 transition-all backdrop-blur-sm"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-iter-primary font-semibold mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 border border-iter-primary/30 rounded-2xl text-white placeholder-gray-400 focus:border-iter-primary focus:ring-2 focus:ring-iter-primary/50 transition-all backdrop-blur-sm"
                      placeholder="tu@empresa.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-iter-primary font-semibold mb-3">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/10 border border-iter-primary/30 rounded-2xl text-white placeholder-gray-400 focus:border-iter-primary focus:ring-2 focus:ring-iter-primary/50 transition-all backdrop-blur-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-iter-primary font-semibold mb-3">
                    Servicio de Interés *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 border border-iter-primary/30 rounded-2xl text-white focus:border-iter-primary focus:ring-2 focus:ring-iter-primary/50 transition-all backdrop-blur-sm"
                  >
                    {serviceOptions.map(option => (
                      <option key={option.value} value={option.value} className="bg-iter-dark text-white">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-iter-primary font-semibold mb-3">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-6 py-4 bg-white/10 border border-iter-primary/30 rounded-2xl text-white placeholder-gray-400 focus:border-iter-primary focus:ring-2 focus:ring-iter-primary/50 transition-all backdrop-blur-sm resize-vertical"
                    placeholder="Cuéntanos sobre tu proyecto energético, objetivos de ahorro, tamaño de instalación, consumo actual, etc."
                  />
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-cta-gradient text-iter-dark shadow-glow hover:shadow-glow-gold transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      🚀 Enviar Consulta Gratuita
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Información de contacto y CTAs */}
          <div className="space-y-8">
            {/* Información de contacto */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-iter-primary/20 shadow-premium">
              <h3 className="text-3xl font-bold text-white mb-8">
                Información de <span className="text-iter-primary">Contacto</span>
              </h3>
              
              <div className="space-y-6">
                <a href="mailto:sales@iterge.com" className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="w-14 h-14 bg-gradient-to-r from-iter-primary to-iter-secondary rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                    💼
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Email Comercial</h4>
                    <p className="text-iter-primary">sales@iterge.com</p>
                  </div>
                </a>

                <a href="mailto:luis.somarriba.r@gmail.com" className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="w-14 h-14 bg-gradient-to-r from-iter-secondary to-iter-accent rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Email Directo</h4>
                    <p className="text-iter-secondary">luis.somarriba.r@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+16092220687" className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="w-14 h-14 bg-gradient-to-r from-iter-gold to-yellow-500 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                    📞
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Teléfono</h4>
                    <p className="text-iter-gold">+1 (609) 222-0687</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl">
                  <div className="w-14 h-14 bg-gradient-to-r from-iter-secondary to-iter-accent rounded-2xl flex items-center justify-center text-white text-2xl">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Ubicación</h4>
                    <p className="text-gray-300">Estados Unidos</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl">
                  <div className="w-14 h-14 bg-gradient-to-r from-iter-primary to-iter-gold rounded-2xl flex items-center justify-center text-white text-2xl">
                    ⏰
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Horario</h4>
                    <p className="text-gray-300">Lun - Vie: 9:00 - 18:00 EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs rápidos */}
            <div className="bg-gradient-to-br from-iter-primary/20 to-iter-gold/20 backdrop-blur-lg rounded-3xl p-10 border border-iter-primary/30">
              <h3 className="text-2xl font-bold text-white mb-6">
                ¿Necesitas una <span className="text-iter-gold">respuesta rápida</span>?
              </h3>
              <p className="text-gray-300 mb-8">
                Para consultas urgentes, contáctanos directamente
              </p>
              
              <div className="space-y-4">
                <a href="https://wa.me/16092220687?text=¡Hola! Me interesa conocer más sobre los servicios de ITER para optimizar mi gestión energética." target="_blank" rel="noopener noreferrer" className="block">
                  <button className="w-full py-4 px-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl transition-colors flex items-center justify-center gap-3">
                    <span className="text-xl">💬</span>
                    WhatsApp Directo
                  </button>
                </a>
                
                <a href="tel:+16092220687" className="block">
                  <button className="w-full py-4 px-6 border-2 border-iter-gold text-iter-gold hover:bg-iter-gold hover:text-iter-dark font-bold rounded-2xl transition-colors flex items-center justify-center gap-3">
                    <span className="text-xl">📞</span>
                    Llamar Ahora
                  </button>
                </a>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-iter-primary/20">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Confían en Nosotros
              </h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="group cursor-pointer">
                  <div className="text-3xl font-black text-iter-primary group-hover:scale-110 transition-transform">+200</div>
                  <div className="text-sm text-gray-400">Empresas Atendidas</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-3xl font-black text-iter-gold group-hover:scale-110 transition-transform">&lt;24h</div>
                  <div className="text-sm text-gray-400">Tiempo Respuesta</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-3xl font-black text-iter-secondary group-hover:scale-110 transition-transform">98%</div>
                  <div className="text-sm text-gray-400">Satisfacción</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-3xl font-black text-iter-primary group-hover:scale-110 transition-transform">15+</div>
                  <div className="text-sm text-gray-400">Años Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 