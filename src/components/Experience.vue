<script lang="ts" setup>
import { ref } from 'vue';
import { Timeline } from '@elemento/ui';
import type { CardInformation } from '@elemento/ui';

const experienceData = ref<CardInformation>([
    {
        title: "Software Engineer",
        description: "Developed user-centric web applications and enhanced system performance.",
        years: "2019 - 2021",
        index: 1,
    },
    {   
        title: "Software Engineer",
        description: "Developed user-centric web applications and enhanced system performance.",
        years: "2019 - 2021",
        index: 2,
    }
])

</script>
<template>
    <div class="p-8 flex justify-center items-start overflow-y-auto">
        <div class="p-8">
            <section id="experience" class="py-16 bg-black text-white">
                <div class="container mx-auto px-4 h-fit">
                    <Timeline :cardInformation="experienceData" />
                </div>
            </section>
        </div>
    </div>
</template>