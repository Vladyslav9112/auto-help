import Image from "next/image";
import "../styles/marguee.css";

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap text-black h-[20px] flex items-center">
      <div className="marquee-left">
        {[...Array(10)].map((_, i) => (
          <a
            key={i}
            href="https://www.instagram.com/auto__help_dnepr?igsh=ZmQ1ZHlzZjNxcGJz"
            className="flex items-center mr-8"
            target="_blank"
          >
            <span className="mr-2">
              Кінець продажу 15.07, Прямий Ефір 16.07
            </span>
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
