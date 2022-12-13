import React from "react";
import HeroSection from "./components/HeroSection";

const Home = () => {
  const data ={
    name:"Patel Store"
  }
  return <HeroSection myData={data}></HeroSection>;
};
export default Home;
