"use client";

import { useState } from "react";
 
const jobPostings = [
  {
    title: "Administrative Assistant",
    company: "Municipal Government of Mabini",
    location: "Mabini, Batangas",
    type: "Full-time",
    salary: "₱18,000 – ₱22,000/mo",
    tags: ["Government", "Admin"],
    color: "blue",
  },
  {
    title: "Electrician",
    company: "Batangas Construction Corp.",
    location: "Mabini, Batangas",
    type: "Full-time",
    salary: "₱20,000 – ₱25,000/mo",
    tags: ["Construction", "Skilled"],
    color: "red",
  },
  {
    title: "Customer Service Representative",
    company: "Sunrise BPO Solutions",
    location: "Batangas City",
    type: "Full-time",
    salary: "₱16,000 – ₱19,000/mo",
    tags: ["BPO", "Customer Service"],
    color: "yellow",
  },
  {
    title: "Fishery Technician",
    company: "Mabini Aquaculture Inc.",
    location: "Mabini, Batangas",
    type: "Contract",
    salary: "₱15,000 – ₱18,000/mo",
    tags: ["Fishery", "Technical"],
    color: "green",
  },
  {
    title: "School Nurse",
    company: "Mabini National High School",
    location: "Mabini, Batangas",
    type: "Part-time",
    salary: "₱14,000 – ₱17,000/mo",
    tags: ["Education", "Healthcare"],
    color: "purple",
  },
  {
    title: "Driver / Utility",
    company: "LGU Mabini",
    location: "Mabini, Batangas",
    type: "Full-time",
    salary: "₱13,000 – ₱15,000/mo",
    tags: ["Government", "Utility"],
    color: "blue",
  },
];
 
const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  red: "bg-red-100 text-red-700 border-red-200",
  yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
  green: "bg-green-100 text-green-700 border-green-200",
  purple: "bg-purple-100 text-purple-700 border-purple-200",
};
 
const badgeColors: Record<string, string> = {
  blue: "bg-blue-600",
  red: "bg-red-600",
  yellow: "bg-yellow-500",
  green: "bg-green-600",
  purple: "bg-purple-600",
};
 
