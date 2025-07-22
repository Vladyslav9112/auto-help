# Auto-Help Win (— Sticker & Ticket System)

Вебзастосунок для продажу цифрових стікерів та автоматичного генерування білетів з інтеграцією LiqPay, Telegram та Email-розсилкою.

## 🔧 Основна функціональність

- 🎟️ Покупка стікерів з автоматичною генерацією білетів
- 💳 Інтеграція з **LiqPay** для прийому платежів
- 📩 Відправлення білетів на **Email**
- 📲 Надсилання інформації про покупку в **Telegram**
- 🗃️ Збереження білетів та платежів у базі даних **MySQL**

---

## 🧩 Технології

- **Next.js** (App Router)
- **MySQL + mysql2**
- **LiqPay API**
- **Telegram Bot API**
- **nodemailer**
- **Tailwind CSS**
- **React hooks**: `useState`, `useEffect`, `useRef`

---

## ⚙️ Встановлення

1. **Клонувати репозиторій**

```bash
git https://github.com/Vladyslav9112/auto-help.git
cd auto-help
```

````

2. **Встановити залежності**

```bash
npm install
```

3. **Запустити локальний сервер**

```bash
npm run dev
```

---

## 📁 Структура

```
/api
  ├── liqpay-callback.js    # Обробка callback'ів від LiqPay
  ├── send-email.js         # Відправка білетів на email
  ├── send-telegram.js      # Відправка інформації у Telegram
  └── ticket.js             # Генерація білетів та ініціація платежу

/components
  ├── Header.js
  ├── Footer.js
  ├── Slider.js             # Вибір стікерів
  ├── Marquee.js            # Анонси
  └── InfoStickers.js       # Інформаційний блок

/pages
  └── orderForm.js          # Сторінка оформлення

/lib
  └── db.js                 # Підключення до MySQL

/public/icons               # Іконки соцмереж та платіжних систем
/public/*                   # Зображення стікерів, логотипів тощо
```



````

## 🔐 Змінні середовища

Створи файл `.env.local` в корені проєкту та додай туди наступне:

```env
# LiqPay
LIQPAY_PUBLIC_KEY=тут_твій_публічний_ключ
LIQPAY_PRIVATE_KEY=тут_твій_приватний_ключ

# Telegram Bot
TELEGRAM_BOT_TOKEN=тут_твій_бот_токен
TELEGRAM_CHAT_ID=тут_чат_ID

# Email (SMTP)
EMAIL_HOST=тут_твоя_пошта
EMAIL_PORT=тут_твій_порт
EMAIL_USER=тут_твоя_пошта
EMAIL_PASS=пароль

# MySQL
DB_HOST=localhost
DB_PORT=3306
DB_USER=користувач
DB_PASSWORD=пароль
DB_NAME=назва_бази

```

## 👤 Автор

**Влад Криклевець**  
[LinkedIn](https://www.linkedin.com/in/vlad-kryklyvets-6b9528175/)  
[Telegram](https://t.me/kkryklyvets)
