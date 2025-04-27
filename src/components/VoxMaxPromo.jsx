import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css';

const VoxMaxPromo = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1500, // Animation duration
      easing: "ease-in-out", // Smooth transitions
      once: true, // Trigger animation only once
      offset: 100, // Adjust starting point of animation
    });
  }, []);

  return (
    <div className="relative text-white min-h-screen w-full">
      {/* Header Section */}
      <div
        className="absolute top-10 left-4 sm:left-8 md:left-16 lg:left-20 z-10 text-center md:text-left fade-in"
        data-aos="fade-down"
      >
        <h1 className="text-3xl sm:text-5xl font-bold mb-6">
          VoxMax Is Easily Accessible <br /> And Very Convenient For You
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Subscribe to the widest media library of movies, shows, and series.
          <br />
          Enjoy the highest quality video content on the market.
        </p>
      </div>

      {/* Fullscreen Banner */}
      <div
        className="relative w-full h-screen hidden sm:hidden lg:block slide-in-right"
      >
        <img
          className="object-cover w-full h-full"
          src="./banner.png"
          alt="VoxMax Promotional Banner"
        />
      </div>
    </div>
  );
};

export default VoxMaxPromo;
