'use client'

import React from 'react'
import Button from '@/components/ui/Button'

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-iter-black leading-tight">
                Optimiza tu 
                <span className="text-iter-green"> Energía</span>, 
                Maximiza tus 
                <span className="text-iter-blue"> Ahorros</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Especialistas en gestión energética ISO 50001 y sistemas fotovoltaicos. 
                Transformamos tu consumo energético en ahorros reales y sostenibilidad empresarial.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button size="lg">
                  🚀 Comenzar Ahora
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" size="lg">
                  📋 Ver Servicios
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-iter-green">+50</div>
                <div className="text-sm text-gray-600">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-iter-blue">30%</div>
                <div className="text-sm text-gray-600">Ahorro Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-iter-green">ISO 50001</div>
                <div className="text-sm text-gray-600">Certificados</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-r from-iter-green to-iter-blue rounded-2xl p-8 text-white shadow-2xl">
              <div className="space-y-6">
                <div className="text-6xl text-center">⚡</div>
                <h3 className="text-2xl font-bold text-center">Eficiencia Energética</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="font-semibold">Análisis</div>
                    <div className="text-white/80">Diagnóstico completo</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="font-semibold">Optimización</div>
                    <div className="text-white/80">Mejora continua</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="font-semibold">Monitoreo</div>
                    <div className="text-white/80">Control en tiempo real</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="font-semibold">Ahorros</div>
                    <div className="text-white/80">Resultados medibles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 