"use client";

import ContentWrapper from "../components/global/ContentWrapper";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ShoppingCart } from "lucide-react";

export default function Form() {
  const searchParams = useSearchParams();
  const [selectedSticker, setSelectedSticker] = useState({
    title: "",
    price: "",
  });
  const [form, setForm] = useState({ name: "", tel: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  useEffect(() => {
    const title = searchParams.get("title");
    const price = searchParams.get("price");
    setSelectedSticker({ title, price });
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isValid = (field) => {
    const value = form[field] || "";
    if (field === "name") return value.trim().length > 0;
    if (field === "tel") return /^\+?\d{10,}$/.test(value.replace(/\D/g, ""));
    if (field === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    return false;
  };

  const getErrorMessage = (field) => {
    const value = form[field] || "";
    if (!value.trim()) return "Некоректний ввід: обовʼязкове поле";
    if (field === "tel") return "Некоректний ввід: вкажіть правильний телефон";
    if (field === "email") return "Некоректний ввід: вкажіть правильний email";
    return "Некоректний ввід";
  };

  const shouldShowError = (field) => {
    return (isSubmitted || form[field]) && !isValid(field);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (isValid("name") && isValid("tel") && isValid("email")) {
      console.log(
        "Відправлено форму:",
        form,
        "Вибраний стікер:",
        selectedSticker
      );
      // Логіка відправки
    }
  };

  const renderInput = (field, label, type = "text", maxLength) => (
    <div className="mb-4 relative">
      <input
        id={field}
        name={field}
        type={type}
        value={form[field]}
        onChange={handleChange}
        onFocus={() => setFocusedField(field)}
        onBlur={() => setFocusedField("")}
        autoComplete={field}
        maxLength={maxLength}
        className={`block w-full appearance-none rounded-md border 
          bg-transparent px-3 py-2 focus:outline-none
          ${
            shouldShowError(field)
              ? "border-red-500"
              : isValid(field)
              ? "border-[#18B269]"
              : "border-gray-300"
          }
          focus:border-[#18B269]`}
      />
      <label
        htmlFor={field}
        className={`absolute left-3 px-1 bg-white transition-all
          ${
            form[field] || focusedField === field
              ? "top-[-10px] text-sm"
              : "top-2.5 text-base text-gray-400"
          }
          ${isValid(field) || focusedField === field ? "text-[#18B269]" : ""}`}
      >
        {label}
      </label>
      <p
        className={`text-red-500 text-sm mt-1 ${
          shouldShowError(field) ? "visible" : "invisible"
        }`}
      >
        {getErrorMessage(field)}
      </p>
    </div>
  );

  return (
    <ContentWrapper>
      <div className="bg-white rounded-md shadow-card shadow-md h-auto my-4 p-3 md:p-6">
        <h2 className="mb-4 text-lg font-semibold flex items-center gap-2">
          <ShoppingCart />
          Вибрано: {selectedSticker.title} — {selectedSticker.price} ₴
        </h2>
        <form onSubmit={handleSubmit} noValidate>
          {renderInput("name", "Імʼя")}
          {renderInput("tel", "Телефон", "tel", 17)}
          {renderInput("email", "Email", "email")}
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
