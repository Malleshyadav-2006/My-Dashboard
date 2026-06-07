"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  ChevronLeft,
  GraduationCap,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { id: "courses", label: "Courses", icon: BookOpen, href: "/courses" },
  { id: "analytics", label: "Analytics", icon: BarChart2, href: "/analytics" },
  { id: "settings", label: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav
      style={{ width: collapsed ? 64 : 220, transition: "width 0.25s ease" }}
      className="hidden md:flex flex-col h-full bg-[#13151f] border-r border-[#2a2d3e] py-5 overflow-hidden shrink-0"
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 mb-7 overflow-hidden">
        <GraduationCap size={20} className="text-[#5b6af0] shrink-0" />
        {!collapsed && (
          <span className="text-sm font-semibold text-[#d1d5e8] whitespace-nowrap">
            LearnSpace
          </span>
        )}
      </div>

      {/* Nav links */}
      <ul className="flex flex-col gap-0.5 px-2 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-[#5b6af0]/10 text-[#d1d5e8]"
                    : "text-[#6b7280] hover:text-[#d1d5e8] hover:bg-[#1f2235]"
                }`}
              >
                <Icon
                  size={17}
                  className={`shrink-0 ${isActive ? "text-[#5b6af0]" : ""}`}
                />
                {!collapsed && (
                  <span className="whitespace-nowrap">{item.label}</span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mx-2 mt-3 p-2.5 rounded-lg text-[#6b7280] hover:text-[#d1d5e8] hover:bg-[#1f2235] transition-colors flex items-center justify-center"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <ChevronLeft
          size={15}
          style={{
            transform: collapsed ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
          }}
        />
      </button>
    </nav>
  );
}
