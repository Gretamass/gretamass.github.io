<template>
    <div class="testimonials__wrapper">
        <div class="testimonials">
            <TitleItem>Atsiliepimai</TitleItem>
            <div class="testimonials__list">
                <Carousel wrap-around :autoplay="5000" :breakpoints="testimonialsBreakpoints">
                    <Slide
                        v-for="(testimonial, index) in testimonials"
                        :key="index"
                        class="testimonials__slide"
                    >
                        <div class="testimonial">
                            <div class="testimonial__name">{{ testimonial.name }}</div>
                            <div class="testimonial__stars">
                                <StarIcon v-for="key in 5" :key="key" />
                            </div>
                            <div class="testimonial__text">{{ testimonial.text }}</div>
                        </div>
                    </Slide>

                    <template #addons="{ prev, next }">
                        <div
                            class="testimonials__cursor testimonials__cursor--previous"
                            @click="prev"
                        >
                            <span class="arrow">&lt;</span>
                        </div>
                        <div class="testimonials__cursor testimonials__cursor--next" @click="next">
                            <span class="arrow">></span>
                        </div>
                    </template>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { ref } from 'vue';
import { useServiceStore } from '@/stores/service/serviceStore';
import StarIcon from '@/components/shared/icons/StarIcon.vue';
import TitleItem from '@/components/shared/ui/TitleItem.vue';

const { testimonials } = useServiceStore();

const testimonialsBreakpoints = ref({
    100: {
        itemsToShow: 1
    },
    950: {
        itemsToShow: 1.5
    },
    1024: {
        itemsToShow: 3
    }
});
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.testimonials {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: $default-margin 0;

    @include max-page-width();
    padding: 0 80px;

    position: relative;

    @media only screen and (max-width: $mobile) {
        padding: 0 20px;
    }

    &__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;
        width: 100%;

        background: rgb(var(--secondary-background));
        padding-bottom: 50px;
    }

    &__list {
        width: 100%;

        margin: 0 0 30px 0;
    }

    &__slide {
        padding: 16px;
    }

    &__cursor {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        border-radius: 50%;
        background-color: rgb(var(--background-color));
        height: 48px;
        width: 48px;

        padding: 0 25px;

        font-size: 1.4rem;

        box-shadow: 0 4px 4px 0 #00000025;
        cursor: pointer;

        &--previous {
            left: -60px;
        }

        &--next {
            right: -60px;
        }

        @media only screen and (max-width: $mobile) {
            &--previous {
                left: -10px;
            }

            &--next {
                right: -10px;
            }
        }
    }
}

.testimonial {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;

    background-color: rgb(var(--background-color));
    border: 1px solid rgb(var(--light-grey));
    border-radius: 20px;

    padding: 28px 20px;

    box-shadow: 0 7px 10px 0 #00000015;

    @media only screen and (max-width: $mobile) {
        padding: 28px 35px;
    }

    &__name {
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 8px;
    }

    &__stars {
        display: flex;
        gap: 8px;
        margin-bottom: 23px;
    }

    &__text {
        font-size: 1.6rem;
        text-align: center;
        font-weight: 300;
    }
}

.arrow {
    font-size: 2.1rem;
}
</style>
