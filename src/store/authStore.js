// store/authStore.js
import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  login: (username) => set({ isAuthenticated: true, user: username }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));

export default useAuthStore;
