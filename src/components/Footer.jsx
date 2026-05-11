import { brand, contacts } from '../data/content'
import Icon from './Icon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top" className="inline-flex items-center">
              <img
                src="/logo.png"
                alt={`${brand.name} — ${brand.tagline}`}
                className="h-16 w-auto sm:h-20"
                width="220"
                height="165"
              />
            </a>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-900/60">
              Междугороднее такси Уральск — Самара — Казань. Комфортные
              поездки 24/7 на автомобилях бизнес-класса. Фиксированная цена,
              опытные водители, помощь на границе.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={contacts.phoneRuLink}
                aria-label="Позвонить"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-sun-600 transition hover:border-sun-400 hover:bg-sun-50"
              >
                <Icon name="phone" className="h-5 w-5" />
              </a>
              <a
                href={contacts.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-[#25D366] transition hover:border-emerald-400 hover:bg-emerald-50"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
              </a>
              <a
                href={contacts.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-[#229ED9] transition hover:border-sky-400 hover:bg-sky-50"
              >
                <Icon name="telegram" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <div className="font-display text-sm font-bold uppercase tracking-widest text-ink-900">
              Разделы
            </div>
            <ul className="mt-4 space-y-2 text-sm text-ink-900/65">
              <li><a href="#advantages" className="hover:text-sun-700">Преимущества</a></li>
              <li><a href="#routes" className="hover:text-sun-700">Маршруты и цены</a></li>
              <li><a href="#fleet" className="hover:text-sun-700">Автопарк</a></li>
              <li><a href="#booking" className="hover:text-sun-700">Заказ поездки</a></li>
              <li><a href="#faq" className="hover:text-sun-700">Вопросы и ответы</a></li>
            </ul>
          </div>

          <div>
            <div className="font-display text-sm font-bold uppercase tracking-widest text-ink-900">
              Контакты
            </div>
            <ul className="mt-4 space-y-3 text-sm text-ink-900/65">
              <li>
                <a href={contacts.phoneRuLink} className="hover:text-sun-700">
                  {contacts.phoneRu}
                </a>
                <div className="text-xs text-ink-900/40">Россия · звонок</div>
              </li>
              <li>
                <a
                  href={contacts.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sun-700"
                >
                  {contacts.whatsapp}
                </a>
                <div className="text-xs text-ink-900/40">WhatsApp</div>
              </li>
              <li>
                <a
                  href={contacts.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sun-700"
                >
                  {contacts.telegram}
                </a>
                <div className="text-xs text-ink-900/40">Telegram</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-100 pt-6 text-xs text-ink-900/45 sm:flex-row">
          <div>© {year} {brand.name}. Все права защищены.</div>
          <div>Такси Уральск ↔ Самара ↔ Казань 24/7</div>
        </div>
      </div>
    </footer>
  )
}
