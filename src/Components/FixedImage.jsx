import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "image1.jpeg",
  "image2.jpeg",
  "image3.jpeg", // The expanding image
  "image4.jpeg",
  "image5.jpeg",
];

const FixedImage = () => {
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const thirdImage = document.getElementById("expandingImage");
      if (thirdImage) {
        const rect = thirdImage.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.5; // Trigger at 50% of viewport

        if (rect.top < triggerPoint) {
          setExpand(true);
        } else {
          setExpand(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto">
      <h2 className="text-center text-[#8b0000] text-4xl md:text-5xl lg:text-[55px] font-serif italic">
        Exceptional Flavors from <br />
        Our Vineyards
      </h2>
      <p className="text-center text-[#8b0000] max-w-4xl font-medium leading-relaxed">
        The unique character of our wines comes from the carefully nurtured
        grapes of our vineyards. Shaped by the perfect harmony of climate, soil,
        and nature, our grapes offer you an unforgettable taste with every sip.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6 relative">
        {images.map((image, index) => (
          <motion.img
            key={index}
            id={index === 2 ? "expandingImage" : null}
            src={image}
            alt={`Image ${index + 1}`}
            className={`rounded-md shadow-lg transition-all duration-700 ${
              expand && index === 2 ? "opacity-0" : ""
            }`}
          />
        ))}
      </div>

      {/* Expanding Background */}
      <motion.div
        className={`fixed top-0 left-0 w-full h-screen bg-cover bg-center transition-all duration-700 ${
          expand ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundImage: expand ? `url(${images[2]})` : "",
        }}
        animate={{
          scale: expand ? 1.1 : 1,
          opacity: expand ? 1 : 0,
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        {expand && (
          <div className="absolute inset-0 bg-[#8b0000]/70 flex flex-col items-center justify-center text-white text-center p-6">
            <h2 className="text-4xl md:text-5xl lg:text-[55px] font-serif italic">
              From Our Vines to Your Glass
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed mt-4">
              Our passion for winemaking begins in the heart of our vineyards, where every grape is carefully nurtured to create wines of exceptional quality. Discover the unique flavors born from the perfect balance of soil, climate, and craftsmanship.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-[#8b0000] rounded-md font-medium">
              Learn More About Our Vineyards
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default FixedImage;
