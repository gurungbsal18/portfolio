"use client";
import { userExperienceData } from "@/data/UserData";
import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@heroui/tooltip";
import { BsInfoCircle } from "react-icons/bs";

export default function SkillsSection() {
  return (
    <div>
      <h4 className="text-4xl font-bold text-primary flex items-center gap-4">
        Skills{" "}
        <Tooltip content="Drag skills icon to playaround" showArrow={true}>
          <BsInfoCircle size={24} />
        </Tooltip>
      </h4>
      <div className="grid grid-cols-12 gap-8 mt-4">
        {userExperienceData.map((list, index) => (
          <div key={index} className="col-span-6 lg:col-span-3">
            <motion.p drag className="flex flex-col gap-2 items-start text-2xl">
              {list.skill} {list.icon}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
}
