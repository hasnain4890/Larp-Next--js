import { Text } from "@/app/sharedComponents";
import { TOKENOMICS_CARD } from "@/constants/constant";
import Pinkbox from "@/public/svg/Pinkbox";
import Image from "next/image";
import React from "react";

const Tokenomics = () => {
  return (
    <>
      <div className="flex flex-col gap-3 items-center justify-center mt-24">
        <Text variant="h2">
          Break Down <span className="text-primary-blue">Tokenomics</span>
        </Text>
        <Text variant="body1" className="w-[80%] sm:w-[36%] text-center">
          Join the DashCoin community and relutionzie your crypto experience.
          Join the DashCoin community
        </Text>
        <Text variant="p" className="mt-1">
          Total Supply: 1,000,000 $HAI
        </Text>
        <div className="absolute right-0 mt-32 pointer-events-none select-none md:block hidden">
          <Image
            src="/Ballone.svg"
            alt="Circle Image"
            width={130}
            height={130}
          />
        </div>
        <div className="absolute left-[15%] z-0 mt-96 pointer-events-none select-none md:block hidden">
          <Image
            src="/Designone.svg"
            alt="Circle Image"
            width={200}
            height={200}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-[80%] sm:w-[85%] md:w-[70%] lg:w-[50%] place-items-center mt-10 backdrop-blur-sm">
          {[0, 1].map((index) => {
            return (
              <div
                key={index}
                className="border-0.5 border-primary-blue rounded-t-xl w-[95%]"
              >
                <div className="w-full h-16 bg-primary-blue rounded-xl flex justify-between items-center px-3">
                  <Text variant="body1" className="font-bold">
                    Token name:
                  </Text>
                  <Text variant="body1" className="font-bold">
                    name
                  </Text>
                </div>
                <div className="flex flex-col gap-4 m-3 py-3 bg-secondary-bg">
                  {[0, 1, 2].map((index) => {
                    return (
                      <div key={index} className="flex justify-between gap-3">
                        <Text variant="body1">Total Supply:</Text>
                        <Text variant="body1">1,000,000$ HAI</Text>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[80%] sm:w-[85%] md:w-[70%] relative z-10 lg:w-[49%] border-0.5 border-primary-blue mb-20 mt-6 flex flex-col items-center xs:flex-row xs:items-start bg-secondary-bg">
          <div className="w-[60%] h-full">
            <div className="flex flex-col gap-3 p-4 ml-3 items-center">
              {TOKENOMICS_CARD.map(({ id, label, Icon }) => {
                return (
                  <div key={id} className="flex gap-3 py-1 items-center">
                    {<Icon />}
                    <Text variant="body1">{label}</Text>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[40%] h-full flex items-center p-4">
            <Image
              src="/DonutChart.svg"
              alt="Tokenomics image"
              width={220}
              height={220}
            />
          </div>
        </div>
      </div>
      <div className="absolute left-[38%] sm:left-[45%] z-0 pointer-events-none select-none">
        <Image
          src="/Multiplelineone.svg"
          alt="Circle Image"
          width={100}
          height={100}
        />
      </div>
      <div className="absolute -left-10 z-0 -mt-32 block sm:hidden pointer-events-none select-none">
        <Image
          src="/Designone.svg"
          alt="Circle Image"
          width={150}
          height={150}
        />
      </div>
    </>
  );
};

export default Tokenomics;
