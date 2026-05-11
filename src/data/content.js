// Все тексты, цены и контакты в одном месте — меняй здесь.

export const brand = {
  name: 'Taxi Max',
  tagline: 'Уральск ↔ Самара ↔ Казань',
  description: 'Междугороднее такси бизнес-класса 24/7',
}

export const contacts = {
  whatsapp: '+7 702 876-25-84',
  whatsappRaw: '77028762584',
  whatsappLink: 'https://wa.me/77028762584',
  telegram: '+7 771 609-33-20',
  telegramRaw: '77716093320',
  telegramLink: 'https://t.me/+77716093320',
}

export const stats = [
  { value: '24/7', label: 'Поездки круглосуточно' },
  { value: '360 км', label: 'Уральск — Самара' },
  { value: '15+', label: 'Лет опыта водителей' },
  { value: '4.9', label: 'Оценка пассажиров' },
]

export const advantages = [
  {
    icon: 'shield',
    title: 'Безопасность',
    text: 'Опытные водители со стажем 15+ лет. Каждый автомобиль застрахован, в салоне — аптечка и детское кресло.',
  },
  {
    icon: 'clock',
    title: 'Пунктуальность',
    text: 'Приезжаем точно к назначенному времени. Отслеживаем маршрут и пробки, корректируем выезд заранее.',
  },
  {
    icon: 'wallet',
    title: 'Фиксированная цена',
    text: 'Стоимость согласуется до поездки и не меняется. Оплата наличными (₸/₽), переводом на карту или Kaspi.',
  },
  {
    icon: 'car',
    title: 'Бизнес-класс',
    text: 'Toyota Camry, Highlander, Lexus ES, минивэны Peugeot. Чистый салон, климат-контроль, Wi-Fi.',
  },
  {
    icon: 'border',
    title: 'Помощь на границе',
    text: 'Водители знают все нюансы перехода Сырым / Маштаков. Помогаем с документами, экономим часы ожидания.',
  },
  {
    icon: 'support',
    title: 'Поддержка 24/7',
    text: 'Диспетчер на связи в любое время суток. Звоните, пишите в WhatsApp или Telegram — ответим за минуту.',
  },
]

export const routes = [
  {
    from: 'Уральск',
    to: 'Самара',
    distance: '360 км',
    duration: '5–7 ч',
    priceKz: '15 000 ₸',
    priceRu: '3 000 ₽',
    popular: true,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Volga-river-samara-001-june-2016-russia.jpg/1280px-Volga-river-samara-001-june-2016-russia.jpg',
  },
  {
    from: 'Самара',
    to: 'Уральск',
    distance: '360 км',
    duration: '5–7 ч',
    priceKz: '15 000 ₸',
    priceRu: '3 000 ₽',
    popular: true,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Kazakhstan_Uralsk_railway_station.jpg/1280px-Kazakhstan_Uralsk_railway_station.jpg',
  },
  {
    from: 'Уральск',
    to: 'Аэропорт Курумоч',
    distance: '320 км',
    duration: '5–6 ч',
    priceKz: '20 000 ₸',
    priceRu: '4 000 ₽',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/01/Kurumoch_International_Airport_1.png',
  },
  {
    from: 'Уральск',
    to: 'Казань',
    distance: '830 км',
    duration: '11–13 ч',
    priceKz: '30 000 ₸',
    priceRu: '6 000 ₽',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/%D0%94%D0%B2%D0%BE%D1%80%D0%B5%D1%86_%D0%B7%D0%B5%D0%BC%D0%BB%D0%B5%D0%B4%D0%B5%D0%BB%D1%8C%D1%86%D0%B5%D0%B22.jpg/1280px-%D0%94%D0%B2%D0%BE%D1%80%D0%B5%D1%86_%D0%B7%D0%B5%D0%BC%D0%BB%D0%B5%D0%B4%D0%B5%D0%BB%D1%8C%D1%86%D0%B5%D0%B22.jpg',
  },
]

export const fleet = [
  {
    name: 'Toyota Camry',
    class: 'Бизнес',
    seats: '1–3 пассажира',
    features: ['Климат-контроль', 'Кожаный салон', 'Wi-Fi'],
    priceKz: '15 000 ₸',
    priceRu: '3 000 ₽',
    unit: 'за место',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg/1280px-2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg',
  },
  {
    name: 'Toyota Highlander',
    class: 'Премиум SUV',
    seats: '1–4 пассажира',
    features: ['Полный привод', 'Большой багажник', 'Wi-Fi'],
    priceKz: '15 000 ₸',
    priceRu: '3 000 ₽',
    unit: 'за место',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Toyota_Highlander_Hybrid_%28XU70%29_1X7A6356.jpg/1280px-Toyota_Highlander_Hybrid_%28XU70%29_1X7A6356.jpg',
  },
  {
    name: 'Peugeot Traveller',
    class: 'Минивэн',
    seats: '1–7 пассажиров',
    features: ['Просторный салон', 'Багажник для всех', 'Wi-Fi'],
    priceKz: '15 000 ₸',
    priceRu: '3 000 ₽',
    unit: 'за место',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Peugeot_Traveller_IMG_2360.jpg/1280px-Peugeot_Traveller_IMG_2360.jpg',
  },
]

export const steps = [
  {
    n: '01',
    title: 'Оставьте заявку',
    text: 'Позвоните, напишите в WhatsApp или заполните форму на сайте. Укажите маршрут, дату и количество пассажиров.',
  },
  {
    n: '02',
    title: 'Согласуем поездку',
    text: 'Диспетчер свяжется в течение 5 минут, подтвердит цену, время выезда и выберет подходящий автомобиль.',
  },
  {
    n: '03',
    title: 'Водитель забирает вас',
    text: 'Подаём машину к подъезду в назначенное время. Помогаем с багажом и оформлением на границе.',
  },
  {
    n: '04',
    title: 'Комфортная поездка',
    text: 'Едем по короткому маршруту с остановками на отдых. Доставляем точно по адресу.',
  },
]

export const faq = [
  {
    q: 'Сколько стоит такси Уральск — Самара?',
    a: 'Фиксированная цена за место — 15 000 ₸ или 3 000 ₽. До аэропорта Курумоч — 20 000 ₸ / 4 000 ₽. До Казани — 30 000 ₸ / 6 000 ₽. Полный выкуп автомобиля рассчитывается индивидуально.',
  },
  {
    q: 'Сколько времени занимает поездка?',
    a: 'Уральск — Самара: около 360 км, 5–7 часов в пути с учётом границы. До Казани — 830 км, 11–13 часов. Время может меняться от загруженности перехода Сырым/Маштаков.',
  },
  {
    q: 'Работаете ли вы круглосуточно?',
    a: 'Да, диспетчер и водители работают 24/7, включая выходные и праздники. Принимаем заказы в WhatsApp и Telegram.',
  },
  {
    q: 'Как оплатить поездку?',
    a: 'Принимаем наличные в тенге и рублях, безналичный перевод на карту, Kaspi, WhatsApp Pay. Оплата производится после посадки в автомобиль либо по согласованию.',
  },
  {
    q: 'Можно ли перевозить детей и животных?',
    a: 'Да. По запросу установим детское автокресло (бустер или полноценное кресло). Перевозим домашних животных в переноске, предупредите при заказе.',
  },
  {
    q: 'Что брать с собой на границу?',
    a: 'Заграничный паспорт (РФ/РК), для детей — свидетельство о рождении и/или загранпаспорт. Если ребёнок едет без обоих родителей — нотариальное согласие. Водитель подскажет детали при бронировании.',
  },
]
