import React from "react";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Services from "./components/Services";

const Home = () => {
  const data = {
    name: "Patel Store",
  };

  return (
    <>
      <HeroSection myData={data}></HeroSection>
      <Services></Services>
      <Trusted></Trusted>
    </>
  );
};
export default Home;
