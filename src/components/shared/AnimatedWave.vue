<template>
    <svg viewBox="0 0 832 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            :class="{ active: active }"
            d="M0.5 19.4998C92.5 -41.0002 131.873 110.691 177 43.0001C222.127 -24.6904 283 2.99999 326 34.0001C388.006 78.7019 430.944 -14.6296 512.5 34.0001C593 82 643.912 -4.15812 707 34.0001C769 71.5 782.709 21.3159 831 11.9999"
            stroke="black"
        />
    </svg>
</template>

<script setup lang="ts">
defineProps({
    active: {
        type: Boolean,
        default: true
    }
});
</script>

<style scoped lang="scss">
@use '@/assets' as *;

svg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -16px;
    height: 25px;
    width: 85px;

    path {
        fill: transparent;
        stroke-width: 36px;
        stroke: rgb(var(--system-red));
        stroke-dasharray: 910;
        stroke-dashoffset: 910;
        transition: stroke-dashoffset 0.7s cubic-bezier(0.5, 0.68, 0.74, 1.02);

        &.active {
            stroke-dashoffset: 0;
        }
    }
}
</style>
