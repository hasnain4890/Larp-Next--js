import { Text } from "@/app/sharedComponents";
import Image from "next/image";
import React from "react";

const FutureBrand = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-40 leading-relaxed">
      <div className="absolute z-0 mt-20 pointer-events-none select-none">
        <Image
          src="/Footercircle.svg"
          alt="Circle Image"
          width={800}
          height={800}
        />
      </div>
      <Text variant="h3">Be part of the future of</Text>
      <Text variant="h3" className="text-primary-blue">
        Brand Name
      </Text>
      <Text
        className="mt-7 font-light w-[85%] sm:w-[70%] md:w-[40%] text-center"
        variant="body1"
      >
        Be part of the future of brand name Unleash the power of AI within
        Brainwave. Upgrade your productivity with Brainwave, the open AI chat
        app. Start free trail
      </Text>
      <button className="bg-primary-blue w-auto px-3 mt-7 mr-0 sm:mr-10 py-2 text-black rounded-xl hover:bg-secondary-blue whitespace-nowrap cursor-pointer transition duration-300 ease-in-out">
        Start free trial
      </button>
    </div>
  );
};

export default FutureBrand;
