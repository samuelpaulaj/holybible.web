import { create } from "zustand";

interface configStore {
  navConfig: { id: number; name: string }[];
  selectedNav: number;
  setSelectedNav: (navItem: number) => void;
}

const getConfig = () => {
  let baseConfig = [
    { id: 1, name: "Home" },
    { id: 2, name: "Index" },
    { id: 3, name: "Lists" },
    { id: 4, name: "Word Search" },
    { id: 5, name: "Bible Quiz" },
    { id: 6, name: "Favorites" },
    { id: 7, name: "Help" },
  ];
  return baseConfig;
};

const defaultConfig = {
  selectedNav: 1,
  navConfig: getConfig(),
};

export const useConfigStore = create<configStore>((set) => ({
  ...defaultConfig,
  setSelectedNav: (navItem: number) =>
    set(() => ({
      selectedNav: navItem,
    })),
}));
