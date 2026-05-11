import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Advantages from './components/Advantages'
import Routes from './components/Routes'
import Fleet from './components/Fleet'
import HowItWorks from './components/HowItWorks'
import BookingForm from './components/BookingForm'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StickyCall from './components/StickyCall'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink-900">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Advantages />
        <Routes />
        <Fleet />
        <HowItWorks />
        <BookingForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCall />
    </div>
  )
}
