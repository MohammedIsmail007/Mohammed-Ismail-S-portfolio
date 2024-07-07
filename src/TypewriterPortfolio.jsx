// Typewriter.js
import React from "react";
import Typical from "react-typical";

const TypewriterPortfolio = () => {
  return (
    <Typical
      steps={["WEB-DEVELOPER", 5000, "GAMER", 6000, "TECHIE", 7000]}
      loop={Infinity}
      wrapper="p"
    />
  );
};

export default TypewriterPortfolio;
