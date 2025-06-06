import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { ResumeSection } from "./components/ResumeSection";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";
import UIPortfolioGallery from "./components/UIPortfolioGallery";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";

// Get the base path for GitHub Pages
const getBasePath = () => {
  // Check if we're on GitHub Pages
  if (window.location.hostname.includes('github.io')) {
    return '/Portfolio-v2-1';
  }
  return '';
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigatingBack, setIsNavigatingBack] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);
  const hasRestoredScroll = useRef(false);
  const basePath = getBasePath();
  
  useEffect(() => {
    // Check for redirect from 404.html
    const redirect = localStorage.getItem('redirect_path');
    if (redirect) {
      localStorage.removeItem('redirect_path');
      const newPath = basePath + redirect;
      setCurrentPath(newPath);
      window.history.replaceState(null, '', newPath);
    }

    // Handle browser back/forward
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [basePath]);

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

  // Update navigate function to handle base path
  const navigate = (path: string, saveScroll = false) => {
    if (saveScroll) {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    }
    const newPath = basePath + path;
    setCurrentPath(newPath);
    window.history.pushState(null, '', newPath);
  };

  const navigateBack = () => {
    const savedScroll = sessionStorage.getItem('scrollPosition');
    if (savedScroll) {
      sessionStorage.removeItem('scrollPosition');
      navigate('/', false);
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScroll));
      }, 100);
    } else {
      navigate('/', false);
    }
  };

  // Update path matching to handle base path
  const normalizedPath = currentPath.replace(basePath, '');
  const projectMatch = normalizedPath.match(/^\/project\/(.+)/);
  const isProjectDetail = !!projectMatch;
  const projectId = projectMatch?.[1];

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
        ) : isProjectDetail ? (
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">
              <ProjectDetail
                projectId={projectId}
                navigateBack={navigateBack}
              />
            </main>
            <Footer />
          </div>
        ) : (
          <div className="min-h-screen flex flex-col">
            <Navigation navigate={navigate} />
            <main className="flex-1">
              <Hero />
              <Projects navigate={navigate} />
              <UIPortfolioGallery />
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
