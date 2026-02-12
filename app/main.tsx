"use client";

import { useIsMobile } from './hooks/useIsMobile'
import DesktopHome from './components/DesktopHome';
import MobileHome from './components/MobileHome';

export default function Main() {
  const isMobile = useIsMobile();

  if (isMobile === null) {
    return <div className="h-screen bg-white" />; 
  }


  return (
    <>
      {isMobile ? (
        <MobileHome />
      ) : (
        <DesktopHome />
      )}
    </>
  );
}
