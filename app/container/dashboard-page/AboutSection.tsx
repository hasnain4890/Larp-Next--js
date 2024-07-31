import { Text } from "@/app/sharedComponents";
import React from "react";
import Slider from "./Slider";
import Image from "next/image";

const AboutSection = () => {
  return (
    <>
      <div className="absolute left-0 pointer-events-none -mt-10 z-0 select-none">
        <Image
          src="/Ballone.svg"
          alt="Hero Section Image"
          width={130}
          height={130}
        />
      </div>
      <div className="flex flex-col gap-3 items-center justify-center mt-20">
        <Text variant="h2">
          About This <span className="text-primary-blue">DashCOin</span>
        </Text>
        <Text variant="body1" className="w-[80%] sm:w-[36%] text-center">
          Join the DashCoin community and relutionzie your crypto experience.
          Join the DashCoin community
        </Text>
        <Slider />
      </div>
    </>
  );
};

export default AboutSection;
