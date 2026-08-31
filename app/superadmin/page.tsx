"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../lib/AuthContext";
import { getAllAdmins, createAdmin, updateAdmin, deleteAdmin } from "../lib/auth";
import type { User } from "../lib/auth";

const superadminStats = [
  {
    label: "Total Users",
    value: "1,247",
    color: "bg-blue-100 text-blue-700",
    icon: "👥",
  },
  {
    label: "Active Employers",
    value: "89",
    color: "bg-green-100 text-green-700",
    icon: "🏢",
  },
  {
    label: "Job Postings",
    value: "342",
    color: "bg-yellow-100 text-yellow-700",
    icon: "📋",
  },
  {
    label: "System Health",
    value: "99.8%",
    color: "bg-purple-100 text-purple-700",
    icon: "💚",
  },
];

const systemLogs = [
  {
    id: 1,
    event: "User Registration",
    user: "new_user@email.com",
    action: "Account Created",
    timestamp: "2024-08-30 14:32:15",
    type: "success",
  },
  {
    id: 2,
    event: "Job Posted",
    user: "employer@company.com",
    action: "New Job Listing",
    timestamp: "2024-08-30 13:18:42",
    type: "success",
  },
  {
    id: 3,
    event: "Login Attempt",
    user: "admin@peso.gov",
    action: "Admin Login",
    timestamp: "2024-08-30 12:05:30",
    type: "warning",
  },
  {
    id: 4,
    event: "Payment Processed",
    user: "employer123@company.com",
    action: "Premium Subscription",
    timestamp: "2024-08-30 11:22:18",
    type: "success",
  },
];

const registeredAdmins = [
  {
    id: 1,
    name: "Dr. Maria Santos",
    email: "maria.santos@peso.gov",
    role: "Admin",
    permissions: "Full Access",
    status: "Active",
    joinedDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Juan Dela Cruz",
    email: "juan.delacruz@peso.gov",
    role: "Admin",
    permissions: "Job Management",
    status: "Active",
    joinedDate: "2024-02-20",
  },
  {
    id: 3,
    name: "Rosa Garcia",
    email: "rosa.garcia@peso.gov",
    role: "Moderator",
    permissions: "User Review",
    status: "Active",
    joinedDate: "2024-03-10",
  },
];

