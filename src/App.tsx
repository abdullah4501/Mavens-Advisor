
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Calculator from "./pages/Calculator";
import ScrollToTop from "./components/ScrollToTop";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminSettings from "./pages/AdminSettings";
import { SettingsProvider } from "./context/SettingsContext";
import Team from "./pages/Team";
import AboutUs from "./pages/AboutUs";
import OurHistory from "./pages/OurHistory";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SettingsProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index breadcrumb="Home" />} />
              <Route path="/team" element={<Team breadcrumb="Our Team" />} />
              <Route path="/about-us" element={<AboutUs breadcrumb="About Us" />} />
              <Route path="/calculator" element={<Calculator breadcrumb="Calculator" />} />
              <Route path="/our-history" element={<OurHistory breadcrumb="Our History" />} />
              <Route path="/contact" element={<ContactUs breadcrumb="Contact Us" />} />
              <Route path="*" element={<NotFound breadcrumb="404" />} />
            </Routes>

          </BrowserRouter>
        </TooltipProvider>
      </SettingsProvider>
    </QueryClientProvider>
  );
};

export default App;
