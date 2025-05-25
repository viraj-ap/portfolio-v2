import { NavbarMain } from "@/components/navbarMain";
import TerminalAuth from "@/components/terminal";


export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <NavbarMain />
      </div>
      <div>
        <TerminalAuth />
      </div>
    </>
  );
}
