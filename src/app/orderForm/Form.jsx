"use client";
import ContentWrapper from "../components/global/ContentWrapper";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ShoppingBasket } from "lucide-react";

export default function Form() {
  const searchParams = useSearchParams();
  const [selectedSticker, setSelectedSticker] = useState({
    title: "",
    price: "",
  });
  const [ticketCount, setTicketCount] = useState(1);
  const [form, setForm] = useState({ name: "", tel: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const title = searchParams.get("title");
    const price = searchParams.get("price");
    const countParam = parseInt(searchParams.get("count") || "1", 10);
    setSelectedSticker({ title, price });
    setTicketCount(countParam > 0 ? countParam : 1);
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

  const isFormValid = isValid("name") && isValid("tel") && isValid("email");
  const shouldShowError = (field) => {
    return (isSubmitted || form[field]) && !isValid(field);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!isFormValid) return;

    setIsClosed(true);
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
        style={{ backgroundColor: "transparent" }}
        className={`block w-full rounded-md border px-3 py-2
          ${
            shouldShowError(field)
              ? "border-red-500"
              : isValid(field)
              ? "border-[#18B269]"
              : "border-gray-300"
          }
          focus:outline-none focus:border-[#18B269]`}
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
        Некоректний ввід
      </p>
    </div>
  );

  return (
    <ContentWrapper>
      <div className="bg-white rounded-md shadow-card shadow-md h-auto my-4 p-3 md:p-6">
        <h2 className="mb-4 text-lg font-semibold flex gap-2">
          <ShoppingBasket /> {selectedSticker.title} — {selectedSticker.price} ₴
        </h2>
        <div className="mt-4 text-center text-[#18B269] bg-[#f6fffa] p-6 rounded-xl border border-[#18B269] shadow-sm">
          <h3 className="text-xl font-bold mb-2">Продаж завершено 🎉</h3>
          <p className="mb-1">
            Очікуйте на результати — вони будуть вже завтра.
          </p>
          <p className="text-sm text-gray-600">
            Слідкуйте за новинами, попереду ще багато цікавих розіграшів!
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
}
