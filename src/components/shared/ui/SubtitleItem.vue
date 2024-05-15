<template>
    <h3 class="subtitle"><slot /></h3>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/assets' as *;

.subtitle {
    font-size: 1.8rem;
    text-align: center;
    font-weight: 300;

    color: #4f5665;

    margin-bottom: 30px;

    @media only screen and (max-width: $tablet) {
        font-size: 1.6rem;
    }
}
</style>
