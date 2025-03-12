import React from "react";
import Title from "../layouts/Title";

import ProjectsCard from "./ProjectsCard";
import { realtimeChat, chatGpt, portfolio } from "../../assets/index";

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
          src={realtimeChat}
          githubLink="https://github.com/Rajesh97266/Fullstack-Chat-App"
          projectLink="https://fullstack-chat-app-xq65.onrender.com/login"
        />
        <ProjectsCard
          title="ChatGPT  Clone"
          des="An AI-powered chatbot that mimics ChatGPT's capabilities using OpenAI API. Features include real-time responses, conversational memory, and user-friendly UI."
          src={chatGpt}
          githubLink="https://github.com/Rajesh97266/Chatgpt-App"
          projectLink="https://chatgpt-app-clone-three.vercel.app/"
        />
        <ProjectsCard
          title="Portfolio Project"
          des="A personal portfolio website showcasing projects, skills, and experiences. Built with React, Tailwind CSS, and optimized for responsiveness."
          src={portfolio}
          githubLink="https://github.com/Rajesh97266/Modern-Porfolio"
          projectLink="https://modern-porfolio-drab.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
