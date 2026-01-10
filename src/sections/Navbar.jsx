import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  
  // Track scroll progress and apply smooth spring physics
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Desktop Floating Glass Dock */}
      <nav className="hidden md:flex fixed top-10 left-1/2 -translate-x-1/2 z-50 w-max px-8 py-3 backdrop-blur-md bg-black/20 border border-white/10 rounded-full shadow-lg overflow-hidden">
        <div className="flex items-center gap-6">
          

          {/* Navigation Links with Pill Animation */}
          <div className="flex items-center gap-2 relative">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium transition-colors text-zinc-400 hover:text-white z-10"
                onMouseEnter={() => setActiveLink(link.href)}
                onMouseLeave={() => setActiveLink("")}
              >
                {activeLink === link.href && (
                  <motion.span
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Mission Progress Indicator - Oxygen Bar */}
        <motion.div
          style={{ 
            scaleX: smoothProgress,
            transformOrigin: "left"
          }}
          className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        />
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-5 right-5 z-50 flex cursor-pointer text-zinc-400 hover:text-white focus:outline-none transition-colors"
      >
        <img
          src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
          className="w-6 h-6"
          alt="toggle"
        />
      </button>

      {/* Mobile Floating Glass Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed top-20 right-5 z-50 backdrop-blur-lg bg-zinc-900/90 border border-white/10 rounded-2xl shadow-xl p-6 min-w-[200px]"
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-zinc-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
