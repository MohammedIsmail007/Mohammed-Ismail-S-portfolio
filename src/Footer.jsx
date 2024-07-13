import React from "react";

const Footer = () => {
  return (
    <div className="flex position-fixed flex-wrap text-white  justify-center gap-5 w-full p-4 h-full">
      <div className="font-mono">
        <p>
          <a
            href="https://github.com/MohammedIsmail007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github" aria-hidden="true"></i>
          </a>{" "}
          <a
            href="http://www.linkedin.com/in/mohammedismail007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin" aria-hidden="true"></i>
          </a>{" "}
          <a
            href="https://www.instagram.com/mohammed_dev_vibe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
