import React from 'react'
import Button from '@/components/ui/Button'

const Services: React.FC = () => {
  const services = [
    {
      icon: '🏭',
      title: 'Gestión Energética ISO 50001',
      description: 'Implementamos sistemas de gestión energética certificados que reducen costos y mejoran la eficiencia operacional.',
      features: [
        'Diagnóstico energético completo',
        'Plan de mejora personalizado',
        'Certificación ISO 50001',
        'Monitoreo continuo'
      ],
      color: 'from-iter-green to-green-600'
    },
    {
      icon: '☀️',
      title: 'Diseño de Sistemas Fotovoltaicos',
      description: 'Desarrollamos proyectos solares comerciales e industriales que maximizan el retorno de inversión.',
      features: [
        'Estudio de viabilidad técnica',
        'Ingeniería de detalle',
        'Gestión de permisos',
        'Supervisión de instalación'
      ],
      color: 'from-iter-blue to-blue-600'
    },
    {
      icon: '🔍',
      title: 'Auditorías de Sistemas Fotovoltaicos',
      description: 'Evaluamos el rendimiento de instalaciones existentes para optimizar su producción energética.',
      features: [
        'Análisis de rendimiento',
        'Detección de fallas',
        'Optimización de producción',
        'Reporte técnico detallado'
      ],
      color: 'from-iter-green to-iter-blue'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-iter-black">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales en eficiencia energética y energía solar para empresas que buscan reducir costos y ser más sostenibles
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-iter-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="text-iter-green text-sm">✓</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-iter-green group-hover:text-white group-hover:border-iter-green"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar Información
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-iter-green to-iter-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte a optimizar tu consumo energético
            </p>
            <Button 
              variant="outline" 
              className="bg-white text-iter-green border-white hover:bg-gray-100"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              📞 Agendar Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 