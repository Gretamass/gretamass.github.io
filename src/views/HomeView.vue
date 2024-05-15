<template>
    <div class="home">
        <HeroSection />
        <SpacesSection show-route-button class="spaces-section" />
        <AboutSection />
        <PricesSection />
        <TestimonialsSection />
        <div class="home__clouds"><CloudsRow /></div>
    </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue';
import AboutSection from '@/components/home/AboutSection.vue';
import PricesSection from '@/components/home/PricesSection.vue';
import SpacesSection from '@/components/home/SpacesSection.vue';
import TestimonialsSection from '@/components/home/TestimonialsSection.vue';
import CloudsRow from '@/components/shared/ui/CloudsRow.vue';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.home {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    &__clouds {
        position: relative;
        width: 100%;
        height: 100px;

        @media only screen and (max-width: $tablet) {
            height: 75px;
        }
    }
}

.spaces-section {
    padding-bottom: 70px;
}
</style>
