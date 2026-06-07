"use client";

interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="w-full bg-[#0f1117] rounded-full h-1.5 overflow-hidden">
      <div
        className="h-full rounded-full bg-[#5b6af0] transition-all duration-700 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
