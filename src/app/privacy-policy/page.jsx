"use client";

import ContentWrapper from "../components/global/ContentWrapper";

export default function PrivacyPolicyPage() {
  return (
    <ContentWrapper wrapperClassName="py-10">
      <div className="mx-auto bg-white rounded-lg shadow-md p-3 mb-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Політика конфіденційності
        </h1>

        <section className="space-y-4 text-gray-700 text-sm leading-6">
          <p className="text-center">
            Інтернет-магазин{" "}
            <a
              href="https://auto-help.com.ua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-blue-500 underline">
                https://auto-help.com.ua
              </span>
            </a>{" "}
            приділяє велику увагу захисту персональних даних своїх користувачів.
            Користувачі інтернет-магазину можуть переглядати сторінки сайту без
            надання персональних даних. Проте, для обробки замовлень нам
            потрібна Ваша контактна інформація. Ваші персональні дані ми не
            передаємо третім особам і захищаємо їх конфіденційність.
          </p>

          <h2 className="text-xl font-semibold mt-6">1. Загальні положення</h2>
          <div className="pl-4">
            <p>
              Власник персональних даних: ФОП Бєлошенко Едуард Петрович, ІПН:
              3372609093, юридична адреса: Надається за запитом відповідно до
              чинного Законодавства.
            </p>
            <p>
              Персональні дані збираються добровільно під час оформлення
              замовлення або реєстрації.
            </p>
            <p>
              Використання сайту означає згоду з цією політикою
              конфіденційності. У разі незгоди користувач має припинити
              використання сайту.
            </p>
          </div>

          <h2 className="text-xl font-semibold mt-6">
            2. Персональні дані, що збираються
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>Ім’я, прізвище</li>
            <li>Телефон</li>
            <li>Електронна адреса</li>
            <li>Адреса доставки</li>
          </ul>
          <p>
            Додаткову інформацію ми можемо отримати по телефону. Ми не збираємо
            IP-адреси користувачів, якщо інше не передбачено налаштуваннями
            сайту.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            3. Використання cookies та аналітики
          </h2>
          <p>
            Сайт може використовувати cookies для збереження налаштувань та
            аналітики трафіку (наприклад, Google Analytics). Користувач може
            відключити cookies у налаштуваннях браузера.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            4. Цілі обробки персональних даних
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>Оформлення та доставка замовлень</li>
            <li>Зв’язок з клієнтом</li>
            <li>Інформування про статус замовлення</li>
            <li>Надання підтримки</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">
            5. Умови передачі даних
          </h2>
          <p>
            Персональні дані можуть передаватися третім особам (кур'єрські
            служби, пошта, оператори зв'язку) виключно з метою виконання
            замовлення. Ми не передаємо дані з комерційною метою.
          </p>

          <h2 className="text-xl font-semibold mt-6">6. Права користувача</h2>
          <p>
            Відповідно до ст. 8 ЗУ «Про захист персональних даних», користувач
            має право:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Знати джерела збирання даних</li>
            <li>Доступ до своїх даних</li>
            <li>Вимагати виправлення або видалення</li>
            <li>Відкликати згоду на обробку</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">7. Відкликання згоди</h2>
          <p>
            Для відкликання згоди на обробку персональних даних, звертайтесь на
            email:{" "}
            <a
              href="mailto:prodaytachkyua@gmail.com"
              className="text-blue-500 underline"
            >
              prodaytachkyua@gmail.com
            </a>{" "}
            або за телефоном:{" "}
            <a href="tel:+380987779940" className="text-blue-500 underline">
              +380987779940
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold mt-6">
            8. Захист персональних даних
          </h2>
          <p>
            Ми впроваджуємо технічні та організаційні заходи безпеки для
            запобігання несанкціонованому доступу, знищенню, викраденню або
            поширенню персональної інформації.
          </p>

          <h2 className="text-xl font-semibold mt-6">9. Зміни політики</h2>
          <p>
            Ми залишаємо за собою право змінювати політику конфіденційності.
            Поточна версія завжди буде доступна на цій сторінці.
          </p>

          <h2 className="text-xl font-semibold mt-6">10. Контакти</h2>
          <p>З усіх питань звертайтесь:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Email:{" "}
              <a
                href="mailto:eduard.beloshenko@gmail.com"
                className="text-blue-500 underline"
              >
                eduard.beloshenko@gmail.com
              </a>
            </li>
            <li>
              Телефон:{" "}
              <a href="tel:+380935459155" className="text-blue-500 underline">
                +380935459155
              </a>
            </li>
          </ul>
        </section>
      </div>
    </ContentWrapper>
  );
}
