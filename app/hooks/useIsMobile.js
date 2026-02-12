import { useState, useEffect } from 'react';


export function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(null);


  useEffect(() => {
    // This code runs once on mount
    
    // Define the function that checks window size
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    
    // Run once immediately
    checkIfMobile();
    
    // Add event listener that persists after the effect completes
    window.addEventListener('resize', checkIfMobile);
    
    // This cleanup runs when component unmounts
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [breakpoint]);

  return isMobile;

}
