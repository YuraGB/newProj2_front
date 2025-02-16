import { create } from "zustand";

interface ITokenStore {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const useAccessTokenStore = create<ITokenStore>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  clearToken: () => set({ token: null }),
}));

export default useAccessTokenStore;
