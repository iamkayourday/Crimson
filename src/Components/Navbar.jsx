import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    {to:"hero", text:"Home"},
    { to: "our-wine", text: "Our wines" },
    { to: "vineyards", text: "Vineyard" },
    { to: "food-pairings", text: "Food Parings" },
    { to: "heritage", text: "Heritage" },
    { to: "contacts", text: "Contact" },
  ];

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/30 border-b border-white/10 shadow-lg"
            : "bg-white/20"
        }`}
      >
        <div className="max-w-8xl mx-auto px-5 sm:px-6 lg:px-8 flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="group cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={closeMenu}
            aria-label="Go to About section"
          >
            <motion.img
              src="wine.svg"
              alt="Logo"
              className="h-10 w-10"
              whileHover={{ rotate: 20 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-1 mr-40">
            {navItems.map((item) => (
              <motion.div
                key={item.to}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="relative text-[#8B0000] hover:text-[#8B0000]/80 cursor-pointer transition-colors duration-300 py-2 px-4 text-sm uppercase tracking-wider font-medium group"
                  activeClass="text-[#8B0000] font-bold"
                  spy={true}
                >
                  {item.text}
                  <motion.span
                    className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#8B0000] transition-all duration-300 group-hover:w-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            ref={menuButtonRef}
            className="lg:hidden text-[#8B0000] text-2xl z-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000]/50"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          >
            <motion.div
              ref={mobileMenuRef}
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute top-0 left-0 w-full h-full bg-[#F9F8F4] flex flex-col items-center justify-center overflow-y-auto"
            >
              <div className="w-full max-w-md px-6 py-12">
                {/* Logo */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={menuVariants}
                  className="flex justify-center mb-12"
                >
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer"
                    onClick={closeMenu}
                    aria-label="Go to About section"
                  >
                    <motion.img
                      src="wine.svg"
                      alt="Logo"
                      className="h-16 w-16"
                      whileHover={{ rotate: 30 }}
                    />
                  </Link>
                </motion.div>

                {/* Menu Items */}
                <nav className="flex flex-col items-center space-y-8">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.to}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full text-center"
                    >
                      <Link
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="relative text-[#8B0000] hover:text-[#8B0000]/80 cursor-pointer transition-colors duration-300 py-3 text-2xl font-medium"
                        onClick={closeMenu}
                        activeClass="text-[#8B0000] font-bold"
                        spy={true}
                      >
                        {item.text}
                        <motion.span
                          className="absolute left-1/2 bottom-0 w-0 h-1 bg-[#8B0000] transform -translate-x-1/2"
                          whileHover={{ width: "80%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Close Button */}
                <motion.button
                  onClick={closeMenu}
                  className="absolute top-6 right-6 text-[#8B0000] p-2 rounded-full hover:bg-[#8B0000]/10 transition-colors duration-200"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX size={28} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;