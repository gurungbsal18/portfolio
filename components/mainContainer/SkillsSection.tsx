import { userExperienceData } from "@/data/UserData";
import React from "react";

export default function SkillsSection() {
  return (
    <div>
      <h4 className="text-4xl font-bold text-primary">Skills</h4>
      <div className="grid grid-cols-12 gap-8 mt-4">
        {userExperienceData.map((list, index) => (
          <div key={index} className="col-span-6 lg:col-span-3">
            <p className="flex flex-col gap-2 items-start text-2xl">
              {list.skill} {list.icon}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
