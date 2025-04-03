import React from 'react';
import Discover from './Discover';
import About from './About';
import FloatingImage from './FlotingImage';

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="min-h-screen py-40 flex flex-col  justify-center items-center mt-20"
      >
        <div className="text-center max-w-7xl">
          <h1 className="text-[#D4AF37] text-[70px] font-medium leading-tight text-style italics italic">
            Crimson Wine
          </h1>
          <h2 className="text-[#D4AF37] text-[18px] leading-relaxed mt-4 md:w-[550px]">
            Handcrafted wines, rooted in tradition and crafted with passion for refined taste.
          </h2>

          <button
            className="mt-8 px-6 py-3 bg-[#8B0000] text-white rounded-full shadow-md focus:outline-none focus:ring focus:ring-[#D4AF37] focus:ring-opacity-50 cursor-pointer"
            aria-label="Contact us"
          >
            Contact
          </button>
        </div>
        <Discover />
        <About />
        <FloatingImage />
      </section>
    </>
  );
};

export default Hero;