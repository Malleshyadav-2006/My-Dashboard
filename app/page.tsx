export const dynamic = "force-dynamic";

import AppShell from "@/components/AppShell";
import BentoGrid from "@/components/BentoGrid";
import { createPublicClient } from "@/lib/supabase";
import type { Course } from "@/types";

async function DashboardContent() {
  let courses: Course[] = [];

  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) throw error;
    courses = data || [];
  } catch (err) {
    console.error(err);
  }

  return <BentoGrid courses={courses} />;
}

export default async function HomePage() {
  return (
    <AppShell>
      <DashboardContent />
    </AppShell>
  );
}
