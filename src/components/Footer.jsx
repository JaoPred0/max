import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "animate.css";

const Footer = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Smooth animation transitions
      once: true, // Animations will occur only once
    });
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-10 px-6 sm:px-12">
      <div
        className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        data-aos="fade-up" // Add AOS animation to container
      >
        {/* Left Section */}
        <div className="animate__animated animate__fadeInLeft"> {/* Animate.css effect */}
          <h1 className="text-4xl font-bold mb-4">MAX</h1>
          <ul className="text-sm text-gray-400 mb-6 space-y-2">
            <li><a href="#" className="hover:text-white">Register</a></li>
            <li><a href="#" className="hover:text-white">Log In</a></li>
            <li><a href="#" className="hover:text-white">Refund</a></li>
            <li><a href="#" className="hover:text-white">Reseller</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
          <div className="flex items-center gap-3">
            <img
              src="/android-icon.png"
              alt="Android Logo"
              className="w-8 h-8"
            />
            <button className="bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600">
              Download App
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="animate__animated animate__fadeInRight"> {/* Animate.css effect */}
          <h2 className="text-lg font-semibold mb-4">CONTACT US</h2>
          <p className="text-sm text-gray-400 mb-2">
            <span className="font-semibold">Phone:</span> +1 (469) 902-4765
          </p>
          <p className="text-sm text-gray-400 mb-4">
            <span className="font-semibold">Email:</span> Support@voxmax.tv
          </p>
          <div className="flex items-center gap-4 mb-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fa fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
          <p className="text-xs text-gray-400">
            Copyright © 2024 VOXMAX, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
