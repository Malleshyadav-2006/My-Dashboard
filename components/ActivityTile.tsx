"use client";

import { Activity } from "lucide-react";

// Deterministic mock — a developer would hardcode realistic-looking data
// rather than Math.random() which changes every render
const ACTIVITY_DATA = [
  [0,1,0,2,1,0,0],[1,2,3,2,1,0,1],[0,0,1,3,4,2,0],[2,3,2,1,0,1,2],
  [1,0,0,2,3,1,0],[3,4,3,2,1,2,3],[0,1,2,3,2,1,0],[1,2,1,0,1,2,1],
  [2,3,4,3,2,1,2],[0,0,1,2,3,2,1],[1,2,3,4,3,2,1],[0,1,0,1,2,1,0],
  [2,1,2,3,2,3,4],[1,0,1,2,1,0,1],[3,4,3,2,3,4,3],[0,1,2,1,0,1,0],
  [1,2,3,2,1,2,3],[2,3,2,3,4,3,2],[0,0,1,0,1,2,1],[1,2,1,2,3,2,1],
  [3,2,3,4,3,2,3],[1,0,1,2,1,0,1],[2,3,2,1,2,3,2],[0,1,2,3,2,1,0],
  [1,2,3,2,3,4,3],[0,1,0,1,2,1,0],[2,1,2,3,4,3,2],[1,2,1,0,1,2,1],
  [3,4,3,2,1,2,3],[0,0,1,2,3,2,1],[1,2,3,4,3,2,1],[2,1,0,1,2,1,2],
  [3,2,3,4,3,4,3],[1,0,1,2,1,2,1],[0,1,2,1,2,3,2],[2,3,2,3,2,1,0],
  [1,2,3,2,1,0,1],[0,1,0,1,2,3,2],[3,4,3,2,3,2,3],[1,2,1,2,3,2,1],
  [2,3,2,1,0,1,2],[0,1,2,3,4,3,2],[1,0,1,2,3,2,1],[2,3,4,3,2,3,4],
  [0,1,2,1,0,1,2],[1,2,3,4,3,2,3],[2,1,2,3,2,1,2],[3,4,3,2,3,4,3],
  [0,1,0,1,2,1,0],[1,2,1,2,3,2,1],[2,3,2,1,2,3,2],[4,3,4,3,4,3,4],
];

const cellColor = (v: number) => {
  const colors = [
    "bg-[#1a1d27]",
    "bg-indigo-900/40",
    "bg-indigo-700/50",
    "bg-indigo-500/60",
    "bg-indigo-400/80",
  ];
  return colors[v] ?? colors[0];
};

export default function ActivityTile() {
  return (
    <article className="rounded-xl bg-[#1a1d27] border border-[#2a2d3e] px-5 py-4">
      <div className="flex items-center gap-2 mb-4">
        <Activity size={15} className="text-[#5b6af0]" />
        <h2 className="text-sm font-medium text-[#d1d5e8]">Learning Activity</h2>
        <span className="ml-auto text-xs text-[#6b7280]">Past year</span>
      </div>
      <div className="flex gap-0.5 overflow-hidden">
        {ACTIVITY_DATA.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-0.5">
            {week.map((day, di) => (
              <div
                key={di}
                className={`w-2.5 h-2.5 rounded-sm ${cellColor(day)}`}
              />
            ))}
          </div>
        ))}
      </div>
    </article>
  );
}
