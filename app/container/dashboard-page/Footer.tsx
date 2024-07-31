import { Text } from "@/app/sharedComponents";
import { BUSINESSES, SOCIAL_MEDIA_ICON } from "@/constants/constant";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full py-4 mt-20 sm:mt-44">
        <div className="w-full flex justify-between px-12">
          <div className="hidden sm:block">Name of Brand</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-7 place-items-center m-auto sm:m-0">
            {BUSINESSES.map(({ id, name }) => (
              <Text
                key={id}
                variant="body1"
                className="font-light cursor-pointer hover:text-primary-blue transition duration-300 ease-in-out"
              >
                {name}
              </Text>
            ))}
          </div>
        </div>
        <div className="w-[100%] sm:w-[98%] mt-5 border-0.5 border-primary-blue m-auto"></div>
        <div className="mt-5 flex sm:flex-row justify-between gap-6 flex-col-reverse items-center px-3 sm:px-10">
          <div>
            <Text variant="body1" className="font-light">
              © name of brand 2024. All rights reserved
            </Text>
          </div>
          <div className="flex gap-4 items-center justify-center">
            {SOCIAL_MEDIA_ICON.map(({ id, Icon }) => (
              <Icon
                key={id}
                className="cursor-pointer transition duration-300 ease-in-out hover:scale-125"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
