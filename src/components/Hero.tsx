import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/banner_bg.png)] bg-left bg-cover relative"
      style={{ backgroundSize: "35%", backgroundPosition: "left 100px top 100px" }}
    >
      <Navbar />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)] z-10 relative">
        <div className="hidden lg:block"></div>
        <div className="text-[80px] sm:text-[100px] font-bold text-white leading-tight flex flex-col justify-center">
          <p data-aos="fade-up">I am</p>
          <p data-aos="fade-up">MUHAMMAD</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
