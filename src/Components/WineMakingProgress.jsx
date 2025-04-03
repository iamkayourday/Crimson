import React from "react";
import { motion } from "framer-motion";

const WinemakingProcess = () => {
  const processSteps = [
    {
      title: "Terroir",
      subtitle: "Soil and Climate",
      content: "Terroir refers to the unique combination of soil, climate, and geography that defines the character of a vineyard. The mineral content of the soil, drainage, and sunlight all play crucial roles in how grapes grow and ripen.",
    },
    {
      title: "Planting",
      subtitle: "Establishing the Vineyard",
      content: "The soil is prepared, and grapevines are carefully planted, allowing them to root deeply. This involves selecting grape varieties suited to the terroir and installing support systems like trellises.",
    },
    {
      title: "Growing",
      subtitle: "Nurturing the Vines",
      content: "Vines need constant care including pruning, fertilization, and pest management. As vines mature, they develop stronger trunks and branches, leading to better fruit yields.",
    },
    {
      title: "Harvesting",
      subtitle: "Timing the Perfect Pick",
      content: "Grapes are harvested at peak ripeness by hand or machine. Timing affects sugar and acidity levels, with careful selection ensuring only the best fruit is used.",
    },
    {
      title: "Winemaking",
      subtitle: "From Grape to Glass",
      content: "Grapes are crushed and fermented, then aged in barrels or tanks. The wine is bottled and may age further, reflecting the vineyard's full potential.",
    }
  ];

  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      {/* <h2 className="text-[#8b0000] text-4xl md:text-5xl font-serif italic mb-16 text-center">
        The Winemaking Journey
      </h2> */}
      
      <div className="relative">
        {/* Vertical progress line */}
        <div className="absolute left-8 md:left-1/2 h-full w-1 bg-[#8b0000] opacity-20 -translate-x-1/2"></div>
        
        {processSteps.map((step, index) => (
          <motion.div 
            key={index}
            className="relative mb-16 pl-12 md:pl-0 md:flex md:items-center md:odd:flex-row-reverse"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Progress dot */}
            <div className="absolute left-4 md:left-1/2 top-2 w-6 h-6 rounded-full bg-[#f0ead6]  -translate-x-1/2 z-10"></div>
            
            {/* Content */}
            <div className="md:w-5/12 md:px-8">
              <div className="p-8 ">
                <h3 className="text-[#d4af37] text-sm font-bold mb-2 ">{step.title}</h3>
                <h4 className="text-[#f0ead6] text-xl font-semibold mb-4 italic text-style leading-relaxed">{step.subtitle}</h4>
                <p className="text-[#f0ead6] leading-relaxed">{step.content}</p>
              </div>
            </div>
            
            {/* Spacer for even items */}
            <div className="hidden md:block md:w-2/12"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WinemakingProcess;