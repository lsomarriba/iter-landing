'use client'

import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
    setFormData({ name: '', company: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-iter-black">
            Contacta con Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comienza tu proyecto de eficiencia energética hoy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-iter-black mb-6">
              Solicita tu Consulta Gratuita
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iter-green focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iter-green focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iter-green focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iter-green focus:border-transparent resize-vertical"
                  placeholder="Cuéntanos sobre tu proyecto energético..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg font-bold text-lg bg-gradient-to-r from-iter-green to-iter-blue hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                📨 Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-iter-black mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-iter-green to-iter-blue rounded-lg flex items-center justify-center text-white text-xl">
                    📧
                  </div>
                  <div>
                    <h4 className="font-semibold text-iter-black">Email</h4>
                    <p className="text-gray-600">contacto@iter-energia.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-iter-green to-iter-blue rounded-lg flex items-center justify-center text-white text-xl">
                    📱
                  </div>
                  <div>
                    <h4 className="font-semibold text-iter-black">Teléfono</h4>
                    <p className="text-gray-600">+56 9 1234 5678</p>
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

export default Contact 