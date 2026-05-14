import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { routePages, routePagesList } from '../data/routePages'
import { contacts } from '../data/content'
import Header from './Header'
import Footer from './Footer'
import StickyCall from './StickyCall'
import BookingForm from './BookingForm'
import Icon from './Icon'

export default function RoutePage() {
  const { slug } = useParams()
  const route = routePages[slug]

  if (!route) return <Navigate to="/" replace />

  const canonical = `https://taximax.kz/${route.slug}`
  const otherRoutes = routePagesList.filter((r) => r.slug !== slug)

  return (
    <div className="min-h-screen bg-white text-ink-900">
      <Helmet>
        <title>{route.seoTitle}</title>
        <meta name="description" content={route.seoDescription} />
        <meta name="keywords" content={route.keywords} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={route.seoTitle} />
        <meta property="og:description" content={route.seoDescription} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:title" content={route.seoTitle} />
        <meta name="twitter:description" content={route.seoDescription} />

        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Междугороднее такси',
          provider: {
            '@type': 'TaxiService',
            name: 'Taxi Max',
            telephone: contacts.whatsappRaw,
            url: 'https://taximax.kz/',
          },
          areaServed: [
            { '@type': 'City', name: route.from },
            { '@type': 'City', name: route.to },
          ],
          name: `Такси ${route.from} — ${route.to}`,
          description: route.seoDescription,
          url: canonical,
        })}</script>

        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: route.faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        })}</script>

        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Главная',
              item: 'https://taximax.kz/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: `Такси ${route.from} — ${route.to}`,
              item: canonical,
            },
          ],
        })}</script>
      </Helmet>

      <Header />
      <main>
        <RouteHero route={route} />
        <RouteFacts route={route} />
        <RouteFleetNote route={route} />
        <BookingForm />
        <RouteFAQ route={route} />
        <OtherRoutes routes={otherRoutes} />
      </main>
      <Footer />
      <StickyCall />
    </div>
  )
}

function RouteHero({ route }) {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-sun-radial" />
        <div className="absolute inset-0 grid-bg opacity-50" />
      </div>

      <div className="container-x relative">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-ink-900/60">
          <Link to="/" className="hover:text-sun-700">
            Главная
          </Link>
          <span>/</span>
          <Link to="/#routes" className="hover:text-sun-700">
            Маршруты
          </Link>
          <span>/</span>
          <span className="text-ink-900">
            {route.from} — {route.to}
          </span>
        </nav>

        <div className="section-eyebrow">Маршрут</div>
        <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
          {route.h1}
        </h1>

        <div className="mt-8 max-w-3xl space-y-5 text-lg text-ink-900/75 md:text-xl">
          {route.intro.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#booking" className="btn-primary">
            {route.cta}
            <Icon name="arrow" className="h-4 w-4" />
          </a>
          <a
            href={contacts.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Icon name="whatsapp" className="h-4 w-4 text-[#25D366]" />
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

function RouteFacts({ route }) {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-100 bg-ink-100 shadow-soft sm:grid-cols-3">
          {route.facts.map((f) => (
            <div
              key={f.label}
              className="flex flex-col bg-white px-5 py-6"
            >
              <div className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                {f.label}
              </div>
              <div className="mt-1 font-display text-lg font-bold text-ink-900">
                {f.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RouteFleetNote({ route }) {
  return (
    <section className="bg-sun-50/40 py-16 md:py-20">
      <div className="container-x">
        <div className="mx-auto max-w-3xl rounded-3xl border border-ink-100 bg-white p-8 shadow-soft">
          <div className="section-eyebrow">Какая машина</div>
          <h2 className="font-display text-2xl font-bold text-ink-900 md:text-3xl">
            Подбираем автомобиль под количество пассажиров и багаж
          </h2>
          <p className="mt-4 text-ink-900/70">{route.fleetNote}</p>
          <div className="mt-6">
            <Link to="/#fleet" className="btn-ghost text-sm">
              Посмотреть весь автопарк
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function RouteFAQ({ route }) {
  const [open, setOpen] = useState(0)
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="section-eyebrow">Вопросы и ответы</div>
            <h2 className="section-title text-balance">
              {route.from} — {route.to}: частые вопросы
            </h2>
            <p className="mt-4 text-ink-900/60">
              Не нашли ответ? Напишите в WhatsApp или Telegram —
              диспетчер ответит за минуту.
            </p>
          </div>

          <div className="space-y-3">
            {route.faq.map((item, i) => {
              const isOpen = open === i
              return (
                <div
                  key={item.q}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? 'border-sun-300 bg-sun-50/60 shadow-soft'
                      : 'border-ink-100 bg-white'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-display text-base font-bold transition sm:text-lg ${
                        isOpen ? 'text-sun-700' : 'text-ink-900'
                      }`}
                    >
                      {item.q}
                    </span>
                    <Icon
                      name="chevron"
                      className={`h-5 w-5 shrink-0 text-sun-500 transition ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ink-900/70">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function OtherRoutes({ routes }) {
  return (
    <section className="bg-sun-50/40 py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-eyebrow mx-auto">Другие направления</div>
          <h2 className="section-title text-balance">
            Куда мы ещё возим
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((r) => (
            <Link
              key={r.slug}
              to={`/${r.slug}`}
              className="group rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-sun-300"
            >
              <div className="text-[11px] font-semibold uppercase tracking-widest text-sun-700">
                {r.from} → {r.to}
              </div>
              <h3 className="mt-2 font-display text-xl font-bold text-ink-900 group-hover:text-sun-700">
                {r.h1}
              </h3>
              <p className="mt-3 line-clamp-2 text-sm text-ink-900/60">
                {r.intro[0]}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sun-700">
                Подробнее
                <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
