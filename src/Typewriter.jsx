// Typewriter.js
import React from "react";
import Typical from "react-typical";

const Typewriter = () => {
  return (
    <Typical
      steps={[
        "WELCOME TO MY PORTFOLIO",
        3000,
        "REACT JS",
        3000,
        "SQL PROGRAMMING-[MYSQL] ",
        3000,
        "JAVA PROGRAMMING",
        3000,
        "MS-OFFICE",
        3000,
        "GIT & GITHUB",
        3000,
      ]}
      loop={Infinity}
      wrapper="p"
    />
  );
};

export default Typewriter;
