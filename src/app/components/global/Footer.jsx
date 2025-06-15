import Image from "next/image";
import ContentWrapper from "./ContentWrapper";

export default function Footer() {
  return (
    <ContentWrapper>
      <footer className="bg-white py-4 mib-h-[100px]">
        <div className="flex items-center justify-center mb-1">
          <Image
            src={"/icons/telegram.svg"}
            width={37}
            height={36}
            alt="icon telegram"
            className="mr-4"
          />
          <Image
            src={"/icons/instagram.svg"}
            width={37}
            height={36}
            alt="icon instagram"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-[6px] h-[40px] items-center text-sm sm:text-base">
          <a href="#">Публічна оферта</a>
          <a href="#" className="pl-[6px] border-l-2 border-black">
            Політика конфіденційності
          </a>
          <a href="#" className="pl-[6px] border-l-2 border-black">
            Доставка
          </a>
        </div>

        <div className="flex justify-around sm:justify-between items-center mt-4">
          <Image
            src={"/icons/maestro.png"}
            width={87}
            height={25}
            alt="icon maestro"
          />
          <Image
            src={"/icons/visa.png"}
            width={50}
            height={16}
            alt="icon visa"
          />
        </div>
      </footer>
    </ContentWrapper>
  );
}
