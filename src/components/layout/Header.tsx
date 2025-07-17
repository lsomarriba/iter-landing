'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/Button'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-iter-black">ITER</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-gray-700 hover:text-iter-green px-3 py-2 text-sm font-medium transition-colors">
                Servicios
              </a>
              <a href="#process" className="text-gray-700 hover:text-iter-green px-3 py-2 text-sm font-medium transition-colors">
                Proceso
              </a>
              <a href="#benefits" className="text-gray-700 hover:text-iter-green px-3 py-2 text-sm font-medium transition-colors">
                Beneficios
              </a>
              <a href="#contact" className="text-gray-700 hover:text-iter-green px-3 py-2 text-sm font-medium transition-colors">
                Contacto
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Solicitar Consultoría
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-iter-green focus:outline-none"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isMenuOpen ? (
                <span className="text-2xl">☰</span>
              ) : (
                <span className="text-2xl">✕</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a href="#services" className="text-gray-700 hover:text-iter-green block px-3 py-2 text-base font-medium">
                Servicios
              </a>
              <a href="#process" className="text-gray-700 hover:text-iter-green block px-3 py-2 text-base font-medium">
                Proceso
              </a>
              <a href="#benefits" className="text-gray-700 hover:text-iter-green block px-3 py-2 text-base font-medium">
                Beneficios
              </a>
              <a href="#contact" className="text-gray-700 hover:text-iter-green block px-3 py-2 text-base font-medium">
                Contacto
              </a>
              <div className="px-3 py-2">
                <Button className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Solicitar Consultoría
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header 