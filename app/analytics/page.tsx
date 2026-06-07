import AppShell from "@/components/AppShell";

export default function AnalyticsPage() {
  return (
    <AppShell>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-slate-100 mb-4">Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Placeholder cards */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-[#16161f] border border-[#1e1e2e] p-6 h-40" />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
