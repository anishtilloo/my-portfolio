<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
import Header from './Header.vue';
import About from "./About.vue";
import SlidingAnimation from './Animation/Sliding.vue';

import type { NavigationTabType } from '../types/common.types';

// const About = defineAsyncComponent(() => import('./About.vue'));
const Experience = defineAsyncComponent(() => import('./Experience.vue'));
const Projects = defineAsyncComponent(() => import('./Projects.vue'));
const Contact = defineAsyncComponent(() => import('./Contact.vue'));
const Skills = defineAsyncComponent(() => import('./Skills.vue'))

const selectedLink = ref<NavigationTabType>('About');

function renderComponent(selectedComponent: NavigationTabType) {
  switch (selectedComponent) {
    case 'Contact':
      return Contact;
    // case 'Experience':
    //   return Experience;
    case 'Projects':
      return Projects;
    case 'Skills':
      return Skills;
    default:
      return Experience;
  }
}

function handleComponentChange(selectedComponent: NavigationTabType) {
    selectedLink.value = selectedComponent;
}
</script>

<template>
  <div class="w-full h-full bg-transparent scrollbar-hide text-gray-900 dark:text-white">
    <div class="w-full h-full flex justify-evenly">
        <div class="h-full z-50 w-1/3">
          <Header @component-change="handleComponentChange" />
          <About />
        </div>
        <div class="flex justify-center h-full w-2/3">
            <SlidingAnimation :componentKey="selectedLink"> 
              <component :is="renderComponent(selectedLink)" />
            </SlidingAnimation>
        </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
}
</style>