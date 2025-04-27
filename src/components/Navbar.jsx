import React, { useState } from "react";
import "animate.css"; // Import animate.css for animations
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage menu state

  // Fixed English Texts
  const texts = {
    signIn: "Sign In",
    lang: "EN",
    altLang: "PT",
  };

  // Toggle hamburger menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full flex items-center justify-between px-8 py-5 animate__animated animate__slideInDown animate__faster">
      {/* Logo */}
      <div className="text-white font-bold text-2xl animate__animated animate__zoomIn animate__faster">
        <img className="w-30" src="/logo.png" alt="Logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4 text-white text-sm animate__animated animate__zoomIn animate__faster">
        {/* Language Selector (Fixed to EN) */}
        <div className="relative flex items-center gap-2 cursor-pointer w-24 h-8 border border-gray-600 rounded-full p-1 transition-all duration-300">
          <div className="absolute top-1 left-1 w-10 h-6 rounded-full bg-gray-700" />
          <div className="flex justify-between w-full px-2 z-10">
            <span className="font-bold">{texts.lang}</span>
            <span className="font-bold">{texts.altLang}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-600" />

        {/* Sign In Button */}
        <button className="hover:underline transition-all duration-300">
          {texts.signIn}
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center text-white" onClick={toggleMenu}>
        <i className="fa fa-bars text-2xl"></i>
      </div>

      {/* Collapsible Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 right-0 w-full bg-gray-800 text-white p-5 flex flex-col gap-4 md:hidden animate__animated animate__fadeIn animate__faster">
          <div className="flex justify-center items-center gap-4 w-full">
            {/* Language Selector */}
            <div className="relative flex items-center gap-2 cursor-pointer w-24 h-8 border border-gray-600 rounded-full p-1">
              <div className="absolute top-1 left-1 w-10 h-6 rounded-full bg-gray-700" />
              <div className="flex justify-between w-full px-2 z-10">
                <span className="font-bold">{texts.lang}</span>
                <span className="font-bold">{texts.altLang}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-600" />

            {/* Sign In Button */}
            <button className="hover:underline">{texts.signIn}</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
