import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import { Layout } from "@/components/Layout";
import { AnimatePresence } from "framer-motion";

import { ScrollToTop } from "@/components/ScrollToTop";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence>
      <ScrollToTop />
      <Switch location={location} key={location}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    console.log(
      "%c Designed & Developed by Ayush Vyas %c",
      "background: #000000; color: #ffffff; padding: 10px 20px; border-radius: 4px; font-family: 'Inter', sans-serif; font-weight: 600; font-size: 14px; letter-spacing: 1px;",
      "color: #888888; font-family: 'Inter', sans-serif; font-size: 12px; padding-top: 10px;"
    );
    console.log(
      "%c I made this site! If you want to make one too, contact me at ayushkv360@gmail.com",
      "color: #ddff1dff; font-family: 'Inter', sans-serif; font-size: 12px; font-style: italic;"
    );
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Layout>
            <Router />
            <Toaster />
          </Layout>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
