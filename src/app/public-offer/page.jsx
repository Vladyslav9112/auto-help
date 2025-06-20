"use client";

import ContentWrapper from "../components/global/ContentWrapper";

export default function PublicOfferPage() {
  return (
    <ContentWrapper wrapperClassName="py-10">
      <div className="mx-auto bg-white rounded-lg shadow-md p-3 mb-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Публічна оферта</h1>

        <section className="space-y-4 text-gray-700 text-sm leading-6 ">
          <h2 className="text-xl font-semibold mt-6">1. Загальні положення</h2>
          <div className="pl-4">
            <p>
              1.1. Ця оферта є офіційною пропозицією Продавця укласти Договір
              купівлі-продажу товарів дистанційним способом, відповідно до ст.
              11 Закону України «Про електронну комерцію», і розміщена на сайті{" "}
              <a
                href="https://auto-help.com.ua"
                className="text-blue-600 underline"
              >
                <span className="text-blue-600 underline">
                  https://auto-help.com.ua
                </span>
              </a>
              .
            </p>
            <p>
              1.2. Моментом акцепту оферти вважається факт оплати Покупцем
              Товару.
            </p>
          </div>
          <h2 className="text-xl font-semibold mt-6">
            2. Поняття і визначення
          </h2>

          <div className="pl-4">
            <p>
              <strong>Товар</strong> — будь-які товари, представлені в
              інтернет-магазині.
            </p>
            <p>
              <strong>Інтернет-магазин</strong> — ресурс за адресою{" "}
              <a
                href="https://auto-help.com.ua"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                <span className="text-blue-500 underline">
                  https://auto-help.com.ua
                </span>
              </a>
              .
            </p>

            <p>
              <strong>Продавець</strong> — ФОП Бєлошенко Едуард Петрович.
            </p>
            <p>
              <strong>Покупець</strong> — фізична особа, яка уклала договір з
              Продавцем.
            </p>
            <p>
              <strong>Замовлення</strong> — дія Покупця щодо придбання Товару
              через сайт.
            </p>
          </div>
          <h2 className="text-xl font-semibold mt-6">3. Предмет договору</h2>
          <div className="pl-4">
            <p>
              3.1. Продавець зобов’язується передати у власність Покупця Товар,
              а Покупець зобов’язується оплатити й прийняти його.
            </p>
            <p>
              3.2. Цей договір регулює правила замовлення, оплати, доставки та
              отримання товарів.
            </p>
          </div>

          <h2 className="text-xl font-semibold mt-6">
            4. Порядок оформлення Замовлення
          </h2>
          <div className="pl-4">
            <p>
              4.1. Покупець може оформити замовлення на будь-який товар, який є
              в наявності.
            </p>
            <p>
              4.2. Покупець вказує ПІБ, телефон, email, адресу доставки та інші
              необхідні дані.
            </p>
            <p>
              4.3. У разі передачі даних третіх осіб — відповідальність несе
              Покупець.
            </p>
            <p>4.4. Підтвердження — натискання кнопки «Замовити».</p>
            <p>
              4.5. Повернення або обмін товару можливий згідно з чинним
              законодавством.
            </p>
          </div>

          <h2 className="text-xl font-semibold mt-6">
            5. Ціна товару та оплата
          </h2>
          <div className="pl-4">
            <p>5.1. Ціна товару включає всі податки.</p>
            <p>
              5.2. Доступні способи оплати: безготівковий переказ, електронні
              платіжні системи (якщо доступні).
            </p>
            <p>
              5.3. Оплата здійснюється повністю (100%) до відправлення товару.
            </p>
            <p>5.4. Комісії та витрати за платіж покриває Покупець.</p>
            <p>
              5.5. Якщо замовлення не оплачене протягом 1 банківського дня —
              воно анулюється.
            </p>
          </div>

          <h2 className="text-xl font-semibold mt-6">6. Умови доставки</h2>
          <p className="pl-4">
            6.1. Зобов'язання щодо доставки виконуються з моменту надсилання
            товару на email, вказаний Покупцем.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            7. Права та обов'язки сторін
          </h2>
          <div className="pl-4">
            <p>
              <strong>Продавець має право:</strong>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>анулювати неоплачені замовлення;</li>
              <li>вимагати виконання умов договору.</li>
            </ul>
            <p>
              <strong>Продавець зобов’язаний:</strong>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>надати оплачений товар Покупцю.</li>
            </ul>
            <p>
              <strong>Покупець зобов’язаний:</strong>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>ознайомитися з умовами сайту та товарами;</li>
              <li>своєчасно оплатити та отримати товар.</li>
            </ul>
            <p>
              <strong>Покупець має право:</strong>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>вимагати виконання умов цього договору.</li>
            </ul>
          </div>
          <h2 className="text-xl font-semibold mt-6">8. Повернення коштів</h2>
          <div className="pl-4">
            <p>
              8.1. Покупець має право на повернення коштів у випадках,
              передбачених чинним законодавством України, зокрема Законом «Про
              захист прав споживачів».
            </p>
            <p>
              8.2. Повернення можливе у разі невідповідності товару опису,
              наявності істотних дефектів або неналежного надання послуги.
            </p>
            <p>
              8.3. Для ініціації повернення Покупець має звернутися до служби
              підтримки Продавця з підтвердженням покупки.
            </p>
            <p>
              8.4. Повернення коштів здійснюється тим самим способом, яким була
              здійснена оплата, протягом 14 календарних днів з моменту
              підтвердження запиту.
            </p>
            <p>
              8.5. Продавець має право відмовити у поверненні коштів у разі
              порушення умов договору Покупцем або відсутності підстав згідно з
              чинним законодавством.
            </p>
          </div>
          <h2 className="text-xl font-semibold mt-6">
            9. Відповідальність сторін
          </h2>
          <div className="pl-4">
            <p>
              9.1. Сторони відповідають за невиконання умов відповідно до
              законодавства.
            </p>
            <p>
              9.2. Продавець не несе відповідальності за зміну зовнішнього
              вигляду товару виробником, затримки доставки, технічні
              несправності або дії третіх осіб.
            </p>
            <p>
              9.3. Покупець самостійно відповідає за всі дії, здійснені з його
              доступу.
            </p>
            <p>9.4. У разі форс-мажору сторони звільняються від зобов’язань.</p>
            <p>9.5. Спори вирішуються шляхом переговорів.</p>
          </div>

          <h2 className="text-xl font-semibold mt-6">10. Інші умови</h2>
          <div className="pl-4">
            <p>
              10.1. Продавець може змінити договір у будь-який момент,
              публікуючи нову редакцію на сайті.
            </p>
            <p>
              10.2. Покупець гарантує достовірність інформації та дає згоду на
              обробку персональних даних згідно з Політикою конфіденційності.
            </p>
            <p>10.3. Оплата означає згоду з умовами договору (акцепт).</p>
            <p>10.4. Датою укладення договору вважається дата акцепту.</p>
            <p>10.5. Попередній перегляд сайту є безкоштовним.</p>
            <p>10.6. Інформація про покупця є конфіденційною.</p>
          </div>

          <h2 className="text-xl font-semibold mt-6">
            11. Термін дії договору
          </h2>
          <div className="pl-4">
            <p>
              11.1. Договір діє з моменту оплати до повного виконання
              зобов’язань.
            </p>
            <p>11.2. Може бути розірваний за згодою сторін.</p>
            <p>
              11.3. Розірвання можливе в односторонньому порядку відповідно до
              закону.
            </p>
          </div>
          <h2 className="text-xl font-semibold mb-4">
            Адреса та реквізити продавця
          </h2>
          <p>
            <strong>ФОП:</strong> Бєлошенко Едуард Петрович.
          </p>
          <p>
            <strong>Юридична адреса:</strong> Надається за запитом відповідно до
            чинного Законодавства
          </p>
          <p>
            <strong>ІПН:</strong> 3372609093
          </p>
          <p>
            <strong>Телефон:</strong>{" "}
            <a href="tel:+380935459155" className="text-blue-500 underline">
              +380935459155
            </a>
          </p>
        </section>
      </div>
    </ContentWrapper>
  );
}
