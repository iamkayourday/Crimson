import React from "react";

const About = () => {
  return (
    <div className="mt-20 p-6 max-w-5xl mx-auto">
      <div className="flex justify-center">
        <img src="about.avif" alt="" className="h-auto w-auto mb-5" />
      </div>
      <h2 className="text-center text-[#8b0000] text-[55px] text-style italic mb-12">
        About us
      </h2>
      <p className="text-center text-[#8b0000] max-w-4xl font-medium leading-relaxed">
        At Crimson wine, we believe that great wine is crafted not only by hand
        but also by heart. Founded in 2001, our boutique winery is nestled in
        the heart of Lagos, where we cultivate our vineyards with care,
        commitment, and respect for nature. Our journey began with a passion for
        producing high-quality wines that embody the character of our unique
        terroir. Each bottle reflects our dedication to sustainable practices,
        traditional techniques, and innovation. From vine to glass, we are
        involved in every step of the process, ensuring that every sip delivers
        an authentic and memorable experience. We invite you to explore our
        collection and share in the story that has brought us here—a story of
        craftsmanship, passion, and love for the art of winemaking.
      </p>
    </div>
  );
};

export default About;
