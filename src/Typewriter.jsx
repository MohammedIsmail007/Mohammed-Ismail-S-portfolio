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
        2000,
        "PYTHON FLASK",
        2000,
        "FAST API & RESTFUL API",
        2000,
        "SQL PROGRAMMING [MySQL, PSQL]",
        2500,
        "JAVA PROGRAMMING",
        2000,
        "MS OFFICE, Google DOCS",
        2000,
        "GIT & GITHUB",
        2000,
        "POSTMAN API FUNDAMENTALS",
        2500,
        "RESEARCH & DEVELOPMENT",
        2500,
        "AI - PASSIONATE",
        2000,
      ]}
      loop={Infinity}
      wrapper="p"
    />
  );
};

export default Typewriter;
