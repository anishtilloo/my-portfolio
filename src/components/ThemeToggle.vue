<!-- ThemeToggle.vue -->
<template>
  <button
    @click="toggleTheme(currentTheme === 'dark' ? 'light' : 'dark' )"
    class="fixed bottom-5 right-5 p-3 rounded-full bg-gray-200 dark:bg-black transition-colors duration-200"
    aria-label="Toggle theme"
  >
    <!-- Sun icon for dark mode -->
    <svg
      v-if="currentTheme === 'dark'"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 text-yellow-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
    <!-- Moon icon for light mode -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 text-gray-900"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useThemeStore } from "../store/theme";
import { storeToRefs } from "pinia";

const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);
const { updateTheme } = themeStore;

// const isDark = ref(false);

function toggleTheme(theme: 'dark' | 'light') {
  currentTheme.value = theme;
  updateTheme();
};

onMounted(() => {
  // Check for user's preferred theme or previously saved theme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  currentTheme.value = savedTheme || (!savedTheme && prefersDark) ? 'dark' : 'light';
  updateTheme();
});
</script>
