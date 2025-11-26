import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Gallery", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled || mobileMenuOpen
            ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-4"
            : "bg-transparent py-6"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="group relative z-50">
              <h1 className="font-display text-2xl md:text-3xl tracking-widest font-medium text-foreground">
                KASHYAP VYAS
              </h1>
              <span className="block h-0.5 w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
            </a>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a className="relative group py-2">
                  <span
                    className={`font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${location === item.path
                        ? "text-foreground font-medium"
                        : "text-muted-foreground group-hover:text-foreground"
                      }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-foreground transition-all duration-300 ease-out ${location === item.path ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </a>
              </Link>
            ))}

            <div className="pl-4 border-l border-border/50">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile burger */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              className="hover:bg-transparent"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 hover:bg-transparent"
            >
              <X className="h-8 w-8" />
            </Button>

            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <Link key={item.path} href={item.path}>
                  <a onClick={() => setMobileMenuOpen(false)}>
                    <motion.span
                      className={`font-display text-4xl md:text-5xl cursor-pointer transition-colors ${location === item.path
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                        }`}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {item.label}
                    </motion.span>
                  </a>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
