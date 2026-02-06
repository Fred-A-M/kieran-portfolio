"use client";

import { useEffect } from 'react';
import { useState } from 'react';
import DesktopHome from './components/DesktopHome';
import MobileHome from './components/MobileHome';

export default function Main() {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    // This code runs once on mount
    
    // Define the function that checks window size
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Run once immediately
    checkIfMobile();
    
    // Add event listener that persists after the effect completes
    window.addEventListener('resize', checkIfMobile);
    
    // This cleanup runs when component unmounts
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);


  return (
    <div className={`flex items-center justify-center ${!isMobile && 'min-h-[calc(100vh-150px)]'}`}>
      {isMobile ? (
        <div className="w-full h-full">
          <MobileHome />
        </div>
      ) : (
        <div className="relative flex">
          <DesktopHome />
        </div>
      )}
    </div>
  );
}
