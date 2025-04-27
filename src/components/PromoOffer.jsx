import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PromoOffer = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-white py-12 px-6 sm:px-12 lg:px-20">
      {/* Access for 7 Days Section */}
      <div
        className="flex flex-col items-center text-center mb-12 p-6 rounded-lg shadow-lg"
        style={{ backgroundColor: "rgba(6, 21, 28, 0.7)" }} // Transparent background
        data-aos="fade-up"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          Access for 7 Days
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
          Anywhere from any device! Over 400+ top TV channels. Movies, sports,
          series, shows, and much more. Choose one of the packages and get
          immediate access to the world of entertainment.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105">
          ONE WEEK FREE
        </button>
      </div>

      {/* Invite Your Friends Section */}
      <div
        className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg"
        style={{ backgroundColor: "rgba(6, 21, 28, 0.7)" }} // Transparent background
        data-aos="fade-right"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          Invite Your Friends
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
          Invite three friends and as long as they pay the subscription, we
          will offer it to you for free! As long as your friends are with us
          and pay the subscription.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105">
          INVITE YOUR FRIENDS
        </button>
      </div>
    </div>
  );
};

export default PromoOffer;
