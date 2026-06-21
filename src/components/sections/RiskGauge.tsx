"use client";

import { useMemo, useState } from "react";

// ---------------------------------------------------------------------------
// Theme tokens (cosmos)
// ---------------------------------------------------------------------------
const CARD_BG = "#FDFBF7";
const BORDER = "#E8E4DD";
const MONO_LABEL = "#8B7355";
const BODY = "#5A5A5A";

const GREEN = "#4A7C59"; // technical / low risk
const GOLD = "#C5A44E"; // caution / moderate risk
const TERRA = "#B0573A"; // abstract / high risk

// Soft tints of the status colors for the gauge arcs
const GREEN_TINT = "#A9C4B1";
const GOLD_TINT = "#E0CB95";
const TERRA_TINT = "#D9A893";

// ---------------------------------------------------------------------------
// Geometry helpers (semicircular gauge, 180deg, 0 left -> 100 right)
// ---------------------------------------------------------------------------
const CX = 160; // center x
const CY = 150; // center y (baseline of the semicircle)
const R = 120; // arc radius
const STROKE = 22; // arc thickness

// Map a 0..100 score to an angle in degrees.
// 0   -> 180deg (pointing left)
// 100 -> 0deg   (pointing right)
function scoreToAngle(score: number): number {
  return 180 - (score / 100) * 180;
}

// Polar (degrees, standard math orientation) -> cartesian in SVG space.
// SVG y grows downward, so we subtract the sin component.
function polar(cx: number, cy: number, radius: number, angleDeg: number) {
  const a = (angleDeg * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(a),
    y: cy - radius * Math.sin(a),
  };
}

// Build an SVG arc path between two scores along the gauge radius.
function arcPath(scoreStart: number, scoreEnd: number): string {
  const a0 = scoreToAngle(scoreStart);
  const a1 = scoreToAngle(scoreEnd);
  const p0 = polar(CX, CY, R, a0);
  const p1 = polar(CX, CY, R, a1);
  // Each third spans 60deg, so large-arc-flag is always 0. Sweep flag 1
  // (clockwise in SVG screen coords) draws along the top of the semicircle.
  return `M ${p0.x.toFixed(2)} ${p0.y.toFixed(2)} A ${R} ${R} 0 0 1 ${p1.x.toFixed(
    2
  )} ${p1.y.toFixed(2)}`;
}

// ---------------------------------------------------------------------------
// Risk classification
// ---------------------------------------------------------------------------
type RiskLevel = "low" | "moderate" | "high";

function levelFor(score: number): RiskLevel {
  if (score < 34) return "low";
  if (score < 67) return "moderate";
  return "high";
}

function colorForLevel(level: RiskLevel): string {
  if (level === "low") return GREEN;
  if (level === "moderate") return GOLD;
  return TERRA;
}

function labelForLevel(level: RiskLevel): string {
  if (level === "low") return "LOW RISK";
  if (level === "moderate") return "MODERATE RISK";
  return "HIGH RISK";
}

function tintForLevel(level: RiskLevel): string {
  // Faint translucent tint for the pill background.
  if (level === "low") return "rgba(74, 124, 89, 0.12)";
  if (level === "moderate") return "rgba(197, 164, 78, 0.14)";
  return "rgba(176, 87, 58, 0.12)";
}

type Factor = { text: string; positive: boolean };

