import { useEffect, useState } from 'react'
import { brand, contacts } from '../data/content'
import Icon from './Icon'

const nav = [
  { href: '#advantages', label: 'Преимущества' },
  { href: '#routes', label: 'Маршруты' },
  { href: '#fleet', label: 'Автопарк' },
  { href: '#booking', label: 'Заказ' },
  { href: '#faq', label: 'Вопросы' },
  { href: '#contact', label: 'Контакты' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Body scroll lock + Esc to close
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-ink-100 bg-white/85 backdrop-blur-xl shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          <a href="#top" className="group flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sun-300 to-sun-500 shadow-sun">
              <span className="font-display text-lg font-extrabold text-ink-900">M</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-base font-extrabold tracking-tight text-ink-900">
                {brand.name}
              </div>
              <div className="text-[11px] uppercase tracking-widest text-sun-600">
                {brand.tagline}
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-900/70 transition hover:text-sun-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${contacts.whatsappRaw}`}
              className="hidden text-right lg:block"
            >
              <div className="text-[11px] uppercase tracking-widest text-zinc-500">24/7</div>
              <div className="font-display text-sm font-bold text-ink-900">
                {contacts.whatsapp}
              </div>
            </a>
            <a
              href={contacts.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-4 !py-2 text-sm"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Заказать
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-100 bg-white text-ink-900 shadow-sm transition hover:border-sun-300 md:hidden"
            aria-label="Открыть меню"
            aria-expanded={open}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Full-screen offcanvas */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink-900/30 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Panel */}
        <div
          className={`absolute inset-0 flex flex-col bg-gradient-to-br from-white via-sun-50/40 to-sun-100/30 transition-transform duration-300 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Top bar */}
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-ink-100 px-4 sm:px-6">
            <a
              href="#top"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sun-300 to-sun-500 shadow-sun">
                <span className="font-display text-lg font-extrabold text-ink-900">M</span>
              </div>
              <div className="leading-tight">
                <div className="font-display text-base font-extrabold tracking-tight text-ink-900">
                  {brand.name}
                </div>
                <div className="text-[11px] uppercase tracking-widest text-sun-600">
                  {brand.tagline}
                </div>
              </div>
            </a>
            <button
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-100 bg-white text-ink-900 transition hover:border-sun-300"
              aria-label="Закрыть меню"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links - large */}
          <nav className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <ul className="space-y-1">
              {nav.map((item, i) => (
                <li
                  key={item.href}
                  style={{
                    animationDelay: open ? `${i * 40 + 80}ms` : '0ms',
                  }}
                  className={open ? 'animate-fade-up' : 'opacity-0'}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between rounded-2xl px-4 py-4 text-2xl font-display font-bold text-ink-900 transition hover:bg-white hover:text-sun-700"
                  >
                    {item.label}
                    <Icon
                      name="arrow"
                      className="h-5 w-5 text-ink-900/30 transition group-hover:translate-x-1 group-hover:text-sun-500"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom CTA */}
          <div className="shrink-0 border-t border-ink-100 bg-white/60 px-4 py-5 backdrop-blur sm:px-6">
            <div className="grid gap-3">
              <a
                href={contacts.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl bg-[#25D366] px-5 py-3.5 text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.5)] transition hover:scale-[1.02]"
              >
                <span className="flex items-center gap-3">
                  <Icon name="whatsapp" className="h-6 w-6" />
                  <span className="text-left leading-tight">
                    <span className="block text-[11px] font-semibold uppercase tracking-widest opacity-80">
                      WhatsApp
                    </span>
                    <span className="font-display text-base font-bold">
                      {contacts.whatsapp}
                    </span>
                  </span>
                </span>
                <Icon name="arrow" className="h-5 w-5 opacity-80" />
              </a>
              <a
                href={contacts.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl bg-[#229ED9] px-5 py-3.5 text-white shadow-[0_10px_30px_-10px_rgba(34,158,217,0.5)] transition hover:scale-[1.02]"
              >
                <span className="flex items-center gap-3">
                  <Icon name="telegram" className="h-6 w-6" />
                  <span className="text-left leading-tight">
                    <span className="block text-[11px] font-semibold uppercase tracking-widest opacity-80">
                      Telegram
                    </span>
                    <span className="font-display text-base font-bold">
                      {contacts.telegram}
                    </span>
                  </span>
                </span>
                <Icon name="arrow" className="h-5 w-5 opacity-80" />
              </a>
            </div>
            <p className="mt-4 text-center text-xs text-ink-900/40">
              Работаем 24/7 · Уральск ↔ Самара ↔ Казань
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
