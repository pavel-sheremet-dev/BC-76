import { AuthUser } from "@/types/user";
import { create } from "zustand";

interface AuthStore {
  user: null | AuthUser;
  isAuthenticated: boolean;
  setUser: (user: AuthUser) => void;
  clearIsAuthenticated: () => void;
}

export const useAuthStore = create<AuthStore>()((set) => {
  return {
    user: null,
    isAuthenticated: false,
    setUser: (user: AuthUser) =>
      set(() => ({ user: user, isAuthenticated: true })),
    clearIsAuthenticated: () =>
      set(() => ({ user: null, isAuthenticated: false })),
  };
});
