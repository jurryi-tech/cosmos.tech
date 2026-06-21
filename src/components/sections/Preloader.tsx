"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const receiptRef = useRef<HTMLDivElement>(null);
  const borderSvgRef = useRef<SVGRectElement>(null);
  const glowSvgRef = useRef<SVGRectElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const line4Ref = useRef<HTMLDivElement>(null);
  const line5Ref = useRef<HTMLDivElement>(null);
  const appNoRef = useRef<HTMLSpanElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Format today's date
    const today = new Date();
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];
    const formattedDate = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

    // Calculate the SVG rect perimeter for stroke-dasharray
    // Receipt is roughly 480x360 (the SVG viewBox matches the receipt size)
    const perimeter = 2 * (480 + 360);

    // Set initial states
    gsap.set(contentRef.current, { opacity: 0 });
    gsap.set(
      [line1Ref.current, line2Ref.current, line3Ref.current, line4Ref.current, line5Ref.current],
      { opacity: 0 }
    );
    gsap.set(progressFillRef.current, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(logoRef.current, { opacity: 0, scale: 0 });

    // Border SVG: draw clockwise
    if (borderSvgRef.current) {
      gsap.set(borderSvgRef.current, {
        strokeDasharray: perimeter,
        strokeDashoffset: perimeter,
      });
    }
    if (glowSvgRef.current) {
      gsap.set(glowSvgRef.current, {
        strokeDasharray: perimeter,
        strokeDashoffset: perimeter,
      });
    }

    // 1. Border draws itself (0.8s)
    tl.to(
      [borderSvgRef.current, glowSvgRef.current],
      {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: "power2.inOut",
      },
      0
    );

    // Show content area once border starts drawing
    tl.to(contentRef.current, { opacity: 1, duration: 0.1 }, 0.3);

    // 2. Type in lines sequentially

    // Line 1: "UNITED STATES PATENT AND TRADEMARK OFFICE"
    tl.fromTo(
      line1Ref.current,
      { opacity: 0, width: 0 },
      {
        opacity: 1,
        width: "auto",
        duration: 0.5,
        ease: "steps(42)",
      },
      0.6
    );

    // Line 2: Application No (starts redacted)
    tl.fromTo(
      line2Ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      1.1
    );

    // Line 3: Filing Date
    tl.fromTo(
      line3Ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      1.4
    );

    // Line 4: Applicant + Title
    tl.fromTo(
      line4Ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      1.7
    );

    // Line 5: Status + Progress bar
    tl.fromTo(
      line5Ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      2.0
    );

    // Redacted blocks resolve to actual number
    if (appNoRef.current) {
      tl.to(
        {},
        {
          duration: 0.4,
          onStart: () => {
            if (!appNoRef.current) return;
            const target = "18/947,283";
            const redacted = "\u2588\u2588/\u2588\u2588\u2588,\u2588\u2588\u2588";
            appNoRef.current.textContent = redacted;
            let step = 0;
            const interval = setInterval(() => {
              if (!appNoRef.current) { clearInterval(interval); return; }
              step++;
              if (step >= target.length) {
                appNoRef.current.textContent = target;
                clearInterval(interval);
                return;
              }
              const revealed = target.slice(0, step);
              const remaining = redacted.slice(step);
              appNoRef.current.textContent = revealed + remaining;
            }, 40);
          },
        },
        1.2
      );
    }

    // Set the filing date text
    tl.to(
      {},
      {
        duration: 0.01,
        onStart: () => {
          const el = document.getElementById("preloader-date");
          if (el) el.textContent = formattedDate;
        },
      },
      1.4
    );

    // 3. Progress bar fills + status changes
    tl.to(
      progressFillRef.current,
      {
        scaleX: 0.3,
        duration: 0.3,
        ease: "power1.out",
        onStart: () => {
          if (statusRef.current) statusRef.current.textContent = "PROCESSING";
        },
      },
      2.2
    );

    tl.to(
      progressFillRef.current,
      {
        scaleX: 0.55,
        duration: 0.3,
        ease: "power1.out",
        onStart: () => {
          if (statusRef.current) statusRef.current.textContent = "ANALYZING";
        },
      },
      2.5
    );

    tl.to(
      progressFillRef.current,
      {
        scaleX: 0.8,
        duration: 0.3,
        ease: "power1.out",
        onStart: () => {
          if (statusRef.current) statusRef.current.textContent = "DRAFTING";
        },
      },
      2.8
    );

    tl.to(
      progressFillRef.current,
      {
        scaleX: 1,
        duration: 0.3,
        ease: "power1.out",
        onStart: () => {
          if (statusRef.current) {
            statusRef.current.textContent = "GRANTED";
            statusRef.current.style.color = "#C5A44E";
            statusRef.current.style.textShadow = "0 0 8px rgba(197,164,78,0.6)";
          }
        },
      },
      3.1
    );

    // 4. Receipt fold animation + morph to J logo
    // Brief pause after GRANTED
    const foldStart = 3.6;

    // Fold horizontally (top half folds down onto bottom half)
    tl.to(
      receiptRef.current,
      {
        rotateX: -90,
        scaleY: 0.5,
        duration: 0.3,
        ease: "power2.in",
        transformOrigin: "center center",
      },
      foldStart
    );

    // Fold vertically (left half folds onto right half)
    tl.to(
      receiptRef.current,
      {
        rotateY: 90,
        scaleX: 0.5,
        scale: 0.3,
        duration: 0.3,
        ease: "power2.in",
      },
      foldStart + 0.3
    );

    // Shrink to small square + fade out receipt
    tl.to(
      receiptRef.current,
      {
        scale: 0.08,
        opacity: 0,
        borderRadius: "4px",
        duration: 0.25,
        ease: "power2.in",
      },
      foldStart + 0.6
    );

    // Show J logo at center and slide to top-left
    tl.to(
      logoRef.current,
      {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: "back.out(1.5)",
      },
      foldStart + 0.75
    );

    tl.to(
      logoRef.current,
      {
        x: -(window.innerWidth / 2 - 48),
        y: -(window.innerHeight / 2 - 40),
        scale: 0.7,
        duration: 0.4,
        ease: "power3.inOut",
      },
      foldStart + 0.95
    );

    // Fade out the overlay
    tl.to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      },
      foldStart + 1.2
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: "#FDFBF7",
        perspective: "1200px",
      }}
    >
      {/* Receipt container */}
      <div
        ref={receiptRef}
        className="relative"
        style={{
          width: 480,
          height: 360,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Border SVG overlay */}
        <svg
          className="absolute inset-0 pointer-events-none"
          width="480"
          height="360"
          viewBox="0 0 480 360"
          fill="none"
          style={{ overflow: "visible" }}
        >
          {/* Golden glow trail */}
          <rect
            ref={glowSvgRef}
            x="0.5"
            y="0.5"
            width="479"
            height="359"
            rx="2"
            stroke="#C5A44E"
            strokeWidth="3"
            fill="none"
            opacity="0.4"
            style={{ filter: "blur(4px)" }}
          />
          {/* Main charcoal border */}
          <rect
            ref={borderSvgRef}
            x="0.5"
            y="0.5"
            width="479"
            height="359"
            rx="2"
            stroke="#2C2C2C"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {/* Receipt content */}
        <div
          ref={contentRef}
          className="absolute inset-0 flex flex-col font-mono px-10 py-8"
          style={{ fontSize: 13, color: "#2C2C2C" }}
        >
          {/* Header */}
          <div
            ref={line1Ref}
            className="text-center tracking-wider mb-6 overflow-hidden whitespace-nowrap font-semibold"
            style={{ fontSize: 13 }}
          >
            UNITED STATES PATENT AND TRADEMARK OFFICE
          </div>

          {/* Separator */}
          <div
            className="w-full mb-5"
            style={{ borderTop: "1px solid #2C2C2C", opacity: 0.3 }}
          />

          {/* Application No */}
          <div ref={line2Ref} className="mb-3 flex">
            <span className="opacity-60 mr-2">Application No.:</span>
            <span ref={appNoRef} className="font-semibold">
              {"\u2588\u2588/\u2588\u2588\u2588,\u2588\u2588\u2588"}
            </span>
          </div>

          {/* Filing Date */}
          <div ref={line3Ref} className="mb-3 flex">
            <span className="opacity-60 mr-2">Filing Date:</span>
            <span id="preloader-date" className="font-semibold" />
          </div>

          {/* Applicant */}
          <div ref={line4Ref} className="mb-5">
            <div className="mb-2 flex">
              <span className="opacity-60 mr-2">Applicant:</span>
              <span className="font-semibold">COSMOS TECH</span>
            </div>
            <div className="flex">
              <span className="opacity-60 mr-2">Title:</span>
              <span className="font-semibold leading-snug">
                SYSTEM AND METHOD FOR
                <br />
                <span className="ml-[60px]">AI-POWERED PATENT PROSECUTION</span>
              </span>
            </div>
          </div>

          {/* Separator */}
          <div
            className="w-full mb-5"
            style={{ borderTop: "1px solid #2C2C2C", opacity: 0.3 }}
          />

          {/* Status + Progress bar */}
          <div ref={line5Ref}>
            <div className="flex items-center gap-4">
              <span className="opacity-60 shrink-0">Status:</span>
              {/* Progress bar container */}
              <div
                ref={progressBarRef}
                className="relative flex-1 h-[14px] rounded-sm overflow-hidden"
                style={{
                  border: "1px solid rgba(44,44,44,0.3)",
                  backgroundColor: "rgba(44,44,44,0.05)",
                }}
              >
                <div
                  ref={progressFillRef}
                  className="absolute inset-0 rounded-sm"
                  style={{
                    background:
                      "linear-gradient(90deg, #C5A44E 0%, #d4b766 50%, #C5A44E 100%)",
                    boxShadow: "0 0 10px rgba(197,164,78,0.4)",
                  }}
                />
              </div>
              <span
                ref={statusRef}
                className="font-semibold shrink-0 tracking-widest"
                style={{ fontSize: 11, minWidth: 90, textAlign: "right" }}
              >
                PROCESSING
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* J Logo (appears after receipt folds) */}
      <div
        ref={logoRef}
        className="absolute flex items-center justify-center"
        style={{
          width: 48,
          height: 48,
          backgroundColor: "#2C2C2C",
          borderRadius: 8,
        }}
      >
        <span
          className="font-serif font-bold"
          style={{
            fontSize: 28,
            color: "#C5A44E",
            lineHeight: 1,
          }}
        >
          C
        </span>
      </div>
    </div>
  );
}
