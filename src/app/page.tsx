import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Benefits from '@/components/sections/Benefits'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
