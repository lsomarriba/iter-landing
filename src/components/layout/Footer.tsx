import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-iter-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-iter-green mb-4">ITER</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas en gestión energética y sistemas fotovoltaicos. 
              Transformamos el consumo energético de las empresas en ahorros 
              reales y sostenibilidad.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-iter-green">📧</span>
                <span>contacto@iter-energia.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-iter-green">📱</span>
                <span>+56 9 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-iter-green">📍</span>
                <span>Santiago, Chile</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-iter-blue">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-iter-green transition-colors">
                  Gestión Energética ISO 50001
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-iter-green transition-colors">
                  Sistemas Fotovoltaicos
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-iter-green transition-colors">
                  Auditorías Energéticas
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-iter-green transition-colors">
                  Consultoría Especializada
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-iter-blue">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-iter-green transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-iter-green transition-colors">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-300 hover:text-iter-green transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-iter-green transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <span className="text-gray-300">Síguenos:</span>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-iter-green rounded-lg flex items-center justify-center transition-colors">
                  📘
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-iter-green rounded-lg flex items-center justify-center transition-colors">
                  📷
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-iter-green rounded-lg flex items-center justify-center transition-colors">
                  🐦
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-iter-green rounded-lg flex items-center justify-center transition-colors">
                  💼
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-iter-green transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="text-gray-300 hover:text-iter-green transition-colors">
                  Términos de Servicio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 ITER - Gestión Energética. Todos los derechos reservados.
            </div>
            <div className="text-gray-400 text-sm">
              RUT: 12.345.678-9 | Desarrollado con ⚡ para la eficiencia energética
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 