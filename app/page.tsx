import { NavbarMain } from "@/components/navbarMain";
import TerminalAuth from "@/components/terminal";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { clients } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <NavbarMain />
      </div>
      
      <div>
        <TerminalAuth />
      </div>

      <div className="flex items-center justify-center">
        <InfiniteMovingCards
          className="md:mt-[25rem] mt-[100px] mb-[100px] "
          items={clients}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}
