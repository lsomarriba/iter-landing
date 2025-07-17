import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-iter-dark via-iter-charcoal to-iter-dark text-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-iter-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-iter-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(74,222,128,0.05)_1px,transparent_0)] bg-[size:50px_50px]"></div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-iter-primary to-iter-secondary rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-3xl font-black text-white">
                  <span className="text-iter-primary">ITER</span>
                </h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Especialistas en <strong className="text-iter-primary">gestión energética</strong> y 
                <strong className="text-iter-gold"> sistemas fotovoltaicos</strong>. 
                Transformamos el consumo energético de las empresas en ahorros reales y sostenibilidad.
              </p>

              {/* Contact info premium */}
              <div className="space-y-4">
                <a href="mailto:sales@iterge.com" className="flex items-center gap-3 text-gray-300 hover:text-iter-primary transition-colors group">
                  <div className="w-8 h-8 bg-iter-primary/20 rounded-lg flex items-center justify-center group-hover:bg-iter-primary/30 transition-colors">
                    💼
                  </div>
                  <span>sales@iterge.com</span>
                </a>
                <a href="mailto:luis.somarriba.r@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-iter-secondary transition-colors group">
                  <div className="w-8 h-8 bg-iter-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-iter-secondary/30 transition-colors">
                    ✉️
                  </div>
                  <span>luis.somarriba.r@gmail.com</span>
                </a>
                <a href="tel:+16092220687" className="flex items-center gap-3 text-gray-300 hover:text-iter-gold transition-colors group">
                  <div className="w-8 h-8 bg-iter-gold/20 rounded-lg flex items-center justify-center group-hover:bg-iter-gold/30 transition-colors">
                    📞
                  </div>
                  <span>+1 (609) 222-0687</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 bg-iter-secondary/20 rounded-lg flex items-center justify-center">
                    📍
                  </div>
                  <span>Estados Unidos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-iter-primary">Servicios</h4>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-gray-300 hover:text-iter-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-iter-primary rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Gestión Energética ISO 50001
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-iter-gold transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-iter-gold rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Sistemas Fotovoltaicos
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-iter-secondary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-iter-secondary rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Auditorías Energéticas
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-iter-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-iter-primary rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Consultoría Especializada
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation & CTAs */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-iter-gold">Navegación</h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a href="#services" className="text-gray-300 hover:text-iter-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-iter-primary rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Servicios
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-iter-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-iter-primary rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Proceso
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-300 hover:text-iter-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-iter-primary rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-iter-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-iter-primary rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Contacto
                </a>
              </li>
            </ul>

            {/* CTA rápido */}
            <a href="#contact" className="block">
              <button className="w-full py-3 px-6 bg-gradient-to-r from-iter-primary to-iter-secondary text-white font-bold rounded-xl hover:from-iter-secondary hover:to-iter-accent transition-all duration-300 shadow-lg hover:shadow-xl">
                💬 Consulta Gratuita
              </button>
            </a>
          </div>
        </div>

        {/* Social Links & Stats */}
        <div className="border-t border-iter-primary/20 mt-16 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Social links */}
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <span className="text-gray-300 font-semibold">Síguenos:</span>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-iter-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-iter-gold rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-iter-secondary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                  <span className="text-xl">🐦</span>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-iter-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                  <span className="text-xl">💼</span>
                </a>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="group cursor-pointer">
                <div className="text-2xl font-bold text-iter-primary group-hover:scale-110 transition-transform">+200</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Proyectos</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-2xl font-bold text-iter-gold group-hover:scale-110 transition-transform">Consulta</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Tu Potencial</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-2xl font-bold text-iter-secondary group-hover:scale-110 transition-transform">15+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Años</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-2xl font-bold text-iter-primary group-hover:scale-110 transition-transform">Excelente</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal links */}
        <div className="border-t border-iter-primary/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-iter-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-iter-primary transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-iter-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-iter-primary/10 bg-iter-dark/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2024 <span className="text-iter-primary font-semibold">ITER</span> - Gestión Energética. 
              Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <span>Diseñado por</span>
              <a href="#" className="flex items-center gap-2 hover:text-iter-primary transition-colors group">
                <img 
                  src="/sinsajo-logo.png" 
                  alt="Sinsajo Creators" 
                  className="w-6 h-6 rounded-lg group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold">Sinsajo Creators</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 