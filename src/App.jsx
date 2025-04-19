import React, { useState } from "react";
import "./App.css";
import Typewriter from "./Typewriter";
import TypewriterPortfolio from "./TypewriterPortfolio";
// import CustomAlert from "./CustomALert";
import { Button, Card } from "flowbite-react";
import Footer from "./Footer";
import { mySkills, myCertifications, myProjects, myExperience } from "./data";
import resume from "./assets/resume.pdf"; // Add this line to import the resume file

function App() {
  const pdfdownload = resume; // Define the pdfdownload variable
  const [portfolio, setPortfolio] = useState(true);
  const [aboutMe, setAboutMe] = useState(false);
  const [projects, setProjects] = useState(false);
  const [skills, setSkills] = useState(false);
  const [certifications, setCertifications] = useState(false);
  const [contact, setContact] = useState(false);
  const [experience, setExperience] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => setShowAlert(false);

  return (
    <>
      <div className="flex flex-wrap flex-col justify-center items-center h-full text-center">
        {/* HEADER SECTION */}
        <header className="flex flex-wrap text-white justify-center gap-5 w-full h-full">
          <div className="text-center text-4xl font-mono">
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
            <button className="border p-2 border-blue-500 font-serif hover:transition-all hover:bg-blue-800 ">
              RESUME <i class="fa fa-download" aria-hidden="true"></i>
            </button>
          </a>
        </header>

        {/* CUSTOM ALERT */}
        {/* {showAlert && (
          <CustomAlert
            message="WELCOME TO MY PORTFOLIO"
            onClose={handleCloseAlert}
          />
        )} */}

        {/* MAIN SECTION */}
        <div className="font-serif text-center p-2 pb-0 m-5">
          <Typewriter />
        </div>

        {/* BUTTON SECTION */}
        <div className="border h-fit bg-transparent rounded-lg bg-white bg-opacity-15 shadow-2xl">
          <div id="buttons" className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => {
                setPortfolio(!portfolio);
                setAboutMe(false);
                setContact(false);
                setSkills(false);
                setCertifications(false);
                setProjects(false);
                setExperience(false);
              }}
              className="hover:bg-blue-500 hover:backdrop:blur-md hover:transition-all text-white pt-1 pb-1 pr-2 pl-2 w-fit rounded-2xl m-2 backdrop:blur-sm hover:text-lime-300 font-serif font-bold"
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
                setExperience(false);
              }}
              className="hover:bg-blue-500 hover:backdrop:blur-md hover:transition-all text-white pt-1 pb-1 pr-2 pl-2 w-fit rounded-2xl m-2 backdrop:blur-sm hover:text-lime-300 font-serif font-bold"
            >
              About Me
            </button>
            <button
              onClick={() => {
                setExperience(!experience);
                setPortfolio(false);
                setAboutMe(false);
                setSkills(false);
                setCertifications(false);
                setProjects(false);
                setContact(false);
              }}
              className="hover:bg-blue-500 hover:transition-all text-white pt-1 pb-1 pr-2 pl-2 w-fit rounded-2xl m-2 backdrop:blur-sm hover:text-lime-300 font-serif font-bold"
            >
              Experience
            </button>
            <button
              onClick={() => {
                setSkills(!skills);
                setPortfolio(false);
                setAboutMe(false);
                setContact(false);
                setCertifications(false);
                setProjects(false);
                setExperience(false);
              }}
              className="hover:bg-blue-500 hover:backdrop:blur-md hover:transition-all text-white pt-1 pb-1 pr-2 pl-2 w-fit rounded-2xl m-2 backdrop:blur-sm hover:text-lime-300 font-serif font-bold"
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
                setExperience(false);
              }}
              className="hover:bg-blue-500 hover:backdrop:blur-md hover:transition-all text-white pt-1 pb-1 pr-2 pl-2 w-fit rounded-2xl m-2 backdrop:blur-sm hover:text-lime-300 font-serif font-bold"
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
                setExperience(false);
              }}
              className="hover:bg-blue-500 hover:backdrop:blur-md hover:transition-all text-white pt-1 pb-1 pr-2 pl-2 w-fit rounded-2xl m-2 backdrop:blur-sm hover:text-lime-300 font-serif font-bold"
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
                setExperience(false);
              }}
              className="hover:bg-blue-500 hover:backdrop:blur-md hover:transition-all text-white pt-1 pb-1 pr-2 pl-2 w-fit rounded-2xl m-2 backdrop:blur-sm hover:text-lime-300 font-serif font-bold"
            >
              Contact
            </button>
          </div>
        </div>

        {/* BUTTON CONTENT SECTION */}
        <div>
          {/* EXPERIENCE BUTTON CONTENT SECTION */}
          <div
            className={`${
              experience
                ? "flex flex-wrap h-fit text-white justify-center mt-4 p-2 items-center border bg-transparent rounded-lg shadow-2xl"
                : "hidden"
            }`}
          >
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                Experience 📈
              </h2>
              {myExperience.map((exp, index) => (
                <Card
                  key={index}
                  className="max-w-sm bg-transparent bg-white bg-opacity-10"
                >
                  <h5 className="text-2xl font-bold tracking-tight text-orange-400 font-serif dark:text-white">
                    {exp.role}
                  </h5>
                  <p className="font-normal text-white text-opacity-85 dark:text-gray-400">
                    {exp.company} | {exp.duration}
                  </p>
                  <p className="mt-2 text-white text-opacity-90 dark:text-gray-300">
                    {exp.description}
                  </p>
                  {exp.link && (
                    <div className="flex justify-center mt-3">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="text-black bg-white w-fit">
                          <p>
                            Visit{" "}
                            <i
                              className="fa fa-external-link text-blue-600 ml-1"
                              aria-hidden="true"
                            ></i>
                          </p>
                        </Button>
                      </a>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* PORTFOLIO BUTTON CONTENT SECTION */}
          <div
            className={`${
              portfolio
                ? "portfolioContainer flex flex-wrap h-fit justify-center mt-4 p-2 items-center border bg-transparent rounded-lg bg-white bg-opacity-15 shadow-2xl"
                : "hidden"
            }`}
          >
            <p className="text-4xl font-bold font-mono">
              HI I'M <br />
              <span className="text-yellow-400 opacity-80 font-serif font-semibold text-5xl">
                MOHAMMED
              </span>{" "}
              <br />
              <span className="text-black font-serif font-semibold text-5xl">
                ISMAIL
              </span>{" "}
              <span className="text-yellow-400 text-3xl">
                {<TypewriterPortfolio />}
              </span>{" "}
              <button
                className="font-mono text-sm border p-2 rounded-sm hover:bg-blue-600 hover:text-white"
                type="button"
                onClick={() => {
                  setPortfolio(false);
                  setAboutMe(true);
                  setSkills(false);
                  setProjects(false);
                  setCertifications(false);
                  setContact(false);
                  myExperience(false);
                }}
              >
                About Me
              </button>
            </p>
          </div>

          {/* ABOUT ME BUTTON CONTENT SECTION */}
          <div
            className={`${
              aboutMe
                ? "flex flex-wrap h-fit text-white max-md:p-7 justify-center mt-4 p-2 items-center border bg-transparent rounded-lg shadow-2xl"
                : "hidden"
            }`}
          >
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                About Me 🧑‍💻
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

          {/* SKILLS BUTTON CONTENT SECTION */}
          <div
            className={`${
              skills
                ? "flex flex-wrap h-fit text-white justify-center mt-4 p-2 items-center border bg-transparent rounded-lg shadow-2xl"
                : "hidden"
            }`}
          >
            <div className="flex flex-wrap h-80 overflow-y-scroll justify-around bg-transparent m-1">
              <div className="py-3 gap-5">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Skills 🤹
                </h2>
                <div className="space-y-6 pr-4 left-3">
                  {mySkills.map((skill, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <div className="flex justify-between px-4 py-2 text-white rounded-t-lg">
                        <span>{skill.name}</span>
                        {/* <span> {skill.level} </span> */}
                      </div>
                      {/* <div className="w-full bg-white h-3 rounded-lg">
                        <div
                          className="bg-blue-500 h-full w-full"
                          style={{ width: skill.level }}
                        ></div>
                      </div> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT BUTTON CONTENT SECTION */}
          <div
            className={`${
              projects
                ? "flex flex-wrap h-fit text-white justify-center mt-4 p-2 items-center border bg-transparent rounded-lg shadow-2xl"
                : "hidden"
            }`}
          >
            <div className="flex flex-wrap h-80 overflow-y-scroll justify-around bg-transparent m-1">
              <h2 className="text-3xl font-bold text-center mb-8">
                ACADEMIC & SELF - PROJECTS 🧑‍💻
              </h2>
              <div className="flex flex-wrap justify-around gap-5 p-3">
                {myProjects.map((project, i) => {
                  return (
                    <Card
                      key={i}
                      className="max-w-sm bg-transparent bg-white bg-opacity-10"
                    >
                      <h5 className="text-2xl font-bold tracking-tight text-orange-400 font-serif dark:text-white">
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

          {/* CERTIFICATIONS BUTTON CONTENT SECTION */}
          <div
            className={`${
              certifications
                ? "flex flex-wrap h-fit text-white justify-center mt-4 p-2 items-center border bg-transparent rounded-lg shadow-2xl"
                : "hidden"
            }`}
          >
            <div className="flex flex-wrap h-80 overflow-y-scroll justify-around bg-transparent m-1">
              <h2 className="text-3xl font-bold text-center mb-8">
                ACADEMIC & SELF LEARNED CERTIFICATIONS 🎓
              </h2>
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

          {/* CONTACT BUTTON CONTENT SECTION */}
          <div
            className={`${
              contact
                ? "flex flex-wrap h-fit text-white justify-center mt-4 p-2 items-center border bg-transparent rounded-lg shadow-2xl"
                : "hidden"
            }`}
          >
            <div className="font-mono">
              <p>
                <i class="fa fa-map-pin" aria-hidden="true">
                  <br /> <br /> LOCATION
                </i>
                <br />
                <span className="font-mono text-red-300 border-b-2 border-dotted">
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
                <span className="font-mono text-red-300 border-b-2 border-dotted">
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
                <span className="font-mono text-red-300 border-b-2 border-dotted">
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
              <span className="font-serif font-bold text-yellow-400">
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
                ? "flex flex-wrap h-fit text-white justify-center mt-4 p-2 items-center bg-transparent rounded-lg shadow-2xl"
                : "hidden"
            }`}
          >
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
