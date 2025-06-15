"use client";

import { usePathname, useRouter } from "next/navigation";
import ContentWrapper from "./ContentWrapper";
import { Info, CircleChevronLeft } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  // Кнопка показується на всіх сторінках, крім "/"
  const showBackButton = pathname !== "/";

  return (
    <header className="bg-[#18B269] text-white mb-2 md:mb-4">
      <ContentWrapper>
        <div className="flex justify-between items-center h-[90px]">
          {/* Назад */}
          {showBackButton ? (
            <button
              onClick={() => router.push("/")}
              className="justify-self-start text-2xl"
            >
              <CircleChevronLeft className="w-[30px] h-[30px] cursor-pointer" />
            </button>
          ) : (
            <div className="ml-4" />
          )}

          {/* Центр */}
          <div className="justify-self-center text-center font-semibold text-lg">
            <a href="/">
              <Image
                src={"/logo.svg"}
                alt="logo Auto-Help"
                width={270}
                height={56}
              />
            </a>
          </div>

          {/* Інфо */}
          <div className="flex">
            <a href="/contacts" className="justify-self-end mr-4 text-2xl">
              <Info className="w-[30px] h-[30px]" />
            </a>
          </div>
        </div>
      </ContentWrapper>
    </header>
  );
}
