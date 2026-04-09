"use client";

import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  // ✅ Control Sheet open state so we can close it on mobile nav click
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // ✅ Scroll progress bar
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);

      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute("id") || "";

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* ✅ Scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-primary transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <ScrollLink
            to="Hero"
            smooth={true}
            spy={true}
            offset={-80}
            duration={500}
            className="text-xl font-bold gradient-text cursor-pointer"
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Sri Charan M.
            </motion.span>
          </ScrollLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                spy={true}
                offset={-80}
                duration={500}
                href={`#${item.to}`}
                className={`relative text-sm font-medium cursor-pointer transition-colors ${
                  activeSection === item.to
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {activeSection === item.to && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </ScrollLink>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    // ✅ Fixed: close Sheet when a nav link is tapped on mobile
                    <ScrollLink
                      key={item.name}
                      to={item.to}
                      smooth={true}
                      spy={true}
                      offset={-80}
                      duration={500}
                      onClick={() => setMobileOpen(false)}
                      className={`text-lg font-medium cursor-pointer transition-colors ${
                        activeSection === item.to
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </ScrollLink>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;