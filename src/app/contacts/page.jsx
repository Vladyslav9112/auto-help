"use client";

import ContentWrapper from "../components/global/ContentWrapper";

export default function ContactsPage() {
  return (
    <ContentWrapper wrapperClassName="py-10">
      <div className="mx-auto bg-white rounded-lg shadow-md p-3 text-gray-700 text-sm leading-6 mb-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Контактна інформація
        </h1>

        <p>
          Якщо у вас виникли запитання щодо нашої продукції або умов замовлення
          — будь ласка, звертайтесь:
        </p>

        <div className="mt-4 space-y-2">
          <p>
            <strong>Назва компанії:</strong> ФОП Уберт Євгеній Олександрович
          </p>
          <p>
            <strong>ІПН / ЄДРПОУ:</strong> 3442005078
          </p>
          <p>
            <strong>Юридична адреса:</strong> Надається за запитом відповідно до
            чинного Законодавства
          </p>
          <p>
            <strong>Сайт:</strong>{" "}
            <a
              href="https://prodaytachky.com.ua"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              https://prodaytachky.com.ua
            </a>
          </p>
          <p>
            <strong>Email підтримки:</strong>{" "}
            <a
              href="mailto:prodaytachkyua@gmail.com"
              className="text-blue-500 underline"
            >
              prodaytachkyua@gmail.com
            </a>
          </p>
          <p>
            <strong>Телефон підтримки:</strong>{" "}
            <a href="tel:+380987779940" className="text-blue-500 underline">
              +380987779940
            </a>
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
}
