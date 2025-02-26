<script setup lang="ts">
import { ref } from "vue";
import { ImageCard } from "@elemento/ui";

const projects = ref([
  {
    id: 1,
    title: "Project One",
    description:
      "A fantastic project that demonstrates my skills in building modern web applications.",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "An innovative solution built with cutting-edge technologies and best practices.",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "A creative project that showcases design and development expertise.",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    id: 4,
    title: "Project Four",
    description:
      "A dynamic project focusing on scalability and performance optimization.",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    id: 5,
    title: "Project Five",
    description:
      "A dynamic project focusing on scalability and performance optimization.",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  },
  {
    id: 6,
    title: "Project Six",
    description:
      "A dynamic project focusing on scalability and performance optimization.",
    image: "https://via.placeholder.com/400x300",
    link: "#"
  }
]);
</script>

<template>
  <section id="projects" class="py-16 h-10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div
          v-for="project in projects"
          :key="project.id"
        >
            <ImageCard :displayData="project" />
        </div>
      </div>
    </div>
  </section>
</template>