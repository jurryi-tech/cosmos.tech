"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Types ── */
type Severity = "critical" | "major" | "minor";
type Action = "Remove" | "Add" | "Edit";

interface Comment {
  id: number;
  action: Action;
  severity: Severity;
  target: string;
  removed: string;
  added: string;
  note: string;
  author: string;
  time: string;
}

/* ── Theme tokens ── */
const COLORS = {
  cardBg: "#FDFBF7",
  border: "#E8E4DD",
  noteBg: "#F5F1E9",
  serif: "#2C2C2C",
  body: "#5A5A5A",
  mono: "#8B7355",
  critical: "#B0573A", // terracotta
  added: "#4A7C59", // green
  major: "#C5A44E", // amber/gold
  minor: "#8B7355", // muted gold/charcoal
  charcoal: "#2C2C2C",
};

const SEVERITY_COLOR: Record<Severity, string> = {
  critical: COLORS.critical,
  major: COLORS.major,
  minor: COLORS.minor,
};

const ACTION_STYLE: Record<Action, { bg: string; fg: string }> = {
  Remove: { bg: "rgba(176, 87, 58, 0.12)", fg: "#B0573A" },
  Add: { bg: "rgba(74, 124, 89, 0.12)", fg: "#4A7C59" },
  Edit: { bg: "rgba(197, 164, 78, 0.16)", fg: "#9A7E2E" },
};

/* ── Seed data ── */
const SEED: Comment[] = [
  {
    id: 1,
    action: "Remove",
    severity: "critical",
    target: "Claim 1, preamble",
    removed: "a computer-implemented method",
    added: "",
    note: 'Avoid "computer-implemented" — triggers 101 rejection. Use specific hardware components.',
    author: "Patent Attorney",
    time: "2 hours ago",
  },
  {
    id: 2,
    action: "Add",
    severity: "major",
    target: "Claim 1, element (a)",
    removed: "a processor configured to execute",
    added: "a hardware processor specifically configured to execute, in real-time,",
    note: "Add technical specificity to overcome abstractness arguments.",
    author: "Patent Attorney",
    time: "3 hours ago",
  },
  {
    id: 3,
    action: "Edit",
    severity: "major",
    target: "Claim 1, element (c)",
    removed: "storing data in a database",
    added:
      "storing, in a non-transitory memory, encrypted data packets indexed by temporal identifiers",
    note: "Generic database language is problematic. Add technical detail.",
    author: "Patent Attorney",
    time: "5 hours ago",
  },
  {
    id: 4,
    action: "Edit",
    severity: "minor",
    target: "Claim 1, element (d)",
    removed: "the system",
    added: "the distributed computing system",
    note: "Tighten antecedent basis for clarity under § 112.",
    author: "Patent Attorney",
    time: "yesterday",
  },
];

type Filter = "ALL" | "CRITICAL" | "MAJOR" | "MINOR";
const FILTERS: Filter[] = ["ALL", "CRITICAL", "MAJOR", "MINOR"];

