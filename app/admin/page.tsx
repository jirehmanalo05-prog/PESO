"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../lib/AuthContext";

const adminStats = [
  {
    label: "Active Job Postings",
    value: "24",
    color: "bg-blue-100 text-blue-700",
    icon: "📋",
  },
  {
    label: "Total Applicants",
    value: "156",
    color: "bg-green-100 text-green-700",
    icon: "👥",
  },
  {
    label: "Pending Approvals",
    value: "8",
    color: "bg-yellow-100 text-yellow-700",
    icon: "⏳",
  },
  {
    label: "Employers Registered",
    value: "42",
    color: "bg-purple-100 text-purple-700",
    icon: "🏢",
  },
];

const recentApplications = [
  {
    id: 1,
    applicantName: "Maria Santos",
    position: "Administrative Assistant",
    company: "Municipal Government",
    status: "Pending",
    statusColor: "bg-yellow-100 text-yellow-700",
    date: "2024-08-30",
  },
  {
    id: 2,
    applicantName: "Juan Dela Cruz",
    position: "Electrician",
    company: "Batangas Construction",
    status: "Approved",
    statusColor: "bg-green-100 text-green-700",
    date: "2024-08-29",
  },
  {
    id: 3,
    applicantName: "Rosa Garcia",
    position: "Customer Service Rep",
    company: "Sunrise BPO Solutions",
    status: "Rejected",
    statusColor: "bg-red-100 text-red-700",
    date: "2024-08-28",
  },
  {
    id: 4,
    applicantName: "Pedro Reyes",
    position: "Fishery Technician",
    company: "Mabini Aquaculture Inc.",
    status: "Pending",
    statusColor: "bg-yellow-100 text-yellow-700",
    date: "2024-08-27",
  },
];

const jobListings = [
  {
    id: 1,
    title: "Administrative Assistant",
    company: "Municipal Government of Mabini",
    applicants: 12,
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    id: 2,
    title: "Electrician",
    company: "Batangas Construction Corp.",
    applicants: 8,
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    title: "Customer Service Representative",
    company: "Sunrise BPO Solutions",
    applicants: 15,
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    id: 4,
    title: "School Nurse",
    company: "Mabini National High School",
    applicants: 3,
    status: "Draft",
    statusColor: "bg-blue-100 text-blue-700",
  },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && user.role !== "admin" && user.role !== "moderator") {
      router.push("/login");
    }
  }, [user, router]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* ════════════════════════
          ADMIN HEADER
      ════════════════════════ */}
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-lg font-black text-white shadow-lg">
                🔐
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">PESO Mabini Employment System</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200">
                Settings
              </button>
              <button
                onClick={handleLogout}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ════════════════════════
          NAVIGATION TABS
      ════════════════════════ */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {[
              { id: "overview", label: "Overview", icon: "📊" },
              { id: "applications", label: "Applications", icon: "📝" },
              { id: "jobs", label: "Job Listings", icon: "💼" },
              { id: "users", label: "Users", icon: "👥" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`border-b-4 px-4 py-4 text-sm font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════
          MAIN CONTENT
      ════════════════════════ */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {adminStats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="mt-2 text-3xl font-black text-gray-900">
                        {stat.value}
                      </p>
                    </div>
                    <div className={`rounded-lg ${stat.color} p-3 text-2xl`}>
                      {stat.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Applications Section */}
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-black text-gray-900">
                  Recent Applications
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                        Applicant
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                        Position
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                        Company
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentApplications.map((app) => (
                      <tr key={app.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                          {app.applicantName}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {app.position}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {app.company}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${app.statusColor}`}
                          >
                            {app.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {app.date}
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* APPLICATIONS TAB */}
        {activeTab === "applications" && (
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-black text-gray-900">
                  All Applications
                </h2>
                <input
                  type="text"
                  placeholder="Search applications..."
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 placeholder-gray-500"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                      Applicant
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                      Position
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentApplications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        {app.applicantName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {app.position}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {app.company}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${app.statusColor}`}
                        >
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:text-blue-700 font-semibold">
                            Review
                          </button>
                          <button className="text-red-600 hover:text-red-700 font-semibold">
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* JOBS TAB */}
        {activeTab === "jobs" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-black text-gray-900">Job Listings</h2>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                + Post New Job
              </button>
            </div>
            <div className="grid gap-6">
              {jobListings.map((job) => (
                <div
                  key={job.id}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-gray-900">
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-600">{job.company}</p>
                      <div className="mt-3 flex items-center gap-4">
                        <span className="text-sm text-gray-600">
                          👥 {job.applicants} applicants
                        </span>
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${job.statusColor}`}
                        >
                          {job.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200">
                        Edit
                      </button>
                      <button className="rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-200">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* USERS TAB */}
        {activeTab === "users" && (
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-black text-gray-900">
                  User Management
                </h2>
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                  + Add User
                </button>
              </div>
            </div>
            <div className="p-8 text-center">
              <p className="text-gray-600">User management interface coming soon</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
