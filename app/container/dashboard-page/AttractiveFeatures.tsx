import { Text } from "@/app/sharedComponents";
import BoxIcon from "@/public/svg/BoxIcon";
import RightArrow from "@/public/svg/RightArrow";
import Image from "next/image";
import React from "react";

const AttractiveFeatures = () => {
  return (
    <>
      <div className="flex flex-col gap-3 items-center justify-center mt-24">
        <Text variant="h2">
          Attractive <span className="text-primary-blue">Features</span>
        </Text>
        <Text variant="body1" className="w-[80%] sm:w-[36%] text-center">
          Join the DashCoin community and relutionzie your crypto experience.
          Join the DashCoin community
        </Text>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-[85%] sm:w-[80%] mt-10">
          <div
            className="absolute right-0 size-32 mt-20 rounded-full bg-primary-blue opacity-95"
            style={{ filter: "blur(70px)" }}
          ></div>
          {[0, 1, 2].map((index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-4 card-style rounded-lg p-6 hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
              >
                <BoxIcon />
                <Text className="text-start w-[70%]">
                  Personal information removal
                </Text>
                <Text variant="body1" className="font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  quas magni, praesentium quibusdam eligendi asperiores sunt
                  heasj
                </Text>
                <div className="flex gap-2 cursor-pointer mt-2 items-center">
                  <Text variant="p">Explore More</Text>
                  <RightArrow />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute left-20 mt-16 pointer-events-none select-none md:block hidden">
        <Image src="/Linetwo.svg" alt="Circle Image" width={130} height={130} />
      </div>
      <div className="absolute right-20 mt-32 pointer-events-none select-none md:block hidden">
        <Image
          src="/Multiplelineone.svg"
          alt="Circle Image"
          width={130}
          height={130}
        />
      </div>
    </>
  );
};

export default AttractiveFeatures;
