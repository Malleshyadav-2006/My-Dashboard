import SkeletonTile from "@/components/SkeletonTile";

export default function Loading() {
  return (
    <div className="flex h-screen bg-[#0a0a0f]">
      <div className="w-16 md:w-56 h-full bg-[#111118] border-r border-[#1e1e2e]" />
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonTile key={i} />
        ))}
      </main>
    </div>
  );
}
