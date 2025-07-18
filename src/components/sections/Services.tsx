import React from 'react'

const Services: React.FC = () => {
  const services = [
    {
      id: 'iso-50001',
      icon: '🏭',
      title: 'Gestión Energética ISO 50001',
      subtitle: 'Certificación Internacional de Eficiencia',
      description: 'Implementación completa del sistema de gestión energética más reconocido mundialmente. Reduce significativamente tus costos energéticos con metodología probada.',
      detailedExplanation: 'La norma ISO 50001 es el estándar internacional para sistemas de gestión de la energía. Te ayudamos a establecer políticas, objetivos y procesos para mejorar el rendimiento energético de tu organización.',
      features: [
        {
          title: 'Diagnóstico Energético Integral',
          description: 'Análisis completo de consumos, identificación de oportunidades y línea base energética'
        },
        {
          title: 'Sistema de Gestión Personalizado',
          description: 'Desarrollo de políticas, objetivos, indicadores y procedimientos específicos para tu empresa'
        },
        {
          title: 'Certificación ISO 50001',
          description: 'Acompañamiento completo hasta obtener la certificación internacional'
        },
        {
          title: 'Monitoreo y Mejora Continua',
          description: 'Sistema de seguimiento permanente para garantizar resultados sostenidos'
        }
      ],
      benefits: ['Reducción significativa costos energéticos', 'Certificación internacional', 'Mejora competitividad', 'Cumplimiento normativo'],
      timeline: '3-6 meses',
      investment: 'Cotización personalizada',
      color: 'from-iter-primary to-iter-secondary',
      borderColor: 'border-iter-primary',
      ctaText: 'Solicitar Diagnóstico ISO 50001'
    },
    {
      id: 'pv-design',
      icon: '☀️',
      title: 'Diseño de Sistemas Fotovoltaicos',
      subtitle: 'Energía Solar Comercial e Industrial',
      description: 'Proyectos solares llave en mano para empresas. Desde 100kW hasta varios MW. Financiamiento disponible con ROI garantizado en 3-5 años.',
      detailedExplanation: 'Desarrollamos proyectos de energía solar fotovoltaica completos para el sector comercial e industrial, desde el estudio de factibilidad hasta la puesta en marcha y operación.',
      features: [
        {
          title: 'Estudio de Viabilidad Técnico-Económica',
          description: 'Análisis de potencial solar, dimensionamiento óptimo y proyección financiera detallada'
        },
        {
          title: 'Ingeniería de Detalle',
          description: 'Diseño eléctrico, estructural y civil con software especializado (PVSyst, AutoCAD)'
        },
        {
          title: 'Gestión Integral de Permisos',
          description: 'Tramitación de permisos municipales, conexión a red y homologación de equipos'
        },
        {
          title: 'Supervisión de Instalación',
          description: 'Control de calidad, pruebas de funcionamiento y puesta en marcha del sistema'
        }
      ],
      benefits: ['ROI 3-5 años', 'Vida útil +25 años', 'Mantenimiento mínimo', 'Incentivos fiscales'],
      timeline: '4-8 meses',
      investment: 'Cotización personalizada',
      color: 'from-iter-gold to-yellow-500',
      borderColor: 'border-iter-gold',
      ctaText: 'Cotizar Sistema Solar'
    },
    {
      id: 'pv-audit',
      icon: '🔍',
      title: 'Auditorías de Sistemas Fotovoltaicos',
      subtitle: 'Optimización en Todas las Fases del Proyecto',
      description: 'Auditorías especializadas en diseño, ejecución y operación. Garantizamos máximo rendimiento y ROI en cada etapa de tu proyecto fotovoltaico.',
      detailedExplanation: 'Evaluaciones técnicas integrales adaptadas a cada fase: revisión de diseños antes de construir, supervisión durante instalación, y optimización de sistemas en operación.',
      features: [
        {
          title: 'Auditoría en Fase de Diseño',
          description: 'Validación técnica del proyecto antes de construcción. Optimización de layouts, selección de equipos y análisis de viabilidad'
        },
        {
          title: 'Auditoría Durante Ejecución',
          description: 'Supervisión de instalación, control de calidad, verificación de especificaciones y pruebas de funcionamiento'
        },
        {
          title: 'Auditoría en Operación',
          description: 'Análisis de rendimiento, identificación de fallas, termografía y plan de mantenimiento preventivo'
        },
        {
          title: 'Reportes y Recomendaciones',
          description: 'Informes detallados con hallazgos, recomendaciones técnicas y plan de acción para maximizar producción'
        }
      ],
      phasesBenefits: {
        design: [
          'Evitar errores costosos significativos',
          'Optimizar diseño para máxima producción',
          'Validar ROI antes de invertir',
          'Cumplimiento normativo garantizado'
        ],
        execution: [
          'Control de calidad total de componentes',
          'Instalación conforme especificaciones',
          'Prevenir problemas futuros',
          'Garantía técnica respaldada'
        ],
        operation: [
          'Recuperar producción perdida significativa',
          'Extender vida útil considerablemente',
          'Reducir costos O&M sustancialmente',
          'Maximizar rentabilidad'
        ]
      },
      benefits: ['Auditorías en 3 fases críticas', 'ROI optimizado garantizado', 'Prevención vs. corrección', 'Informes técnicos certificados'],
      timeline: '1-4 semanas (según fase)',
      investment: 'Desde $0.05/Watt',
      color: 'from-iter-secondary to-iter-accent',
      borderColor: 'border-iter-secondary',
      ctaText: 'Solicitar Auditoría'
    }
  ]

  return (
    <section id="services" className="py-24 bg-service-gradient relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-iter-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-iter-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Premium */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-iter-primary/10 border border-iter-primary/20 rounded-full text-iter-primary font-semibold text-sm">
            ⚡ Servicios Especializados
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-iter-dark">
            Nuestros <span className="text-iter-primary">Servicios</span>
          </h2>
          
          <p className="text-xl text-iter-charcoal max-w-4xl mx-auto leading-relaxed">
            Soluciones integrales en eficiencia energética y energía solar para empresas que buscan 
            <strong className="text-iter-primary"> reducir costos</strong> y ser más 
            <strong className="text-iter-gold"> sostenibles</strong>
          </p>
        </div>

        {/* Services Ultra-Diferenciados */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className={`group ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:flex gap-12 items-start">
                {/* Tarjeta del servicio */}
                <div className={`lg:w-1/2 bg-white rounded-3xl p-10 shadow-premium hover:shadow-premium-lg transition-all duration-500 border-2 ${service.borderColor} group-hover:scale-105 relative overflow-hidden`}>
                  {/* Imagen de fondo específica por servicio */}
                  {service.id === 'iso-50001' && (
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <img 
                        src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        alt="Industrial facility"
                        className="w-full h-full object-cover rounded-bl-3xl"
                      />
                    </div>
                  )}
                  {service.id === 'pv-design' && (
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <img 
                        src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        alt="Solar panel installation"
                        className="w-full h-full object-cover rounded-bl-3xl"
                      />
                    </div>
                  )}
                  {service.id === 'pv-audit' && (
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <img 
                        src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        alt="Solar panel inspection"
                        className="w-full h-full object-cover rounded-bl-3xl"
                      />
                    </div>
                  )}
                  {/* Header del servicio */}
                  <div className="space-y-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-iter-dark mb-2">
                        {service.title}
                      </h3>
                      <p className="text-lg text-iter-primary font-semibold">
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Información clave */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 p-6 bg-gray-50 rounded-2xl">
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-iter-primary mb-1">
                        {service.timeline}
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">Duración</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm md:text-lg font-bold text-iter-gold mb-1 leading-tight">
                        {service.investment}
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">Inversión</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-iter-secondary mb-1">ROI</div>
                      <div className="text-xs md:text-sm text-gray-600">Garantizado</div>
                    </div>
                  </div>

                  {/* CTA principal */}
                  <div className="mt-8">
                    <a href="#contact" className="block">
                      <button className={`w-full py-4 px-6 bg-gradient-to-r ${service.color} text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                        {service.ctaText} →
                      </button>
                    </a>
                  </div>
                </div>

                {/* Detalles expandidos */}
                <div className="lg:w-1/2 space-y-8 mt-8 lg:mt-0">
                  {/* Explicación detallada */}
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
                    <h4 className="text-xl font-bold text-iter-dark mb-4">
                      ¿Qué incluye este servicio?
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {service.detailedExplanation}
                    </p>

                    {/* Características detalladas */}
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex gap-4">
                          <div className="w-8 h-8 bg-iter-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <div className="w-3 h-3 bg-iter-primary rounded-full"></div>
                          </div>
                          <div>
                            <h5 className="font-semibold text-iter-dark">
                              {feature.title}
                            </h5>
                            <p className="text-gray-600 text-sm">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Beneficios por fases (solo para auditorías) */}
                  {service.phasesBenefits && (
                    <div className="bg-gradient-to-br from-iter-secondary/10 to-iter-primary/10 rounded-2xl p-8 border border-iter-secondary/20 mb-6">
                      <h4 className="text-xl font-bold text-iter-dark mb-6">
                        Beneficios por Fase del Proyecto
                      </h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="font-bold text-iter-secondary mb-3 flex items-center gap-2">
                            📐 Fase de Diseño
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.phasesBenefits.design.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <span className="text-iter-secondary">•</span>
                                <span className="text-sm text-iter-dark">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-bold text-iter-gold mb-3 flex items-center gap-2">
                            🔧 Fase de Ejecución
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.phasesBenefits.execution.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <span className="text-iter-gold">•</span>
                                <span className="text-sm text-iter-dark">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-bold text-iter-primary mb-3 flex items-center gap-2">
                            ⚡ Fase de Operación
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.phasesBenefits.operation.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <span className="text-iter-primary">•</span>
                                <span className="text-sm text-iter-dark">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Smart Interactive Phase Selector */}
                      <div className="mt-6 p-8 bg-gradient-to-br from-white/90 to-iter-secondary/5 rounded-2xl border-2 border-iter-secondary/20 backdrop-blur-sm">
                        <div className="text-center mb-8">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-iter-secondary/10 rounded-full text-iter-secondary font-bold text-sm mb-4">
                            💡 Smart Selector
                          </div>
                          <h4 className="text-2xl font-bold text-iter-dark mb-2">
                            ¿En qué <span className="text-iter-secondary">fase</span> está tu proyecto?
                          </h4>
                          <p className="text-gray-600 text-sm">
                            Descubre cómo podemos ayudarte específicamente en tu etapa actual
                          </p>
                        </div>

                        {/* Interactive Timeline Phases */}
                        <div className="relative">
                          {/* Progress Line */}
                          <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-iter-secondary via-iter-gold to-iter-primary rounded-full transform -translate-y-1/2 opacity-20"></div>
                          <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-iter-secondary via-iter-gold to-iter-primary rounded-full transform -translate-y-1/2 opacity-60 animate-pulse"></div>

                          <div className="grid grid-cols-3 gap-4 relative z-10">
                            {/* Fase 1: Pre-Diseño */}
                            <div className="group cursor-pointer">
                              <a href="#contact" className="block">
                                <div className="bg-white rounded-2xl p-6 border-2 border-iter-secondary/20 hover:border-iter-secondary hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                                  {/* Animated background effect */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-iter-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  
                                  {/* Phase indicator */}
                                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-iter-secondary rounded-full flex items-center justify-center text-white text-xs font-bold border-4 border-white">
                                    1
                                  </div>

                                  <div className="relative z-10 text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-iter-secondary to-iter-secondary/80 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                                      📐
                                    </div>
                                    <h5 className="font-bold text-iter-secondary mb-2">Pre-Diseño</h5>
                                    <p className="text-xs text-gray-600 mb-3">Validación y optimización antes de construir</p>
                                    
                                    {/* Benefits preview */}
                                    <div className="space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <div className="text-xs text-iter-secondary font-medium">• Evitar errores costosos</div>
                                      <div className="text-xs text-iter-secondary font-medium">• Máxima optimización</div>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <div className="px-3 py-2 bg-iter-secondary text-white text-xs font-bold rounded-lg hover:bg-iter-secondary/90 transition-colors">
                                        Evaluar Proyecto
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>

                            {/* Fase 2: En Construcción */}
                            <div className="group cursor-pointer">
                              <a href="#contact" className="block">
                                <div className="bg-white rounded-2xl p-6 border-2 border-iter-gold/20 hover:border-iter-gold hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                                  {/* Animated background effect */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-iter-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  
                                  {/* Phase indicator */}
                                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-iter-gold rounded-full flex items-center justify-center text-white text-xs font-bold border-4 border-white">
                                    2
                                  </div>

                                  <div className="relative z-10 text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-iter-gold to-yellow-500 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                                      🔧
                                    </div>
                                    <h5 className="font-bold text-iter-gold mb-2">En Construcción</h5>
                                    <p className="text-xs text-gray-600 mb-3">Supervisión y control de calidad durante instalación</p>
                                    
                                    {/* Benefits preview */}
                                    <div className="space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <div className="text-xs text-iter-gold font-medium">• Control calidad total</div>
                                      <div className="text-xs text-iter-gold font-medium">• Prevenir problemas</div>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <div className="px-3 py-2 bg-iter-gold text-white text-xs font-bold rounded-lg hover:bg-yellow-600 transition-colors">
                                        Supervisar Obra
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>

                            {/* Fase 3: En Operación */}
                            <div className="group cursor-pointer">
                              <a href="#contact" className="block">
                                <div className="bg-white rounded-2xl p-6 border-2 border-iter-primary/20 hover:border-iter-primary hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                                  {/* Animated background effect */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-iter-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  
                                  {/* Phase indicator */}
                                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-iter-primary rounded-full flex items-center justify-center text-white text-xs font-bold border-4 border-white">
                                    3
                                  </div>

                                  <div className="relative z-10 text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-iter-primary to-iter-secondary rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                                      ⚡
                                    </div>
                                    <h5 className="font-bold text-iter-primary mb-2">En Operación</h5>
                                    <p className="text-xs text-gray-600 mb-3">Optimización y maximización del rendimiento</p>
                                    
                                    {/* Benefits preview */}
                                    <div className="space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <div className="text-xs text-iter-primary font-medium">• Máxima producción</div>
                                      <div className="text-xs text-iter-primary font-medium">• Mayor vida útil</div>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <div className="px-3 py-2 bg-iter-primary text-white text-xs font-bold rounded-lg hover:bg-iter-primary/90 transition-colors">
                                        Optimizar Sistema
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-8 text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-iter-secondary/10 via-iter-gold/10 to-iter-primary/10 rounded-full text-iter-dark text-xs font-medium border border-gray-200">
                            <span className="animate-pulse">✨</span>
                            <span>Cada fase tiene beneficios únicos - ¡Descubre el tuyo!</span>
                            <span className="animate-pulse">✨</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Beneficios clave */}
                  <div className="bg-gradient-to-br from-iter-primary/10 to-iter-gold/10 rounded-2xl p-8 border border-iter-primary/20">
                    <h4 className="text-xl font-bold text-iter-dark mb-4">
                      Beneficios principales
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <span className="text-iter-primary">✓</span>
                          <span className="text-sm font-medium text-iter-dark">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA secundario */}
                  <div className="flex gap-4">
                    <a href="tel:+16092220687" className="flex-1 py-3 px-6 border-2 border-iter-primary text-iter-primary font-semibold rounded-xl hover:bg-iter-primary hover:text-white transition-colors text-center">
                      📞 Llamar ahora
                    </a>
                    <a href="#contact" className="flex-1 py-3 px-6 bg-iter-gold text-white font-semibold rounded-xl hover:bg-yellow-600 transition-colors text-center">
                      💬 Más info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Global Premium */}
        <div className="mt-24">
          <div className="bg-gradient-to-r from-iter-dark to-iter-charcoal rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Efectos de fondo */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-iter-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-iter-gold/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-4">
                ¿Necesitas una <span className="text-iter-primary">solución personalizada</span>?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contáctanos para una <strong className="text-iter-gold">consulta gratuita</strong> y descubre 
                cómo podemos ayudarte a optimizar tu consumo energético
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="#contact">
                  <button className="px-10 py-4 bg-cta-gradient text-iter-dark font-bold text-lg rounded-2xl shadow-glow hover:shadow-glow-gold transform hover:scale-105 transition-all duration-300">
                    🚀 Agendar Consulta Gratuita
                  </button>
                </a>
                <a href="tel:+16092220687">
                  <button className="px-10 py-4 border-2 border-iter-primary text-iter-primary font-bold text-lg rounded-2xl hover:bg-iter-primary hover:text-white transition-all duration-300">
                    📞 Llamar Ahora
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 