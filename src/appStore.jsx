import { create } from "zustand";
import { persist } from "zustand/middleware";

const appStore = (set) => ({
  dopen: true,
  updateOpen: (dopen) => set(() => ({ dopen })),
});

export const useAppStore = create(
  persist(appStore, { name: "my_app_store" })
);
