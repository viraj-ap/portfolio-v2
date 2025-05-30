import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "EventStrat.ai",
      content: (
        <div>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Web Developer
          </p>
          <div className="grid max-w-[40vw] gap-4">
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Designed and developed a fully responsive mobile-friendly website
              using React and Tailwind CSS. Integrated interactive components,
              animations, and hover effects to enhance engagement. Ensured
              seamless responsiveness across devices by leveraging Tailwind’s
              utility classes and React’s component-driven architecture.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "EventStrat.ai",
      content: (
        <div>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Web Developer
          </p>
          <div className="grid max-w-[40vw] gap-4">
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Designed and developed a fully responsive mobile-friendly website
              using React and Tailwind CSS. Integrated interactive components,
              animations, and hover effects to enhance engagement. Ensured
              seamless responsiveness across devices by leveraging Tailwind’s
              utility classes and React’s component-driven architecture.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "EventStrat.ai",
      content: (
        <div>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Web Developer
          </p>
          <div className="grid max-w-[40vw] gap-4">
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Designed and developed a fully responsive mobile-friendly website
              using React and Tailwind CSS. Integrated interactive components,
              animations, and hover effects to enhance engagement. Ensured
              seamless responsiveness across devices by leveraging Tailwind’s
              utility classes and React’s component-driven architecture.
            </p>
          </div>
        </div>
      ),
    },
   
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
