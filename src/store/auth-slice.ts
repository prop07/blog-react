import { create } from "zustand";
import { persist } from "zustand/middleware";

type TokenState = {
  token: string | null;
  setToken: (token: string | null) => void;
  clearToken: () => void;
};

const storageKey = "token-storage";

export const useTokenStore = create<TokenState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      clearToken: () => set({ token: null }),
    }),
    { name: storageKey }
  )
);

export function useAuthenticated() {
  const token = useTokenStore((state) => state.token);
  return token !== null;
}
