import Image from "next/image";
import ContentWrapper from "./global/ContentWrapper";

export default function Footer() {
  return (
    <ContentWrapper>
      <footer className="bg-white py-4 bottom-0">
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
        <div className="flex justify-center gap-[10px] h-[40px] items-center">
          <a href="#" className="">
            Публічна оферта
          </a>
          <a href="#" className="pl-[10px] border-l border-black">
            Політика конфіденційності
          </a>
          <a href="#" className="pl-[10px] border-l border-black">
            Доставка
          </a>
        </div>

        <div className="flex justify-between items-center mt-4">
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
