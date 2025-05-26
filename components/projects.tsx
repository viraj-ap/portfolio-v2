"use client";

import React, { useRef } from "react";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    heading: "Film Gague",
    subheading: "Film Review Application made using React and SpringBoot",
    imgSrc: "/filmGague.png",
    href: "https://github.com/viraj-ap/FilmGague",
  },
  {
    heading: "passNinja",
    subheading: "Password Manager Application made using MERN stack",
    imgSrc: "/passNinja.png",
    href: "https://github.com/viraj-ap/passNinja",
  },
  {
    heading: "easiControl",
    subheading: "A desktop Application made using Python GUI tkinter library",
    imgSrc: "/easiControl.png",
    href: "https://github.com/viraj-ap/easiControl",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="p-4 md:p-8">
      <div className="text-violet-300 text-5xl font-bold text-center mt-12">
        Projects
      </div>
      <div className="mx-auto max-w-5xl">
        {projects.map((project, i) => (
          <ProjectLink key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

interface ProjectProps {
  heading: string;
  subheading: string;
  imgSrc: string;
  href: string;
}

const ProjectLink: React.FC<ProjectProps> = React.memo(
  ({ heading, subheading, imgSrc, href }) => {
    const ref = useRef<HTMLAnchorElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / rect.width - 0.5;
      const yPct = mouseY / rect.height - 0.5;

      x.set(xPct);
      y.set(yPct);
    };

    return (
      <motion.a
        href={href}
        ref={ref}
        onMouseMove={handleMouseMove}
        initial="initial"
        whileHover="whileHover"
        className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-4xl font-bold text-violet-600 transition-colors duration-500 group-hover:text-green-300 md:text-6xl"
          >
            {heading.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </motion.span>
          <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 ">
            {subheading}
          </span>
        </div>

        <motion.div
          style={{ top, left, translateX: "-50%", translateY: "-50%" }}
          variants={{
            initial: { scale: 0, rotate: "-12.5deg" },
            whileHover: { scale: 1, rotate: "12.5deg" },
          }}
          transition={{ type: "spring" }}
          className="absolute z-0 h-24 w-32 md:h-48 md:w-64"
        >
          <Image
            src={imgSrc}
            alt={`Image for ${heading}`}
            fill
            className="rounded-lg object-cover"
          />
        </motion.div>

        <motion.div
          variants={{
            initial: {
              x: "25%",
              opacity: 0,
            },
            whileHover: {
              x: "0%",
              opacity: 1,
            },
          }}
          transition={{ type: "spring" }}
          className="relative z-10 p-4"
        >
          <ArrowRight className="text-5xl text-neutral-50" />
        </motion.div>
      </motion.a>
    );
  }
);
