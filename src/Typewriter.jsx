// Typewriter.js
import React from "react";
import Typical from "react-typical";

const Typewriter = () => {
  return (
    <Typical
      steps={[
        "WELCOME TO MY PORTFOLIO",
        5000,
        "REACT JS",
        5000,
        "SQL PROGRAMMING-[MYSQL] ",
        5000,
        "JAVA PROGRAMMING",
        5000,
        "MS-OFFICE",
        5000,
        "GIT & GITHUB",
        5000,
        "POSTMAN API FUNDAMENTALS",
        5000,
      ]}
      loop={Infinity}
      wrapper="p"
    />
  );
};

export default Typewriter;
