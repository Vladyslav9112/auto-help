import Image from "next/image";
import Header from "./components/global/Header.jsx";
import ContentWrapper from "./components/global/ContentWrapper.jsx";
import Marquee from "./components/Marquee.jsx";
import InfoCard from "./components/InfoCard.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Marquee />
      <InfoCard />
      <Footer />
    </div>
  );
}
