import { routes, contacts } from '../data/content'
import Icon from './Icon'

export default function Routes() {
  return (
    <section id="routes" className="relative bg-sun-50/40 py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="section-eyebrow">Маршруты и цены</div>
            <h2 className="section-title text-balance">
              Фиксированные тарифы — без сюрпризов на дороге
            </h2>
            <p className="mt-4 text-ink-900/60">
              Указаны минимальные цены за одно место в общем автомобиле. Полный
              выкуп машины или групповая поездка рассчитываются индивидуально.
            </p>
          </div>
          <a
            href={contacts.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm"
          >
            Уточнить стоимость
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {routes.map((r) => (
            <article
              key={`${r.from}-${r.to}`}
              className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft transition hover:-translate-y-1 hover:border-sun-300"
            >
              {/* City photo */}
              <div className="relative h-40 overflow-hidden bg-sun-100">
                {r.image && (
                  <img
                    src={r.image}
                    alt={`${r.from} — ${r.to}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent" />
                {r.popular && (
                  <span className="absolute right-4 top-4 rounded-full bg-sun-400 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-900 shadow-sun">
                    Хит
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500">
                      Откуда
                    </div>
                    <div className="font-display text-xl font-bold text-ink-900">
                      {r.from}
                    </div>
                  </div>
                  <div className="flex flex-1 items-center px-2">
                    <div className="h-2 w-2 rounded-full bg-sun-500 shadow-[0_0_8px_rgba(245,163,0,0.6)]" />
                    <div className="h-px flex-1 bg-gradient-to-r from-sun-500/60 to-sun-500/0" />
                    <Icon name="arrow" className="-ml-2 h-4 w-4 text-sun-500" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500">
                      Куда
                    </div>
                    <div className="font-display text-xl font-bold text-ink-900">
                      {r.to}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-ink-900/60">
                  <span className="inline-flex items-center gap-1.5">
                    <Icon name="pin" className="h-4 w-4 text-sun-500" />
                    {r.distance}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Icon name="clock" className="h-4 w-4 text-sun-500" />
                    {r.duration}
                  </span>
                </div>

                <div className="mt-5 flex items-end justify-between border-t border-ink-100 pt-5">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-zinc-500">
                      Цена за место
                    </div>
                    <div className="font-display text-2xl font-extrabold text-ink-900">
                      {r.priceKz}
                      <span className="ml-2 text-base font-bold text-sun-600">
                        / {r.priceRu}
                      </span>
                    </div>
                  </div>
                  <a href="#booking" className="btn-primary text-sm">
                    Заказать
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
