"use client";
import React from "react";
import { UserData } from "@/data/UserData";
import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { motion } from "framer-motion";

export default function SidebarUser() {
  const cardVariant = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      duration: 0.5,
      transition: {
        duration: 1,
      },
    },
  };

  const animateCard = {
    animateOne: {
      y: [0, -10, 0],
      x: 0,
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    // <motion.div variants={animateCard} animate="animateOne">
    <motion.div
      variants={animateCard}
      // initial="hidden"
      animate="animateOne"
      className="p-4 lg:py-16 rounded-3xl user-card relative xl:fixed hover:bg-gray-700 hover:ease-in-out hover:duration-1000 text-white bg-[#212D40] w-100 xl:w-1/4 2xl:w-auto"
    >
      {UserData.map((e, i) => (
        <div
          key={i}
          className="flex flex-col gap-4 justify-between items-center"
        >
          <Image
            src={e.img}
            alt={e.name}
            height={300}
            width={300}
            className="user-img"
          />
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl">{e.name}</h2>
            <h2 className="text-lg font-bold text-center">{e.position}</h2>
          </div>

          <em className="text-xs text-center">
            I design, code beautifully simple things and I love what i do. Just
            simple like that!
          </em>

          <div className="flex flex-col gap-4 justify-between">
            <Link href={e.whatsApp}>
              <Button radius="sm" size="lg" className="w-full" color="warning">
                <IoLogoWhatsapp size={24} color="green" />
                Contact Me
              </Button>
            </Link>
            <Link href="mailto:gurungbsal18@gmail.com">
              <Button radius="sm" size="lg" className="w-full" color="default">
                <MdMarkEmailRead size={24} />
                Email Me
              </Button>
            </Link>
          </div>

          <div className="flex gap-4 items-center justify-center">
            <Link href={e.gitHubProfile} className="hover:text-warning">
              <FaGithub size={32} />
            </Link>
            <Link href={e.linkedInProfile} className="hover:text-warning">
              <FaLinkedin size={32} />
            </Link>
          </div>

          <p className="text-center text-xs lg:text-md">
            &copy; Bishal Gurung. All Right Reserved
          </p>
        </div>
      ))}
    </motion.div>
    // </motion.div>
  );
}
