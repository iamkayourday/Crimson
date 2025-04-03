import React from "react";
import Winemaking from "./WineMaking";

const Heritage = () => {
  return (
    <section
      id="heritage"
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg-overlay.webp')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Red overlay with opacity */}
      <div className="absolute inset-0 bg-[#8b0000]/70"></div>

      {/* Content container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white text-center p-6">
        <h2 className="text-4xl md:text-5xl font-medium mb-6 text-style">
          The journey from Vineto <br /> Bottle
        </h2>
      </div>
      <Winemaking />
    </section>
  );
};

export default Heritage;
