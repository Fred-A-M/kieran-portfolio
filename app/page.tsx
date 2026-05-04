"use client";
import { CldImage } from 'next-cloudinary';
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";


export default function Splash() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const goToWork = useCallback(() => {
    if (leaving) return;

    setLeaving(true);

    setTimeout(() => {
      router.push("/work");
    }, 300);
  }, [leaving, router]);

  useEffect(() => {
    const handleScroll = () => goToWork();

    window.addEventListener("wheel", handleScroll, { once: true });
    window.addEventListener("touchmove", handleScroll, { once: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [goToWork, router]);

  return (
    <div
      onClick={goToWork}
      className={`
        h-screen w-screen flex items-center justify-center
        transition-opacity duration-300 overflow-hidden
        ${leaving ? "opacity-0 delay-400" : "opacity-100"}
      `}
    >
      <div className="relative w-full h-full flex items-center justify-center">

        {/* Image */}
        <div
          className={`absolute drop-image ${imageLoaded ? "start" : ""}`}
        >
          <CldImage
            src="DAY_THREE3657_jj89dy"
            width={500}
            height={500}
            alt="Splash"
            preload
            onLoad={() => {
              setTimeout(() => setImageLoaded(true), 50);
            }}
          />
        </div>

        {/* Text */}
        <h1 className="text-2xl flex">
          {"Welcome".split("").map((char, i) => (
            <span
              key={i}
              className={`drop-text ${imageLoaded ? "start" : ""}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </h1>

      </div>
    </div>
  );
}