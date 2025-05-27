"use client";
import React, { useState } from "react";
import { Button } from "@heroui/button";
import { CgFileDocument } from "react-icons/cg";
import { ThemeSwitch } from "./theme-switch";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const svgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const pathVariants = {
    hidden: {
      strokeDashoffset: 1000,
    },
    visible: {
      strokeDashoffset: 1,
      transition: {
        duration: 5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="sticky top-0 bg-primary-50 shadow-md z-10">
      <div className="container py-4 px-8 flex justify-between items-center w-full">
        <div>
          <motion.svg
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            width="auto"
            height="55"
            viewBox="0 0 391 391"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="391" height="391" rx="195.5" fill="#FFBF29" />
            <motion.path
              d="M146.101 193.72C155.17 195.653 162.454 200.187 167.955 207.323C173.456 214.31 176.206 222.338 176.206 231.407C176.206 244.49 171.597 254.896 162.38 262.627C153.311 270.209 140.6 274 124.247 274H51.326V117.454H121.794C137.701 117.454 150.115 121.096 159.035 128.381C168.104 135.666 172.638 145.552 172.638 158.04C172.638 167.257 170.185 174.914 165.279 181.009C160.522 187.104 154.129 191.341 146.101 193.72ZM89.459 180.786H114.435C120.679 180.786 125.436 179.448 128.707 176.772C132.126 173.947 133.836 169.859 133.836 164.507C133.836 159.155 132.126 155.067 128.707 152.242C125.436 149.417 120.679 148.005 114.435 148.005H89.459V180.786ZM117.557 243.226C123.95 243.226 128.856 241.814 132.275 238.989C135.843 236.016 137.627 231.779 137.627 226.278C137.627 220.777 135.769 216.466 132.052 213.344C128.484 210.222 123.504 208.661 117.111 208.661H89.459V243.226H117.557ZM301.349 166.96C298.524 161.757 294.436 157.817 289.084 155.141C283.881 152.316 277.711 150.904 270.575 150.904C258.236 150.904 248.349 154.992 240.916 163.169C233.483 171.197 229.766 181.975 229.766 195.504C229.766 209.925 233.631 221.223 241.362 229.4C249.241 237.428 260.02 241.442 273.697 241.442C283.063 241.442 290.942 239.063 297.335 234.306C303.876 229.549 308.634 222.71 311.607 213.79H263.216V185.692H346.172V221.149C343.347 230.664 338.516 239.509 331.677 247.686C324.987 255.863 316.439 262.478 306.032 267.533C295.625 272.588 283.881 275.115 270.798 275.115C255.337 275.115 241.511 271.77 229.32 265.08C217.278 258.241 207.838 248.801 200.999 236.759C194.309 224.717 190.964 210.965 190.964 195.504C190.964 180.043 194.309 166.291 200.999 154.249C207.838 142.058 217.278 132.618 229.32 125.928C241.362 119.089 255.114 115.67 270.575 115.67C289.307 115.67 305.066 120.204 317.851 129.273C330.785 138.342 339.333 150.904 343.496 166.96H301.349Z"
              stroke="#065192" // Use stroke instead of fill
              strokeWidth="8" // Define stroke thickness
              strokeDasharray="1000"
              variants={pathVariants}
            />
          </motion.svg>
        </div>
        <div className="hidden lg:flex gap-2">
          <Link href={"/documents/Bishal_Gurung_CV.pdf"} target="_blank">
            <Button radius="sm" color="primary" className="flex items-center">
              <CgFileDocument size={24} /> View CV
            </Button>
          </Link>

          <ThemeSwitch />
        </div>

        {/* mobile menu */}
        <div className="lg:hidden flex items-center gap-2">
          {menuOpen ? (
            <MdOutlineClose
              size={32}
              onClick={handleMenuOpen}
              className="transform rotate-180 transition-transform duration-300 ease-in-out"
            />
          ) : (
            <IoMdMenu
              size={32}
              onClick={handleMenuOpen}
              className="transform rotate-0 transition-transform duration-300 ease-in-out"
            />
          )}

          {menuOpen && (
            <>
              <div
                className={`flex flex-col items-start gap-8 absolute bg-primary-50 p-16 top-20 left-0 w-full shadow-2xl transition-all duration-500 ease-in-out ${menuOpen ? "translate-y-0 opacity-100 visible" : "traslate-y-10 opacity-0 invisible"}`}
              >
                <Link
                  href={"/documents/Bishal_Gurung_CV.pdf"}
                  target="_blank"
                  className="w-full"
                >
                  <Button
                    radius="sm"
                    color="primary"
                    className="flex items-center w-full"
                  >
                    <CgFileDocument size={24} /> View CV
                  </Button>
                </Link>
              </div>
            </>
          )}
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
