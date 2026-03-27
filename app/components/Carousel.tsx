"use client";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function Carousel({ 
  children,
  setCurrentIndex,
  total,
  galleryLength,
  desktop,
}: { 
  children: React.ReactNode
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  galleryLength: number;
  desktop?: boolean;
}) {

  const [isAnimating, setIsAnimating] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [offset, setOffset] = useState(0);
  const pointers = galleryLength > 1 && desktop;


  // Navigation
  const goNext = () => {
    if (isAnimating || total <= 1) return;
    setIsAnimating(true);
    setOffset(-1); // slide left
  };

  const goPrev = () => {
    if (isAnimating || total <= 1) return;
    setIsAnimating(true);
    setOffset(1); // slide right
  };

  const handlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goPrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <>
      {pointers &&
        <button
          onClick={() =>
            goPrev()
          }
          className="absolute left-0 -translate-x-full pr-4 text-3xl hover:text-4xl z-50"
        >
          ←
        </button>
      }

      <div
        className="relative min-w-dvw h-[40vh] lg:h-[50vh] overflow-hidden z-10"
        {...handlers}
      >
        <div
          className={`flex h-full ${
            isResetting
              ? ""
              : "transition-transform duration-500 ease-[cubic-bezier(0.3, 1, 0.5, 1)]"
          }`}
          style={{
            transform: `translateX(calc(-100% + ${offset * 100}%))`,
          }}
          onTransitionEnd={() => {
            if (offset === 0) return;
          
            // Step 1: update index
            setCurrentIndex((prev) =>
              offset === -1
                ? (prev + 1) % total
                : prev === 0
                ? total - 1
                : prev - 1
            );
          
            // Step 2: disable animation
            setIsResetting(true);
          
            // Step 3: snap back instantly
            setOffset(0);
          
            // Step 4: re-enable animation next frame
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                setIsResetting(false);
                setIsAnimating(false);
              });
            });
          }}
        >
          {children}
        </div>
      </div>

      {pointers &&
        <button
          onClick={() =>
            goNext()
          }
          className="absolute right-0 translate-x-full pl-4 text-3xl hover:text-4xl z-50"
        >
          →
        </button>
      }
    </>
  );
}