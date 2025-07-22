import Image from "next/image";
import Marquee from "./components/Marquee.jsx";
import ContentWrapper from "./components/global/ContentWrapper.jsx";
import Slider from "./components/Slider.jsx";
import InfoStickers from "./components/InfoStickers.jsx";

export default function Home() {
  return (
    <div className="">
      <Marquee />
      <ContentWrapper>
        <Slider />
        <InfoStickers />
      </ContentWrapper>
    </div>
  );
}
