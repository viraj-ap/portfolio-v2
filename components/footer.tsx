import React from "react";
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Dock } from "./dock";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative text-white"
      style={{
        width: "80vw",
        margin: "0 auto",
        background:
          "linear-gradient(to bottom, rgba(72, 0, 130, 1), rgba(0, 0, 0, 0))",
        borderTopLeftRadius: "2rem",
        borderTopRightRadius: "2rem",
      }}
    >
      <div className="container mx-auto p-4 pb-4 text-center">
        <div className="flex items-center justify-center">
          <img className="h-12" src="./logo_nobg.png" alt="" />
        </div>
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <h2 className="text-sm font-bold mb-4"> a dm wont hurt :) </h2>

        <div className="flex justify-center space-x-8 text-3xl mb-6">
          <Dock />
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" text-center text-white font-bold mb-12">
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
