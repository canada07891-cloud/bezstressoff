import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <h3>bezstressoff.ru</h3>
            <p>Мы дарим крылья Вашей мечте</p>
          </div>
          <div className="footer__links">
            <h4>Навигация</h4>
            <ul>
              <li><Link href="/">Главная</Link></li>
              <li><Link href="/services">Услуги</Link></li>
              <li><Link href="/concept">Концепция</Link></li>
              <li><Link href="/info">Полезная информация</Link></li>
              <li><Link href="/#contacts">Контакты</Link></li>
            </ul>
          </div>
          <div className="footer__contact">
            <h4>Контакты</h4>
            <p>Москва, ул. Кравченко, д. 11</p>
            <p><a href="tel:+79773768610">+7 (977) 376-86-10</a></p>
            <p><a href="mailto:bezstressoff@gmail.com">bezstressoff@gmail.com</a></p>
            <a
              href="https://www.instagram.com/psybreakfast"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              @psybreakfast
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2026 Психологическое пространство bezstressoff.ru. Все права защищены.</p>
          <p><Link href="/">bezstressoff.ru</Link></p>
        </div>
      </div>
    </footer>
  );
}
