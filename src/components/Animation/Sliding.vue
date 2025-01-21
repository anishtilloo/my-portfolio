<script setup lang="ts">
import { ref, watch } from 'vue';

const isVisible = ref(false);

// Props to detect component changes
defineProps<{ componentKey: string }>();

// Watch for changes in the component key and trigger animation
watch(() => isVisible.value, (newValue) => {
  isVisible.value = newValue;
});

// When component mounts, set it as visible
isVisible.value = true;
</script>

<template>
  <transition name="slide-fade" mode="out-in" appear>
    <div :key="componentKey">
      <slot />
    </div>
  </transition>
</template>

<style scoped>
/* Slide and Fade animation */
.slide-fade-enter-active {
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}
.slide-fade-leave-active {
  transition: transform 0.3s ease-in, opacity 0.3s ease-in;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(50px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>


<!-- <script setup lang="ts">
import { onMounted, ref } from 'vue';

withDefaults(defineProps<{ animationType?: string }>(), { animationType: 'fade' });

const target = ref<Element>();
const animate = ref<boolean>(false);

const observer = new IntersectionObserver(
    ([entry]) => {
        animate.value = entry.isIntersecting;
    },
    {
        threshold: 0.5
    }
);

onMounted(() => {
    observer.observe(target.value as Element);
});
</script>

<template>
    <div ref="target">
        <transition :name="animationType">
            <div v-appear="animate" class="animated-component">
                <slot />
            </div>
        </transition>
    </div>
</template>

<style scoped>
.animated-component.fade-enter-from,
.animated-component.zoom-enter-from {
    transition: none;
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 2000ms ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Zoom animation */
.zoom-enter-active,
.zoom-leave-active {
    transition: transform 2000ms ease;
}

.zoom-enter-from,
.zoom-leave-to {
    transform: scale(0.9);
}
</style> -->