import { useState } from 'react'
import { contacts, routes } from '../data/content'
import { buildWhatsAppLink } from '../utils/whatsapp'
import Icon from './Icon'

const routeOptions = [
  ...routes.map((r) => `${r.from} → ${r.to}`),
  'Другой маршрут',
]

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    route: routeOptions[0],
    passengers: '1',
    date: '',
    comment: '',
  })

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const link = buildWhatsAppLink(form)
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="booking" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-sun-200/40 blur-3xl" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft">
          <div className="grid md:grid-cols-[1fr_1.2fr]">
            {/* Left side: bright info */}
            <div className="relative hidden flex-col justify-between bg-gradient-to-br from-sun-300 via-sun-400 to-sun-500 p-10 text-ink-900 md:flex">
              <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur">
                  Заказ поездки
                </div>
                <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">
                  Оставьте заявку — перезвоним за 5 минут
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-900/80">
                  Форма отправляет данные сразу в WhatsApp. Также можете
                  написать в мессенджер — диспетчер на связи 24/7.
                </p>
              </div>

              <div className="relative mt-10 space-y-3">
                <a
                  href={contacts.phoneRuLink}
                  className="flex items-center gap-3 rounded-2xl bg-white/40 px-4 py-3 backdrop-blur transition hover:bg-white/60"
                >
                  <Icon name="phone" className="h-5 w-5" />
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-widest opacity-70">
                      Россия · звонок
                    </div>
                    <div className="font-display font-bold">
                      {contacts.phoneRu}
                    </div>
                  </div>
                </a>
                <a
                  href={contacts.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-white/40 px-4 py-3 backdrop-blur transition hover:bg-white/60"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-widest opacity-70">
                      WhatsApp
                    </div>
                    <div className="font-display font-bold">
                      {contacts.whatsapp}
                    </div>
                  </div>
                </a>
                <a
                  href={contacts.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-white/40 px-4 py-3 backdrop-blur transition hover:bg-white/60"
                >
                  <Icon name="telegram" className="h-5 w-5" />
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-widest opacity-70">
                      Telegram
                    </div>
                    <div className="font-display font-bold">
                      {contacts.telegram}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right side: form */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-10">
              <div className="mb-6 md:hidden">
                <div className="section-eyebrow">Заказ поездки</div>
                <h2 className="font-display text-2xl font-extrabold text-ink-900">
                  Оставьте заявку
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Имя"
                  value={form.name}
                  onChange={update('name')}
                  required
                  placeholder="Александр"
                />
                <Field
                  label="Телефон"
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  required
                  placeholder="+7 ___ ___-__-__"
                />
                <div className="sm:col-span-2">
                  <Label>Маршрут</Label>
                  <select
                    value={form.route}
                    onChange={update('route')}
                    className="input-base"
                  >
                    {routeOptions.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <Field
                  label="Пассажиров"
                  type="number"
                  min="1"
                  max="7"
                  value={form.passengers}
                  onChange={update('passengers')}
                />
                <Field
                  label="Дата поездки"
                  type="date"
                  value={form.date}
                  onChange={update('date')}
                />
                <div className="sm:col-span-2">
                  <Label>Комментарий</Label>
                  <textarea
                    value={form.comment}
                    onChange={update('comment')}
                    rows={3}
                    placeholder="Адрес подачи, нужно ли детское кресло, особые пожелания…"
                    className="input-base resize-none"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary mt-6 w-full text-base">
                <Icon name="whatsapp" className="h-5 w-5" />
                Отправить в WhatsApp
              </button>

              <p className="mt-3 text-center text-xs text-ink-900/50">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Label({ children }) {
  return (
    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-900/70">
      {children}
    </label>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <Label>{label}</Label>
      <input className="input-base" {...props} />
    </div>
  )
}
