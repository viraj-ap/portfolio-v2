"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function HeroMask() {
  return (
    <div className="flex w-[40vw] items-center justify-center overflow-hidden h-96">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
            Hey There, I'm Viraj
          </p>
        }
        className="h-[40rem] rounded-md border text-white dark:text-black"
      >
        
        Welcome to my Portfolio
      </MaskContainer>
    </div>
  );
}
