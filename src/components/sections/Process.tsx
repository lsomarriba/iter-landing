import React from 'react'

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico Inicial',
      description: 'Analizamos tu consumo energético actual y identificamos oportunidades de mejora.',
      duration: '1-2 semanas',
      icon: '🔍'
    },
    {
      number: '02',
      title: 'Propuesta Técnica',
      description: 'Desarrollamos un plan personalizado con proyecciones de ahorro y retorno de inversión.',
      duration: '1 semana',
      icon: '📊'
    },
    {
      number: '03',
      title: 'Implementación',
      description: 'Ejecutamos el proyecto con supervisión técnica especializada y control de calidad.',
      duration: '2-8 semanas',
      icon: '⚙️'
    },
    {
      number: '04',
      title: 'Monitoreo',
      description: 'Realizamos seguimiento continuo para garantizar los resultados y optimizar el rendimiento.',
      duration: 'Continuo',
      icon: '📈'
    }
  ]

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-iter-black">
            Nuestro Proceso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un enfoque sistemático y probado que garantiza resultados óptimos en cada proyecto
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-iter-green to-iter-blue rounded-2xl p-8 text-white text-center">
            <div className="space-y-6">
              <div className="text-6xl">🎬</div>
              <h3 className="text-3xl font-bold">Dark Classical Academia</h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Conoce más sobre nuestra metodología y casos de éxito en nuestro contenido especializado
              </p>
              <div className="bg-white/20 rounded-xl p-6 max-w-md mx-auto">
                <div className="text-sm text-white/80">Video explicativo disponible</div>
                <div className="text-lg font-semibold mt-2">Proceso de Implementación</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-iter-green hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex w-16 h-16 bg-gradient-to-r from-iter-green to-iter-blue rounded-full items-center justify-center text-white text-2xl font-bold shadow-lg relative z-10">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-3xl font-bold text-iter-green">{step.number}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-iter-black">{step.title}</h3>
                          <div className="text-sm text-iter-blue font-semibold">Duración: {step.duration}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>

                    {/* Mobile icon */}
                    <div className="md:hidden w-16 h-16 bg-gradient-to-r from-iter-green to-iter-blue rounded-full flex items-center justify-center text-white text-2xl">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-iter-black mb-4">
              ¿Listo para comenzar tu proyecto?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nuestro equipo de expertos está preparado para evaluar tu caso y desarrollar una solución personalizada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-iter-green hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🚀 Iniciar Proyecto
              </button>
              <button 
                className="border-2 border-iter-green text-iter-green hover:bg-iter-green hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                📋 Ver Más Detalles
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process 