import { fleet } from '../data/content'
import Icon from './Icon'

export default function Fleet() {
  return (
    <section id="fleet" className="relative py-20 md:py-28">
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-eyebrow mx-auto">Автопарк</div>
          <h2 className="section-title text-balance">
            Автомобили бизнес- и премиум-класса
          </h2>
          <p className="mt-4 text-ink-900/60">
            Только проверенные машины с регулярным ТО, кондиционером и
            климат-контролем. В каждой — Wi-Fi, бутылка воды и тёплый плед.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((car) => (
            <article
              key={car.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition hover:-translate-y-1 hover:border-sun-300"
            >
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-sun-50 to-sun-100">
                {car.image && (
                  <img
                    src={car.image}
                    alt={`${car.name} — ${car.class}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement
                        .querySelector('[data-fallback]')
                        ?.style.removeProperty('display')
                    }}
                  />
                )}
                <div
                  data-fallback
                  className="absolute inset-0 flex items-end justify-center pb-3"
                  style={{ display: car.image ? 'none' : undefined }}
                >
                  <CarSilhouette />
                </div>
                <div className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sun-700 shadow-sm backdrop-blur">
                  {car.class}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-ink-900">
                  {car.name}
                </h3>
                <p className="mt-1 text-xs text-ink-900/50">{car.seats}</p>

                <ul className="mt-4 flex-1 space-y-1.5 text-sm">
                  {car.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-ink-900/70"
                    >
                      <Icon name="check" className="h-4 w-4 text-sun-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-ink-100 pt-4">
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500">
                    {car.unit}
                  </div>
                  <div className="font-display text-xl font-extrabold text-ink-900">
                    {car.priceKz}
                  </div>
                  <div className="text-sm font-semibold text-sun-700">
                    {car.priceRu}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CarSilhouette() {
  return (
    <svg
      viewBox="0 0 140 60"
      className="h-20 w-32 text-sun-500/80"
      fill="currentColor"
    >
      <path d="M10 42c0-2 1-4 3-5l8-2 8-12c2-3 5-5 9-5h44c4 0 7 2 9 5l8 12 8 2c2 1 3 3 3 5v6c0 2-2 4-4 4h-6a8 8 0 01-16 0H42a8 8 0 01-16 0h-6c-2 0-4-2-4-4v-6z" />
      <circle cx="34" cy="48" r="5" fill="#ffffff" />
      <circle cx="34" cy="48" r="2.5" fill="currentColor" />
      <circle cx="106" cy="48" r="5" fill="#ffffff" />
      <circle cx="106" cy="48" r="2.5" fill="currentColor" />
    </svg>
  )
}
