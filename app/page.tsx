"use client";
import React, { useState } from "react";
import Navbar from "./container/dashboard-page/Navbar";
import HeroSection from "./container/dashboard-page/HeroSection";
import Footer from "./container/dashboard-page/Footer";
import AboutSection from "./container/dashboard-page/AboutSection";
import Roadmap from "./container/dashboard-page/Roadmap";
import AttractiveFeatures from "./container/dashboard-page/AttractiveFeatures";
import Tokenomics from "./container/dashboard-page/Tokenomics";
import FutureBrand from "./container/dashboard-page/FutureBrand";

const Page = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  return (
    <>
      <div className="bg-primary-bg">
        <Navbar
          setIsContentVisible={setIsContentVisible}
          isContentVisible={isContentVisible}
        />
      </div>
      <HeroSection />
      <AboutSection />
      <Roadmap />
      <AttractiveFeatures />
      <Tokenomics />
      <FutureBrand />
      <Footer />
    </>
  );
};

export default Page;
