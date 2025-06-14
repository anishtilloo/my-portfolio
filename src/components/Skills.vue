<script lang="ts" setup>
import { ref } from 'vue';
import { SkillCard } from '@elemento/ui';

const projects = ref([
  {
    id: 1,
    skillName: "Vue.js",
    skillInitials: "Vue",
    initialsAndBarColor: "red",
    proficiency: 80
  },
  {
    id: 2,
    skillName: "Vue.js",
    skillInitials: "Vue",
    initialsAndBarColor: "blue",
    proficiency: 80
  },
  {
    id: 3,
    skillName: "Vue.js",
    skillInitials: "Vue",
    initialsAndBarColor: "green",
    proficiency: 80
  },
  {
    id: 4,
    skillName: "Vue.js",
    skillInitials: "Vue",
    initialsAndBarColor: "yellow",
    proficiency: 80
  },
  {
    id: 5,
    skillName: "Vue.js",
    skillInitials: "Vue",
    initialsAndBarColor: "voilet",
    proficiency: 80
  },
  {
    id: 6,
    skillName: "Vue.js",
    skillInitials: "Vue",
    initialsAndBarColor: "rose",
    proficiency: 80
  },
]);

</script>
<template>  <section id="skills" class="text-white h-screen flex flex-col">
    <div class="flex-1 overflow-y-auto scrollbar-hide">
      <div class="container mx-auto px-4 py-8">
        <div v-for="project in projects" :key="project.id" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Skill Card -->
          <SkillCard :initials-and-bar-color="project.initialsAndBarColor" :skill-initials="project.skillInitials" :skill-name="project.skillName" :proficiency="project.proficiency"/>
          <!-- Repeat more skill cards as needed -->
        </div>
      </div>
    </div>
  </section>

</template>
<style scoped>
/* Hide scrollbar */
.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
}

/* Progress bar styles */
progress {
  -webkit-appearance: none;
  appearance: none;
}

/* For WebKit browsers */
progress::-webkit-progress-bar {
  background-color: rgb(209 213 219); /* gray-300 */
  border-radius: 9999px;
}

progress::-webkit-progress-value {
  background: linear-gradient(to right, rgb(74 222 128), rgb(22 163 74)); /* green-400 to green-600 */
  border-radius: 9999px;
}

/* For Firefox */
progress::-moz-progress-bar {
  background: linear-gradient(to right, rgb(74 222 128), rgb(22 163 74)); /* green-400 to green-600 */
  border-radius: 9999px;
}
</style>
