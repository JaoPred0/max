import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AndroidPromo = () => {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1500, // Smooth animations
      easing: "ease-in-out", // Fluid transitions
      once: true, // Animations occur only once
      offset: 100, // Starts animations closer to the viewport
    });
  }, []);

  return (
    <div
      className="flex flex-row justify-center text-white p-6 sm:p-12 lg:p-20 w-full"
      data-aos="fade-up"
    >
      {/* Main Section */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-8"
        data-aos="fade-right"
      >
        {/* Text Content */}
        <div className="max-w-lg">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-6"
            data-aos="fade-down"
          >
            <img className="" src="./android-icon.png" alt="Android Logo" />
          </h1>
          <p
            className="text-lg text-gray-300 mb-6 leading-relaxed"
            data-aos="fade-up"
          >
            Subscribe to the widest media library of movies, shows, and series.
            Enjoy the highest quality video content on the market.
          </p>
          {/* Buttons */}
          <div className="flex gap-4" data-aos="zoom-in">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors">
              GET IT ON Google Play
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div data-aos="zoom-in">
        <img
          className="w-80"
          src="./logo.png"
          alt="Rotated Logo"
          style={{ transform: "rotate(90deg)" }}
        />
      </div>
    </div>
  );
};

export default AndroidPromo;
