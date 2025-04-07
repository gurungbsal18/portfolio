import React from "react";
import { UserExperienceData } from "@/data/UserData";
import { PiUserBold } from "react-icons/pi";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";

export default function ExperienceHistory() {
  const startYear = Math.min(...UserExperienceData.map((e) => e.startYear));
  const endYear = Math.max(...UserExperienceData.map((e) => e.endYear));
  const totalYear = endYear - startYear;

  return (
    <div>
      <h4 className="text-4xl font-bold text-primary">Experience</h4>

      <div className="flex flex-col gap-8 mt-8">
        {UserExperienceData.map((list) => (
          <div key={list.id} className="flex flex-col gap-2">
            <span className="flex gap-2 items-start lg:items-center">
              <PiUserBold size={24} className="flex-shrink-0" />
              <p className="font-bold text-2xl">{list.position}</p>
            </span>
            <span className="flex gap-2 items-center">
              <PiBuildingOfficeLight size={24} />
              <p>Organization: {list.companyName}</p>
            </span>
            <span className="flex gap-2 items-center">
              <LiaBusinessTimeSolid size={24} />
              <p>{list.year}</p>
            </span>
            <span className="flex gap-2 items-center">
              <SlLocationPin size={24} />
              <p>Location: {list.location}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
