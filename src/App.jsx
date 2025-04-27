import React from "react";
import Navbar from "./components/Navbar";
import "animate.css";
import "font-awesome/css/font-awesome.min.css";
import PromoPage from "./components/PromoPage";
import SmarterView from "./components/Plataforma";
import AndroidPromo from "./components/AndroidPromo";
import VoxMaxPromo from "./components/VoxMaxPromo";
import ScrollingText from "./components/ScrollingText";
import PromoOffer from "./components/PromoOffer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a171e] bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.04)_0px,rgba(255,255,255,0.04)_40px,transparent_40px,transparent_80px)]">
      <Navbar />
      <PromoPage />
      <SmarterView />
      <AndroidPromo />
      <VoxMaxPromo />
      <ScrollingText />
      <PromoOffer />
      <Footer />
    </div>
  );
};

export default App;
