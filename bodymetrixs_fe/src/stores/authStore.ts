import { create } from 'zustand';
import { persist } from 'zustand/middleware';
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

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      setCurrentUser: (user) => {
        set({ isAuthenticated: !!user, user });
      },
      logout: async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
          set({ isAuthenticated: false, user: null });
        } else {
          console.error("Error logging out:", error);
        }
      }
    }),
    {
      name: 'bodymetrics-auth'
    }
  )
);