"use client";

import { Flame } from "lucide-react";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

function getDate() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export default function HeroTile() {
  const streak = 7;

  return (
    <article className="rounded-xl bg-[#1a1d27] border border-[#2a2d3e] px-6 py-5">
      <p className="text-xs text-[#6b7280] mb-1">{getDate()}</p>
      <h1 className="text-xl font-semibold text-[#d1d5e8] mb-3">
        {getGreeting()}, Alex
      </h1>
      <div className="flex items-center gap-2 bg-[#0f1117] border border-[#2a2d3e] rounded-lg px-3 py-2 w-fit">
        <Flame size={14} className="text-orange-400" />
        <span className="text-sm text-[#d1d5e8]">
          <span className="font-medium text-orange-400">{streak} day</span> streak
        </span>
      </div>
    </article>
  );
}
