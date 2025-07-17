import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Companies from '@/components/sections/Companies'
import Process from '@/components/sections/Process'
import Benefits from '@/components/sections/Benefits'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Companies />
        <Process />
        <Benefits />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
