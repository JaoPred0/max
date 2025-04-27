import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Plataforma = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1500, // Smooth animations
      easing: "ease-in-out", // Fluid transitions
      once: true, // Animates only once
      offset: 100, // Starts animation closer to the viewport
    });
  }, []);

  return (
    <div className="flex flex-col text-white mt-20">
      {/* Main Content */}
      <div className="flex flex-col items-center gap-8 w-full">
        {/* Text Section */}
        <div
          className="text-left max-w flex flex-col sm:flex-row justify-arround items-center"
          data-aos="fade-up"
        >
          <h1
            className="text-3xl sm:text-7xl font-bold mb-6"
            style={{ transform: "rotate(-3deg)" }}
          >
            Smarter <br /> <span className="text-[#a0a2a6]">Than</span> Ever
          </h1>
          {/* Image */}
          <div data-aos="zoom-in">
            <img
              src="/3d-glasses.png"
              alt="3D Glasses"
              className="w-60 sm:w-100 h-auto mx-auto mb-6 sm:mb-0"
            />
          </div>
          <p
            className="text-sm sm:text-lg text-gray-400 mb-6 w-full text-center sm:text-left"
            data-aos="fade-right"
          >
            IPTV has never been so close to you. <br/>You just need to install it on
            your TV.
          </p>
        </div>

        {/* Platforms Section */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4 sm:px-6 md:px-10"
          data-aos="fade-up"
        >
          {/* Android */}
          <div
            className="flex flex-col items-center text-center border border-white rounded-lg p-4 hover:shadow-lg transition-shadow bg-[#06151c]"
            data-aos="flip-left"
          >
            <img src="/android-icon.png" alt="Android" className="mb-2" />
            <p className="text-sm font-medium">Android</p>
          </div>

          {/* Android TV */}
          <div
            className="flex flex-col items-center text-center border border-white rounded-lg p-4 hover:shadow-lg transition-shadow bg-[#06151c]"
            data-aos="flip-left"
          >
            <img src="/androidtv-icon.png" alt="Android TV" className="mb-2" />
            <p className="text-sm font-medium">Android TV</p>
          </div>

          {/* LG - Soon */}
          <div
            className="flex flex-col items-center text-center border border-white rounded-lg p-4 hover:shadow-lg transition-shadow bg-[#06151c]"
            data-aos="flip-right"
          >
            <img src="/lg-icon.png" alt="LG" className="w-16 h-16 mb-2" />
            <p className="text-sm font-medium text-yellow-500">LG (SOON)</p>
          </div>

          {/* Samsung - Soon */}
          <div
            className="flex flex-col items-center text-center border border-white rounded-lg p-4 hover:shadow-lg transition-shadow bg-[#06151c]"
            data-aos="flip-right"
          >
            <img src="/samsung-icon.png" alt="Samsung" className="mb-2" />
            <p className="text-sm font-medium text-yellow-500">
              Samsung (SOON)
            </p>
          </div>

          {/* Amazon Fire TV - Soon */}
          <div
            className="flex flex-col items-center text-center border border-white rounded-lg p-4 hover:shadow-lg transition-shadow bg-[#06151c]"
            data-aos="flip-up"
          >
            <img src="/firetv-icon.png" alt="Amazon Fire TV" className="mb-2" />
            <p className="text-sm font-medium text-yellow-500">
              Amazon Fire TV (SOON)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plataforma;
