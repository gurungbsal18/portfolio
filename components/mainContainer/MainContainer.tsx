import React from "react";
import SkillsSection from "./SkillsSection";
import ExperienceHistory from "./ExperienceHistory";
import Project from "./Project";

export default function MainContainer() {
  return (
    <div className="flex flex-col gap-32">
      <div className="flex flex-col gap-2">
        {/* <h1 className="text-6xl font-bold text-primary">
          My name is Bishal Gurung
        </h1>
        <h2 className="text-4xl font-bold text-gray-500">
          I am , UI/UX Designer, Web Designer
        </h2> */}
        <h4
          className="text-lg lg:text-4xl font-semibold p-4 py-8 lg:p-16 bg-primary-50 rounded-3xl shadow-lg text-center"
          style={{ lineHeight: "1.5" }}
        >
          I design, code beautifully simple things and I love what i do. Just
          simple like that!
        </h4>
      </div>

      <SkillsSection />
      <ExperienceHistory />
      <Project />
    </div>
  );
}
