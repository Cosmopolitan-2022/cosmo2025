"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface EventBoxProps {
  title: string;
  description?: string; // alt / extended text
  className?: string;
}

export default function EventBox({
  title,
  description,
  className = "",
}: EventBoxProps) {
  const [active, setActive] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const isTouchRef = useRef(false);

  // Detect if touch interaction happened
  const markTouch = () => {
    isTouchRef.current = true;
  };

  // Close on outside click when active (for touch/click)
  const handleDocumentPointerDown = useCallback(
    (e: PointerEvent) => {
      if (!active) return;
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setActive(false);
      }
    },
    [active]
  );

  useEffect(() => {
    document.addEventListener("pointerdown", handleDocumentPointerDown);
    return () =>
      document.removeEventListener("pointerdown", handleDocumentPointerDown);
  }, [handleDocumentPointerDown]);

  const toggle = () => {
    // Only toggle via explicit interaction (touch or keyboard). Desktop hover still works.
    setActive((a) => !a);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    } else if (e.key === "Escape" && active) {
      setActive(false);
    }
  };

  const overlayBase =
    "absolute left-1/2 top-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 z-20";
  const overlayState = active
    ? "opacity-100 scale-100 pointer-events-auto"
    : "opacity-0 scale-90 pointer-events-none group-hover:opacity-100 group-hover:scale-100";

  return (
    <div
      ref={rootRef}
      className={`group relative bg-white/95 backdrop-blur-sm rounded-xl p-4 md:p-6 h-32 md:h-36 lg:h-48 xl:h-52 shadow-lg border border-[#FFD9A4]/60 transition-colors duration-300 overflow-visible focus:outline-none focus:ring-2 focus:ring-[#FFD9A4]/60 ${className}`}
      role={description ? "button" : undefined}
      tabIndex={description ? 0 : -1}
      aria-expanded={description ? active : undefined}
      onPointerDown={(e) => {
        if (e.pointerType === "touch") {
          markTouch();
        }
      }}
      onClick={() => {
        if (!description) return;
        if (isTouchRef.current) {
          // On touch devices treat click as toggle (after pointerdown sets flag)
          toggle();
        }
      }}
      onKeyDown={description ? onKeyDown : undefined}
    >
      {/* Base content */}
      <div className="h-full flex flex-col justify-center items-center transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#03523C] text-center font-montserrat px-2">
          {title}
        </h3>
      </div>

      {/* Hover overlay */}
      {description && (
        <div className={`${overlayBase} ${overlayState}`}>
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,217,164,0.22),transparent_65%),linear-gradient(150deg,#082B20_0%,#03523C_55%,#082B20_100%)] border border-[#FFD9A4]/50 shadow-[0_8px_25px_-6px_rgba(3,82,60,0.55),0_0_40px_-8px_rgba(255,217,164,0.55)]" />
          <div className="relative px-4 md:px-5 text-center max-h-full overflow-y-auto hide-scrollbar flex items-center">
            <p className="text-[0.62rem] xs:text-[0.7rem] sm:text-xs md:text-sm leading-snug font-montserrat text-[#FFD9A4] font-medium drop-shadow-[0_0_4px_rgba(0,0,0,0.4)]">
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
