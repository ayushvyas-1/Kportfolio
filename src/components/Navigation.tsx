import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Gallery", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 bg-background/60 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <h1 className="font-display text-xl md:text-2xl tracking-widest cursor-pointer">
              KASHYAP VYAS
            </h1>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`text-xs uppercase tracking-[0.25em] transition-colors cursor-pointer ${
                    location === item.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}

            <ThemeToggle />
          </div>

          {/* Mobile burger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-100 bg-background/85 backdrop-blur-2xl flex flex-col px-8 py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Top bar inside menu */}
            <div className="flex items-center justify-between mb-16">
              <h1 className="font-display text-xl tracking-widest">
                KASHYAP VYAS
              </h1>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:bg-foreground/10"
              >
                <X className="h-7 w-7" />
              </Button>
            </div>

            {/* Centered nav links */}
            <nav className="flex flex-col gap-10 mt-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.span
                    className={`text-2xl uppercase tracking-[0.25em] block ${
                      location === item.path
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
