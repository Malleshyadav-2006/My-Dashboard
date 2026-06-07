"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
} from "lucide-react";

const navItems = [
  { label: "Home", icon: LayoutDashboard, href: "/" },
  { label: "Courses", icon: BookOpen, href: "/courses" },
  { label: "Analytics", icon: BarChart2, href: "/analytics" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#13151f] border-t border-[#2a2d3e] flex items-stretch">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex-1 flex flex-col items-center justify-center gap-1 py-3 text-xs transition-colors ${
              isActive
                ? "text-[#5b6af0]"
                : "text-[#6b7280] hover:text-[#d1d5e8]"
            }`}
          >
            <Icon size={20} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
