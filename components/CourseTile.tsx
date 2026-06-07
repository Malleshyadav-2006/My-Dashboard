"use client";

import * as LucideIcons from "lucide-react";
import { BookOpen } from "lucide-react";
import ProgressBar from "./ProgressBar";
import type { Course } from "@/types";

interface CourseTileProps {
  course: Course;
}

export default function CourseTile({ course }: CourseTileProps) {
  const IconComponent = (LucideIcons as any)[course.icon_name] || BookOpen;

  return (
    <article className="rounded-xl bg-[#1a1d27] border border-[#2a2d3e] p-4 hover:border-[#333650] transition-colors">
      <div className="flex items-start gap-3 mb-4">
        <div className="mt-0.5 p-2 rounded-lg bg-[#5b6af0]/10 shrink-0">
          <IconComponent size={16} className="text-[#5b6af0]" />
        </div>
        <h2 className="text-sm font-medium text-[#d1d5e8] leading-snug pt-1">
          {course.title}
        </h2>
      </div>
      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#6b7280]">Progress</span>
          <span className="text-xs font-medium text-[#5b6af0]">
            {course.progress}%
          </span>
        </div>
        <ProgressBar value={course.progress} />
      </div>
    </article>
  );
}
