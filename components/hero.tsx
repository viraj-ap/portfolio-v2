"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export function Waves() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-24">
      <p className="text-2xl md:text-4xl lg:text-7xl text-black dark:text-white font-bold inter-var text-center">
        Hi there, I'm <span className="text-[#00FFFF]">Viraj</span>
      </p>
      <p className="text-base md:text-lg mt-4 text-black dark:text-white font-bold inter-var text-center ">
        I am a full stack developer based in 
        <span className="text-orange-400"> In</span>
        <span className="text-blue-600">d</span>
        <span className="text-green-400">ia</span>
      </p>
    </WavyBackground>
  );
}
