<!-- <template>
    <div class="p-8 flex">
        <div class="p-8">
            <div class="w-60 h-60 bg-green-400"></div>
        </div>
        <div class="p-8 w-full flex">
            <ul class="">
                <li>
                    <label for="javascript">JavaScript</label>
                    <progress id="javascript" class="rounded-full text-white mx-4 my-1 w-44 h-2" max="100" value="70">70%</progress>
                </li>
                <li>
                    <label for="typescript">TypeScript</label>
                    <progress id="typescript" class="rounded-full text-white mx-4 my-1 w-44 h-2" max="100" value="70">70%</progress>
                </li>
                <li>
                    <label for="nodejs">NodeJS</label>
                    <progress id="nodejs" class="rounded-full text-white mx-4 my-1 w-44 h-2" max="100" value="70">70%</progress>
                </li>
                <li>
                    <label for="express">Express</label>
                    <progress id="express" class="rounded-full text-white mx-4 my-1 w-44 h-2" max="100" value="70">70%</progress>
                </li>
                <li>
                    <label for="vuejs">VueJS</label>
                    <progress id="vuejs" class="rounded-full text-white mx-4 my-1 w-44 h-2" max="100" value="70">70%</progress>
                </li>
                <li> 
                    <label for="reactjs">ReactJS</label>
                    <progress id="reactjs" class="rounded-full text-white mx-4 my-1 w-44 h-2" max="100" value="70">70%</progress>
                </li>
                <li> 
                    <label for="mongodb">MongoDB</label>
                    <progress id="mongodb" class="rounded-full text-white mx-4 my-1 w-44 h-2" max="100" value="70">70%</progress>
                </li>
                <li>
                    <label for="postgressql">PostgresSQL</label>
                    <progress id="postgressql" class="rounded-full text-white mx-4 my-1 w-44 h-2" max="100" value="70">70%</progress>
                </li>
                <li>
                    <label for="prismaorm">PrismaORM</label>
                    <progress id="prismaorm" class="rounded-full text-white mx-4 my-1 w-44 h-2" max="100" value="70">70%</progress>
                </li>
                <li>
                    <label for="html">HTML</label>
                    <progress id="html" class="rounded-full text-white mx-4 my-1 w-44 h-2" max="100" value="70">70%</progress>
                </li>
                <li>
                    <label for="css">CSS</label>
                    <progress id="css" class="rounded-full text-white mx-4 my-1 w-44 h-2" max="100" value="70">70%</progress>
                </li>
                <li>
                    <label for="tailwindcss">Tailwind CSS</label>
                    <progress id="tailwindcss" class="rounded-full text-white mx-4 my-1 w-44 h-2" max="100" value="70">70%</progress>
                </li>
                <li>
                    <label for="nuxt3">Nuxt3</label>
                    <progress id="nuxt3" class="rounded-full text-white mx-4 my-1 w-44 h-2" max="100" value="70">70%</progress>
                </li>
                <li>
                    <label for="trpc">tRPC</label>
                    <progress id="trpc" class="rounded-full text-white mx-4 my-1 w-44 h-2" max="100" value="70">70%</progress>
                </li>
                <li>
                    <label for="cpp">C++</label>
                    <progress id="cpp" class="rounded-full text-white mx-4 my-1 w-44 h-2" max="100" value="70">70%</progress>
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        
        </div>
    </div>
</template>

<style scoped>
/* Remove default appearance */
progress {
  -webkit-appearance: none;
  appearance: none;
}

/* For WebKit browsers */
progress::-webkit-progress-bar {
  /* Apply Tailwind classes via @apply */
  @apply bg-gray-300 rounded-full;
}
progress::-webkit-progress-value {
  @apply bg-gradient-to-r from-green-400 to-green-600 rounded-full;
}

/* For Firefox */
progress::-moz-progress-bar {
  @apply bg-gradient-to-r from-green-400 to-green-600 rounded-full;
}
</style> -->

<script lang="ts" setup>
import { SkillCard } from '@elemento/ui';
</script>
<template>
    <section id="skills" class="py-16 text-white">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Skill Card -->
      <SkillCard initials-and-bar-color="red" skill-initials="Vue" skill-name="Vue.js" :proficiency="80"/>
      <SkillCard initials-and-bar-color="blue" skill-initials="Vue" skill-name="Vue.js" :proficiency="80"/>
      <SkillCard initials-and-bar-color="green" skill-initials="Vue" skill-name="Vue.js" :proficiency="80"/>
      <SkillCard initials-and-bar-color="yellow" skill-initials="Vue" skill-name="Vue.js" :proficiency="80"/>
      <SkillCard initials-and-bar-color="violet" skill-initials="Vue" skill-name="Vue.js" :proficiency="80"/>
      <SkillCard initials-and-bar-color="rose" skill-initials="Vue" skill-name="Vue.js" :proficiency="80"/>
      <!-- Repeat more skill cards as needed -->
    </div>
  </div>
</section>

</template>
<style>
/* Style the <progress> element using Tailwind classes via custom CSS */
progress {
  -webkit-appearance: none;
  appearance: none;
}

/* For WebKit browsers */
progress::-webkit-progress-bar {
  @apply bg-gray-300 rounded-full;
}
progress::-webkit-progress-value {
  @apply bg-gradient-to-r from-green-400 to-green-600 rounded-full;
}

/* For Firefox */
progress::-moz-progress-bar {
  @apply bg-gradient-to-r from-green-400 to-green-600 rounded-full;
}
</style>
