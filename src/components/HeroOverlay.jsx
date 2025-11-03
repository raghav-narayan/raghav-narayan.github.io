import React, { useEffect, useRef } from "react";

export default function HeroOverlay() {
  const glowRef = useRef(null);
  const sweepRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        style={{
          position: "fixed",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          filter: "blur(150px)",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        ref={sweepRef}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(100deg, transparent 15%, rgba(255,255,255,0.06) 50%, transparent 85%)",
          animation: "lightSweep 12s linear infinite",
          filter: "blur(100px)",
          zIndex: 1,
        }}
      />
      <style>{`
        @keyframes lightSweep {
          0% { transform: translateX(-80%); opacity: .5; }
          50% { transform: translateX(50%); opacity: 1; }
          100% { transform: translateX(120%); opacity: .5; }
        }
      `}</style>
    </>
  );
}
