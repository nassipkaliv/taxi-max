import { useState } from 'react'
import { faq } from '../data/content'
import Icon from './Icon'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="section-eyebrow">Вопросы и ответы</div>
            <h2 className="section-title text-balance">
              Отвечаем на самые частые вопросы
            </h2>
            <p className="mt-4 text-ink-900/60">
              Не нашли ответ? Напишите в WhatsApp или Telegram — диспетчер
              ответит за минуту.
            </p>
          </div>

          <div className="space-y-3">
            {faq.map((item, i) => {
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
