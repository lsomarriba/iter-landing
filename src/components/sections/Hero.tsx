'use client'

import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-premium-gradient">
      {/* Elementos de fondo decorativos */}
      <div className="absolute inset-0">
        {/* Gradiente principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-iter-dark via-iter-charcoal to-iter-dark"></div>
        
        {/* Efectos de luz */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-iter-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-iter-gold/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Patrón de grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(74,222,128,0.15)_1px,transparent_0)] bg-[size:50px_50px]"></div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-iter-dark/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenido principal */}
          <div className="space-y-10 text-center lg:text-left">
            {/* Badge premium */}
            <div className="inline-flex items-center px-6 py-3 bg-iter-primary/20 border border-iter-primary/30 rounded-full text-iter-primary font-semibold text-sm backdrop-blur-sm">
              ✨ Líderes en Eficiencia Energética
            </div>

            {/* Título principal */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-white">Transforma tu</span>
                <br />
                <span className="bg-gradient-to-r from-iter-primary via-iter-secondary to-iter-gold bg-clip-text text-transparent animate-glow">
                  Energía
                </span>
                <br />
                <span className="text-white">en</span>
                <span className="text-iter-gold ml-4">Ahorros</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Somos especialistas en <strong className="text-iter-primary">gestión energética ISO 50001</strong> y 
                <strong className="text-iter-gold"> sistemas fotovoltaicos</strong>. 
                Convertimos tu consumo energético en rentabilidad empresarial.
              </p>
            </div>

            {/* CTAs premium */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#contact" className="group">
                <button className="relative px-8 py-4 bg-cta-gradient text-iter-dark font-bold text-lg rounded-2xl shadow-glow hover:shadow-glow-gold transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    🚀 Consulta Gratuita
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                </button>
              </a>
              
              <a href="#services" className="group">
                <button className="px-8 py-4 border-2 border-iter-primary text-iter-primary font-bold text-lg rounded-2xl hover:bg-iter-primary hover:text-iter-dark transition-all duration-300 backdrop-blur-sm">
                  <span className="flex items-center gap-3">
                    📊 Ver Servicios
                    <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </span>
                </button>
              </a>
            </div>

            {/* Stats premium */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-iter-primary/20">
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-black text-iter-primary group-hover:scale-110 transition-transform">+200</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Proyectos</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-black text-iter-gold group-hover:scale-110 transition-transform">40%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Ahorro Promedio</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-black text-iter-primary group-hover:scale-110 transition-transform">ISO</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Certificados</div>
              </div>
            </div>
          </div>

          {/* Visual interactivo premium */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-iter-primary/20 to-iter-gold/20 rounded-3xl p-12 backdrop-blur-sm border border-iter-primary/30 shadow-premium hover:shadow-premium-lg transition-all duration-500 group">
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-br from-iter-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 space-y-8">
                {/* Icono central */}
                <div className="text-8xl text-center animate-float">⚡</div>
                
                <h3 className="text-3xl font-bold text-center text-white">
                  Eficiencia Energética
                  <span className="block text-iter-primary text-xl mt-2">Resultados Garantizados</span>
                </h3>
                
                {/* Grid de beneficios */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-colors group/item">
                    <div className="text-3xl mb-3 group-hover/item:scale-110 transition-transform">🔍</div>
                    <div className="font-bold text-white">Diagnóstico</div>
                    <div className="text-gray-300 text-sm">Análisis completo</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-colors group/item">
                    <div className="text-3xl mb-3 group-hover/item:scale-110 transition-transform">⚙️</div>
                    <div className="font-bold text-white">Optimización</div>
                    <div className="text-gray-300 text-sm">Mejora continua</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-colors group/item">
                    <div className="text-3xl mb-3 group-hover/item:scale-110 transition-transform">📊</div>
                    <div className="font-bold text-white">Monitoreo</div>
                    <div className="text-gray-300 text-sm">Tiempo real</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-colors group/item">
                    <div className="text-3xl mb-3 group-hover/item:scale-110 transition-transform">💰</div>
                    <div className="font-bold text-white">Ahorros</div>
                    <div className="text-gray-300 text-sm">Medibles</div>
                  </div>
                </div>
                
                {/* CTA secundario */}
                <div className="text-center pt-4">
                  <a href="tel:+16092220687" className="inline-flex items-center gap-2 text-iter-primary hover:text-iter-gold transition-colors font-semibold">
                    📞 +1 (609) 222-0687
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-iter-primary animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero 