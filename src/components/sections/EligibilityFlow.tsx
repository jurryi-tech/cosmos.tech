"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  Handle,
  Position,
  MarkerType,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type NodeProps,
} from "reactflow";
import "reactflow/dist/style.css";

/* ── Theme tokens (cosmos) ── */
const CREAM = "#FDFBF7";
const CHARCOAL = "#1A1A1A";
const CHARCOAL_SOFT = "#5A5A5A";
const MONO_GOLD = "#8B7355";

/* subtle connection handles — anchor the edges to each node's sides */
const HANDLE_STYLE = {
  width: 7,
  height: 7,
  background: CHARCOAL,
  opacity: 0.18,
  border: "none",
} as const;

type Status = "pass" | "caution" | "fail";

const STATUS_COLORS: Record<Status, string> = {
  pass: "#4A7C59", // refined green
  caution: "#C5A44E", // brand gold
  fail: "#B0573A", // terracotta
};

/* ── Custom node data type ── */
interface FlowNodeData {
  title: string;
  text: string;
  status: Status;
  active?: boolean;
}

/* ── Inline status badge icons (no emojis) ── */
function StatusIcon({ status, color }: { status: Status; color: string }) {
  if (status === "pass") {
    return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 12.5l4.5 4.5L19 7"
          stroke={color}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (status === "fail") {
    return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke={color}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  // caution — exclamation mark
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v9" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="12" cy="18.5" r="1.4" fill={color} />
    </svg>
  );
}

/* ── Custom node component ── */
function FlowCard({ data }: NodeProps<FlowNodeData>) {
  const color = STATUS_COLORS[data.status];
  return (
    <div
      style={{
        width: 260,
        boxSizing: "border-box",
        borderRadius: 14,
        border: `1px solid ${color}`,
        background: `color-mix(in srgb, ${color} 7%, ${CREAM})`,
        padding: "14px 16px",
        position: "relative",
        boxShadow: data.active
          ? `0 0 0 3px color-mix(in srgb, ${color} 45%, transparent), 0 8px 24px rgba(26,26,26,0.12)`
          : "0 1px 3px rgba(26,26,26,0.06)",
        transform: data.active ? "scale(1.035)" : "scale(1)",
        transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
        borderWidth: data.active ? 2 : 1,
      }}
    >
      <Handle id="tt" type="target" position={Position.Top} style={HANDLE_STYLE} />
      <Handle id="tl" type="target" position={Position.Left} style={HANDLE_STYLE} />
      <Handle id="sb" type="source" position={Position.Bottom} style={HANDLE_STYLE} />
      <Handle id="sr" type="source" position={Position.Right} style={HANDLE_STYLE} />

      {/* status badge */}
      <div
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          width: 22,
          height: 22,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `color-mix(in srgb, ${color} 16%, ${CREAM})`,
          border: `1px solid ${color}`,
        }}
      >
        <StatusIcon status={data.status} color={color} />
      </div>

      <div
        style={{
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
          fontSize: 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: MONO_GOLD,
          fontWeight: 600,
          paddingRight: 26,
          marginBottom: 8,
        }}
      >
        {data.title}
      </div>
      <div
        style={{
          fontFamily: "Georgia, 'Times New Roman', Times, serif",
          fontSize: 13.5,
          lineHeight: 1.4,
          color: CHARCOAL,
        }}
      >
        {data.text}
      </div>
    </div>
  );
}

/* ── Node definitions ── */
const initialNodes: Node<FlowNodeData>[] = [
  {
    id: "step1",
    type: "flowCard",
    position: { x: 320, y: 0 },
    data: {
      title: "Step 1: Statutory Category",
      text: "Is the claim directed to a process, machine, manufacture, or composition of matter? (35 U.S.C. § 101)",
      status: "pass",
    },
  },
  {
    id: "step2a1",
    type: "flowCard",
    position: { x: 320, y: 190 },
    data: {
      title: "Step 2A — Prong 1",
      text: "Does the claim recite a judicial exception? (Abstract idea, law of nature, natural phenomenon)",
      status: "caution",
    },
  },
  {
    id: "step2a2",
    type: "flowCard",
    position: { x: 320, y: 380 },
    data: {
      title: "Step 2A — Prong 2",
      text: "Is the judicial exception integrated into a practical application?",
      status: "fail",
    },
  },
  {
    id: "step2b",
    type: "flowCard",
    position: { x: 110, y: 580 },
    data: {
      title: "Step 2B: Inventive Concept",
      text: "Does the claim recite additional elements that amount to significantly more than the judicial exception?",
      status: "pass",
    },
  },
  {
    id: "eligible",
    type: "flowCard",
    position: { x: 780, y: 380 },
    data: {
      title: "Eligible",
      text: "Claim satisfies 35 U.S.C. § 101 subject-matter requirements",
      status: "pass",
    },
  },
  {
    id: "ineligible",
    type: "flowCard",
    position: { x: 110, y: 770 },
    data: {
      title: "Ineligible",
      text: "Claim does not satisfy 35 U.S.C. § 101",
      status: "fail",
    },
  },
];

