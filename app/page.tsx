"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

export default function Splash() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);
  const [triggerExitWave, setTriggerExitWave] = useState(false);

  const goToWork = useCallback(() => {
    if (leaving) return;

    setLeaving(true);
    setTriggerExitWave(true);
    // sessionStorage.setItem("seenSplash", "true");

    setTimeout(() => {
      router.push("/work");
    }, 300);
  }, [leaving, router]);

  useEffect(() => {
    // const seen = sessionStorage.getItem("seenSplash");

    // if (seen) {
    //   router.replace("/work");
    //   return;
    // }

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
        transition-opacity duration-300
        ${leaving ? "opacity-0 delay-400" : "opacity-100"}
      `}
    >
      <h1 className="text-4xl tracking-wide flex">
        {"Welcome".split("").map((char, i) => (
          <span
            key={i}
            className={`wave-letter ${triggerExitWave ? "wave-exit" : ""}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}