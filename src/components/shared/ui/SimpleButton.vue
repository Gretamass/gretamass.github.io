<template>
    <button class="button" :class="[type]" :disabled="disabled"><slot /></button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { ButtonType } from '@/components/shared/ui/enumerators';

defineProps({
    type: {
        type: String as PropType<ButtonType>,
        default: ButtonType.PRIMARY
    },
    disabled: {
        type: Boolean,
        default: false
    }
});
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.button {
    border: none;
    border-radius: $button-border-radius;

    padding: 12px 50px;

    cursor: pointer;

    font-size: 1.6rem;
    font-weight: 500;

    box-shadow: 0 7px 15px 0 #00000015;
    color: #1a1a1a;

    &:not(&:disabled) {
        @include hover-scale();
    }

    &:disabled {
        cursor: default;

        background-color: rgb(var(--system-beige));
        color: rgb(var(--primary-text));
    }
}

.primary {
    background-color: rgb(var(--system-red));
    color: rgb(var(--secondary-text));
}

.secondary {
    background-color: transparent;
    border: 1px solid rgb(var(--system-beige));
}

.tertiary {
    background-color: rgb(var(--background-color));
    border: 1px solid rgb(var(--active-green));
    color: rgb(var(--active-green));
}

.beige {
    background-color: #e6dfd0;
    color: #2d2d2d;
}
</style>
