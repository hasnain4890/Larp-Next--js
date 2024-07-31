import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LockIcon from "@/public/svg/LockIcon";
import { Text } from "@/app/sharedComponents";

function AutoPlay() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="slider-container relative z-10 m-auto w-[100%] backdrop-blur-sm mt-10 bg-[#151126]">
      <div className="border-0.5 border-[#00C4F4] px-2 py-5">
        <Slider {...settings}>
          {[0, 1, 2, 3].map((index) => {
            return (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex items-center">
                  <LockIcon />
                  <Text variant="p" className="w-44 font-bold">
                    Safe and secure Traded Platform
                  </Text>
                </div>
                <p className="font-light text-xs w-[65%]">
                  Join the DashCoin community and relutionzie your crypto
                  experience hello world helo hello.
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
      <div
        className="absolute left-0 size-24 mt-36 rounded-full bg-primary-blue top-0 opacity-95"
        style={{ filter: "blur(70px)" }}
      ></div>
    </div>
  );
}

export default AutoPlay;
