# Карговичкоф — сайт доставки из Китая

Современный продающий сайт на React + Tailwind. Форма заявки сохраняется в Supabase, после отправки показывается уникальный номер. Вверху сайта — курс CNY (+3% маржи) к USD и RUB.

## Технологии
- React 18, React Router
- Tailwind CSS
- Supabase (PostgreSQL, RLS)
- Vite
- Netlify (SPA redirects)

## Быстрый старт
```bash
npm i
# укажите переменные окружения (см. ниже)
npm run dev
```
Откройте `http://localhost:5173`.

## Переменные окружения
Создайте файл `.env.local` в корне и добавьте:
```bash
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=ey...
```

## Настройка Supabase
1. Создайте проект в Supabase
2. Выполните SQL из `supabase.sql` (создаст таблицу `orders`, включит RLS и публичные политики insert/select для anon)
3. Скопируйте `Project URL` и `anon key` в `.env.local`

## Деплой на Netlify
- Подключите репозиторий
- Build command: `npm run build`
- Publish directory: `dist`
- Env vars: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
- `netlify.toml` уже настроен (SPA redirect)

## Страницы
- Главная `/` — оффер, преимущества, CTA «Сделать заказ»
- Сделать заказ `/order` — форма (тип товара, габариты, откуда, куда) → сохраняет в Supabase и показывает номер
- Оплата `/payment` — условия оплаты и реквизиты
- Условия `/terms` — правила работы и доставки
- Помощь `/help` — FAQ и контакты

## Курс валют
Компонент `RateTicker` использует публичный API `exchangerate.host` и показывает 1 CNY в USD и RUB с наценкой +3%. Обновляется каждые 30 минут.

## SEO
- `react-helmet-async` для `<title>` и `<meta>`
- Базовые мета-теги в `index.html`

## Лицензия
MIT
