import React from 'react'

const Companies: React.FC = () => {
  const companies = [
    {
      name: "Pronaca",
      project: "Certificación ISO 50001",
      description: "El Complejo Pifo de Pronaca logró la certificación ISO 50001 de Sistema de Gestión de Energía, optimizando sus procesos productivos.",
      results: ["Certificación ISO 50001", "Optimización energética", "Mejora continua"],
      sector: "Industria Alimentaria",
      logo: "🏭",
      highlight: "Certificación ISO 50001 exitosa"
    },
    {
      name: "Ferrero del Ecuador",
      project: "Programa de Eficiencia Energética",
      description: "Implementación integral del programa de eficiencia energética e ISO 50001, logrando ahorros significativos en consumo.",
      results: ["Ahorro energético significativo", "ISO 50001", "ROI acelerado"],
      sector: "Manufactura",
      logo: "🍫",
      highlight: "Ahorro energético anual comprobado"
    },
    {
      name: "EEQ (Empresa Eléctrica Quito)",
      project: "Gestión Energética Integral",
      description: "Con una sola oportunidad de gestión logramos generar ahorros significativos anuales en consumo energético de la empresa eléctrica.",
      results: ["Ahorro anual sustancial", "Gestión optimizada", "Eficiencia operativa"],
      sector: "Servicios Públicos",
      logo: "⚡",
      highlight: "Ahorro significativo con una sola gestión"
    },
    {
      name: "Bioalimentar",
      project: "Optimización de Procesos",
      description: "Proyecto integral de eficiencia energética enfocado en la optimización de procesos productivos y reducción de costos.",
      results: ["Procesos optimizados", "Costos reducidos", "Sostenibilidad"],
      sector: "Biotecnología",
      logo: "🧬",
      highlight: "Procesos 100% optimizados"
    },
    {
      name: "FV Andina Planta Grifería",
      project: "Sistema Fotovoltaico Industrial",
      description: "Diseño e implementación de sistema fotovoltaico para reducir costos energéticos en planta de manufactura.",
      results: ["Sistema FV 500kW", "Reducción significativa costos", "ROI acelerado"],
      sector: "Manufactura Industrial",
      logo: "☀️",
      highlight: "500kW instalados exitosamente"
    },
    {
      name: "Universidad de las Américas (UDLA)",
      project: "Programa Educativo Energético",
      description: "Desarrollo de programas educativos y eventos de gestión energética para formar nuevos profesionales del sector.",
      results: ["Programa educativo", "Eventos realizados", "Capacitación"],
      sector: "Educación",
      logo: "🎓",
      highlight: "Formación de especialistas"
    }
  ]

  const stats = [
    { number: "200+", label: "Proyectos Completados", icon: "📊" },
    { number: "Consulta", label: "Tu Potencial", icon: "💰" },
    { number: "15+", label: "Años de Experiencia", icon: "⭐" },
    { number: "Excelente", label: "Satisfacción Cliente", icon: "❤️" }
  ]

  return (
    <section id="companies" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Imagen de fondo sutil */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1519452237064-1d8c2133c5e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Industrial facility with renewable energy"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 to-white/90"></div>
      </div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-iter-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-iter-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-iter-primary/10 border border-iter-primary/20 rounded-full text-iter-primary font-semibold text-sm">
            🏆 Casos de Éxito
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-iter-dark">
            Empresas que <span className="text-iter-primary">Confían</span> en ITER
          </h2>
          
          <p className="text-xl text-iter-charcoal max-w-4xl mx-auto leading-relaxed">
            Más de <strong className="text-iter-primary">200 empresas</strong> han transformado su gestión energética con nuestras soluciones. 
            Desde <strong className="text-iter-gold">multinacionales</strong> hasta empresas locales, todos han logrado 
            <strong className="text-iter-secondary"> ahorros significativos</strong>.
          </p>
        </div>

        {/* Estadísticas destacadas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-iter-primary/10 text-center group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-iter-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-iter-charcoal">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Grid de empresas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {companies.map((company, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-premium hover:shadow-premium-lg transition-all duration-500 border border-iter-primary/10 group hover:scale-105">
              {/* Header de la empresa */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-iter-primary to-iter-secondary rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                  {company.logo}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-iter-dark mb-1">
                    {company.name}
                  </h3>
                  <p className="text-iter-primary font-semibold text-sm">
                    {company.sector}
                  </p>
                </div>
              </div>

              {/* Proyecto realizado */}
              <div className="mb-6">
                <h4 className="font-bold text-iter-dark mb-3">
                  {company.project}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {company.description}
                </p>
                
                {/* Resultado destacado */}
                <div className="bg-gradient-to-r from-iter-primary/10 to-iter-gold/10 rounded-xl p-4 border border-iter-primary/20">
                  <p className="font-semibold text-iter-primary text-sm">
                    ✨ {company.highlight}
                  </p>
                </div>
              </div>

              {/* Resultados */}
              <div className="space-y-2 mb-6">
                <h5 className="font-semibold text-iter-dark text-sm mb-3">
                  Resultados obtenidos:
                </h5>
                {company.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-iter-primary rounded-full"></span>
                    <span className="text-gray-600 text-sm">{result}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-gray-100">
                <a href="#contact" className="text-iter-primary hover:text-iter-secondary font-semibold text-sm flex items-center gap-2 group/cta">
                  <span>Ver proyecto similar</span>
                  <svg className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonios destacados */}
        <div className="bg-gradient-to-r from-iter-dark to-iter-charcoal rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-iter-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-iter-gold/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-white mb-6">
              &ldquo;Con ITER logramos <span className="text-iter-gold">resultados excepcionales</span>&rdquo;
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Nuestros clientes han conseguido <strong className="text-iter-primary">ahorros significativos</strong> en 
              sus costos energéticos, <strong className="text-iter-gold">certificaciones internacionales</strong> y 
              <strong className="text-iter-secondary"> ROI garantizado</strong> en sus inversiones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#contact">
                <button className="px-10 py-4 bg-cta-gradient text-iter-dark font-bold text-lg rounded-2xl shadow-glow hover:shadow-glow-gold transform hover:scale-105 transition-all duration-300">
                  🚀 Únete a Nuestros Clientes
                </button>
              </a>
              <a href="tel:+16092220687">
                <button className="px-10 py-4 border-2 border-iter-primary text-iter-primary font-bold text-lg rounded-2xl hover:bg-iter-primary hover:text-white transition-all duration-300">
                  📞 Consulta tu Proyecto
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Companies 