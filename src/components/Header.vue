<script lang="ts" setup>
import { ref } from 'vue';
import { NavigationTabNames } from '../utils/constants';
import type { NavigationTabType } from '../types/common.types';

const emit = defineEmits<{
    (event: 'component-change', selectedComponent: NavigationTabType): void;
}>();

const componentName = ref<NavigationTabType>('Experience');

function handleComponentChange(selectedComponent: NavigationTabType) {
    componentName.value = selectedComponent;
    emit('component-change', componentName.value);
}

</script>
<template>
    <div>
        <div class="p-8 flex flex-col text-center">
            <div class="flex justify-between">
                <div class="text-5xl font-thin uppercase tracking-wide">
                    Anish Tilloo
                </div>
            </div>
            <div class="flex justify-start">
                <div class="w-[19rem] text-left">
                    Software Engineer
                </div>
            </div>
        </div>
        <div class="p-8">
            <ul class="flex justify-start space-x-8 dark:text-white">                
                <li 
                    v-for="item in NavigationTabNames" 
                    :key="item"
                    @click="handleComponentChange(item)"
                    class="rounded-lg cursor-pointer transition-all duration-300 ease-in-out dark:text-white"
                    :class="componentName === item 
                        ? 'bg-white dark:bg-gray-700 scale-105 shadow-lg py-1 px-2' 
                        : 'nav-link p-1 dark:text-gray-300'"
                >
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>