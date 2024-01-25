import { IAssembly } from '@/settings/assembly';
import { create } from 'zustand';

export type ModalType = 'modeDetails' | 'contact';

interface ModalData {
    assembly?: IAssembly;
    contactTitle?: string;
}

interface ModalStore {
    type: ModalType | null;
    data: ModalData;
    isOpen: boolean;
    onOpen: (type: ModalType, data?: ModalData) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
    onClose: () => set({ type: null, isOpen: false })
}));