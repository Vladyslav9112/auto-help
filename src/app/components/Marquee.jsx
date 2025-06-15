import Image from "next/image";
import "../styles/marguee.css";

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap text-black h-[50px] flex items-center">
      <div className="marquee-left">
        {[...Array(10)].map((_, i) => (
          <a key={i} href="#" className="flex items-center mr-8">
            <span className="mr-2">
              Кінець продажу 22.06, Прямий Ефір 23.06
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
