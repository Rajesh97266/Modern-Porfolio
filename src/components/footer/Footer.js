import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { navLinksdata } from "../../constants";
import {  RImg } from "../../assets/index";

const Footer = () => {
  const handleSmoothScroll = (event, link) => {
    event.preventDefault();
    const targetSection = document.getElementById(link);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black flex flex-col lgl:flex-row gap-8">
      <div className="w-full h-full flex flex-col gap-8 items-center">
        <img
          src={RImg}
          alt="logo"
          className="w-40 h-40 rounded-full cursor-pointer"
        />
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
      <div className="w-full h-full flex items-center flex-col">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {navLinksdata.map(({ _id, title, link }) => (
            <li key={_id}>
              <a
                href={`#${link}`}
                onClick={(event) => handleSmoothScroll(event, link)}
                className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
              >
                {title}
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
