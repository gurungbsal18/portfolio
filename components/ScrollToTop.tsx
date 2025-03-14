"use client";
import React, { useEffect, useState } from "react";
import { IoArrowUpCircle } from "react-icons/io5";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "2rem",
            zIndex: 1000,
          }}
        >
          <IoArrowUpCircle className="text-white bg-primary rounded-full" />
        </button>
      )}
    </div>
  );
}
