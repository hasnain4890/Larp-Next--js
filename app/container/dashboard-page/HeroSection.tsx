import { Text } from "@/app/sharedComponents";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="absolute right-0 size-44 rounded-full bg-primary-blue top-0 opacity-95"
        style={{ filter: "blur(100px)" }}
      ></div>
      <div className="absolute pointer-events-none z-10 -mt-80 md:-mt-20 select-none">
        <Image
          src="/Topring.svg"
          alt="Hero Section Image"
          width={1000}
          height={1000}
        />
      </div>
      <div className="gradient-border w-[93%] h-[29rem] mt-10 sm:mt-5 relative z-10 backdrop-blur-md">
        <div className="flex flex-col !items-center !justify-center h-full">
          <Text variant="h2" className="text-center">
            Unlock the future of
          </Text>
          <Text variant="h2" className="text-primary-blue text-center mt-3">
            Digital Currency
          </Text>
          <Text
            variant="body1"
            className="w-[80%] sm:w-[50%] md:w-[60%] lg:w-[30%] text-center mt-7"
          >
            Join the DashCoin community and relutionzie your crypto experience.
            Join the DashCoin community and relutionzie your crypto experience.
          </Text>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 mt-7">
            <button className="bg-primary-blue hover:bg-[transparent] w-36 hover:border hover:border-primary-blue px-3 py-3 rounded-full whitespace-nowrap cursor-pointer transition duration-300 ease-in-out">
              Download app
            </button>
            <button className="border border-primary-blue px-3 py-3 w-36 rounded-full whitespace-nowrap cursor-pointer transition duration-300 ease-in-out hover:bg-secondary-blue">
              Download app
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
