// Typewriter.js
import React from "react";
import Typical from "react-typical";

const TypewriterPortfolio = () => {
  return (
    <Typical
      steps={[
        "Research & Developer🔍",
        3000,
        "WEB-DEVELOPER🧑‍💻",
        2000,
        "GAMER🎮",
        2000,
        "TECHIE🛜",
        2000,
      ]}
      loop={Infinity}
      wrapper="p"
    />
  );
};

export default TypewriterPortfolio;
