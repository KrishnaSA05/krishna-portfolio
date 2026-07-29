import { useEffect, useRef, useState } from "react";

/**
 * A custom animated cursor: a small dot that tracks the mouse exactly,
 * plus a larger ring that trails behind with a smooth lag.
 * Both scale up when hovering over links, buttons, or anything clickable.
 *
 * Automatically disables itself on touch devices (phones/tablets), since
 * they have no mouse cursor to replace.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Skip entirely on touch devices
    const hasTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    setIsTouchDevice(hasTouch);
    if (hasTouch) return;

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }

      // Detect hover over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest(
        'a, button, [role="button"], input, textarea, [data-cursor-hover]'
      );
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);

    // Smooth trailing animation for the ring
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      animationFrame = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    animationFrame = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Hide the default system cursor everywhere except touch devices */}
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>

      {/* Simple gradient arrow cursor, tracks mouse exactly (same shape always) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cursor-arrow-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
          </defs>
          <path
            d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
            fill="url(#cursor-arrow-gradient)"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Larger ring, trails with lag, scales up on hover */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 border-blue-500 transition-all duration-200 ease-out"
        style={{
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          marginLeft: isHovering ? -28 : -16,
          marginTop: isHovering ? -28 : -16,
          opacity: isVisible ? (isHovering ? 0.8 : 0.5) : 0,
          backgroundColor: isHovering ? "rgba(59, 130, 246, 0.1)" : "transparent",
        }}
      />
    </>
  );
}
