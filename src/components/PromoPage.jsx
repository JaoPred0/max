import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PromoPage = () => {
  useEffect(() => {
    // Initial configuration for AOS
    AOS.init({
      duration: 1500, // Smooth animations
      easing: "ease-in-out", // Fluid transitions
      once: true, // Animations occur only once
      offset: 100, // Animation starts closer to the viewport
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-10 text-white px-4 sm:px-6 md:px-10">
      {/* Main Text */}
      <h1
        className="text-3xl sm:text-2xl md:text-2xl lg:text-2xl font-bold tracking-wide mb-6 text-center text-[#8de7f5]"
        data-aos="fade-down"
        style={{ transform: "rotate(3deg)" }} // Title tilt effect
      >
        ENJOY THE
      </h1>
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wide mb-6 text-center"
        data-aos="fade-up"
        style={{ transform: "rotate(-1deg)" }} // Subtitle tilt effect
      >
        Best TV Shows, <br /> Movies,{" "}
        <span className="text-[#a0a2a6]">and</span> Series
      </h2>
      <p
        className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-400 mb-10 text-center mt-5"
        data-aos="fade-up"
      >
        Your satisfaction is our pride and priority. Enjoy our service for
        almost free, paying just 1 euro per month for traffic!
      </p>

      {/* Interactive Buttons */}
      <div
        className="flex flex-col justify-center sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-lg"
        data-aos="zoom-in"
      >
        <button
          className="px-4 sm:px-6 py-2 sm:py-3 bg-pink-500 font-bold rounded-lg hover:bg-pink-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:ring-pink-300 w-full sm:w-auto"
        >
          REGISTRATION
        </button>
        <p className="text-sm sm:text-md md:text-lg text-gray-400 text-center">
          Bring a friend
        </p>
      </div>

      {/* Illustration Section */}
      <div className="absolute left-0 bottom-70 w-full max-w-lg" data-aos="fade-right">
        <img
          className="absolute left-0 bottom-1 w-60 sm:w-70 hidden lg:block"
          src="/carretel.png"
          alt="Carretel"
        />
      </div>
      <div className="absolute right-0 bottom-0 w-full max-w-lg" data-aos="fade-left">
        <img
          className="hidden lg:block absolute right-0 bottom-5 w-60 h-auto"
          src="/camera.png"
          alt="Camera"
        />
      </div>

      {/* Cards Section */}
      <div className="relative bg-opacity-50 py-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10"
          data-aos="fade-up"
        >
          {/* Card 1 */}
          <div
            className="group relative max-w-full h-auto border border-gray-400 rounded-lg bg-transparent transition-transform transform hover:rotate-1 hover:bg-gray-500 hover:bg-opacity-20 flex flex-col justify-center items-center text-center p-4"
            data-aos="flip-left"
          >
            <img
              src="/umbrella-icon.png"
              alt="Trusted Company Icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
              Trusted Company
            </h3>
            <p className="text-sm text-gray-400 group-hover:text-gray-200">
              The satisfaction and trust of our subscribers comes first.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="group relative max-w-full h-auto border border-gray-400 rounded-lg bg-transparent transition-transform transform hover:rotate-1 hover:bg-gray-500 hover:bg-opacity-20 flex flex-col justify-center items-center text-center p-4"
            data-aos="flip-up"
          >
            <img
              src="/headset-icon.png"
              alt="24/7 Support Icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
              24/7 Support
            </h3>
            <p className="text-sm text-gray-400 group-hover:text-gray-200">
              You can always contact us through the medium that is most
              convenient for you.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="group relative max-w-full h-auto border border-gray-400 rounded-lg bg-transparent transition-transform transform hover:rotate-1 hover:bg-gray-500 hover:bg-opacity-20 flex flex-col justify-center items-center text-center p-4"
            data-aos="flip-right"
          >
            <img
              src="/archive-icon.png"
              alt="Archive Icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
              Archive Up to 7 Days
            </h3>
            <p className="text-sm text-gray-400 group-hover:text-gray-200">
              Access to all national TV channels and a video library of movies
              and series.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPage;
