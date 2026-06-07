import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0f1117]">
      {/* Desktop sidebar */}
      <Sidebar />

      {/* Main content — extra bottom padding on mobile for the bottom nav */}
      <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
        {children}
      </main>

      {/* Mobile bottom nav */}
      <BottomNav />
    </div>
  );
}
