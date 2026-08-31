"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../lib/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const result = await login(email, password);
    if (result.success) {
      router.push("/dashboard");
    } else {
      setError(result.error || "Login failed");
    }
    setIsLoading(false);
  };

  const handleDemoLogin = (demoEmail: string, demoPassword: string) => {
    setEmail(demoEmail);
    setPassword(demoPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo Card */}
        <div className="text-center mb-8">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-3xl font-black text-slate-900 shadow-2xl mb-6">
            PM
          </div>
          <h1 className="text-3xl font-black text-white">PESO Mabini</h1>
          <p className="text-blue-100 mt-2">Employment Services Portal</p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-black text-gray-900 mb-6">Login</h2>

          {error && (
            <div className="mb-4 rounded-lg bg-red-100 p-4 text-sm text-red-700 border border-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-blue-600 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700 disabled:bg-gray-400"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <p className="text-xs font-semibold text-gray-600 mb-4 text-center">
              DEMO CREDENTIALS
            </p>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() =>
                  handleDemoLogin("superadmin@peso.gov", "SuperAdmin@123")
                }
                className="w-full rounded-lg border-2 border-yellow-400 bg-yellow-50 px-4 py-2.5 text-sm font-bold text-yellow-700 hover:bg-yellow-100 transition-colors"
              >
                👑 Super Admin Demo
              </button>
              <p className="text-xs text-gray-600 text-center">
                superadmin@peso.gov
              </p>
            </div>

            <div className="my-4 space-y-2">
              <button
                type="button"
                onClick={() => handleDemoLogin("maria.santos@peso.gov", "AdminPass@123")}
                className="w-full rounded-lg border-2 border-blue-400 bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-100 transition-colors"
              >
                🔐 Admin Demo
              </button>
              <p className="text-xs text-gray-600 text-center">
                maria.santos@peso.gov
              </p>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() =>
                  handleDemoLogin("rosa.garcia@peso.gov", "ModPass@123")
                }
                className="w-full rounded-lg border-2 border-green-400 bg-green-50 px-4 py-2.5 text-sm font-bold text-green-700 hover:bg-green-100 transition-colors"
              >
                📋 Moderator Demo
              </button>
              <p className="text-xs text-gray-600 text-center">
                rosa.garcia@peso.gov
              </p>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-blue-100 text-xs">
          <p>This is a secure employment portal. Authorized users only.</p>
          <p className="mt-2">© 2024 PESO Mabini. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