function factorsFor(level: RiskLevel): Factor[] {
  if (level === "high") {
    return [
      { text: '"Method for..." preamble detected', positive: false },
      { text: "Generic computer components", positive: false },
      { text: "Mental process language", positive: false },
    ];
  }
  if (level === "moderate") {
    return [
      { text: "Generic computer components", positive: false },
      { text: "Some technical context present", positive: true },
    ];
  }
  return [
    { text: "Specific hardware recited", positive: true },
    { text: "Concrete technical effect", positive: true },
  ];
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function RiskGauge() {
  const [score, setScore] = useState<number>(73);

  const level = useMemo(() => levelFor(score), [score]);
  const accent = colorForLevel(level);
  const factors = useMemo(() => factorsFor(level), [level]);

  const needleAngle = scoreToAngle(score);
  const needleEnd = polar(CX, CY, R - STROKE - 6, needleAngle);

  // Tick marks at 0/20/40/60/80/100
  const ticks = [0, 20, 40, 60, 80, 100];

  return (
    <section
      className="w-full px-6 py-20 md:px-10 lg:px-16"
      style={{ color: BODY }}
    >
      <div className="mx-auto max-w-4xl">
        {/* Section heading row */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2
            className="text-3xl leading-tight md:text-4xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#2A2A2A" }}
          >
            Abstract Idea Risk Assessment
          </h2>
          <span
            className="font-mono text-xs uppercase tracking-[0.18em]"
            style={{ color: MONO_LABEL }}
          >
            Risk Gauge
          </span>
        </div>

        {/* Card */}
        <div
          className="rounded-xl p-6 md:p-8"
          style={{
            backgroundColor: CARD_BG,
            border: `1px solid ${BORDER}`,
            boxShadow: "0 1px 2px rgba(42,42,42,0.03)",
          }}
        >
          {/* Card header */}
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h3
                className="text-xl md:text-2xl"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  color: "#2A2A2A",
                }}
              >
                101 Rejection Risk Meter
              </h3>
              <p
                className="mt-1 font-mono text-xs uppercase tracking-[0.12em]"
                style={{ color: MONO_LABEL }}
              >
                Abstract Idea Detection Score
              </p>
            </div>

            {/* Status pill */}
            <span
              className="shrink-0 rounded-full px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.12em]"
              style={{
                color: accent,
                backgroundColor: tintForLevel(level),
                border: `1px solid ${accent}`,
              }}
            >
              {labelForLevel(level)}
            </span>
          </div>

          {/* Gauge */}
          <div className="flex flex-col items-center">
            <svg
              viewBox="0 0 320 200"
              className="w-full max-w-md"
              role="img"
              aria-label={`Risk gauge showing ${score} percent, ${labelForLevel(level)}`}
            >
              {/* Track (faint full arc) */}
              <path
                d={arcPath(0, 100)}
                fill="none"
                stroke={BORDER}
                strokeWidth={STROKE}
                strokeLinecap="round"
              />

              {/* Zone arcs (soft tints) */}
              <path
                d={arcPath(0, 33.33)}
                fill="none"
                stroke={GREEN_TINT}
                strokeWidth={STROKE}
                strokeLinecap="round"
              />
              <path
                d={arcPath(33.33, 66.66)}
                fill="none"
                stroke={GOLD_TINT}
                strokeWidth={STROKE}
              />
              <path
                d={arcPath(66.66, 100)}
                fill="none"
                stroke={TERRA_TINT}
                strokeWidth={STROKE}
                strokeLinecap="round"
              />

              {/* Tick marks */}
              {ticks.map((t) => {
                const a = scoreToAngle(t);
                const outer = polar(CX, CY, R + STROKE / 2 + 2, a);
                const inner = polar(CX, CY, R - STROKE / 2 - 2, a);
                const labelPos = polar(CX, CY, R + STROKE / 2 + 14, a);
                return (
                  <g key={t}>
                    <line
                      x1={outer.x}
                      y1={outer.y}
                      x2={inner.x}
                      y2={inner.y}
                      stroke="#C9C2B6"
                      strokeWidth={1.5}
                    />
                    <text
                      x={labelPos.x}
                      y={labelPos.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="9"
                      fontFamily="ui-monospace, monospace"
                      fill={MONO_LABEL}
                    >
                      {t}
                    </text>
                  </g>
                );
              })}

              {/* Zone labels */}
              <text
                x={polar(CX, CY, R, scoreToAngle(8)).x - 6}
                y={polar(CX, CY, R, scoreToAngle(8)).y + 30}
                textAnchor="middle"
                fontSize="10"
                fontFamily="ui-monospace, monospace"
                fill={GREEN}
              >
                Technical
              </text>
              <text
                x={CX}
                y={CY - R - STROKE / 2 - 24}
                textAnchor="middle"
                fontSize="10"
                fontFamily="ui-monospace, monospace"
                fill={GOLD}
              >
                Caution
              </text>
              <text
                x={polar(CX, CY, R, scoreToAngle(92)).x + 6}
                y={polar(CX, CY, R, scoreToAngle(92)).y + 30}
                textAnchor="middle"
                fontSize="10"
                fontFamily="ui-monospace, monospace"
                fill={TERRA}
              >
                Abstract
              </text>

              {/* Needle */}
              <line
                x1={CX}
                y1={CY}
                x2={needleEnd.x}
                y2={needleEnd.y}
                stroke="#2A2A2A"
                strokeWidth={3}
                strokeLinecap="round"
                style={{ transition: "all 0.35s ease" }}
              />
              <circle cx={CX} cy={CY} r={7} fill="#2A2A2A" />

              {/* Numeric label */}
              <text
                x={CX}
                y={CY - 28}
                textAnchor="middle"
                fontSize="34"
                fontFamily="Georgia, 'Times New Roman', serif"
                fontWeight="600"
                fill={accent}
              >
                {score}%
              </text>
            </svg>
          </div>

          {/* Range slider */}
          <div className="mt-6">
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
              aria-label="Abstract idea risk score"
              className="risk-gauge-slider w-full"
              style={
                {
                  // expose accent for thumb / progress styling
                  "--rg-accent": accent,
                } as React.CSSProperties
              }
            />
            <div
              className="mt-2 flex justify-between font-mono text-[11px] uppercase tracking-[0.1em]"
              style={{ color: MONO_LABEL }}
            >
              <span>Technical Character</span>
              <span>Purely Mental</span>
            </div>
          </div>

          {/* Detected risk factors */}
          <div className="mt-8">
            <p
              className="mb-3 font-mono text-xs uppercase tracking-[0.14em]"
              style={{ color: MONO_LABEL }}
            >
              Detected Risk Factors:
            </p>
            <ul className="space-y-2">
              {factors.map((f) => (
                <li key={f.text} className="flex items-center gap-3 text-sm">
                  <span
                    className="inline-block h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: f.positive ? GREEN : TERRA }}
                  />
                  <span style={{ color: BODY }}>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Slider styling — charcoal thumb, cream/charcoal track, no blue */}
      <style jsx>{`
        .risk-gauge-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 9999px;
          background: linear-gradient(
            to right,
            #d9d2c6 0%,
            #d9d2c6 100%
          );
          outline: none;
          cursor: pointer;
        }
        .risk-gauge-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: #2a2a2a;
          border: 2px solid ${CARD_BG};
          box-shadow: 0 1px 3px rgba(42, 42, 42, 0.25);
          cursor: pointer;
        }
        .risk-gauge-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: #2a2a2a;
          border: 2px solid ${CARD_BG};
          box-shadow: 0 1px 3px rgba(42, 42, 42, 0.25);
          cursor: pointer;
        }
        .risk-gauge-slider::-moz-range-track {
          height: 6px;
          border-radius: 9999px;
          background: #d9d2c6;
        }
      `}</style>
    </section>
  );
}
