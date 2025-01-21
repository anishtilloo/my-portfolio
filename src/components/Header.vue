<script lang="ts" setup>
import { ref } from 'vue';
import { NavigationTabNames } from '../utils/constants';
import type { NavigationTabType } from '../types/common.types';

const emit = defineEmits<{
    (event: 'component-change', selectedComponent: NavigationTabType): void;
}>();

const componentName = ref<NavigationTabType>('About');

function handleComponentChange(selectedComponent: NavigationTabType) {
    componentName.value = selectedComponent;
    emit('component-change', componentName.value);
}

</script>
<template>
    <div>
        <div class="p-4 flex flex-col text-center">
            <div class="flex justify-between">
                <div>
                    Start
                </div>
                <div class="text-5xl font-thin uppercase tracking-wide">
                    Anish Tilloo
                </div>
                <div>
                    End
                </div>
            </div>
            <div class="flex justify-center">
                <div class="w-[19rem] text-left">
                    FullStack Developer
                </div>
            </div>
        </div>
        <div class="p-4">
            <ul class="flex justify-center space-x-8">
                <li 
                    v-for="item in NavigationTabNames" 
                    :key="item"
                    @click="handleComponentChange(item)"
                    class="rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
                    :class="componentName === item 
                        ? 'bg-white text-black scale-105 shadow-lg py-1 px-2' 
                        : 'nav-link p-1'"
                >
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>