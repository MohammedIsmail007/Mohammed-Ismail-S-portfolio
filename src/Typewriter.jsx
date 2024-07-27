// Typewriter.js
import React from "react";
import Typical from "react-typical";

const Typewriter = () => {
  return (
    <Typical
      steps={[
        "WELCOME TO MY PORTFOLIO",
        9000,
        "REACT JS",
        9000,
        "SQL PROGRAMMING-[MYSQL] ",
        9000,
        "JAVA PROGRAMMING",
        9000,
        "MS-OFFICE",
        9000,
        "GIT & GITHUB",
        9000,
        "POSTMAN API FUNDAMENTALS",
        9000,
      ]}
      loop={Infinity}
      wrapper="p"
    />
  );
};

export default Typewriter;
