import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="FreeLance Developer"
            subTitle="Upwork - (2024 - Present)"
            result="Chennai"
            des="Developing and delivering high-quality web applications for clients across various industries. Specializing in front-end technologies, responsive design, and performance optimization."
          />
          
          <ResumeCard
            title="Front-end Developer"
            subTitle="CMRL - (2019 - 2023)"
            result="Chennai"
            des="Built and maintained dynamic, user-friendly web applications using modern front-end frameworks. Focused on enhancing UI/UX, accessibility, and overall performance."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
