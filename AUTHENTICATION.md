# PESO Mabini Authentication System

## Overview
This document explains the complete login and authentication system for the PESO Mabini Employment Portal.

## User Roles & Credentials

### Super Admin
- **Email:** `superadmin@peso.gov`
- **Password:** `SuperAdmin@123`
- **Permissions:** 
  - Full system access
  - Manage admin accounts (create, edit, delete)
  - View system logs and analytics
  - System settings and configuration

### Admin
- **Email:** `maria.santos@peso.gov`
- **Password:** `AdminPass@123`
- **Permissions:**
  - Manage job postings
  - Review applications
  - Manage employer accounts

### Moderator
- **Email:** `rosa.garcia@peso.gov`
- **Password:** `ModPass@123`
- **Permissions:**
  - Review applications
  - View reports

## File Structure

```
app/
├── lib/
│   ├── auth.ts              # Authentication utilities and user data
│   └── AuthContext.tsx      # React context for global auth state
├── login/
│   └── page.tsx            # Login page with demo credentials
├── dashboard/
│   └── page.tsx            # Dashboard redirect based on role
├── admin/
│   └── page.tsx            # Admin dashboard
└── superadmin/
    └── page.tsx            # Super Admin dashboard with admin management
```

## Key Features

### 1. Login System
- Email and password authentication
- Demo credentials displayed for testing
- Error handling for invalid credentials
- Local storage for session persistence

### 2. Super Admin Capabilities
- **Create Admin Accounts:** Add new admins/moderators with custom credentials
- **Manage Admins:** View all admin accounts
- **Toggle Status:** Activate/Deactivate admin accounts
- **Delete Admins:** Remove admin accounts from system
- **System Monitoring:** View system health, storage, server load
- **Activity Logs:** Monitor all system activities

### 3. Authentication Context
- Global authentication state management
- Automatic user persistence via localStorage
- Login/logout functions
- Role-based access control

## How to Use

### Logging In
1. Navigate to `/login`
2. Either enter credentials manually or click demo credential buttons
3. Click "Login"
4. You'll be redirected to your appropriate dashboard based on role:
   - Super Admin → `/superadmin`
   - Admin/Moderator → `/admin`
   - Others → `/`

### Creating a New Admin Account (Super Admin Only)
1. Log in as super admin
2. Navigate to Admin Management tab
3. Click "+ Add Admin" button
4. Fill in the form:
   - Full Name
   - Email
   - Password
   - Role (Admin or Moderator)
5. Click "Create Admin"
6. New admin will appear in the table

### Managing Admin Accounts
- **Edit:** Click "Edit" button (coming soon)
- **Toggle Status:** Click on status badge to toggle between Active/Inactive
- **Delete:** Click "Delete" to remove account

## Architecture

### Authentication Flow
```
Login Page → authenticateUser() → AuthContext → Dashboard (role-based redirect)
```

### State Management
- Uses React Context API for global authentication state
- localStorage for session persistence
- No external authentication libraries (simple implementation)

## Security Notes

⚠️ **IMPORTANT:** This is a demonstration system. In production:
- Use proper password hashing (bcrypt, argon2, etc.)
- Move credentials to environment variables
- Use proper database with encryption
- Implement JWT or session-based authentication
- Add CSRF protection
- Use HTTPS only
- Implement rate limiting
- Add 2FA (Two-Factor Authentication)
- Never store passwords in plain text
- Implement proper logging and audit trails

## Future Enhancements

- [ ] Database integration (replace mock data)
- [ ] Password hashing and encryption
- [ ] Email verification for new accounts
- [ ] Two-factor authentication (2FA)
- [ ] Password reset functionality
- [ ] Account recovery options
- [ ] Detailed audit logging
- [ ] Role-based permission system
- [ ] Session timeout management
- [ ] API integration for backend

## Testing Demo Accounts

All demo accounts are available at `/login` with pre-filled buttons for quick testing:
- Click "👑 Super Admin Demo" for super admin access
- Click "🔐 Admin Demo" for admin access
- Click "📋 Moderator Demo" for moderator access

Or manually enter the credentials listed in the "User Roles & Credentials" section above.
