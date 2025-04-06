import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Animation values based on scroll progress
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const subtitleOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const subtitleY = useTransform(scrollYProgress, [0.5, 1], [100, 0]);

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className='relative min-h-[200vh] w-full bg-[#8B0000]' // Extended height for scroll effect
    >
      <div className='sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden'>
        {/* Large Title */}
        <motion.h2 
          style={{ opacity: titleOpacity, y: titleY }}
          className='text-style italic text-[100px] md:text-[150px] text-[#f0ead6] font-medium'
        >
          Crimson
        </motion.h2>

        {/* Subtitle - initially hidden */}
        <motion.h2 
          style={{ opacity: subtitleOpacity, y: subtitleY }}
          className='text-style italic text-[30px] md:text-[50px] text-[#f0ead6] font-medium absolute'
        >
          Where Richness Unfolds.
        </motion.h2>
      </div>
    </section>
  );
};

export default Contact;