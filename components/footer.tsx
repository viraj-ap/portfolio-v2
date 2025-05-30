import React from "react";
import { Linkedin } from "lucide-react";
import { Dock } from "./dock";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative"
      style={{
        width: "80vw",
        margin: "0 auto",
        background:
          "linear-gradient(to bottom, rgba(0, 188, 212, 1), rgba(0, 0, 0, 0))",
        borderTopLeftRadius: "2rem",
        borderTopRightRadius: "2rem",
      }}
    >
      <div className="container mx-auto p-4 pb-4 text-center">
        <div className="flex items-center justify-center">
          <img className="h-12" src="./logo_nobg.png" alt="" />
        </div>
        <h2 className="text-2xl font-bold dark:text-white text-gray-800">Contact Me</h2>
        <h2 className="text-sm font-bold mb-4 dark:text-white text-gray-800"> a dm wont hurt :) </h2>

        <div className="flex justify-center space-x-8 text-3xl mb-6">
          <Dock />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center font-bold mb-12 dark:text-white text-gray-800">
        <p>Made with ❤️ by Viraj</p>
      </div>

      {/* Grid background (to replicate the reference image) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 grid grid-cols-12 grid-rows-6 pointer-events-none">
        {/* Grid lines */}
        <div className="border-r border-gray-400"></div>
        {/* Repeat grid lines */}
      </div>
    </footer>
  );
};

export default Footer;
