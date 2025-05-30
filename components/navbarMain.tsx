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
      link: "#experience",
    },
    {
      name: "Projects",
      link: "#projects",
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

  const handleScrollToSection = (sectionId: string) => {
    const id = sectionId.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      const yOffset = -80; // Adjust this value based on your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
      top: y,
      behavior: 'smooth'  
      });
    }
  };

  const handleNavItemClick = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (link.startsWith('#')) {
      handleScrollToSection(link);
    }
  };

  const handleMobileNavItemClick = (link: string) => {
    setIsMobileMenuOpen(false);
    if (link.startsWith('#')) {
      // Small delay to allow mobile menu to close before scrolling
      setTimeout(() => {
        handleScrollToSection(link);
      }, 100);
    }
  };

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems 
            items={navItems.map(item => ({
              ...item,
              onClick: (e: React.MouseEvent) => handleNavItemClick(item.link, e)
            }))}
          />
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
              <button
                key={`mobile-link-${idx}`}
                onClick={() => handleMobileNavItemClick(item.link)}
                className="relative text-neutral-600 dark:text-neutral-300 text-left w-full p-2 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <span className="block">{item.name}</span>
              </button>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4">
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