"use client";

import Image from "next/image";

import React from "react";
import CustomButton from "./CustomButton";

function Hero() {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, boook or rent a car - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline you car rental experience with our effortless booking
          experience
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={() => {}}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={"/hero.png"} fill className="object-contain" alt="hero" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
}

export default Hero;
