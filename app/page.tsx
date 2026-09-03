"use client";

import Link from "next/link";

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
  return (
  <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* ════════════════════════
          HERO — Static background image
          ↓ Replace backgroundImage below with your actual photo path.
          e.g. backgroundImage: "url('/images/mabini-peso.jpg')"
          The dark overlay (bg-black/40) will keep text readable.
      ════════════════════════ */}
      <section
        className="relative w-full h-screen bg-red-600 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/BG-Peso.jpg')",
        }}
      >
        {/* Empty — your background image will fill this space */}
      </section>
 
      {/* ════════════════════════
          PINNED POSTS
      ════════════════════════ */}
      <section className="bg-gray-100 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
                Pinned Posts
              </span>
              <h2 className="mt-3 text-2xl font-black text-gray-900 md:text-3xl">News from PESO Mabini</h2>
            </div>
            <a href="#" className="shrink-0 text-sm font-semibold text-blue-800 hover:underline">
              View all pinned posts
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                date: "August 20, 2026",
                caption: "Looking for your next opportunity? Visit the PESO Mabini office for free job matching and employment assistance.",
                image: "/BG-Peso.jpg",
              },
              {
                date: "August 15, 2026",
                caption: "New vacancies are now available across Mabini and Batangas. Check our job listings and take the next step in your career.",
                image: "/BG-Peso.jpg",
              },
              {
                date: "August 8, 2026",
                caption: "Build skills for better work. Follow PESO Mabini for announcements about upcoming training and livelihood programs.",
                image: "/BG-Peso.jpg",
              },
            ].map((card) => (
              <article key={card.date} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
                <img src={card.image} alt="PESO Mabini update" className="aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 text-[10px] font-black text-yellow-300">PM</div>
                    <div>
                      <p className="font-bold text-gray-700">PESO Mabini</p>
                      <time>{card.date}</time>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">{card.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════
          PESO POSTS
      ════════════════════════ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-yellow-800">
              PESO Posts
            </span>
            <h2 className="mt-3 text-2xl font-black text-gray-900 md:text-3xl">Updates from PESO Mabini</h2>
            <p className="mt-2 text-sm text-gray-500">Stay informed about programs, announcements, and employment activities.</p>
          </div>

          <div className="space-y-5">
            {[
              {
                date: "August 5, 2026",
                title: "Free Skills Training Registration is Open",
                caption: "Registration is now open for our next skills training program. Visit the PESO Mabini office to reserve your slot.",
                tag: "Training",
              },
              {
                date: "July 29, 2026",
                title: "Bring Your Documents to Your Next Job Application",
                caption: "Prepare your updated resume, valid identification, and certificates before visiting our job matching desk.",
                tag: "Job Seeker Tips",
              },
              {
                date: "July 22, 2026",
                title: "PESO Mabini Joins Local Career Orientation",
                caption: "Our team connected with students and job seekers during a career orientation focused on local employment opportunities.",
                tag: "Community",
              },
            ].map((post) => (
              <article key={post.date} className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-lg font-black text-yellow-300">
                  PM
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-gray-400">
                    <span className="font-bold text-gray-700">PESO Mabini</span>
                    <span aria-hidden="true">•</span>
                    <time>{post.date}</time>
                    <span className="rounded-full bg-white px-2.5 py-1 font-semibold text-blue-700">{post.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{post.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{post.caption}</p>
                  <div className="mt-4 flex items-center gap-5 text-xs font-medium text-gray-400">
                    <span>♡ Helpful</span>
                    <span>↗ Share</span>
                  </div>
                </div>
              </article>
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
          JOBS AVAILABLE
      ════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                Jobs Available
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-2">Available Opportunities</h2>
            </div>
            <Link href="/job-vacancies"
              className="text-sm font-semibold text-blue-800 hover:underline flex items-center gap-1">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
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
        <Link href="/job-vacancies"
          className="inline-flex items-center gap-2 px-7 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition shadow-lg text-sm">
          Get Started Today
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </section>
 
      {/* ════════════════════════
          FOOTER
      ════════════════════════ */}
      <footer className="bg-yellow-400 py-12 text-yellow-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-900">
                  <span className="text-white text-xs font-bold">PM</span>
                </div>
                <span className="text-lg font-bold text-blue-950">PESO Mabini</span>
              </div>
              <p className="text-sm">Connecting job seekers with opportunities in Mabini and beyond.</p>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-blue-950">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {["About Us", "Job Vacancies", "Employers", "Contact"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-blue-950">Resources</h4>
              <ul className="space-y-2 text-sm">
                {["Help Center", "FAQs", "Privacy Policy", "Terms of Use"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-blue-950">Connect With Us</h4>
              <div className="flex gap-3">
                {["📘", "🐦", "📷"].map((icon) => (
                  <a key={icon} href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-300 text-sm transition hover:bg-blue-900 hover:text-white">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-yellow-500 pt-6 text-center text-sm">
            <p>&copy; 2026 PESO Mabini. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}