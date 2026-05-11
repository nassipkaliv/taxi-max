import { contacts } from '../data/content'

export function buildWhatsAppLink({ name, phone, route, passengers, date, comment }) {
  const lines = [
    'Здравствуйте! Хочу заказать поездку Taxi Max.',
    name && `Имя: ${name}`,
    phone && `Телефон: ${phone}`,
    route && `Маршрут: ${route}`,
    passengers && `Пассажиров: ${passengers}`,
    date && `Дата: ${date}`,
    comment && `Комментарий: ${comment}`,
  ].filter(Boolean)

  const text = encodeURIComponent(lines.join('\n'))
  return `${contacts.whatsappLink}?text=${text}`
}
