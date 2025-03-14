"use client";
import React, { useState } from "react";
import { Button } from "@heroui/button";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { ThemeSwitch } from "./theme-switch";
import Link from "next/link";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
    console.log("menu open");
  };

  return (
    <div className="sticky top-0 bg-white shadow-md z-10">
      <div className="container py-4 px-8 flex justify-between items-center w-full">
        {/* <h1 className="text-2xl font-bold text-primary">Bishal Gurung</h1> */}
        <Image src="/Logo.png" alt="bishal" height={150} width={150} />
        <div className="hidden lg:flex gap-2">
          <Button radius="sm" color="primary">
            <HiOutlineClipboardDocumentList size={24} /> Explore Projects
          </Button>
          <Link href={"/documents/Bishal-Gurung-CV.pdf"} target="_blank">
            <Button radius="sm" color="primary" className="flex items-center">
              <VscGitPullRequestGoToChanges size={24} /> Request CV
            </Button>
          </Link>
          <Link download={"/documents/Bishal-Gurung-CV.pdf"} href={""}>
            <Button radius="sm" color="primary" className="flex items-center">
              <IoCloudDownloadOutline size={24} /> Download CV
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
                className={`flex flex-col items-start gap-8 absolute bg-gray-400 p-16 top-16 left-0 w-full shadow-2xl transition-all duration-500 ease-in-out ${menuOpen ? "translate-y-0 opacity-100 visible" : "traslate-y-10 opacity-0 invisible"}`}
              >
                <Link
                  href={"/documents/Bishal-Gurung-CV.pdf"}
                  target="_blank"
                  className="w-full"
                >
                  <Button
                    radius="sm"
                    color="primary"
                    className="flex items-center w-full"
                  >
                    <VscGitPullRequestGoToChanges size={24} /> Request CV
                  </Button>
                </Link>
                <Link
                  download={"/documents/Bishal-Gurung-CV.pdf"}
                  href={""}
                  className="w-full"
                >
                  <Button
                    radius="sm"
                    color="primary"
                    className="flex items-center w-full"
                  >
                    <IoCloudDownloadOutline size={24} /> Download CV
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
