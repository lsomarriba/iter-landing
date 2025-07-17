import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Paleta Premium ITER basada en el logo
        'iter': {
          'primary': '#4ADE80',      // Verde check premium
          'secondary': '#10B981',    // Verde más intenso
          'accent': '#059669',       // Verde oscuro
          'brown': '#78350F',        // Marrón del logo
          'dark': '#1C1917',         // Marrón muy oscuro
          'gold': '#F59E0B',         // Oro premium
          'slate': '#475569',        // Gris profesional
          'charcoal': '#374151',     // Carbón elegante
        },
        // Mantener compatibilidad
        'iter-green': '#4ADE80',
        'iter-blue': '#1E40AF',
        'iter-black': '#1C1917',
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #1C1917 0%, #374151 50%, #1C1917 100%)',
        'hero-gradient': 'linear-gradient(135deg, #4ADE80 0%, #10B981 50%, #059669 100%)',
        'service-gradient': 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
        'cta-gradient': 'linear-gradient(135deg, #4ADE80 0%, #F59E0B 100%)',
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'premium-lg': '0 35px 60px -12px rgba(0, 0, 0, 0.35)',
        'glow': '0 0 30px rgba(74, 222, 128, 0.3)',
        'glow-gold': '0 0 30px rgba(245, 158, 11, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(74, 222, 128, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(74, 222, 128, 0.6)' }
        }
      }
    },
  },
  plugins: [],
};
export default config;
