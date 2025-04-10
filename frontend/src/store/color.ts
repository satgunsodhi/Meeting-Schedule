import { create } from 'zustand';

interface ColorStore {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const useColorStore = create<ColorStore>((set) => ({
    theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light', // Retrieve theme from localStorage
    toggleTheme: () => set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme); // Save theme to localStorage
        document.body.classList.remove(state.theme + '-mode'); // Remove old class
        document.body.classList.add(newTheme + '-mode'); // Add new class
        return { theme: newTheme };
    }),
}));

export default useColorStore;