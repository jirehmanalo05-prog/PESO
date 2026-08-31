// Authentication utilities and user data

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: "superadmin" | "admin" | "moderator" | "user";
  status: "active" | "inactive";
  createdAt: string;
  permissions: string[];
}

// Mock database - In production, this should be in a real database
export const users: User[] = [
  {
    id: "superadmin-001",
    email: "superadmin@peso.gov",
    password: "SuperAdmin@123", // In production, this should be hashed
    name: "Dr. Administrative Chief",
    role: "superadmin",
    status: "active",
    createdAt: "2024-01-01",
    permissions: ["full_access", "manage_admins", "system_settings", "view_logs"],
  },
  {
    id: "admin-001",
    email: "maria.santos@peso.gov",
    password: "AdminPass@123",
    name: "Dr. Maria Santos",
    role: "admin",
    status: "active",
    createdAt: "2024-01-15",
    permissions: ["manage_jobs", "review_applications", "manage_employers"],
  },
  {
    id: "admin-002",
    email: "juan.delacruz@peso.gov",
    password: "AdminPass@123",
    name: "Juan Dela Cruz",
    role: "admin",
    status: "active",
    createdAt: "2024-02-20",
    permissions: ["manage_jobs", "review_applications"],
  },
  {
    id: "admin-003",
    email: "rosa.garcia@peso.gov",
    password: "ModPass@123",
    name: "Rosa Garcia",
    role: "moderator",
    status: "active",
    createdAt: "2024-03-10",
    permissions: ["review_applications", "view_reports"],
  },
];

export function authenticateUser(email: string, password: string): User | null {
  const user = users.find((u) => u.email === email && u.password === password);
  return user || null;
}

export function findUserById(id: string): User | null {
  return users.find((u) => u.id === id) || null;
}

export function getAllAdmins(): User[] {
  return users.filter((u) => u.role === "admin" || u.role === "moderator");
}

export function createAdmin(
  email: string,
  name: string,
  password: string,
  role: "admin" | "moderator" = "admin"
): User {
  const newAdmin: User = {
    id: `${role}-${Date.now()}`,
    email,
    password, // In production, hash this
    name,
    role,
    status: "active",
    createdAt: new Date().toISOString().split("T")[0],
    permissions: role === "admin"
      ? ["manage_jobs", "review_applications", "manage_employers"]
      : ["review_applications", "view_reports"],
  };
  users.push(newAdmin);
  return newAdmin;
}

export function updateAdmin(
  id: string,
  updates: Partial<User>
): User | null {
  const userIndex = users.findIndex((u) => u.id === id);
  if (userIndex === -1) return null;

  users[userIndex] = { ...users[userIndex], ...updates };
  return users[userIndex];
}

export function deleteAdmin(id: string): boolean {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
}
