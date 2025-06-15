import { useState } from "react";
import ContentWrapper from "../global/ContentWrapper";

export default function InfoForm() {
  const [form, setForm] = useState({ name: "", tel: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Форма відправлена");
  };

  const isActive = (field) => form[field] && form[field].length > 0;

  return (
    <ContentWrapper>
      <div className="bg-white rounded-md p-6 shadow-card shadow-md h-[360px] mb-1">
        <form onSubmit={handleSubmit} noValidate>
          {/* Імʼя */}
          <div className="mb-4 relative">
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              placeholder=" "
              className="peer block w-full appearance-none rounded-md border border-gray-300 bg-transparent px-3 py-2 focus:outline-none focus:border-blue-600"
            />
            <label
              htmlFor="name"
              className={`absolute left-3 px-1 bg-white text-gray-500 transition-all
                peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-gray-500
                ${isActive("name") ? "top-[-10px] text-sm text-gray-500" : ""}
              `}
            >
              Імʼя
            </label>
          </div>

          {/* Телефон */}
          <div className="mb-4 relative">
            <input
              id="tel"
              name="tel"
              type="tel"
              value={form.tel}
              onChange={handleChange}
              autoComplete="tel"
              placeholder=" "
              maxLength={17}
              className="peer block w-full appearance-none rounded-md border border-gray-300 bg-transparent px-3 py-2 focus:outline-none focus:border-blue-600"
            />
            <label
              htmlFor="tel"
              className={`absolute left-3 px-1 bg-white transition-all
                peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:top-[-10px] peer-focus:text-sm text-gray-500
                ${isActive("tel") ? "top-[-10px] text-sm text-gray-500" : ""}
              `}
            >
              Телефон
            </label>
          </div>

          {/* Email */}
          <div className="mb-6 relative">
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              placeholder=" "
              className="peer block w-full appearance-none rounded-md border border-gray-300 bg-transparent px-3 py-2 focus:outline-none focus:border-blue-600"
            />
            <label
              htmlFor="email"
              className={`absolute left-3 px-1 bg-white transition-all
                peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:top-[-10px] peer-focus:text-sm text-gray-500
                ${isActive("email") ? "top-[-10px] text-sm text-gray-500" : ""}
              `}
            >
              Email
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md text-white bg-black"
          >
            Придбати
          </button>
        </form>
      </div>
    </ContentWrapper>
  );
}
