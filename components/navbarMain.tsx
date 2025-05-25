"use client";
import { ModeToggle } from "@/components/toggle";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Github } from "lucide-react";
import { useState } from "react";

export function NavbarMain() {
  const navItems = [
    {
      name: "Experience",
      link: "",
    },
    {
      name: "Projects",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleGithubClick = () => {
    window.open("https://github.com/viraj-ap", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">
              <ModeToggle />
            </NavbarButton>
            <NavbarButton onClick={handleGithubClick}>
              <div className="flex items-center justify-center">
                <Github className="h-5 w-5 mr-2" />
                <div>Github</div>
              </div>
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                <ModeToggle />
              </NavbarButton>
              <NavbarButton
                onClick={handleGithubClick}
                variant="primary"
                className="w-full"
              >
                <div className="flex items-center justify-center">
                  <Github className="h-5 w-5 mr-2" />
                  <div>Github</div>
                </div>
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
