import AppShell from "@/components/AppShell";

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-slate-100 mb-4">Settings</h1>
        <div className="rounded-2xl bg-[#16161f] border border-[#1e1e2e] p-6 space-y-4">
          {/* Placeholder settings cards */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-12 rounded-lg bg-[#1e1e2e]" />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
