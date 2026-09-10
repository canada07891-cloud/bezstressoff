type EventItem = {
  time: string | null;
  title: string;
  price: string | null;
};

type EventDay = {
  date: string;
  items: EventItem[];
  specialistNote: string;
};

// Программа "Дом моей души" — расписание с 1 по 4 октября 2026.
// Транскрибировано с таблицы-анонса; в источнике колонка "Для специалистов"
// для 3 и 4 октября шла одной объединённой ячейкой на "игра + ужин" —
// показываем это отдельной строкой-примечанием, а не привязываем
// к конкретному пункту, чтобы не приписать цену не тому мероприятию.
const EVENT_DAYS: EventDay[] = [
  {
    date: "1 октября",
    items: [
      { time: null, title: "Персональные консультации", price: "100$ / 50$" },
    ],
    specialistNote: "Для специалистов: 50$",
  },
  {
    date: "2 октября",
    items: [
      { time: "9:00–12:00", title: "Персональные консультации", price: "100$ / 50$" },
      { time: "14:00", title: "Тренинг «4 шага на встречу к себе» (Human House)", price: "200 000 сум" },
      { time: "19:00", title: "Тренинг «4 шага на встречу к себе» (Cultura или Choyxona KRAFT)", price: "300 000 сум" },
    ],
    specialistNote: "Для специалистов: 50$ за консультацию, 200 000 сум и 300 000 сум за тренинги — соответственно времени",
  },
  {
    date: "3 октября",
    items: [
      { time: "9:00–12:00", title: "Персональные консультации", price: "от 50$" },
      { time: "13:00–18:00", title: "Авторская психологическая игра «Дом моей души. 30 комнат»", price: "100$ / 50$" },
      { time: "19:00", title: "Ужин национальной кухней с винным пейрингом, нетворкинг", price: "125$ / 100$" },
    ],
    specialistNote: "Для специалистов: консультация — 50$, игра + ужин — 900 000 сум",
  },
  {
    date: "4 октября",
    items: [
      { time: "11:00–16:00", title: "Авторская психологическая игра «Дом моей души. 30 комнат»", price: null },
      { time: "17:00 / 18:00", title: "Ужин национальной кухней с локальным винным пейрингом, нетворкинг", price: "125$ / 100$" },
    ],
    specialistNote: "Для специалистов (игра + ужин): 900 000 сум",
  },
];

export default function EventSchedule() {
  return (
    <div className="event-schedule">
      {EVENT_DAYS.map((day) => (
        <div className="event-day" key={day.date}>
          <div className="event-day__date">{day.date}</div>
          <ul className="event-day__list">
            {day.items.map((item) => (
              <li className="event-day__item" key={item.title}>
                {item.time && <span className="event-day__time">{item.time}</span>}
                <span className="event-day__title">{item.title}</span>
                {item.price && <span className="event-day__price">{item.price}</span>}
              </li>
            ))}
          </ul>
          <p className="event-day__note">{day.specialistNote}</p>
        </div>
      ))}
    </div>
  );
}