export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased lg:flex">
      <div
        className={`fixed inset-0 z-30 bg-slate-950/50 transition-opacity lg:hidden ${isSidebarOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex h-screen flex-col transition-all duration-300 lg:sticky lg:top-0 lg:h-auto ${isSidebarOpen ? "w-72 translate-x-0 border-r border-blue-200 bg-blue-600 p-4 text-white shadow-2xl" : "w-0 -translate-x-full overflow-hidden border-r-0 bg-transparent p-0 shadow-none"}`}
      >
        {isSidebarOpen ? (
          <>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-yellow-400 text-sm font-black text-slate-900 shadow-lg shadow-yellow-400/20">
                  PM
                </div>
                <div>
                  <p className="text-lg font-black tracking-tight">PESO Mabini</p>
                  <p className="text-sm text-slate-300">Employment Services</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsSidebarOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-400/30 bg-blue-600/80 text-xl text-white shadow-md transition-colors hover:bg-blue-500"
                aria-label="Close navigation"
              >
                ☰
              </button>
            </div>

            <nav className="mt-8 space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Job Vacancies", href: "/job-vacancies" },
                { label: "Employers", href: "/employers" },
              ].map((link, index) => {
                const accent = index % 3 === 0 ? "hover:bg-blue-600" : index % 3 === 1 ? "hover:bg-red-600" : "hover:bg-yellow-500 hover:text-slate-900";
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`flex items-center rounded-lg px-3 py-3 text-sm font-semibold text-slate-200 transition-colors ${accent}`}
                  >
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="mt-auto border-t border-white/10 pt-6">
              <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
                <button className="rounded-lg border border-blue-400/30 bg-slate-800/80 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600">
                  Login
                </button>
                <button className="rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-yellow-300">
                  Register
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="h-full" />
        )}
      </aside>

      <div className="flex-1">
        {!isSidebarOpen && (
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="fixed left-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/30 bg-blue-700 text-xl text-white shadow-xl transition-colors hover:bg-blue-600"
            aria-label="Open navigation"
          >
            ☰
          </button>
        )}
      {/* ════════════════════════
          HERO — Static background image
          ↓ Replace backgroundImage below with your actual photo path.
          e.g. backgroundImage: "url('/images/mabini-peso.jpg')"
          The dark overlay (bg-black/40) will keep text readable.
      ════════════════════════ */}
      <section
        className="relative w-full h-screen bg-gray-500 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/BG-Peso.jpg')",
        }}
      >
        {/* Empty — your background image will fill this space */}
      </section>
 
      {/* ════════════════════════
          MODAL CARDS — Below hero
      ════════════════════════ */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏢",
                title: "Public Employment Service Office",
                desc: "The PESO Mabini provides free employment facilitation services to all job seekers and employers in Mabini, Batangas.",
                accent: "bg-blue-900",
                link: "/about",
              },
              {
                icon: "💼",
                title: "Find Your Career Today",
                desc: "Hundreds of job vacancies are available across various industries. Browse listings and apply directly through our portal.",
                accent: "bg-red-600",
                link: "/job-vacancies",
              },
              {
                icon: "🎓",
                title: "Skills & Training Programs",
                desc: "Access free skills training, livelihood seminars, and career development programs coordinated by DOLE and PESO.",
                accent: "bg-green-700",
                link: "/about",
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className={`h-2 ${card.accent}`} />
                <div className="p-6">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{card.desc}</p>
                  <a
                    href={card.link}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-800 hover:gap-2 transition-all"
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
            {/* ════════════════════════
          STATS BAR
      ════════════════════════ */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 divide-x divide-blue-700 py-4">
          {[["500+", "Job Posts"], ["200+", "Companies"], ["1,000+", "Job Seekers"]].map(([val, label]) => (
            <div key={label} className="text-center py-2">
              <div className="text-xl font-black text-yellow-300">{val}</div>
              <div className="text-xs text-blue-200">{label}</div>
            </div>
          ))}
        </div>
      </div>
 
      {/* ════════════════════════
          JOB POSTINGS
      ════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                Latest Openings
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-2">Job Postings</h2>
            </div>
            <a href="/job-vacancies"
              className="text-sm font-semibold text-blue-800 hover:underline flex items-center gap-1">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
 
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobPostings.map((job) => (
              <div key={job.title}
                className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-200 overflow-hidden group border border-gray-100">
                <div className={`h-1.5 ${badgeColors[job.color]}`} />
                <div className="p-5">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-gray-900 text-base leading-tight group-hover:text-blue-800 transition-colors">
                      {job.title}
                    </h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ml-2 shrink-0 ${colorMap[job.color]}`}>
                      {job.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-1 font-medium">{job.company}</p>
                  <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </p>
                  <p className="text-sm font-bold text-green-700 mb-3">{job.salary}</p>
                  <div className="flex gap-1 flex-wrap mb-4">
                    {job.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-2 text-sm font-semibold text-blue-900 border border-blue-900 rounded hover:bg-blue-900 hover:text-white transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ════════════════════════
          SERVICES
      ════════════════════════ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              What We Offer
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-2">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Job Placement", desc: "We connect qualified candidates with employers across various industries.", icon: "💼" },
              { title: "Career Guidance", desc: "Professional counseling to help you navigate your professional journey.", icon: "🧭" },
              { title: "Skills Training", desc: "Access training programs to enhance your employability and skills.", icon: "📚" },
            ].map((s) => (
              <div key={s.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ════════════════════════
          CTA BANNER
      ════════════════════════ */}
      <section className="py-14 bg-blue-900 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Ready to take the next step?</h2>
        <p className="text-blue-200 text-sm mb-6 max-w-xl mx-auto">
          Join thousands of job seekers who found their dream careers through PESO Mabini.
        </p>
        <a href="/job-vacancies"
          className="inline-flex items-center gap-2 px-7 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition shadow-lg text-sm">
          Get Started Today
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </section>
 
      {/* ════════════════════════
          FOOTER
      ════════════════════════ */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-900 rounded-md flex items-center justify-center">
                  <span className="text-white text-xs font-bold">PM</span>
                </div>
                <span className="font-bold text-white text-lg">PESO Mabini</span>
              </div>
              <p className="text-sm">Connecting job seekers with opportunities in Mabini and beyond.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {["About Us", "Job Vacancies", "Employers", "Contact"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                {["Help Center", "FAQs", "Privacy Policy", "Terms of Use"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Connect With Us</h4>
              <div className="flex gap-3">
                {["📘", "🐦", "📷"].map((icon) => (
                  <a key={icon} href="#"
                    className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition text-sm">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
            <p>&copy; 2026 PESO Mabini. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}