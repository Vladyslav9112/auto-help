"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const stickerData = [
  {
    alt: "1 Стікер",
    src: "/one-sticker.png",
    title: "1 Стікер",
    oldPrice: 100,
    newPrice: 99,
  },
  {
    alt: "2 Стікера",
    src: "/two-stickers.png",
    title: "2 Стікера",
    oldPrice: 200,
    newPrice: 199,
  },
  {
    alt: "5 + 1 Стікер",
    src: "/six-stickers.png",
    title: "5 + 1 Стікер",
    oldPrice: 600,
    newPrice: 499,
  },
  {
    alt: "10 + 2 Стікер",
    src: "/eleven-stickers.png",
    title: "10 + 2 Стікер",
    oldPrice: 1200,
    newPrice: 999,
  },
];

export default function Slider({ onBuy }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const btnRefs = useRef([]);

  // Реф для кнопки Придбати
  const buyBtnRef = useRef(null);

  // Анімаційний стан
  const animationFrameId = useRef(null);
  const backgroundPosition = useRef(0);

  // Функція анімації фону
  const animateBackground = () => {
    if (!buyBtnRef.current) return;

    backgroundPosition.current += 0.5; // швидкість руху (пікселів або відсотків)
    if (backgroundPosition.current > 400) backgroundPosition.current = 0;

    buyBtnRef.current.style.backgroundPosition = `${backgroundPosition.current}% 0%`;

    animationFrameId.current = requestAnimationFrame(animateBackground);
  };

  useEffect(() => {
    if (activeIndex !== null) {
      animationFrameId.current = requestAnimationFrame(animateBackground);
    } else {
      // Зупиняємо анімацію і скидаємо позицію
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      backgroundPosition.current = 0;
      if (buyBtnRef.current) {
        buyBtnRef.current.style.backgroundPosition = "0% 0%";
      }
    }
    // Очистка при демонтовані
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [activeIndex]);

  // Ріпл і вибір стікера
  const createRipple = (event, index) => {
    const button = btnRefs.current[index];
    if (!button) return;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      event.clientX - button.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      event.clientY - button.getBoundingClientRect().top - radius
    }px`;
    circle.className = "ripple";

    const existingRipple = button.getElementsByClassName("ripple")[0];
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(circle);
  };

  const handleClick = (event, index) => {
    createRipple(event, index);
    setActiveIndex(index);
  };

  return (
    <section className="flex justify-between my-[30px] py-1 flex-wrap gap-4 text-white">
      {stickerData.map(({ alt, src, title, oldPrice, newPrice }, index) => (
        <button
          key={index}
          ref={(el) => (btnRefs.current[index] = el)}
          onClick={(e) => handleClick(e, index)}
          type="button"
          className={`relative overflow-hidden w-[205px] bg-white rounded-lg py-1 shadow-card transform transition-transform duration-200 cursor-pointer ${
            activeIndex === index ? "scale-[1.15]" : ""
          }`}
        >
          <div id="card-image">
            <Image
              alt={alt}
              src={src}
              width={200}
              height={200}
              className="border-b border-[rgba(0,0,0,0.23)] mx-auto"
            />
          </div>
          <div id="card-info" className="text-left px-4 py-1">
            <p className="text-base mb-4">{title}</p>
            <p className="text-base line-through text-gray-500">{oldPrice} ₴</p>
            <p className="text-base text-[#E53935]">{newPrice} ₴</p>
          </div>
        </button>
      ))}
      <button
        ref={buyBtnRef}
        disabled={activeIndex === null}
        onClick={() => {
          if (activeIndex !== null && onBuy) onBuy(activeIndex);
        }}
        className={`w-full mt-8 h-[48px] flex items-center justify-center rounded-lg text-white transition-colors duration-300 ${
          activeIndex === null ? "bg-black" : "bg-glowing cursor-pointer"
        }`}
      >
        Придбати
      </button>
    </section>
  );
}
