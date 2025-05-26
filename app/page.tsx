import Footer from "@/components/footer";
import { Waves } from "@/components/hero";
import { NavbarMain } from "@/components/navbarMain";
import { Projects } from "@/components/projects";
import TerminalAuth from "@/components/terminal";
import { Experience } from "@/components/timeline";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { clients } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <NavbarMain />
      </div>

      <div>
        <Waves/>
      </div>

      <div className="flex items-center justify-around mt-20">
        <div>
          <TerminalAuth />
        </div>
       
      </div>

      <div>
        <Experience />
      </div>

      <div>
        <Projects />
      </div>

      <div className="flex items-center justify-center">
        <InfiniteMovingCards
          className="mt-32 mb-32"
          items={clients}
          direction="right"
          speed="slow"
        />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
