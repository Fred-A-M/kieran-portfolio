'use client';
import { useEffect, useState } from 'react';

export default function FadeInPage({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Next paint → fade in
    requestAnimationFrame(() => setReady(true));
  }, []);

  return (
    <div
      className={`transition-opacity duration-200 ${
        ready ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}