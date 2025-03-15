import React from "react";
import SkillsSection from "./SkillsSection";
import ExperienceHistory from "./ExperienceHistory";
import Project from "./Project";
import Responsibilities from "./Responsibilities";
import { FaHand } from "react-icons/fa6";

export default function MainContainer() {
  return (
    <div className="flex flex-col gap-32">
      <div className="flex flex-col gap-2 mt-16 xl:mt-0">
        <h4 className="text-4xl font-bold text-primary">Hi</h4>
        <p className="text-justify">
          I specialize in crafting exceptional digital experiences through a
          blend of UI/UX expertise and frontend web development. With a strong
          foundation in wireframing, designing, and prototyping for both
          websites and mobile applications, I strive to bridge the gap between
          user needs and functional design. On the development side, I bring
          designs to life with clean, responsive, and user-friendly interfaces,
          ensuring seamless interactions and robust performance. Whether it’s
          creating intuitive wireframes, designing stunning visuals, or coding
          dynamic frontend solutions, I’m passionate about delivering work that
          is both impactful and user-centric. Let’s build something amazing
          together!
        </p>
      </div>

      <SkillsSection />
      <ExperienceHistory />
      <Project />
      {/* <Responsibilities /> */}
    </div>
  );
}
