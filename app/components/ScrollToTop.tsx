"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Briefly remove smooth scrolling to allow instant jump to top
    const originalStyle = window.getComputedStyle(document.documentElement).scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    
    window.scrollTo(0, 0);
    
    // Restore the smooth scroll behavior
    const timeout = setTimeout(() => {
      document.documentElement.style.scrollBehavior = originalStyle;
    }, 10);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
