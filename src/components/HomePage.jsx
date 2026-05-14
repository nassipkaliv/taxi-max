import { Helmet } from 'react-helmet-async'
import Header from './Header'
import Hero from './Hero'
import Stats from './Stats'
import Advantages from './Advantages'
import Routes from './Routes'
import Fleet from './Fleet'
import HowItWorks from './HowItWorks'
import BookingForm from './BookingForm'
import FAQ from './FAQ'
import Contact from './Contact'
import Footer from './Footer'
import StickyCall from './StickyCall'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-ink-900">
      <Helmet>
        <title>Такси Уральск — Самара — Казань 24/7 | Taxi Max</title>
        <meta
          name="description"
          content="Междугороднее такси Уральск ↔ Самара, Курумоч, Казань. Toyota Camry, Highlander, минивэны Peugeot. Поездки 24/7, фиксированная цена от 15 000 ₸ / 3 000 ₽ за место. Заказ в WhatsApp +7 702 876-25-84 или Telegram."
        />
        <link rel="canonical" href="https://taximax.kz/" />
        <meta property="og:url" content="https://taximax.kz/" />
      </Helmet>

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
