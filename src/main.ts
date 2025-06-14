import { createApp, type Directive, type DirectiveBinding, type VNode } from 'vue'
import './style.css'
import App from './App.vue'
import '@elemento/ui/styles.css'
import { createPinia } from 'pinia';

export const appear: Directive = {
    beforeMount(element: HTMLElement) {
        element.style.visibility = 'hidden';
    },
    updated(
        element: HTMLElement,
        binding: DirectiveBinding<boolean>,
        node: VNode
    ) {
        if (binding.value === binding.oldValue || !node.transition) {
            return;
        }

        if (!binding.value) {
            node.transition.leave(element, () => {
                element.style.visibility = 'hidden';
            });
            return;
        }

        node.transition.beforeEnter(element);
        element.style.visibility = '';
        node.transition.enter(element);
    }
};
createApp(App).directive('appear', appear).use(createPinia()).mount('#app')
