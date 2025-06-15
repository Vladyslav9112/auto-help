import Image from "next/image";
import ContentWrapper from "./ContentWrapper";

export default function Footer() {
  return (
    <ContentWrapper>
      <footer className="bg-white py-4 mib-h-[100px]">
        <div className="flex items-center justify-center mb-1">
          <a
            href="https://www.tiktok.com/@auto__help_dnepr?_t=ZM-8xEU7r05swf&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/icons/tiktok.svg"}
              width={37}
              height={36}
              alt="icon tiktok"
              className="mr-4"
            />
          </a>
          <a
            href="https://www.instagram.com/auto__help_dnepr?igsh=ZmQ1ZHlzZjNxcGJz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/icons/instagram.svg"}
              width={37}
              height={36}
              alt="icon instagram"
            />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-[6px] h-[40px] items-center text-sm sm:text-base">
          <a href="/public-offer">Публічна оферта</a>
          <a
            href="/privacy-policy"
            className="pl-[6px] border-l-2 border-black"
          >
            Політика конфіденційності
          </a>
          <a href="/delivery" className="pl-[6px] border-l-2 border-black">
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
            src={"/icons/logo_liqpay.svg"}
            width={60}
            height={25}
            alt="icon logo liqPay"
          />
          <Image
            src={"/icons/visa.png"}
            width={45}
            height={16}
            alt="icon visa"
          />
        </div>
      </footer>
    </ContentWrapper>
  );
}
