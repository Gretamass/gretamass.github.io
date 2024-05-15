<template>
    <div class="services">
        <ServicesSection />
        <PartyService />
        <ChristeningService />
        <AdultPartyService />
        <GallerySection preview />
        <TestimonialsSection />
        <div class="services__clouds"><CloudsRow /></div>
    </div>
</template>

<script setup lang="ts">
import TestimonialsSection from '@/components/home/TestimonialsSection.vue';
import GallerySection from '@/components/gallery/GallerySection.vue';
import CloudsRow from '@/components/shared/ui/CloudsRow.vue';
import ServicesSection from '@/components/services/ServicesSection.vue';
import PartyService from '@/components/services/PartyService.vue';
import ChristeningService from '@/components/services/ChristeningService.vue';
import AdultPartyService from '@/components/services/AdultPartyService.vue';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.services {
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
</style>
