"use client";
import React from "react";
import SkillsSection from "./SkillsSection";
import ExperienceHistory from "./ExperienceHistory";
import Project from "./Project";
import { FaHand } from "react-icons/fa6";
import { m, motion, Variants } from "framer-motion";

export default function MainContainer() {
  const mainContainer = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  const handMotion: Variants = {
    waving: {
      x: [0, 4, -4, 0], // Horizontal movement
      rotate: [0, 10, -10, 0], // Rotation for waving effect
      transition: {
        repeat: Infinity, // Infinite loop
        repeatType: "mirror", // Smooth wave effect
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col gap-32">
      <motion.div
        variants={mainContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-2 mt-16 xl:mt-0"
      >
        <h4 className="text-4xl font-bold text-primary flex items-center gap-2">
          Hi{" "}
          <motion.span variants={handMotion} animate="waving">
            <FaHand className="text-warning" />
          </motion.span>
        </h4>
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
      </motion.div>

      <motion.div variants={mainContainer} initial="hidden" animate="visible">
        <SkillsSection />
      </motion.div>
      <ExperienceHistory />
      <Project />
      {/* <Responsibilities /> */}
    </div>
  );
}
