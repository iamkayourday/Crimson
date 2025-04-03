import React from "react";
import { motion } from "framer-motion";

const Discover = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      className="bg-[#8B0000] text-[#f0ead6] py-20 md:py-40 min-h-screen flex flex-col justify-center items-center w-full mt-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-6xl lg:text-[80px] text-[#foead6] mb-6 leading-tight text-style italic"
          variants={itemVariants}
        >
          Discover the Essence of <br /> Fine Wine
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-10"
          variants={itemVariants}
        >
          Explore the passion and artistry behind every bottle. Our handcrafted
          wines are a celebration of tradition and dedication to excellence.
        </motion.p>

        {/* <motion.button
          className="px-8 py-3 bg-white text-[#8B0000] rounded-full font-medium hover:bg-[#F9F8F4] transition-colors duration-300 text-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Collection
        </motion.button> */}
      </motion.div>

      {/* Grid Content */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 p-8 mt-10 max-w-6xl mx-auto">
        <div className="flex flex-col justify-center items-start text-left ">
          {/* <h2 className="text-lg font-bold mb-4">Our Story</h2> */}
          <p className=" leading-relaxed text-lg">
            At our boutique winery, every bottle tells a story. We carefully
            select grapes from the finest vineyards, ensuring that each glass
            brings you closer to the rich heritage and craftsmanship behind
            every sip. Explore our unique selection and taste the passion.
          </p>
        </div>

        <figure className="flex justify-center items-center">
          <img src="wine.svg" alt="Crimson Wine Bottle" className="h-40 w-40" />
          {/* <figcaption className="text-sm text-gray-300 mt-2 text-center">Crimson Wine Bottle</figcaption> */}
        </figure>

        <div className="flex flex-col justify-center items-start text-left">
          {/* <h2 className="text-lg font-bold mb-4">Our Craft</h2> */}
          <p className="text-lg leading-relaxed">
            Whether you’re a connoisseur or a casual enthusiast, our wines offer
            a taste journey like no other. From bold reds to crisp whites, each
            wine is crafted with precision to elevate your experience. Let the
            flavors speak for themselves as you enjoy a glass from our
            collection.
          </p>
        </div>
      </div>

      {/* Photo touching the bottom edge */}
      <img
        src="edge.svg"
        alt="Bottom Edge Visual"
        className="absolute bottom-0 w-full"
      />
    </motion.section>
  );
};

export default Discover;
