import type { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { CustomCursor } from "./CustomCursor";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary md:cursor-none">
            <div className="hidden md:block">
                <CustomCursor />
            </div>
            <Navigation />
            <main className="relative min-h-screen">
                {children}
            </main>

            <footer className="py-6 text-center text-xs text-muted-foreground/30 font-light tracking-widest uppercase hover:text-muted-foreground transition-colors duration-500">
                made by his loving son Ayush
            </footer>
        </div>
    );
}
