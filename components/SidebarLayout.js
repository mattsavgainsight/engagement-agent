import React from "react";
import Link from "next/link";
import { LayoutDashboard, Users, MessageCircle, Home, LogOut } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: <Home size={18} /> },
  { name: "Learner View", href: "/", icon: <Users size={18} /> },
  { name: "Admin Dashboard", href: "/admin", icon: <LayoutDashboard size={18} /> },
  { name: "Chat Agent", href: "/chat", icon: <MessageCircle size={18} /> },
];

export default function SidebarLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-skilljar-dark text-white flex flex-col py-6 px-4">
        <h2 className="text-2xl font-bold mb-10">Skilljar Agent</h2>
        <nav className="flex flex-col space-y-4">
          {navItems.map(({ name, href, icon }) => (
            <Link key={name} href={href} className="flex items-center gap-3 hover:text-sky-400">
              {icon}
              <span>{name}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-10 border-t border-slate-700">
          <Link href="#" className="flex items-center gap-2 text-sm hover:text-sky-400">
            <LogOut size={16} /> Logout
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
