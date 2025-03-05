import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { RImg } from "../../assets/index";
import { SiFrontendmentor } from "react-icons/si";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="ml-4 cursor-pointer"
      >
        <img src={RImg} alt="logo" className="w-20 h-20 rounded-full" />
      </Link>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img
                  className="w-20 h-20 rounded-full cursor-pointer"
                  src={RImg}
                  alt="logo"
                />
                <p className="text-sm text-gray-400 mt-2">
                  As a Frontend Developer, I specialize in creating interactive,
                  responsive, and visually appealing web applications. My focus
                  is on crafting seamless user experiences using modern
                  frameworks, optimized performance, and intuitive design
                  principles.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
