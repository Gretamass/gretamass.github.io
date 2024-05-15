<template>
    <div class="spaces">
        <SpacesSection class="spaces__list" />
        <PlayRoomSpace />
        <KidsRestaurantSpace />
        <AdultsRestaurantSpace />
        <TerraceSpace />
        <GallerySection preview />
        <TestimonialsSection />
        <div class="spaces__clouds"><CloudsRow /></div>
    </div>
</template>

<script setup lang="ts">
import SpacesSection from '@/components/home/SpacesSection.vue';
import PlayRoomSpace from '@/components/spaces/PlayRoomSpace.vue';
import CloudsRow from '@/components/shared/ui/CloudsRow.vue';
import KidsRestaurantSpace from '@/components/spaces/KidsRestaurantSpace.vue';
import AdultsRestaurantSpace from '@/components/spaces/AdultsRestaurantSpace.vue';
import TerraceSpace from '@/components/spaces/TerraceSpace.vue';
import GallerySection from '@/components/gallery/GallerySection.vue';
import TestimonialsSection from '@/components/home/TestimonialsSection.vue';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.spaces {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    &__list {
        background-image: linear-gradient(
            180deg,
            rgba(249, 245, 240, 0.3137254902),
            rgb(var(--secondary-background))
        );
    }

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
