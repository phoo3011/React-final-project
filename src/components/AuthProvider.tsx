"use client";
import { createContext, useContext } from "react";

export type AuthUser = { id: string; name: string; studentId: string } | null;
const AuthContext = createContext<AuthUser>(null);

export function AuthProvider({ user, children }: { user: AuthUser; children: React.ReactNode }) {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