/* ── Edge helpers ── */
const GREEN = STATUS_COLORS.pass;
const AMBER = STATUS_COLORS.caution;
const RED = STATUS_COLORS.fail;

function makeEdge(
  id: string,
  source: string,
  target: string,
  color: string,
  opts: { label?: string; dashed?: boolean; sourceHandle?: string; targetHandle?: string } = {}
): Edge {
  return {
    id,
    source,
    target,
    sourceHandle: opts.sourceHandle ?? "sb",
    targetHandle: opts.targetHandle ?? "tt",
    type: "smoothstep",
    animated: true,
    label: opts.label,
    labelStyle: {
      fill: color,
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.06em",
    },
    labelBgStyle: { fill: CREAM, fillOpacity: 0.9 },
    labelBgPadding: [6, 3],
    labelBgBorderRadius: 4,
    style: {
      stroke: color,
      strokeWidth: 2,
      strokeDasharray: opts.dashed ? "6 4" : undefined,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color,
      width: 16,
      height: 16,
    },
  };
}

const initialEdges: Edge[] = [
  makeEdge("e-1-2a1", "step1", "step2a1", CHARCOAL_SOFT, { dashed: true }),
  makeEdge("e-2a1-2a2", "step2a1", "step2a2", AMBER, { label: "YES", dashed: true }),
  makeEdge("e-2a1-eligible", "step2a1", "eligible", GREEN, {
    label: "NO",
    sourceHandle: "sr",
    targetHandle: "tl",
  }),
  makeEdge("e-2a2-2b", "step2a2", "step2b", RED, { label: "NO", dashed: true }),
  makeEdge("e-2a2-eligible", "step2a2", "eligible", GREEN, {
    label: "YES",
    sourceHandle: "sr",
    targetHandle: "tl",
  }),
  makeEdge("e-2b-eligible", "step2b", "eligible", GREEN, {
    label: "YES",
    sourceHandle: "sr",
    targetHandle: "tl",
  }),
  makeEdge("e-2b-ineligible", "step2b", "ineligible", RED, { label: "NO" }),
];

/* Decision path to animate on "Run Analysis" */
const ANALYSIS_PATH = ["step1", "step2a1", "step2a2", "step2b", "eligible"];

export default function EligibilityFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [running, setRunning] = useState(false);

  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // memoized nodeTypes to avoid React Flow warning
  const nodeTypes = useMemo(() => ({ flowCard: FlowCard }), []);

  const setActive = useCallback(
    (id: string | null) => {
      setNodes((nds) =>
        nds.map((n) => ({
          ...n,
          data: { ...n.data, active: id === n.id },
        }))
      );
    },
    [setNodes]
  );

  const clearTimers = useCallback(() => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  }, []);

  const runAnalysis = useCallback(() => {
    if (running) return;
    clearTimers();
    setRunning(true);

    const stepMs = 650;
    ANALYSIS_PATH.forEach((id, i) => {
      timeoutsRef.current.push(
        setTimeout(() => setActive(id), i * stepMs)
      );
    });
    // clear highlight + reset running flag after the sequence finishes
    timeoutsRef.current.push(
      setTimeout(() => {
        setActive(null);
        setRunning(false);
      }, ANALYSIS_PATH.length * stepMs + 700)
    );
  }, [running, clearTimers, setActive]);

  // cleanup on unmount
  useEffect(() => () => clearTimers(), [clearTimers]);

  return (
    <section style={{ width: "100%", background: CREAM }}>
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          padding: "0 4px 18px",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              fontSize: 26,
              lineHeight: 1.15,
              color: CHARCOAL,
              margin: 0,
            }}
          >
            Alice/Mayo Two-Step Analysis
          </h2>
          <p
            style={{
              fontFamily:
                "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
              fontSize: 11,
              letterSpacing: "0.06em",
              color: CHARCOAL_SOFT,
              margin: "6px 0 0",
            }}
          >
            35 U.S.C. § 101 Subject Matter Eligibility
          </p>
        </div>

        <button
          type="button"
          onClick={runAnalysis}
          disabled={running}
          style={{
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: CREAM,
            background: CHARCOAL,
            border: "none",
            borderRadius: 8,
            padding: "10px 18px",
            cursor: running ? "default" : "pointer",
            opacity: running ? 0.6 : 1,
            transition: "opacity 200ms ease",
            whiteSpace: "nowrap",
          }}
        >
          {running ? "Analyzing…" : "Run Analysis"}
        </button>
      </div>

      {/* Flow canvas */}
      <div
        className="h-[600px]"
        style={{
          width: "100%",
          height: 600,
          borderRadius: 14,
          overflow: "hidden",
          border: `1px solid color-mix(in srgb, ${CHARCOAL} 10%, transparent)`,
          background: CREAM,
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          proOptions={{ hideAttribution: true }}
          panOnDrag
          minZoom={0.4}
          maxZoom={1.5}
          nodesConnectable={false}
          style={{ background: CREAM }}
        >
          <Background color={CHARCOAL} gap={22} size={1} style={{ opacity: 0.06 }} />
          <Controls
            position="bottom-left"
            showInteractive={false}
            showZoom
            showFitView
          />
        </ReactFlow>
      </div>
    </section>
  );
}
