// src/components/Loader.jsx
import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/lottie1.json";

const Loader = () => {
  return (
    <div className="loader-container">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
};

export default Loader;
