import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const OurWine = () => {
  const wines = [
    {
      image: "/wine/bottle1.png",
      name: "Crimson Merlot 2021 - Classic Collection",
      description:
        "A symbol of timeless elegance, this deep crimson Merlot with a dark green cork offers rich flavors and smooth textures. Perfect for those who appreciate the sophistication of a classic, adding a touch of grace to any occasion.",
    },
    {
      image: "/wine/bottle2.png",
      name: "Pinot Noir 2022 - Curved Elegance",
      description:
        "With its sleek design and refined character, this curved bottle of Pinot Noir combines beauty with substance. Its fruit-forward notes and subtle tannins create a balanced wine, perfect for collectors and enthusiasts alike.",
    },
    {
      image: "/wine/bottle3.png",
      name: "Cabernet Sauvignon 2020 - Red Summit",
      description:
        "Bold and robust, this Cabernet Sauvignon, with its striking red cork, embodies richness and depth. Crafted for moments of celebration, its dark berry notes and velvety finish leave a lasting impression.",
    },
    {
      image: "/wine/bottle4.png",
      name: "Syrah 2019 - Navy Mystery",
      description:
        "Wrapped in intrigue, this navy-corked Syrah unveils a complex profile with every sip. Offering deep aromas and rich flavors, it captivates from the first pour to the last, making it a memorable experience.",
    },
    {
      image: "/wine/bottle5.png",
      name: "Zinfandel 2020 - Bold Harmony",
      description:
        "With a vibrant personality, this Zinfandel presents a lively balance of dark fruit and spice. Its robust flavors and smooth finish make it a versatile choice, ideal for pairing with bold dishes or enjoying on its own.",
    },
    {
      image: "/wine/bottle6.png",
      name: "Tempranillo 2021 - Spanish Essence",
      description:
        "Embracing the warmth of the sun, this Tempranillo offers rich red fruit and earthy undertones. Crafted with elegance, it showcases a full-bodied taste with a smooth finish, perfect for those who savor a hint of the Spanish landscape.",
    },
  ];

  return (
    <section id="our-wine" className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-center text-[#8b0000] text-4xl md:text-5xl lg:text-[55px] text-style italic">
          Crimson Collection -
        </h2>
        <h2 className="text-center text-[#8b0000] text-4xl md:text-5xl lg:text-[55px] text-style italic mb-12">
          Exquisite Flavors
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 relative">
        {/* Vertical divider */}
        <div className="hidden md:block absolute h-full w-px bg-[#8b0000] left-1/2 transform -translate-x-1/2"></div>

        {/* Horizontal dividers */}
        <div className="hidden md:block absolute w-full h-px bg-[#8b0000] top-1/3"></div>
        <div className="hidden md:block absolute w-full h-px bg-[#8b0000] top-2/3"></div>

        {wines.map((wine, index) => {
          const isLeftColumn = index % 2 === 0;
          const rowPosition = Math.floor(index / 2);
          const itemRef = useRef(null);
          const isInView = useInView(itemRef, { margin: "-50px" });

          return (
            <motion.div
              ref={itemRef}
              key={index}
              initial={{
                opacity: 0,
                rotate: isLeftColumn ? -10 : 10,
                x: isLeftColumn ? -60 : 60,
              }}
              animate={isInView ? { opacity: 1, rotate: 0, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className={`relative ${isLeftColumn ? "md:pr-6" : "md:pl-6"} ${
                rowPosition > 0 ? "mt-12" : ""
              }`}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center"
              >
                <motion.img
                  src={wine.image}
                  alt={wine.name}
                  className="max-h-80 mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring" }}
                />
                <h2 className="text-center mb-4 text-style text-[#8b0000] text-2xl md:text-3xl font-medium">
                  {wine.name}
                </h2>
                <p className="text-[#8b0000] font-medium text-base md:text-lg text-center max-w-md">
                  {wine.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default OurWine;
