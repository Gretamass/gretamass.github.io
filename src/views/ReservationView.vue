<template>
    <div class="rezervation">
        <RezervationSection />
        <AboutSection />
    </div>
</template>

<script setup lang="ts">
import RezervationSection from '@/components/revervation/RezervationSection.vue';
import AboutSection from '@/components/home/AboutSection.vue';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.rezervation {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
}
</style>
