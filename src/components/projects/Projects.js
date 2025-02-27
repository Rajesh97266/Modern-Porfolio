import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Social Media Clone"
          des="A fully functional social media platform with user authentication, posts, likes, and comments."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="An online shopping platform with product listings, cart functionality, and secure checkout."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des="A real-time messaging app with one-on-one and group chat features, powered by WebSockets."
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
