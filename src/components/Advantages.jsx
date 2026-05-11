import { advantages } from '../data/content'
import Icon from './Icon'

export default function Advantages() {
  return (
    <section id="advantages" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-eyebrow mx-auto">Почему выбирают нас</div>
          <h2 className="section-title text-balance">
            Сервис, который ценит ваше время и комфорт
          </h2>
          <p className="mt-4 text-ink-900/60">
            Перевозим между Уральском, Самарой и Казанью более 8 лет. Каждая
            поездка — от первого звонка до прибытия — построена так, чтобы вы
            доехали быстро, спокойно и точно к назначенному часу.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 transition hover:-translate-y-1 hover:border-sun-300 hover:shadow-soft"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-sun-100 opacity-0 blur-2xl transition group-hover:opacity-100" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sun-300 to-sun-500 text-ink-900 shadow-sun">
                <Icon name={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 font-display text-xl font-bold text-ink-900">
                {item.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-900/65">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
