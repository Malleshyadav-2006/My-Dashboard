export const dynamic = "force-dynamic";

import AppShell from "@/components/AppShell";
import { createPublicClient } from "@/lib/supabase";
import type { Course } from "@/types";
import CourseTile from "@/components/CourseTile";

async function CoursesPageContent() {
  let courses: Course[] = [];
  let error: string | null = null;

  try {
    const supabase = createPublicClient();
    const { data, error: dbError } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: true });

    if (dbError) throw dbError;
    courses = data || [];
  } catch (err) {
    error = "Couldn't load courses right now.";
    console.error("Error fetching courses:", err);
  }

  if (error) {
    return (
      <p className="text-sm text-[#6b7280] px-6 py-4">{error}</p>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="px-6 py-12 text-center">
        <p className="text-sm text-[#6b7280]">No courses yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      {courses.map((course) => (
        <CourseTile key={course.id} course={course} />
      ))}
    </div>
  );
}

export default function CoursesPage() {
  return (
    <AppShell>
      <div className="p-4 md:p-6">
        <h1 className="text-lg font-semibold text-[#d1d5e8] mb-1">Courses</h1>
        <p className="text-sm text-[#6b7280] mb-5">Track your progress across all your courses.</p>
        <CoursesPageContent />
      </div>
    </AppShell>
  );
}
