import { steps } from '../data/content'

export default function HowItWorks() {
  return (
    <section className="relative bg-ink-50 py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-eyebrow mx-auto">Как это работает</div>
          <h2 className="section-title text-balance">
            Заказать поездку — 2 минуты
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-sun-400/40 to-transparent md:block" />
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative text-center md:text-left">
                <div className="relative z-10 mx-auto mb-5 flex h-24 w-24 items-center justify-center md:mx-0">
                  <div className="absolute inset-0 rounded-full bg-sun-200/60 blur-md" />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-sun-300 bg-white shadow-soft">
                    <span className="font-display text-2xl font-extrabold text-sun-600">
                      {s.n}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/65">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
