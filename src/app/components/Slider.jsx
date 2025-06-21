"use client";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../styles/slider.css";

const stickerData = [
  {
    alt: "1 Стікер",
    src: "/1.png",
    title: "1 Стікер",
    oldPrice: 100,
    newPrice: 99,
    count: 1,
  },
  {
    alt: "2 Стікери",
    src: "/2.png",
    title: "2 Стікери",
    oldPrice: 200,
    newPrice: 199,
    count: 2,
  },
  {
    alt: "6 Стікерів",
    src: "/6.png",
    title: "6 Стікерів",
    oldPrice: 600,
    newPrice: 499,
    count: 6,
  },
  {
    alt: "12 Стікерів",
    src: "/12.png",
    title: "12 Стікерів",
    oldPrice: 1200,
    newPrice: 999,
    count: 12,
  },
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(null);
  const btnRefs = useRef([]);
  const buyBtnRef = useRef(null);
  const router = useRouter();

  const animationFrameId = useRef(null);
  const backgroundPosition = useRef(0);

  const animateBackground = () => {
    if (!buyBtnRef.current) return;

    backgroundPosition.current += 0.5;
    if (backgroundPosition.current > 400) backgroundPosition.current = 0;

    buyBtnRef.current.style.backgroundPosition = `${backgroundPosition.current}% 0%`;

    animationFrameId.current = requestAnimationFrame(animateBackground);
  };

  useEffect(() => {
    if (activeIndex !== null) {
      animationFrameId.current = requestAnimationFrame(animateBackground);
    } else {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
      backgroundPosition.current = 0;
      if (buyBtnRef.current) {
        buyBtnRef.current.style.backgroundPosition = "0% 0%";
      }
    }

    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, [activeIndex]);

  const handleCardClick = (event, index) => {
    setActiveIndex(index);
    createRipple(event, index);
  };

  const handleBuyClick = () => {
    if (activeIndex !== null) {
      const selectedSticker = stickerData[activeIndex];
      const queryParams = new URLSearchParams({
        title: selectedSticker.title,
        price: selectedSticker.newPrice,
        count: selectedSticker.count.toString(),
      }).toString();
      router.push(`/orderForm?${queryParams}`);
    }
  };

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
    if (existingRipple) existingRipple.remove();

    button.appendChild(circle);
  };

  return (
    <section className="my-[30px] py-1 text-white">
      <div
        className="
      grid grid-cols-2 sm:grid-cols-4
      gap-6 px-2
    "
      >
        {stickerData.map(({ alt, src, title, oldPrice, newPrice }, index) => (
          <button
            key={index}
            ref={(el) => (btnRefs.current[index] = el)}
            onClick={(e) => handleCardClick(e, index)}
            type="button"
            className={`
          overflow-hidden
          bg-white rounded-lg py-1 shadow-card w-full
          transition-transform duration-200 z-10
          ${activeIndex === index ? "scale-[1.1] z-10" : ""}
        `}
          >
            <div id="card-image" className="mb-2 flex justify-center">
              <Image
                alt={alt}
                src={src}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[300px] h-[150px] border-b border-[rgba(0,0,0,0.15)] rounded-t-lg object-contain"
              />
            </div>

            <div id="card-info" className="text-left px-4 py-1">
              <p className="text-lg mb-2 text-black font-bold">{title}</p>
              <p className="text-sm line-through text-gray-400">{oldPrice} ₴</p>
              <p className="text-base text-[#18B269] font-bold">{newPrice} ₴</p>
            </div>
          </button>
        ))}
      </div>

      <button
        ref={buyBtnRef}
        disabled={activeIndex === null}
        onClick={handleBuyClick}
        className={`w-full mt-8 h-[48px] flex items-center justify-center rounded-lg text-white transition-colors duration-400 ${
          activeIndex === null
            ? "bg-black"
            : "bg-[#18B269] hover:bg-[#149a56] cursor-pointer active:scale-95"
        }`}
      >
        Придбати
      </button>
    </section>
  );
}
