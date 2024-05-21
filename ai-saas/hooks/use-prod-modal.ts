import { create } from "zustand";

interface IUseProModalStore {
    isOpen: boolean;
    onOpen: ()=> void;
    onClose: ()=> void;
};

export const useProdModal = create<IUseProModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false})
}));