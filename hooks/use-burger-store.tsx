import { create } from 'zustand';

interface BurgerStore {
    isOpen: boolean;
    onOpenMenu: () => void;
    onClose: () => void;
}

export const useBurgerMenu = create<BurgerStore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpenMenu: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));