import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Mock implementation for demo purposes
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: async (email, password) => {
        // This would normally connect to a backend API
        // For demo, we'll simulate a successful login
        if (email && password) {
          set({
            isAuthenticated: true,
            user: {
              id: '1',
              name: 'Sarah',
              email,
              avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
            }
          });
          return true;
        }
        return false;
      },
      register: async (name, email, password) => {
        // This would normally connect to a backend API
        // For demo, we'll simulate a successful registration
        if (name && email && password) {
          set({
            isAuthenticated: true,
            user: {
              id: '1',
              name,
              email,
              avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
            }
          });
          return true;
        }
        return false;
      },
      logout: () => {
        set({ isAuthenticated: false, user: null });
      }
    }),
    {
      name: 'bodymetrics-auth'
    }
  )
);