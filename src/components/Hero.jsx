import { contacts } from '../data/content'
import Icon from './Icon'

const HERO_IMG =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Toyota_Camry_%28XV70%29_IMG_9081.jpg/1280px-Toyota_Camry_%28XV70%29_IMG_9081.jpg'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-sun-radial" />
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-sun-300/30 blur-3xl" />
        <div className="absolute -left-24 top-1/2 h-72 w-72 rounded-full bg-sun-200/40 blur-3xl" />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-up">
            <div className="section-eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sun-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sun-500" />
              </span>
              <span className="sm:hidden">Работаем 24/7 — заказы открыты</span>
              <span className="hidden sm:inline">
                Работаем 24/7 — заказы принимаются прямо сейчас
              </span>
            </div>

            <h1 className="font-display font-extrabold leading-[1.05] tracking-tight text-ink-900">
              <span className="block text-[2.75rem] sm:inline sm:text-5xl md:text-6xl lg:text-7xl">
                Такси
              </span>{' '}
              <span className="mt-2 block whitespace-nowrap text-[1.375rem] sm:mt-0 sm:inline sm:whitespace-normal sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-sun-500 via-sun-400 to-sun-600 bg-clip-text text-transparent">
                  Уральск
                </span>{' '}
                <span className="text-sun-500">↔</span>{' '}
                <span className="bg-gradient-to-r from-sun-500 via-sun-400 to-sun-600 bg-clip-text text-transparent">
                  Самара
                </span>{' '}
                <span className="text-sun-500">↔</span>{' '}
                <span className="bg-gradient-to-r from-sun-500 via-sun-400 to-sun-600 bg-clip-text text-transparent">
                  Казань
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-balance text-lg text-ink-900/70 md:text-xl">
              Комфортные междугородние поездки бизнес-класса. Toyota Camry,
              Highlander, минивэны. Фиксированная цена, опытные водители,
              круглосуточный диспетчер.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#booking" className="btn-primary">
                Заказать поездку
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

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-ink-100 pt-6">
              <a
                href={contacts.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-sun-200 bg-sun-50 text-sun-600 transition group-hover:bg-sun-100">
                  <Icon name="whatsapp" className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] uppercase tracking-widest text-zinc-500">
                    WhatsApp
                  </div>
                  <div className="font-display text-base font-bold text-ink-900">
                    {contacts.whatsapp}
                  </div>
                </div>
              </a>
              <a
                href={contacts.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-sun-200 bg-sun-50 text-sun-600 transition group-hover:bg-sun-100">
                  <Icon name="telegram" className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] uppercase tracking-widest text-zinc-500">
                    Telegram
                  </div>
                  <div className="font-display text-base font-bold text-ink-900">
                    {contacts.telegram}
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: hero image + floating price card */}
          <div className="relative animate-fade-up">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sun-300/40 to-sun-500/20 blur-2xl" />
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white bg-sun-100 shadow-soft sm:aspect-[5/4] sm:rounded-[2rem]">
                <img
                  src={HERO_IMG}
                  alt="Премиальный автомобиль такси Уральск — Самара"
                  className="h-full w-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink-900/40 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-ink-900 shadow-soft backdrop-blur sm:left-6 sm:top-6 sm:px-3 sm:py-1.5 sm:text-xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Доступен сейчас
                </div>
              </div>

              {/* Floating price card */}
              <div className="relative z-10 -mt-6 mx-3 w-auto rounded-2xl border border-ink-100 bg-white p-4 shadow-soft sm:absolute sm:-bottom-8 sm:-left-4 sm:mx-0 sm:mt-0 sm:w-72 sm:p-5">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-sun-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sun-700">
                    Хит маршрут
                  </span>
                  <div className="flex items-center gap-0.5 text-sun-500">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="star" className="h-3.5 w-3.5" />
                    ))}
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500">
                      Откуда
                    </div>
                    <div className="font-display text-base font-bold text-ink-900">
                      Уральск
                    </div>
                  </div>
                  <Icon name="arrow" className="h-4 w-4 text-sun-500" />
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500">
                      Куда
                    </div>
                    <div className="font-display text-base font-bold text-ink-900">
                      Самара
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-end justify-between border-t border-ink-100 pt-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500">
                      От
                    </div>
                    <div className="font-display text-2xl font-extrabold text-ink-900">
                      15 000 ₸
                    </div>
                    <div className="text-xs font-bold text-sun-700">3 000 ₽</div>
                  </div>
                  <a href="#booking" className="btn-primary !px-3 !py-1.5 text-xs">
                    Заказать
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
