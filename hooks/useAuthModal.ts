import {create}  from 'zustand';


interface AuthModelStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}


const useAuthModal = create<AuthModelStore>((set) => ({ 
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));

export default useAuthModal;