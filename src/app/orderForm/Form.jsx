"use client";

import ContentWrapper from "../components/global/ContentWrapper";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ShoppingBasket } from "lucide-react";
import Image from "next/image";

export default function Form() {
  const searchParams = useSearchParams();
  const [selectedSticker, setSelectedSticker] = useState({
    title: "",
    price: "",
  });
  const [ticketCount, setTicketCount] = useState(1);
  const [form, setForm] = useState({
    name: "",
    tel: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [ticketsList, setTicketsList] = useState([]);

  useEffect(() => {
    const title = searchParams.get("title");
    const price = searchParams.get("price");
    const countParam = parseInt(searchParams.get("count") || "1", 10);

    setSelectedSticker({ title, price });
    setTicketCount(countParam > 0 ? countParam : 1);
  }, [searchParams]);

  // Синхронізація стану форми після автозаповнення
  useEffect(() => {
    const syncForm = () => {
      setForm((prev) => ({
        ...prev,
        name: document.getElementById("name")?.value || prev.name,
        tel: document.getElementById("tel")?.value || prev.tel,
        email: document.getElementById("email")?.value || prev.email,
      }));
    };

    const timer = setTimeout(syncForm, 500);
    return () => clearTimeout(timer);
  }, []);

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
    if (!form[field]?.trim()) return "Некоректний ввід: обовʼязкове поле";
    if (field === "tel") return "Некоректний ввід: вкажіть правильний телефон";
    if (field === "email") return "Некоректний ввід: вкажіть правильний email";
    return "Некоректний ввід";
  };

  const shouldShowError = (field) => {
    return (isSubmitted || form[field]) && !isValid(field);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (isValid("name") && isValid("tel") && isValid("email")) {
      const res = await fetch("/api/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ count: ticketCount }),
      });
      const data = await res.json();
      console.log("Тікети від API:", data);

      if (data.tickets?.length > 0) {
        setTicketsList(data.tickets);

        await fetch("/api/send-telegram", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            tel: form.tel,
            email: form.email,
            tickets: data.tickets,
          }),
        });

        await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: form.email,
            tickets: data.tickets,
          }),
        });
      }

      setForm({ name: "", tel: "", email: "" });
      setIsSubmitted(false);
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
        onInput={handleChange}
        onFocus={() => setFocusedField(field)}
        onBlur={() => setFocusedField("")}
        autoComplete={field}
        maxLength={maxLength}
        style={{ backgroundColor: "transparent" }}
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
        <h2 className="mb-4 text-lg font-semibold flex gap-2">
          <ShoppingBasket />: {selectedSticker.title} — {selectedSticker.price}{" "}
          ₴
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

        {ticketsList.length > 0 && (
          <div className="mt-6 p-4 border rounded-xl border-[#18B269] bg-[#f6fffa] text-[#18B269] flex flex-col items-center shadow-sm">
            <Image
              src="/ticket.png"
              width={180}
              height={180}
              alt="ticket"
              className="mb-3"
            />
            <p className="text-base font-medium mb-1">Ваші білети:</p>
            <p className="text-lg font-bold tracking-wide">
              {ticketsList.join(", ")}
            </p>
          </div>
        )}
      </div>
    </ContentWrapper>
  );
}