export default function SuperAdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [admins, setAdmins] = useState<User[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin" as "admin" | "moderator",
  });
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user || user.role !== "superadmin") {
      router.push("/login");
    } else {
      setAdmins(getAllAdmins());
    }
  }, [user, router]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const handleAddAdmin = () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }
    createAdmin(formData.email, formData.name, formData.password, formData.role);
    setAdmins(getAllAdmins());
    setShowAddModal(false);
    setFormData({ name: "", email: "", password: "", role: "admin" });
  };

  const handleDeleteAdmin = (id: string) => {
    if (confirm("Are you sure you want to delete this admin account?")) {
      deleteAdmin(id);
      setAdmins(getAllAdmins());
    }
  };

  const handleToggleStatus = (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    updateAdmin(id, { status: newStatus as "active" | "inactive" });
    setAdmins(getAllAdmins());
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* ════════════════════════
          SUPERADMIN HEADER
      ════════════════════════ */}
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400 text-lg font-black text-slate-900 shadow-lg">
                👑
              </div>
              <div>
                <h1 className="text-2xl font-black text-white">
                  Super Admin Dashboard
                </h1>
                <p className="text-sm text-blue-100">
                  System Management & Analytics
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="rounded-lg bg-blue-500/80 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-400">
                System Settings
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
          <div className="flex gap-8 overflow-x-auto">
            {[
              { id: "overview", label: "Overview", icon: "📊" },
              { id: "admins", label: "Admin Management", icon: "🔐" },
              { id: "users", label: "Users", icon: "👥" },
              { id: "system", label: "System Settings", icon: "⚙️" },
              { id: "logs", label: "Activity Logs", icon: "📝" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`border-b-4 px-4 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${
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
              {superadminStats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
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

            {/* Two Column Layout for System Info and Logs */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* System Status Card */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm lg:col-span-1">
                <h2 className="text-lg font-black text-gray-900 mb-6">
                  System Status
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">
                        Database
                      </span>
                      <span className="text-xs font-bold text-green-600">
                        ✓ Healthy
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">
                        Server Load
                      </span>
                      <span className="text-xs font-bold text-green-600">
                        35%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-green-600 rounded-full"
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">
                        Storage
                      </span>
                      <span className="text-xs font-bold text-yellow-600">
                        72%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-yellow-600 rounded-full"
                        style={{ width: "72%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm lg:col-span-2">
                <div className="border-b border-gray-200 px-6 py-4">
                  <h2 className="text-lg font-black text-gray-900">
                    Recent Activity
                  </h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {systemLogs.slice(0, 4).map((log) => (
                    <div
                      key={log.id}
                      className="flex items-center justify-between px-6 py-4 hover:bg-gray-50"
                    >
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {log.event}
                        </p>
                        <p className="text-xs text-gray-600">{log.user}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-600">{log.timestamp}</p>
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold mt-1 ${
                            log.type === "success"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {log.action}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ADMIN MANAGEMENT TAB */}
        {activeTab === "admins" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-black text-gray-900">
                Admin Management
              </h2>
              <button
                onClick={() => setShowAddModal(true)}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                + Add Admin
              </button>
            </div>

            {/* Add Admin Modal */}
            {showAddModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-2xl">
                  <h3 className="text-xl font-black text-gray-900 mb-6">
                    Create New Admin Account
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Enter admin name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="admin@peso.gov"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        placeholder="Enter secure password"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Role
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            role: e.target.value as "admin" | "moderator",
                          })
                        }
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none"
                      >
                        <option value="admin">Admin (Full Access)</option>
                        <option value="moderator">Moderator (Limited Access)</option>
                      </select>
                    </div>
                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={handleAddAdmin}
                        className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700"
                      >
                        Create Admin
                      </button>
                      <button
                        onClick={() => {
                          setShowAddModal(false);
                          setFormData({
                            name: "",
                            email: "",
                            password: "",
                            role: "admin",
                          });
                        }}
                        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                        Joined Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {admins.length > 0 ? (
                      admins.map((admin) => (
                        <tr key={admin.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                            {admin.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {admin.email}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            <span
                              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                                admin.role === "admin"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-purple-100 text-purple-700"
                              }`}
                            >
                              {admin.role === "admin" ? "Admin" : "Moderator"}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() =>
                                handleToggleStatus(admin.id, admin.status)
                              }
                              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                                admin.status === "active"
                                  ? "bg-green-100 text-green-700 hover:bg-yellow-100 hover:text-yellow-700"
                                  : "bg-red-100 text-red-700 hover:bg-green-100 hover:text-green-700"
                              }`}
                            >
                              {admin.status === "active" ? "Active" : "Inactive"}
                            </button>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {admin.createdAt}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <div className="flex gap-2">
                              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteAdmin(admin.id)}
                                className="text-red-600 hover:text-red-700 font-semibold"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                          No admins created yet
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
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
                <input
                  type="text"
                  placeholder="Search users..."
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 placeholder-gray-500"
                />
              </div>
            </div>
            <div className="p-8 text-center">
              <p className="text-gray-600">
                Comprehensive user management interface with search, filters, and bulk actions
              </p>
            </div>
          </div>
        )}

        {/* SYSTEM SETTINGS TAB */}
        {activeTab === "system" && (
          <div className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* General Settings */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-black text-gray-900 mb-4">
                  General Settings
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      System Name
                    </label>
                    <input
                      type="text"
                      defaultValue="PESO Mabini Employment System"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Support Email
                    </label>
                    <input
                      type="email"
                      defaultValue="support@peso.gov"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900"
                    />
                  </div>
                  <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                    Save Changes
                  </button>
                </div>
              </div>

              {/* Security Settings */}
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-black text-gray-900 mb-4">
                  Security Settings
                </h2>
                <div className="space-y-4">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="h-4 w-4" />
                    <span className="text-sm font-semibold text-gray-700">
                      Require 2FA for admins
                    </span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="h-4 w-4" />
                    <span className="text-sm font-semibold text-gray-700">
                      Enable session logging
                    </span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="text-sm font-semibold text-gray-700">
                      Restrict login by IP
                    </span>
                  </label>
                  <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                    Update Security
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ACTIVITY LOGS TAB */}
        {activeTab === "logs" && (
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-black text-gray-900">
                  System Activity Logs
                </h2>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Export Logs
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                      Event
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                      Action
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                      Timestamp
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {systemLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        {log.event}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {log.user}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {log.action}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {log.timestamp}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                            log.type === "success"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {log.type === "success" ? "✓ Success" : "⚠ Warning"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
