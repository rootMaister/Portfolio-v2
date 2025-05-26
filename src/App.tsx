import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { ResumeSection } from "./components/ResumeSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState("/");
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);
  const hasRestoredScroll = useRef(false);
  
  useEffect(() => {
    // Handle loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    // Set initial path based on URL
    const path = window.location.pathname;
    setCurrentPath(path);
    
    // Handle navigation
    const handleNavigation = () => {
      const newPath = window.location.pathname;
      setCurrentPath(newPath);
      
      // If navigating back to home via browser back button
      if (newPath === "/" && savedScrollPosition > 0) {
        // Use setTimeout to ensure the DOM has updated before scrolling
        setTimeout(() => {
          window.scrollTo({
            top: savedScrollPosition,
            behavior: 'auto'
          });
          // Reset after use
          setSavedScrollPosition(0);
        }, 100);
      }
    };
    
    // Listen for navigation events
    window.addEventListener("popstate", handleNavigation);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("popstate", handleNavigation);
    };
  }, [savedScrollPosition]);

  // Effect to handle scroll restoration after render
  useEffect(() => {
    if (currentPath === "/" && savedScrollPosition > 0 && !hasRestoredScroll.current) {
      setTimeout(() => {
        window.scrollTo({
          top: savedScrollPosition,
          behavior: 'auto'
        });
        hasRestoredScroll.current = true;
      }, 100);
    } else if (currentPath !== "/") {
      hasRestoredScroll.current = false;
    }
  }, [currentPath, savedScrollPosition]);

  return (
    <LanguageProvider>
      <div className="bg-background">
        {isLoading ? (
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : currentPath.startsWith("/project/") ? (
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">
              <ProjectDetail
                  projectId={currentPath.split("/").pop()} navigateBack={function (): void {
                    throw new Error("Function not implemented.");
                  } }              />
            </main>
            <Footer />
          </div>
        ) : (
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Hero />
              <Projects />
              <About />
              <ResumeSection />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </div>
    </LanguageProvider>
  );
}
