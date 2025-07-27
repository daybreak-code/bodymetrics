import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  setCurrentUser: (user: User | null) => void;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
      isAuthenticated: false,
      user: null,
  setCurrentUser: (user) => {
    set({ isAuthenticated: !!user, user });
      },
  logout: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error);
    }
    // The onAuthStateChange listener in App.tsx will handle setting user to null
  },
}));