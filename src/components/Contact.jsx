import { contacts } from '../data/content'
import Icon from './Icon'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-sun-50/40 py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-eyebrow mx-auto">Свяжитесь с нами</div>
          <h2 className="section-title text-balance">
            Закажите поездку в WhatsApp или Telegram
          </h2>
          <p className="mt-4 text-ink-900/60">
            Работаем круглосуточно. В пиковые часы рекомендуем бронировать
            места заранее.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
          <ContactCard
            icon="whatsapp"
            label="WhatsApp"
            value={contacts.whatsapp}
            href={contacts.whatsappLink}
            cta="Открыть чат"
            accent="emerald"
          />
          <ContactCard
            icon="telegram"
            label="Telegram"
            value={contacts.telegram}
            href={contacts.telegramLink}
            cta="Открыть чат"
            accent="sky"
          />
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft">
          <iframe
            title="Маршрут Уральск — Самара — Казань"
            src="https://yandex.ru/map-widget/v1/?lang=ru&ll=51.5,52.5&z=6&l=map&pt=51.3667,51.2333,pm2gnl~50.1606,53.2001,pm2gnl~49.1221,55.7887,pm2gnl"
            className="h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

const accents = {
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    ring: 'ring-emerald-200',
    border: 'hover:border-emerald-400',
    icon: 'text-[#25D366]',
  },
  sky: {
    bg: 'bg-sky-50',
    text: 'text-sky-700',
    ring: 'ring-sky-200',
    border: 'hover:border-sky-400',
    icon: 'text-[#229ED9]',
  },
}

function ContactCard({ icon, label, value, href, cta, accent = 'emerald' }) {
  const c = accents[accent]
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col gap-4 rounded-3xl border border-ink-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 ${c.border}`}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${c.bg} ${c.icon} ring-1 ${c.ring}`}
      >
        <Icon name={icon} className="h-7 w-7" />
      </div>
      <div>
        <div className={`text-[11px] font-semibold uppercase tracking-widest ${c.text}`}>
          {label}
        </div>
        <div className="mt-1 font-display text-xl font-bold text-ink-900">
          {value}
        </div>
      </div>
      <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition group-hover:gap-2.5 group-hover:text-sun-700">
        {cta}
        <Icon name="arrow" className="h-4 w-4" />
      </div>
    </a>
  )
}
