<script lang="ts" setup>
import { ref } from 'vue';
import { Timeline } from '@elemento/ui';
import type { CardInformation } from '@elemento/ui';

const experienceData = ref<CardInformation[]>([
    {
        title: "Trainee Software Developer",
        description: "Developed user-centric web applications and enhanced system performance.",
        years: "April 2022 - September 2022",
        index: 1,
    },
    {   
        title: "Jr. FullStack Developer",
        description: "Developed user-centric web applications and enhanced system performance.",
        years: "August 2023 - March 2025",
        index: 2,
    },
    {   
        title: "FullStack Developer",
        description: "Developed user-centric web applications and enhanced system performance.",
        years: "April 2025 - Present",
        index: 3,    }
])

</script>

<template>
    <div class="h-screen w-full flex justify-center items-center scrollbar-hide">
        <div class=" h-full">
            <section id="experience" class="h-full bg-black text-white flex items-center">
                <div class="container mx-auto overflow-x-hidden overflow-y-auto h-[90%] scrollbar-hide">
                    <Timeline :cardInformation="experienceData" />
                </div>
            </section>
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