"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ContentWrapper from "./ContentWrapper";
import { Info } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCanGoBack(window.history.length > 2);
    }
  }, []);

  return (
    <header className="bg-[#18B269] text-white mb-2 md:mb-4">
      <ContentWrapper>
        <div className="flex justify-between items-center h-[90px]">
          {/* Назад */}
          {canGoBack ? (
            <button
              onClick={() => router.back()}
              className="justify-self-start ml-4 text-2xl"
            >
              ⬅
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
            <a href="#" className="justify-self-end mr-4 text-2xl">
              <Info className="w-[30px] h-[30px]" />
            </a>
          </div>
        </div>
      </ContentWrapper>
    </header>
  );
}
