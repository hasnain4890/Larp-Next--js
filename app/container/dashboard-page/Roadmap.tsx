import { Text } from "@/app/sharedComponents";
import Image from "next/image";
import React from "react";

const Roadmap = () => {
  return (
    <>
      <div
        className="absolute right-0 size-40 mt-64 rounded-full bg-primary-blue opacity-95"
        style={{ filter: "blur(70px)" }}
      ></div>
      <div className="absolute -left-12 -mt-6 md:mt-20 md:left-32 pointer-events-none select-none">
        <Image
          src="/Circleone.svg"
          alt="Circle Image"
          width={130}
          height={130}
        />
      </div>
      <div className="absolute sm:block hidden mt-10 right-10 pointer-events-none select-none">
        <Image
          src="/Circletwo.svg"
          alt="Circle Image"
          width={130}
          height={130}
        />
      </div>
      <div className="flex flex-col gap-3 items-center justify-center mt-24">
        <Text variant="h2" className="relative z-10">
          Our <span className="text-primary-blue">Roadmap</span>
        </Text>
        <Text
          variant="body1"
          className="w-[80%] sm:w-[36%] text-center relative z-10"
        >
          Join the DashCoin community and relutionzie your crypto experience.
          Join the DashCoin community
        </Text>

        <div className="w-[90%] sm:w-[80%] md:w-[50%] lg:w-[35%] py-4 mt-10">
          <div className="flex flex-col gap-0">
            <div className="absolute md:block hidden mt-2 left-0 pointer-events-none select-none">
              <Image
                src="/Rightring.svg"
                alt="Circle Image"
                width={130}
                height={130}
              />
            </div>
            {[0, 1, 2, 3].map((index) => {
              return (
                <div key={index} className="flex gap-10 w-full justify-center">
                  <div className="w-[10%] flex justify-center">
                    <Text
                      variant="body1"
                      className="font-light whitespace-nowrap"
                    >
                      Phase 1
                    </Text>
                  </div>
                  <div className="border-0.5 border-primary-blue relative">
                    <div className="w-2 h-2 bg-white absolute rounded-full -ml-1 mt-2"></div>
                  </div>
                  <div className="flex flex-col gap-3 w-[80%] text-primary-grey">
                    <Text variant="body1" className="font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt, praesentium! Magnam asperiores tempora aut dolor
                      dolorum, unde, earum nam, ob Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Nesciunt, praesentium! M
                    </Text>

                    <Text
                      variant="body1"
                      className="font-light mb-10 primary-grey"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt,
                    </Text>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
