<template>
    <div class="gallery">
        <Carousel wrap-around :autoplay="5000" :breakpoints="breakpoints"
            ><Slide v-for="image in images" :key="image.url" class="gallery__image-slide"
                ><img :src="image.url" :alt="image.alt" class="gallery__image" /></Slide
        ></Carousel>
    </div>
</template>

<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel';
import type { PropType } from 'vue';
import type { Image } from '@/stores/service/models/interfaces';
import 'vue3-carousel/dist/carousel.css';

defineProps({
    images: {
        type: Array as PropType<Image>,
        required: true
    },
    breakpoints: {
        type: Array as PropType<Any>,
        default: () => []
    }
});
</script>

<style scoped lang="scss">
.gallery {
    width: 100%;

    margin: 24px 0;

    &__image-slide {
        padding: 12px;
    }

    &__image {
        aspect-ratio: 1;
        object-fit: cover;
        height: 100%;
        width: 100%;

        border-radius: 6px;
    }
}
</style>
