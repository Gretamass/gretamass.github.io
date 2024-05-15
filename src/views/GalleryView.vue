<template>
    <div class="gallery">
        <GallerySection />
        <TestimonialsSection />
        <div class="gallery__clouds"><CloudsRow /></div>
    </div>
</template>

<script setup lang="ts">
import GallerySection from '@/components/gallery/GallerySection.vue';
import TestimonialsSection from '@/components/home/TestimonialsSection.vue';
import CloudsRow from '@/components/shared/ui/CloudsRow.vue';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
