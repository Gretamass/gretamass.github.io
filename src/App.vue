<template>
    <div class="page">
        <PageHeader />
        <RouterView />
        <PageFooter />
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';
</script>

<style lang="scss">
@use '@/assets' as *;

html {
    font-size: 10px;

    overflow-x: hidden;
}

@font-face {
    font-family: 'dezutis';
    src: url('@/assets/fonts/BalooChettan2-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'dezutis';
    src: url('@/assets/fonts/BalooChettan2-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'dezutis';
    src: url('@/assets/fonts/BalooChettan2-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'dezutis';
    src: url('@/assets/fonts/BalooChettan2-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
}

body {
    font-family: 'dezutis', sans-serif;
    //font-family: 'Poppins', sans-serif;
    color: rgb(var(--primary-text));

    &.modal-open {
        position: fixed;
        overflow-y: hidden;
        top: var(--scrollY);
        width: 100vw;
    }
}

.page {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;

    position: relative;
}
</style>
