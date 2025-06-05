import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/dubai-logo.svg";
const Navbar = () => {
  const [show, setShow] = useState(true); // Controls navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks last scroll position
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile nav toggle
  const [isScrolled, setIsScrolled] = useState(false); // Tracks scroll depth for background

  // Handle scroll behavior for navbar
  const controlNavbar = () => {
    const currentScrollY = window.scrollY;

    // Auto-hide navbar on scroll down, show on scroll up
    if (currentScrollY > lastScrollY) {
      setShow(false); // Hide
    } else {
      setShow(true); // Reveal
    }

    // Change background from transparent to solid after scrolling 50px
    if (currentScrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Toggle mobile menu open/close
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close mobile nav when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -80 }} // Hide on scroll down
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={Logo}
            alt="Dubai Travel Logo"
            className="w-10 h-10"
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.h1
            className="text-xl font-bold text-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            Dubai Travel
          </motion.h1>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <a href="#services" className="hover:text-primary scroll-smooth">
              Services
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="hover:text-primary scroll-smooth"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a href="#map" className="hover:text-primary scroll-smooth">
              Map
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary scroll-smooth">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl text-dark focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-6 py-4 space-y-4 font-medium shadow-inner"
          >
            <li>
              <a href="#services" onClick={closeMobileMenu} className="block">
                Services
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={closeMobileMenu}
                className="block"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#map" onClick={closeMobileMenu} className="block">
                Map
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMobileMenu} className="block">
                Contact
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
