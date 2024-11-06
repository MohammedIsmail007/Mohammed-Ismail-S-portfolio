import React, { useEffect, useState } from "react";
import "./App.css";
import Typewriter from "./Typewriter";
import TypewriterPortfolio from "./TypewriterPortfolio";
import CustomAlert from "./CustomALert";
import { Button, Card } from "flowbite-react";
import Footer from "./Footer";

// images import section
import img1 from "./assets/certificates/figma.png";
import img2 from "./assets/certificates/fronenddev.png";
import img3 from "./assets/certificates/gitgithub.png";
import img4 from "./assets/certificates/GuviCertification.png";
import img5 from "./assets/certificates/htmlcssjsintern.png";
import img6 from "./assets/certificates/introtojs.png";
import img7 from "./assets/certificates/mysql.png";
import img8 from "./assets/certificates/placementprep.png";
import img9 from "./assets/certificates/react.png";
import img10 from "./assets/certificates/srmclvl1.png";
import img11 from "./assets/certificates/srmclvl2.png";
import img12 from "./assets/certificates/srmclvl3.png";
import pdfdownload from "./assets/resume.pdf";
import img13 from "./assets/certificates/postmanapi.png";
import img14 from "./asset/certificates/Promptengieering.png";
import img15 from "./asset/certificates/psqlcertificate.png
function App() {
  const [portfolio, setPortfolio] = useState(true);
  const [aboutMe, setAboutMe] = useState(false);
  const [projects, setProjects] = useState(false);
  const [skills, setSkills] = useState(false);
  const [certifications, setCertifications] = useState(false);
  const [contact, setContact] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const mySkills = [
    { name: "JAVA PROGRAMMING", level: "80%" },
    { name: "REACT JS", level: "85%" },
    { name: "BOOTSTRAP & TAILWIND CSS ", level: "80%" },
    { name: "SQL-PROGRAMING ", level: "80%" },
    { name: "POSTGRESQL ", level: "60%" },
    { name: "POSTMAN API FUNDAMENTALS ", level: "85%" },
    { name: "FIGMA UI/UX TOOL", level: "60%" },
    { name: "EXCEL, POWER POINT, WORD  ", level: "80%" },
    { name: "GIT & GITHUB ", level: "60%" },
    { name: "PROMPT ENGINEERING ", level: "75%" },
  ];

  const myCertifications = [
    {
      id: 14,
      title: "Certification in PROMPT ENGINEERING AT UDEMY",
      image: img14,
    },
     {
      id: 15,
      title: "Certification in POSTGRESQL AT UDEMY",
      image: img15,
    },
    {
      id: 9,
      title: "Certification in React Js Essential Program",
      image: img9,
    },

    {
      id: 4,
      title: "Certification in Python",
      image: img4,
    },
    {
      id: 3,
      title: "Certification in Git & Github",
      image: img3,
    },
    {
      id: 13,
      title: "Certification in Postman Api certification",
      image: img13,
    },

    {
      id: 7,
      title: "Certification in MySQL",
      image: img7,
    },
    {
      id: 5,
      title: "Certification in HTML, CSS, JS INTERNSHIP",
      image: img5,
    },
    {
      id: 2,
      title: "Certification in Frontend Development",
      image: img2,
    },

    {
      id: 6,
      title: "Certification in Introduction to JS",
      image: img6,
    },

    {
      id: 1,
      title: "Certification in Figma",
      image: img1,
    },

    {
      id: 8,
      title: "Certification iN 2 Days Placement preparation ",
      image: img8,
    },

    {
      id: 10,
      title: "Certification in SRM Certification Level 1",
      image: img10,
    },
    {
      id: 11,
      title: "Certification in SRM Certification Level 2",
      image: img11,
    },
    {
      id: 12,
      title: "Certification in SRM Certification Level 3",
      image: img12,
    },
    ,
  ];
  const myProjects = [
    {
      title: "CGPA Calculation",
      description:
        "A web page built with HTML, CSS, and JavaScript to help students calculate their CGPA and GPA easily.",
      githubLink: "https://github.com/MohammedIsmail007/alameencgpareactapp",
      webpageLink: "https://alameencgpareactapp.onrender.com/",
    },
    {
      title: "News App",
      description:
        "A news application developed to provide the latest news articles using React.js.",
      githubLink:
        "https://github.com/MohammedIsmail007/newsapp-using-react-with-news-api",
      webpageLink: "REMOVED",
    },
    {
      title: "E-Shop Project Using Vite Tool",
      description:
        "An e-commerce project created using the Vite tool to enhance the development experience with React.js.",
      githubLink:
        "https://github.com/MohammedIsmail007/e-shop-project-react-vite",
      webpageLink: "https://e-shop-project-react-vite.onrender.com/",
    },
    {
      title: "Weather App",
      description:
        "A simple weather application built with JavaScript to display weather information based on user input.",
      githubLink:
        "https://github.com/MohammedIsmail007/Weather-app-using-javascript/",
      webpageLink:
        "https://mohammedismail007.github.io/Weather-app-using-javascript/",
    },
    {
      title: "To-Do List",
      description:
        "A to-do list application created with JavaScript to help users manage their tasks efficiently.",
      githubLink: "https://github.com/MohammedIsmail007/todolist",
      webpageLink: "https://mohammedismail007.github.io/todolist/",
    },
    {
      title: "Rock Paper Scissor Game",
      description:
        "A classic rock-paper-scissors game developed with JavaScript for an interactive gaming experience.",
      githubLink:
        "https://github.com/MohammedIsmail007/rock-paper-scissor-game",
      webpageLink:
        "https://mohammedismail007.github.io/rock-paper-scissor-game/",
    },
    {
      title: "CGPA Calculation (JavaScript)",
      description:
        "A web page built with JavaScript to help students calculate their CGPA and GPA easily.",
      githubLink: "https://github.com/MohammedIsmail007/cgpa-al-ameen",
      webpageLink: "https://mohammedismail007.github.io/cgpa-al-ameen/",
    },
    {
      title: "UI/UX Design Project",
      description:
        "A UI/UX design project created using Figma for enhancing user experience and interface design skills.",
      githubLink: "NO LINK",
      projectLink:
        "https://www.figma.com/file/iTlxyVzkiKb5mmXjXFKkWq/E-commerce?type=design&mode=design&t=NIqOZmSHitcYueuI-1",
    },
  ];

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div className="flex flex-wrap flex-col justify-center items-center h-full text-center">
        {/* ===================================|| HEADER SECTION ||================================= */}
        <header className="flex flex-wrap text-white  justify-center gap-5 w-full  h-full">
          <div className="text-center  text-4xl font-mono">
            MY{" "}
            <span className="text-yellow-400 font-serif font-semibold">
              PORTFOLIO
            </span>
          </div>
          <div>
            <div>
              <marquee
                behavior="scroll"
                direction="row"
                className="text-xl"
                onMouseEnter={() => {
                  const marquee = document.querySelector("marquee");
                  marquee.stop();
                }}
                onMouseLeave={() => {
                  const marquee = document.querySelector("marquee");
                  marquee.start();
                }}
              >
                <p>
                  As an enthusiastic and detail-oriented front-end developer,{" "}
                  <span
                    className="hover:cursor-pointer text-yellow-500 font-bold font-serif"
                    onClick={() => {
                      setAboutMe(!aboutMe);
                      setSkills(false);
                      setCertifications(false);
                      setProjects(false);
                      setContact(false);
                      setPortfolio(false);
                    }}
                  >
                    read more...
                  </span>
                </p>
              </marquee>
            </div>
          </div>

          <a
            href={pdfdownload}
            target="_blank"
            download={"Mohammed Ismail S Resume"}
          >
            <button className="border p-2 border-blue-500 font-serif  hover:transition-all hover:bg-blue-800 ">
              RESUME <i class="fa fa-download" aria-hidden="true"></i>
            </button>
          </a>
        </header>
        {/* ===================================|| CUSTOM ALERT ||================================= */}
        {showAlert && (
          <CustomAlert
            message="WELCOME TO MY PORTFOLIO"
            onClose={handleCloseAlert}
          />
        )}
        {/* ===================================|| MAIN SECTION ||================================= */}
        <div className=" font-serif  text-center p-2 pb-0 m-5">
          <Typewriter />
        </div>
        {/* ===================================|| BUTTON SECTION ||================================= */}
        <div className=" border h-fit bg-transparent  rounded-lg bg-white bg-opacity-15  shadow-2xl  ">
          <div id="buttons" className=" flex flex-wrap justify-center gap-2 ">
            <button
              onClick={() => {
                setPortfolio(!portfolio);
                setAboutMe(false);
                setContact(false);
                setSkills(false);
                setCertifications(false);
                setProjects(false);
              }}
              className="hover:bg-blue-500 hover:backdrop:blur-md hover:transition-all text-white pt-1 pb-1 pr-2 pl-2 w-fit  rounded-2xl m-2 backdrop:blur-sm  hover:text-lime-300  font-serif font-bold"
            >
              Portfolio
            </button>

            <button
              onClick={() => {
                setAboutMe(!aboutMe);
                setPortfolio(false);
                setContact(false);
                setSkills(false);
                setCertifications(false);
                setProjects(false);
              }}
              className="hover:bg-blue-500 hover:backdrop:blur-md hover:transition-all text-white pt-1 pb-1 pr-2 pl-2 w-fit  rounded-2xl m-2 backdrop:blur-sm  hover:text-lime-300  font-serif font-bold"
            >
              About Me
            </button>
            <button
              onClick={() => {
                setSkills(!skills);
                setPortfolio(false);
                setAboutMe(false);
                setContact(false);
                setCertifications(false);
                setProjects(false);
              }}
              className="hover:bg-blue-500 hover:backdrop:blur-md hover:transition-all text-white pt-1 pb-1 pr-2 pl-2 w-fit  rounded-2xl m-2 backdrop:blur-sm  hover:text-lime-300  font-serif font-bold"
            >
              Skills
            </button>
            <button
              onClick={() => {
                setProjects(!projects);
                setPortfolio(false);
                setAboutMe(false);
                setSkills(false);
                setCertifications(false);
                setContact(false);
              }}
              className=" hover:bg-blue-500 hover:backdrop:blur-md hover:transition-all text-white pt-1 pb-1 pr-2 pl-2 w-fit  rounded-2xl m-2 backdrop:blur-sm  hover:text-lime-300  font-serif font-bold"
            >
              Projects
            </button>
            <button
              onClick={() => {
                setCertifications(!certifications);
                setPortfolio(false);
                setAboutMe(false);
                setSkills(false);
                setProjects(false);
                setContact(false);
              }}
              className=" hover:bg-blue-500 hover:backdrop:blur-md hover:transition-all text-white pt-1 pb-1 pr-2 pl-2 w-fit  rounded-2xl m-2 backdrop:blur-sm  hover:text-lime-300  font-serif font-bold"
            >
              Certifications
            </button>
            <button
              onClick={() => {
                setContact(!contact);
                setPortfolio(false);
                setAboutMe(false);
                setSkills(false);
                setProjects(false);
                setCertifications(false);
              }}
              className=" hover:bg-blue-500 hover:backdrop:blur-md hover:transition-all text-white pt-1 pb-1 pr-2 pl-2 w-fit  rounded-2xl m-2 backdrop:blur-sm  hover:text-lime-300  font-serif font-bold"
            >
              Contact
            </button>
          </div>
        </div>
        {/* ===================================|| BUTTON CONTENT SECTION ||================================= */}
        <div>
          {/* ===================================|| PORTFOLIO BUTTON CONTENT SECTION ||================================= */}
          <div
            className={`${
              portfolio
                ? "portfolioContainer flex flex-wrap h-fit justify-center mt-4 p-2 items-center border  bg-transparent  rounded-lg bg-white bg-opacity-15  shadow-2xl"
                : " hidden"
            } `}
          >
            <p className="text-4xl font-bold font-mono">
              HI I'M <br />
              <span className="  text-yellow-400 opacity-80 font-serif font-semibold text-5xl">
                MOHAMMED
              </span>{" "}
              <br />
              <span className=" text-black  font-serif font-semibold text-5xl">
                ISMAIL
              </span>{" "}
              <span className="text-yellow-400 text-3xl">
                {<TypewriterPortfolio />}
              </span>{" "}
              <button
                className=" font-mono text-sm border p-2 rounded-sm hover:bg-blue-600 hover:text-white"
                type="button"
                onClick={() => {
                  setPortfolio(false);
                  setAboutMe(true);
                  setSkills(false);
                  setProjects(false);
                  setCertifications(false);
                  setContact(false);
                }}
              >
                About Me
              </button>
            </p>
          </div>
          {/* ===================================|| ABOUT ME BUTTON CONTENT SECTION ||================================= */}
          <div
            className={`${
              aboutMe
                ? "flex flex-wrap h-fit text-white max-md:p-7 justify-center mt-4 p-2 items-center border  bg-transparent  rounded-lg shadow-2xl"
                : " hidden"
            } `}
          >
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                About Me
              </h2>
              <p className="text-lg text-white">
                As an{" "}
                <span className="font-semibold border-orange-400 border-b-2 border-dotted text-green-400">
                  enthusiastic
                </span>{" "}
                <span className="font-semibold border-orange-400 border-b-2 border-dotted text-green-400">
                  and
                </span>{" "}
                <span className="font-semibold border-orange-400 border-b-2 border-dotted text-green-400">
                  quick-learning
                </span>{" "}
                <span className="font-semibold border-orange-400 border-b-2 border-dotted text-green-400">
                  front-end developer
                </span>
                , I bring a strong foundation in{" "}
                <span className="font-semibold border-orange-400 border-b-2 border-dotted text-green-400">
                  HTML,
                </span>{" "}
                <span className="font-semibold border-orange-400 border-b-2 border-dotted text-green-400">
                  CSS
                </span>{" "}
                ,{" "}
                <span className="font-semibold border-orange-400 border-b-2 border-dotted text-green-400">
                  JavaScript
                </span>{" "}
                ,
                <span className="font-semibold border-orange-400 border-b-2 border-dotted text-green-400">
                  and
                </span>{" "}
                <span className="font-semibold border-orange-400 border-b-2 border-dotted text-green-400">
                  React.js {""}
                </span>
                {""}
                to the table. I have hands-on experience with various projects,
                including{" "}
                <span className="font-semibold text-green-400">
                  <a
                    href="https://alameencgpareactapp.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    CGPA calculators{" "}
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  ,{" "}
                  <a
                    href="https://mohammedismail007.github.io/Weather-app-using-javascript/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    weather apps{" "}
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  , and{" "}
                  <a
                    href="https://e-shop-project-react-vite.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    e-shop sites{" "}
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                </span>
                , which showcase my ability to build functional and
                user-friendly web applications. My proficiency extends to using
                tools like{" "}
                <span className="font-semibold text-green-400">Figma</span> for
                UI/UX design and{" "}
                <span className="font-semibold text-green-400">Vite</span> for
                efficient project development. With a{" "}
                <span className="font-semibold text-green-400">
                  Bachelor’s degree in Computer Science and Engineering
                </span>
                , I am well-equipped to tackle real-world web development
                challenges. I am passionate about continuous learning and eager
                to contribute my skills to innovative projects while growing
                within a dynamic team.
              </p>
            </div>
          </div>
          {/* ===================================|| SKILLS BUTTON CONTENT SECTION ||================================= */}
          <div
            className={`${
              skills
                ? "flex flex-wrap h-fit  text-white  justify-center mt-4 p-2 items-center border  bg-transparent  rounded-lg shadow-2xl"
                : " hidden"
            } `}
          >
            <div className=" py-3 ">
              <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
              <div className="space-y-6">
                {mySkills.map((skill, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <div className="flex justify-between px-4 py-2  text-white rounded-t-lg">
                      <span>{skill.name}</span> <span> {skill.level} </span>
                    </div>
                    <div className="w-full bg-white h-3 rounded-lg">
                      <div
                        className="bg-blue-500 h-full w-full"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* ===================================|| PROJECT BUTTON CONTENT SECTION ||================================= */}
          <div
            className={`${
              projects
                ? " flex flex-wrap h-fit  text-white justify-center mt-4 p-2 items-center border  bg-transparent  rounded-lg shadow-2xl"
                : " hidden"
            } `}
          >
            <div className="flex flex-wrap h-80 overflow-y-scroll justify-around bg-transparent m-1 ">
              <div className="flex flex-wrap justify-around gap-5 p-3">
                {myProjects.map((project, i) => {
                  return (
                    <Card
                      key={i}
                      className="max-w-sm bg-transparent bg-white bg-opacity-10"
                    >
                      <h5 className="text-2xl font-bold tracking-tight text-orange-400 font-serif  dark:text-white">
                        {project.title}
                      </h5>
                      <p className="font-normal text-white text-opacity-85 dark:text-gray-400">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap justify-around gap-2 mt-2">
                        <a href={project.githubLink}>
                          {" "}
                          <Button className="text-black bg-white w-fit">
                            <p>
                              {" "}
                              Github repo{" "}
                              <i
                                className="fa fa-external-link font-semibold text-blue-600"
                                aria-hidden="true"
                              ></i>
                            </p>
                          </Button>
                        </a>

                        <a href={project.webpageLink}>
                          {" "}
                          <Button className="text-black bg-white w-fit">
                            <p>
                              {" "}
                              Live Demo{" "}
                              <i
                                className="fa fa-external-link font-semibold text-blue-600"
                                aria-hidden="true"
                              ></i>
                            </p>
                          </Button>
                        </a>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </div>
          {/* ===================================|| CERTIFICATIONS BUTTON CONTENT SECTION ||================================= */}
          <div
            className={`${
              certifications
                ? " flex flex-wrap h-fit  text-white justify-center mt-4 p-2 items-center border   bg-transparent  rounded-lg shadow-2xl"
                : " hidden"
            } `}
          >
            <div className="flex flex-wrap h-80 overflow-y-scroll justify-around bg-transparent m-1 ">
              <div className="flex flex-wrap justify-center p-3 gap-5">
                {myCertifications.map((certification, index) => (
                  <Card
                    key={index}
                    className="max-w-sm bg-transparent p-3"
                    imgAlt={certification.title}
                    imgSrc={certification.image}
                  >
                    <h3 className="font-bold ">{certification.title}</h3>
                  </Card>
                ))}
              </div>
            </div>
            <i
              className="fa fa-angle-down transition-all bounce"
              aria-hidden="true"
            ></i>
          </div>
          {/* ===================================|| CONTACT BUTTON CONTENT SECTION ||================================= */}
          <div
            className={`${
              contact
                ? "flex flex-wrap h-fit  text-white justify-center mt-4 p-2 items-center border   bg-transparent  rounded-lg shadow-2xl"
                : " hidden"
            } `}
          >
            <div className="font-mono">
              <p>
                <i class="fa fa-map-pin" aria-hidden="true">
                  <br /> <br /> LOCATION
                </i>
                <br />
                <span className=" font-mono text-red-300 border-b-2 border-dotted ">
                  <a href="https://maps.app.goo.gl/8pJShamQah4gEjdj8">
                    Tiruppur-638 751, Tamil Nadu{" "}
                    <i class="fa fa-map" aria-hidden="true"></i>{" "}
                    <i
                      class="fa fa-external-link-square"
                      aria-hidden="true"
                    ></i>
                  </a>
                </span>
              </p>
              <br />
              <p>
                <i class="fa fa-phone" aria-hidden="true">
                  <br /> <br /> PHONE
                </i>
                <br />
                <span className=" font-mono text-red-300 border-b-2 border-dotted ">
                  <a href="tel:+919788096405">
                    Call +91 97880 96405{" "}
                    <i class="fa fa-mobile-phone" aria-hidden="true"></i>
                  </a>
                </span>
              </p>
              <br />
              <p>
                <i class="fa fa-location-arrow" aria-hidden="true">
                  <br /> <br /> EMail
                </i>
                <br />
                <span className=" font-mono text-red-300 border-b-2 border-dotted ">
                  <a href="mailto: mohammedismail9788@gmail.com">
                    E-MAIL{" "}
                    <i
                      class="fa fa-external-link-square"
                      aria-hidden="true"
                    ></i>
                  </a>
                </span>
                <br />
              </p>
              <br />
              <hr />
              <hr />
              <span className=" font-serif font-bold text-yellow-400">
                {" "}
                CONNECT ME ON <br />{" "}
                <a href="https://github.com/MohammedIsmail007">
                  <i
                    class="fab fa-github fa-xl text-white"
                    aria-hidden="true"
                  ></i>
                </a>{" "}
                <a href="http://http://www.linkedin.com/in/mohammedismail007">
                  {" "}
                  <i
                    class="fab fa-linkedin fa-xl text-white"
                    aria-hidden="true"
                  ></i>
                </a>
                {"  "}
                <a href="https://www.instagram.com/mohammed_dev_vibe/">
                  {" "}
                  <i
                    class="fab fa-instagram fa-xl text-white"
                    aria-hidden="true"
                  ></i>
                </a>{" "}
              </span>
            </div>
          </div>
          <div
            className={`${
              !contact
                ? "flex flex-wrap h-fit  text-white justify-center mt-4 p-2 items-center   bg-transparent  rounded-lg shadow-2xl"
                : " hidden"
            } `}
          >
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
