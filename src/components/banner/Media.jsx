import React from 'react'
import {  FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiFrontendmentor } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/Rajesh97266"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.frontendmentor.io/profile/Rajesh97266"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <SiFrontendmentor />
          </a>
          <a
            href="https://www.linkedin.com/in/rajesh-m-925388ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
          <span className="bannerIcon">
            <IoLogoJavascript />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Media