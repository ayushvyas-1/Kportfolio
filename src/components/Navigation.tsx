import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Gallery", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6 md:py-8">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-home">
            <h1 className="font-display text-2xl md:text-3xl font-medium tracking-wider cursor-pointer hover-elevate px-3 py-2 rounded-md">
              KASHYAP VYAS
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                <span
                  className={`text-xs uppercase tracking-[0.15em] cursor-pointer transition-colors font-light ${
                    location === item.path
                      ? "text-foreground font-normal"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-8 pb-6 space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                <div
                  className={`text-lg uppercase tracking-[0.15em] cursor-pointer transition-colors py-2 font-light ${
                    location === item.path
                      ? "text-foreground font-normal"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
