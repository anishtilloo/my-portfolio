<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import Header from './Header.vue';
import SlidingAnimation from './Animation/Sliding.vue';
// import { Button1, HelloWorld1, Card } from '@elemento/ui'

import type { NavigationTabType } from '../types/common.types';

const About = defineAsyncComponent(() => import('./About.vue'));
const Experience = defineAsyncComponent(() => import('./Experience.vue'));
const Projects = defineAsyncComponent(() => import('./Projects.vue'));
const Contact = defineAsyncComponent(() => import('./Contact.vue'));
const Skills = defineAsyncComponent(() => import('./Skills.vue'))

const selectedLink = ref<NavigationTabType>('About');

function renderComponent(selectedComponent: NavigationTabType) {
  switch (selectedComponent) {
    case 'Contact':
      return Contact;
    case 'Experience':
      return Experience;
    case 'Projects':
      return Projects;
    case 'Skills':
      return Skills;
    default:
      return About;
  }
}

function handleComponentChange(selectedComponent: NavigationTabType) {
    selectedLink.value = selectedComponent;
}
</script>

<template>
  <div class="p-10 w-screen h-screen bg-transparent">
    <div class="w-full h-full">
        <Header @component-change="handleComponentChange" />
        <div>
            <SlidingAnimation :componentKey="selectedLink"> 
                <component :is="renderComponent(selectedLink)" />
            </SlidingAnimation>
        </div>
    </div>
  </div>
</template>