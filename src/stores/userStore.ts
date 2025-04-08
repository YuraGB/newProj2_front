import { create } from "zustand";
import { TUser } from "@/types/auth";

interface UserState {
  currentUser: TUser | null;
  setCurrentUser: (user: TUser) => void;
  removeCurrentUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
  currentUser: null,
  setCurrentUser: (user: TUser) => set(() => ({ currentUser: user })),
  removeCurrentUser: () => set(() => ({ currentUser: null })),
}));

export default useUserStore;
