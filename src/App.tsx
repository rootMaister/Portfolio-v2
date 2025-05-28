import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { ResumeSection } from "./components/ResumeSection";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigatingBack, setIsNavigatingBack] = useState(false);
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
        setIsNavigatingBack(true);
        // Use setTimeout to ensure the DOM has updated before scrolling
        setTimeout(() => {
          window.scrollTo({
            top: savedScrollPosition,
            behavior: 'auto'
          });
          // Reset after use
          setSavedScrollPosition(0);
          // Hide loading screen after scroll is restored
          setTimeout(() => {
            setIsNavigatingBack(false);
          }, 300);
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

  // Navigation functions
  const navigate = (path: string, saveScroll = false) => {
    if (saveScroll) {
      setSavedScrollPosition(window.scrollY);
    }
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const navigateBack = () => {
    setIsNavigatingBack(true);
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
    // Restore scroll position if it was saved
    if (savedScrollPosition > 0) {
      setTimeout(() => {
        window.scrollTo({
          top: savedScrollPosition,
          behavior: 'auto'
        });
        setSavedScrollPosition(0);
        // Hide loading screen after scroll is restored
        setTimeout(() => {
          setIsNavigatingBack(false);
        }, 300);
      }, 100);
    } else {
      // If no scroll position to restore, just hide the loading screen
      setTimeout(() => {
        setIsNavigatingBack(false);
      }, 300);
    }
  };

  // Loading screen component
  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-muted-foreground">Returning to projects...</p>
      </div>
    </div>
  );

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
                projectId={currentPath.split("/").pop()}
                navigateBack={navigateBack}
              />
            </main>
            <Footer />
          </div>
        ) : (
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Hero />
              <Projects navigate={navigate} />
              <About />
              <ResumeSection />
            </main>
            <Footer />
          </div>
        )}
        {isNavigatingBack && <LoadingScreen />}
      </div>
    </LanguageProvider>
  );
}
