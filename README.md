# bezstressoff.ru

Сайт-визитка психологического пространства Марины Сидоровой. Next.js (App Router, TypeScript), без CMS — весь контент прямо в коде страниц. Собирается в статику (`output: "export"`) и деплоится на GitHub Pages через Actions.

## Разработка

```bash
npm install
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # статическая сборка в out/
npm run start   # только для локального прод-запуска БЕЗ output:"export" — см. ниже
npm run lint    # проверка ESLint
```

## Деплой на GitHub Pages

Пуш в `master` сам запускает `.github/workflows/deploy.yml`: собирает сайт и публикует `out/` на GitHub Pages. Ничего руками собирать не нужно.

**Разово нужно включить Pages в настройках репозитория:** Settings → Pages → Source → **GitHub Actions**.

Сайт живёт на `/bezstressoff/` (не в корне домена) — GitHub Pages отдаёт project-репозитории по пути `https://<username>.github.io/<repo>/`. Префикс пути (`BASE_PATH`) считается из `NEXT_PUBLIC_GITHUB_PAGES=true`, который выставляет сам workflow — руками его задавать не нужно.

Если позже подключите свой домен (bezstressoff.ru): добавьте `public/CNAME` с доменом внутри, настройте DNS на GitHub Pages и уберите `NEXT_PUBLIC_GITHUB_PAGES`/`BASE_PATH` — тогда сайт будет собираться под корень, как раньше.

## Форма записи → Formspree

Форма (модалка + блок «Контакты» на главной) отправляет `POST` на адрес из `NEXT_PUBLIC_FORMSPREE_ENDPOINT` — GitHub Pages статический, там не может быть своего PHP/бэкенда, поэтому вместо `/form.php` используется [Formspree](https://formspree.io) (бесплатный сторонний сервис для статичных форм — заявки будут приходить на почту).

Чтобы форма заработала:
1. Зарегистрироваться на formspree.io, создать форму, скопировать её endpoint (вида `https://formspree.io/f/xxxxxxxx`).
2. В репозитории: Settings → Secrets and variables → Actions → **Variables** → New repository variable → имя `FORMSPREE_ENDPOINT`, значение — тот endpoint.
3. Запустить workflow заново (пуш любого коммита или Actions → Deploy to GitHub Pages → Run workflow).

Пока переменная не задана, форма честно показывает сообщение «форма временно не настроена» и просит позвонить/написать напрямую — не падает молча.

## Структура

- `src/app/` — страницы (App Router): `/`, `/services`, `/concept`, `/info`
- `src/components/` — переиспользуемые компоненты (шапка, футер, модалка записи, форма, карточки)
- `src/lib/site.ts` — `BASE_PATH`/`SITE_URL` для GitHub Pages, `useFormSubmit.ts` — логика отправки формы
- `src/app/globals.css` — вся дизайн-система (цвета, типографика, компоненты) одним файлом
- `public/assets/` — фотографии и фоновая картинка

## Instagram-посты

Раздел «Полезная информация» → «Статьи» показывает несколько постов из instagram.com/psybreakfast через официальный embed Meta (`src/components/InstagramFeed.tsx`). Чтобы добавить новый пост: скопировать его ссылку в массив `POSTS` в этом файле.

## Дизайн

Тёплая editorial-палитра (терракота + шалфей на кремовом фоне), шрифты Lora (заголовки) + Inter (текст) через `next/font/google`.
