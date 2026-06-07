import HeroTile from "./HeroTile";
import CourseTile from "./CourseTile";
import ActivityTile from "./ActivityTile";
import type { Course } from "@/types";

interface BentoGridProps {
  courses: Course[];
}

export default function BentoGrid({ courses }: BentoGridProps) {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <HeroTile />

      {courses.length > 0 && (
        <div>
          <h2 className="text-xs font-medium text-[#6b7280] uppercase tracking-wider mb-3">
            Your courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {courses.map((course) => (
              <CourseTile key={course.id} course={course} />
            ))}
          </div>
        </div>
      )}

      <ActivityTile />
    </div>
  );
}