export default function AttorneyFeedback() {
  const [comments, setComments] = useState<Comment[]>(SEED);
  const [resolved, setResolved] = useState<Record<number, boolean>>({});
  const [filter, setFilter] = useState<Filter>("ALL");
  const [showResolved, setShowResolved] = useState(false);

  const unresolvedCounts = useMemo(() => {
    const counts: Record<Severity, number> = { critical: 0, major: 0, minor: 0 };
    for (const c of comments) {
      if (!resolved[c.id]) counts[c.severity] += 1;
    }
    return counts;
  }, [comments, resolved]);

  const totalUnresolved =
    unresolvedCounts.critical + unresolvedCounts.major + unresolvedCounts.minor;

  const visible = useMemo(() => {
    return comments.filter((c) => {
      if (filter !== "ALL" && c.severity !== filter.toLowerCase()) return false;
      if (resolved[c.id] && !showResolved) return false;
      return true;
    });
  }, [comments, resolved, filter, showResolved]);

  const markResolved = (id: number) =>
    setResolved((prev) => ({ ...prev, [id]: true }));

  const acceptAll = () =>
    setResolved((prev) => {
      const next = { ...prev };
      for (const c of visible) next[c.id] = true;
      return next;
    });

  const exportComments = () => {
    const summary = comments
      .map(
        (c) =>
          `[${c.severity.toUpperCase()}] ${c.action} — ${c.target}\n  - ${c.removed || "(none)"}\n  + ${c.added || "(none)"}\n  Note: ${c.note}`
      )
      .join("\n\n");
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        navigator.clipboard.writeText(summary).catch(() => {});
      }
    } catch {
      /* no-op */
    }
  };

  return (
    <div
      className="mx-auto w-full max-w-3xl rounded-lg shadow-sm"
      style={{
        backgroundColor: COLORS.cardBg,
        border: `1px solid ${COLORS.border}`,
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      {/* ── Header ── */}
      <div
        className="flex items-start justify-between gap-4 px-6 py-5"
        style={{ borderBottom: `1px solid ${COLORS.border}` }}
      >
        <div>
          <h3
            className="text-xl font-semibold leading-tight"
            style={{ color: COLORS.serif }}
          >
            Attorney Feedback Simulation
          </h3>
          <p
            className="mt-1 text-[11px] uppercase tracking-widest"
            style={{ color: COLORS.mono, fontFamily: "ui-monospace, monospace" }}
          >
            Track changes style markup
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3 pt-1">
          <CountDot color={COLORS.critical} n={unresolvedCounts.critical} />
          <CountDot color={COLORS.major} n={unresolvedCounts.major} />
          <CountDot color={COLORS.minor} n={unresolvedCounts.minor} />
        </div>
      </div>

      {/* ── Toolbar ── */}
      <div
        className="flex flex-wrap items-center justify-between gap-3 px-6 py-3"
        style={{
          borderBottom: `1px solid ${COLORS.border}`,
          fontFamily: "ui-monospace, monospace",
        }}
      >
        <div className="flex flex-wrap items-center gap-1.5">
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="rounded px-3 py-1 text-[10px] font-medium uppercase tracking-widest transition-colors"
                style={{
                  backgroundColor: active ? COLORS.charcoal : "transparent",
                  color: active ? "#FDFBF7" : COLORS.body,
                  border: `1px solid ${active ? COLORS.charcoal : COLORS.border}`,
                }}
              >
                {f}
              </button>
            );
          })}
        </div>
        <label
          className="flex cursor-pointer items-center gap-2 text-[10px] uppercase tracking-widest"
          style={{ color: COLORS.body }}
        >
          <input
            type="checkbox"
            checked={showResolved}
            onChange={(e) => setShowResolved(e.target.checked)}
            className="h-3.5 w-3.5 accent-[#4A7C59]"
          />
          Show resolved
        </label>
      </div>

      {/* ── Comment list ── */}
      <div className="max-h-[460px] space-y-4 overflow-y-auto px-6 py-5">
        <AnimatePresence initial={false}>
          {visible.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-8 text-center text-sm italic"
              style={{ color: COLORS.body }}
            >
              No comments to display.
            </motion.p>
          )}
          {visible.map((c) => {
            const isResolved = !!resolved[c.id];
            const aStyle = ACTION_STYLE[c.action];
            return (
              <motion.div
                key={c.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: isResolved ? 0.55 : 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="rounded-md p-4"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                {/* Top row */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                      style={{
                        backgroundColor: aStyle.bg,
                        color: aStyle.fg,
                        fontFamily: "ui-monospace, monospace",
                      }}
                    >
                      {c.action}
                    </span>
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: SEVERITY_COLOR[c.severity] }}
                    />
                    <span
                      className="text-[13px]"
                      style={{
                        color: COLORS.serif,
                        textDecoration: isResolved ? "line-through" : "none",
                      }}
                    >
                      {c.target}
                    </span>
                  </div>
                  {isResolved ? (
                    <span
                      className="text-[10px] uppercase tracking-widest"
                      style={{
                        color: COLORS.added,
                        fontFamily: "ui-monospace, monospace",
                      }}
                    >
                      Resolved
                    </span>
                  ) : (
                    <button
                      onClick={() => markResolved(c.id)}
                      className="rounded px-2.5 py-1 text-[10px] uppercase tracking-widest transition-colors hover:opacity-80"
                      style={{
                        color: COLORS.body,
                        border: `1px solid ${COLORS.border}`,
                        fontFamily: "ui-monospace, monospace",
                      }}
                    >
                      Mark resolved
                    </button>
                  )}
                </div>

                {/* Track-changes body */}
                <div className="mt-3 space-y-1 text-[14px] leading-relaxed">
                  {c.removed && (
                    <p style={{ color: COLORS.critical }}>
                      <span className="mr-1 font-mono">{"−"}</span>
                      <span className="line-through">{c.removed}</span>
                    </p>
                  )}
                  {c.added && (
                    <p style={{ color: COLORS.added }}>
                      <span className="mr-1 font-mono">+</span>
                      <span>{c.added}</span>
                    </p>
                  )}
                </div>

                {/* Note box */}
                <div
                  className="mt-3 rounded p-3 text-[13px] italic leading-snug"
                  style={{
                    backgroundColor: COLORS.noteBg,
                    color: COLORS.body,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  {c.note}
                </div>

                {/* Footer */}
                <div
                  className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-widest"
                  style={{ color: COLORS.mono, fontFamily: "ui-monospace, monospace" }}
                >
                  <span>{c.author}</span>
                  <span>{c.time}</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="flex flex-wrap items-center justify-between gap-3 px-6 py-4"
        style={{ borderTop: `1px solid ${COLORS.border}` }}
      >
        <span
          className="text-[11px] uppercase tracking-widest"
          style={{ color: COLORS.mono, fontFamily: "ui-monospace, monospace" }}
        >
          {totalUnresolved} {totalUnresolved === 1 ? "item needs" : "items need"} attention
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={acceptAll}
            className="rounded px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: COLORS.added }}
          >
            Accept All
          </button>
          <button
            onClick={exportComments}
            className="rounded px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest transition-colors hover:opacity-80"
            style={{
              color: COLORS.charcoal,
              border: `1px solid ${COLORS.border}`,
              backgroundColor: "transparent",
            }}
          >
            Export Comments
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Small count indicator ── */
function CountDot({ color, n }: { color: string; n: number }) {
  return (
    <span
      className="flex items-center gap-1.5 text-[12px] font-medium"
      style={{ color: COLORS.body, fontFamily: "ui-monospace, monospace" }}
    >
      <span
        className="inline-block h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      {n}
    </span>
  );
}
