<template>
    <h1 class="title"><slot /></h1>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/assets' as *;

.title {
    font-size: 3.6rem;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;

    @media only screen and (max-width: $tablet) {
        font-size: 2.4rem;
    }
}
</style>
