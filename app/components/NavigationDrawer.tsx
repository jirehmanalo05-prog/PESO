"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Job Vacancies", href: "/job-vacancies" },
  { label: "Employers", href: "/employers" },
];

export default function NavigationDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-slate-950/50 transition-opacity lg:hidden ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setIsOpen(false)}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex h-screen flex-col transition-all duration-300 ${isOpen ? "w-72 translate-x-0 border-r border-blue-200 bg-blue-600 p-4 text-white shadow-2xl" : "w-0 -translate-x-full overflow-hidden border-r-0 bg-transparent p-0 shadow-none"}`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-yellow-400 text-sm font-black text-slate-900 shadow-lg shadow-yellow-400/20">PM</div>
            <div>
              <p className="text-lg font-black tracking-tight">PESO Mabini</p>
              <p className="text-sm text-slate-300">Employment Services</p>
            </div>
          </div>
          <button type="button" onClick={() => setIsOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-400/30 bg-blue-600/80 text-xl text-white shadow-md transition-colors hover:bg-blue-500" aria-label="Close navigation">×</button>
        </div>
        <nav className="mt-8 space-y-2">
          {links.map((link, index) => {
            const accent = index % 3 === 0 ? "hover:bg-blue-600" : index % 3 === 1 ? "hover:bg-red-600" : "hover:bg-yellow-500 hover:text-slate-900";
            return <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)} className={`flex items-center rounded-lg px-3 py-3 text-sm font-semibold text-slate-200 transition-colors ${accent}`}>{link.label}</Link>;
          })}
        </nav>
        <div className="mt-auto shrink-0 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-2">
            <Link href="/login" onClick={() => setIsOpen(false)} className="rounded-lg border border-blue-400/30 bg-slate-800/80 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600 text-center">Login</Link>
            <Link href="/register" onClick={() => setIsOpen(false)} className="rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-yellow-300 text-center">Register</Link>
          </div>
        </div>
      </aside>
      {!isOpen && (
        <button type="button" onClick={() => setIsOpen(true)} className="fixed left-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/30 bg-blue-700 text-xl text-white shadow-xl transition-colors hover:bg-blue-600" aria-label="Open navigation" title="Open navigation">☰</button>
      )}
    </>
  );
}
