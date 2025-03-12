import React from "react";
import { bannerImg } from "../../assets/index";
import home from "../../assets/images/contact/home.svg";
import home1 from "../../assets/images/contact/home1.gif";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[400px] h-[400px] lgl:w-[600px] lgl:h-[680px] z-10"
        src={home1}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[600px] lgl:h-[600px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
