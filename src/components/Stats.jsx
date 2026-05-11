import { stats } from '../data/content'

export default function Stats() {
  return (
    <section className="pt-20 md:pt-28">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-100 bg-ink-100 shadow-soft md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center bg-white px-4 py-8 text-center"
            >
              <div className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-ink-900/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
