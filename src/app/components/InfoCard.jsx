"use client";

import "../styles/slider.css";
import InfoStickers from "./card/InfoStickers";
import Slider from "./card/Slider";
import ContentWrapper from "./global/ContentWrapper";
import InfoForm from "./form/InfoForm";

import { useState } from "react";

export default function InfoCard() {
  const [showForm, setShowForm] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleBuy = (index) => {
    setSelectedIndex(index);
    setShowForm(true);
  };

  return (
    <ContentWrapper>
      {!showForm ? (
        <>
          <Slider onBuy={handleBuy} />
          <InfoStickers />
        </>
      ) : (
        <InfoForm selectedIndex={selectedIndex} />
      )}
    </ContentWrapper>
  );
}
