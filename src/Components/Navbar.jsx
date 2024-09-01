import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Fragments/Button";

const navMenu = [
  { name: "Work", url: "#work" },
  { name: "About", url: "#about" },
  { name: "Service", url: "#service" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuVariants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkVariants = {
    initial: { y: 30, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  const containerVariants = {
    initial: {
      transition: { staggerChildren: 0.09, staggerDirection: -1 },
    },
    open: {
      transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 },
    },
  };

  return (
    <nav className={`fixed w-full px-6 lg:px-32 flex justify-between items-center py-6 z-10 transition-all duration-300 ${isScrolled ? "bg-white text-black shadow-lg" : "bg-transparent text-white"}`}>
      <div className="font-Inter font-normal text-xl tracking-wide">
        <a href="#home">Akbarrbni Creative</a>
      </div>

      {/* Hamburger Button with 2 Lines */}
      <motion.button className={`lg:hidden flex flex-col justify-center items-center w-8 h-8 z-[100] focus:outline-none ${isScrolled || isOpen ? "text-black" : "text-white"}`} onClick={toggleMenu}>
        <motion.div className={`w-8 h-[2px] bg-current rounded-full transition-transform ${isOpen ? "transform rotate-45 translate-y-[3px]" : ""}`} />
        <motion.div className={`w-8 h-[2px] bg-current rounded-full transition-transform ${isOpen ? "transform -rotate-45 -translate-y-[0px]" : "mt-[6px]"}`} />
      </motion.button>

      <div className="hidden lg:flex gap-x-8">
        {navMenu.map((menu, index) => (
          <a key={index} href={menu.url} className="py-2 transition-all ease-in-out duration-200 hover:text-gray-900 text-lg">
            {menu.name}
          </a>
        ))}
        <Button classname="bg-black">Contact</Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center z-[99]" variants={menuVariants} initial="initial" animate="animate" exit="exit" style={{ originY: 0 }}>
            <motion.ul variants={containerVariants} initial="initial" animate="open" exit="initial" className="flex flex-col items-center gap-y-4">
              {navMenu.map((menu, index) => (
                <motion.li key={index} variants={linkVariants}>
                  <a href={menu.url} className="text-2xl" onClick={() => setIsOpen(false)}>
                    {menu.name}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={linkVariants}>
                <Button classname="bg-black text-white">Contact</Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
