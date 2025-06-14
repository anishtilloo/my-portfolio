import { ref } from "vue";
import { defineStore } from "pinia";


export const useThemeStore = defineStore('theme', () => {
    const currentTheme = ref<'dark' | 'light'>('dark');

    function updateTheme() {
        if (currentTheme.value === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return {
        currentTheme,
        updateTheme,
    }
})