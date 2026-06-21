"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

function formatCurrency(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

export default function CostCalculator() {
  const [applications, setApplications] = useState(50);
  const [officeActions, setOfficeActions] = useState(2.5);
  const [hourlyRate, setHourlyRate] = useState(500);
  const [hoursPerResponse, setHoursPerResponse] = useState(15);

  const sectionRef = useRef<HTMLElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const traditionalCost = applications * officeActions * hourlyRate * hoursPerResponse;
  const cosmosCost = applications * officeActions * 250;
  const annualSavings = traditionalCost - cosmosCost;
  const timeSaved = applications * officeActions * (hoursPerResponse - 0.5);
  const roi = cosmosCost > 0 ? (annualSavings / cosmosCost) * 100 : 0;
  const traditionalPerResponse = hourlyRate * hoursPerResponse;

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".calc-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".calc-panel", {
        scrollTrigger: {
          trigger: ".calc-panel",
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".results-panel", {
        scrollTrigger: {
          trigger: ".results-panel",
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const sliderClass =
    "w-full h-2 rounded-full appearance-none cursor-pointer bg-[#E8E6E3] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#C5A44E] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#C5A44E] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer";

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#F5F5F3] flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Title */}
        <div className="calc-title text-center mb-16">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#C5A44E] mb-3">
            THE ECONOMICS
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-[#1A1A1A]">
            Calculate Your ROI
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Sliders Panel */}
          <div className="calc-panel bg-white rounded-2xl p-8 shadow-sm">
            <div className="space-y-8">
              {/* Slider 1 */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm font-medium text-[#1A1A1A]">
                    Monthly Patent Applications
                  </label>
                  <span className="font-mono text-lg font-semibold text-[#C5A44E]">
                    {applications}
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={200}
                  step={5}
                  value={applications}
                  onChange={(e) => setApplications(Number(e.target.value))}
                  className={sliderClass}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>5</span>
                  <span>200</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm font-medium text-[#1A1A1A]">
                    Average Office Actions per Application
                  </label>
                  <span className="font-mono text-lg font-semibold text-[#C5A44E]">
                    {officeActions}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={5}
                  step={0.5}
                  value={officeActions}
                  onChange={(e) => setOfficeActions(Number(e.target.value))}
                  className={sliderClass}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1</span>
                  <span>5</span>
                </div>
              </div>

              {/* Slider 3 */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm font-medium text-[#1A1A1A]">
                    Attorney Hourly Rate ($)
                  </label>
                  <span className="font-mono text-lg font-semibold text-[#C5A44E]">
                    ${hourlyRate}
                  </span>
                </div>
                <input
                  type="range"
                  min={200}
                  max={1000}
                  step={50}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className={sliderClass}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$200</span>
                  <span>$1,000</span>
                </div>
              </div>

              {/* Slider 4 */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm font-medium text-[#1A1A1A]">
                    Hours per Office Action Response
                  </label>
                  <span className="font-mono text-lg font-semibold text-[#C5A44E]">
                    {hoursPerResponse}
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={40}
                  step={1}
                  value={hoursPerResponse}
                  onChange={(e) => setHoursPerResponse(Number(e.target.value))}
                  className={sliderClass}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>5</span>
                  <span>40</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div
            ref={resultsRef}
            className="results-panel bg-white rounded-2xl p-8 shadow-sm border-l-4 border-[#C5A44E] flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-500 mb-1">Annual Savings</p>
                <motion.p
                  key={annualSavings}
                  initial={{ opacity: 0.6, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#C5A44E] leading-tight"
                >
                  {formatCurrency(annualSavings)}
                </motion.p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Time Saved</p>
                  <motion.p
                    key={timeSaved}
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="font-mono text-2xl font-bold text-[#1A1A1A]"
                  >
                    {formatNumber(timeSaved)}
                  </motion.p>
                  <p className="text-xs text-gray-400">hours/year</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">ROI</p>
                  <motion.p
                    key={roi}
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="font-mono text-2xl font-bold text-[#1A1A1A]"
                  >
                    {formatNumber(Math.round(roi))}%
                  </motion.p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-2">
                  Cost per Response
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xl font-bold text-[#C5A44E]">
                    $250
                  </span>
                  <span className="text-sm text-gray-400">vs</span>
                  <span className="font-mono text-xl text-gray-400 line-through">
                    {formatCurrency(traditionalPerResponse)}
                  </span>
                  <span className="text-xs text-gray-400">traditional</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-400 mt-12 max-w-2xl mx-auto leading-relaxed">
          These calculations are based on industry averages from the AIPLA 2024
          Economic Survey. Your actual savings may vary based on technology
          complexity and jurisdiction mix.
        </p>
      </div>
    </section>
  );
}
