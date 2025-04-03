import React from "react";
import { motion } from "framer-motion";

const images = [
  "image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg",
  "image6.jpeg", "image7.jpeg", "image8.jpeg", "image9.png", "image10.png"
];

const FloatingImage = () => {
  return (
    <div className="overflow-hidden w-full bg-gray-100 py-6 mt-20">
      {/* First row - Moves Left Infinitely */}
      <div className="relative flex w-full">
        <motion.div
          className="flex gap-6 min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Duplicate images to ensure seamless flow */}
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Floating ${index + 1}`}
              className="w-70 h-48 object-cover rounded-lg shadow-lg"
            />
          ))}
        </motion.div>
      </div>

      {/* Second row - Moves Right Infinitely */}
      <div className="relative flex w-full mt-6">
        <motion.div
          className="flex gap-6 min-w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Duplicate images to ensure seamless flow */}
          {[...images, ...images].map((src, index) => (
            <img
              key={index + images.length}
              src={src}
              alt={`Floating ${index + 6}`}
              className="w-70 h-48 object-cover rounded-lg shadow-lg"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FloatingImage;
