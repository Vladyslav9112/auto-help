"use client";

import ContentWrapper from "../components/global/ContentWrapper";

export default function DeliveryPage() {
  return (
    <ContentWrapper wrapperClassName="py-10">
      <div className="mx-auto bg-white rounded-lg shadow-md p-3 mb-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Доставка і оплата
        </h1>

        <section className="space-y-4 text-gray-700 text-sm leading-6">
          <h2 className="text-xl font-semibold mt-6">Оплата</h2>
          <p>Ми пропонуємо зручні та безпечні способи оплати:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Оплата банківськими картками VISA / Mastercard безпосередньо на
              сайті під час оформлення замовлення
            </li>
            <li>Оплата через цифрові гаманці: Google Pay, Apple Pay</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">Доставка</h2>
          <p>
            Доставка здійснюється на електронну пошту, вказану вами під час
            оформлення замовлення.
          </p>

          <h2 className="text-xl font-semibold mt-6">Термін доставки</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Орієнтовний час очікування — від 1 до 3 робочих днів</li>
            <li>
              У разі підвищеного навантаження на менеджера — до 5 робочих днів
            </li>
          </ul>
        </section>
      </div>
    </ContentWrapper>
  );
}
