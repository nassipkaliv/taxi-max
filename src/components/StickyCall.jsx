import { contacts } from '../data/content'
import Icon from './Icon'

export default function StickyCall() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <a
        href={contacts.telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в Telegram"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-[0_10px_30px_-5px_rgba(34,158,217,0.5)] transition hover:scale-110"
      >
        <Icon name="telegram" className="h-6 w-6" />
      </a>
      <a
        href={contacts.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] transition hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <Icon name="whatsapp" className="relative h-7 w-7" />
      </a>
    </div>
  )
}
