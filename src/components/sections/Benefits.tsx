'use client'

import React from 'react'

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: '💰',
      title: 'Reducción de Costos',
      description: 'Ahorra hasta un 40% en tu factura energética con nuestras soluciones optimizadas.',
      stat: '40%',
      statLabel: 'Ahorro promedio'
    },
    {
      icon: '🌱',
      title: 'Sostenibilidad',
      description: 'Reduce tu huella de carbono y mejora la imagen corporativa de tu empresa.',
      stat: '60%',
      statLabel: 'Menos emisiones'
    },
    {
      icon: '⚡',
      title: 'Eficiencia Operacional',
      description: 'Optimiza procesos industriales y mejora la productividad energética.',
      stat: '25%',
      statLabel: 'Más eficiencia'
    },
    {
      icon: '📈',
      title: 'ROI Garantizado',
      description: 'Retorno de inversión comprobado en proyectos de eficiencia energética.',
      stat: '18 meses',
      statLabel: 'Payback promedio'
    },
    {
      icon: '🏆',
      title: 'Certificaciones',
      description: 'Obtén certificaciones ISO 50001 que valorizan tu empresa.',
      stat: '100%',
      statLabel: 'Éxito certificación'
    },
    {
      icon: '🔧',
      title: 'Soporte Técnico',
      description: 'Acompañamiento continuo con monitoreo y mantenimiento especializado.',
      stat: '24/7',
      statLabel: 'Soporte disponible'
    }
  ]

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-iter-black">
            ¿Por Qué Elegir ITER?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beneficios comprobados que transforman tu empresa en un líder en eficiencia energética
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 h-full transition-all duration-300 hover:border-iter-green hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-iter-green/5 hover:to-iter-blue/5">
                {/* Icon with animation */}
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-iter-green group-hover:to-iter-blue rounded-xl flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:text-white group-hover:scale-110">
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-iter-black mb-4 group-hover:text-iter-green transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Stat */}
                <div className="transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl font-bold text-iter-green mb-1">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    {benefit.statLabel}
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="mt-6 h-1 bg-gradient-to-r from-iter-green to-iter-blue rounded-full transition-all duration-300 w-0 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
            <h3 className="text-3xl font-bold text-iter-black mb-4">
              Comienza a Ahorrar Hoy
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a más de 50 empresas que ya confían en nuestras soluciones energéticas
            </p>
            
            {/* Stats row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-iter-green">+50</div>
                <div className="text-sm text-gray-600">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-iter-blue">15+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-iter-green">98%</div>
                <div className="text-sm text-gray-600">Satisfacción Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-iter-blue">24/7</div>
                <div className="text-sm text-gray-600">Soporte Técnico</div>
              </div>
            </div>

            <a href="#contact" className="inline-block bg-gradient-to-r from-iter-green to-iter-blue hover:from-green-700 hover:to-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
              🚀 Solicita tu Consulta Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits 