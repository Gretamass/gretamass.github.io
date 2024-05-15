<template>
    <div class="gallery__wrapper">
        <div class="gallery">
            <TitleItem>Džiaugsmingi švenčių prisiminimai</TitleItem>
            <SubtitleItem> Turite klausimų? Norite savo šventę surengti „Dėžutyje”? </SubtitleItem>
            <div class="gallery__content">
                <div class="gallery__filter">
                    <div
                        class="gallery__filter-item"
                        :class="{
                            'gallery__filter-item--selected': selectedFilter === IMAGE_GROUP.ALL
                        }"
                        @click="updateSelectedFilter(IMAGE_GROUP.ALL)"
                    >
                        Visos
                    </div>
                    <div
                        class="gallery__filter-item"
                        :class="{
                            'gallery__filter-item--selected':
                                selectedFilter === IMAGE_GROUP.PLAY_ROOM
                        }"
                        @click="updateSelectedFilter(IMAGE_GROUP.PLAY_ROOM)"
                    >
                        Žaidimų kambarys
                    </div>
                    <div
                        class="gallery__filter-item"
                        :class="{
                            'gallery__filter-item--selected':
                                selectedFilter === IMAGE_GROUP.KIDS_RESTAURANT
                        }"
                        @click="updateSelectedFilter(IMAGE_GROUP.KIDS_RESTAURANT)"
                    >
                        Restoranas vaikams
                    </div>
                    <div
                        class="gallery__filter-item"
                        :class="{
                            'gallery__filter-item--selected':
                                selectedFilter === IMAGE_GROUP.ADULTS_RESTAURANT
                        }"
                        @click="updateSelectedFilter(IMAGE_GROUP.ADULTS_RESTAURANT)"
                    >
                        Restoranas suaugusiems
                    </div>
                    <div
                        class="gallery__filter-item"
                        :class="{
                            'gallery__filter-item--selected': selectedFilter === IMAGE_GROUP.TERRACE
                        }"
                        @click="updateSelectedFilter(IMAGE_GROUP.TERRACE)"
                    >
                        Lauko kiemelis
                    </div>
                </div>
                <div class="gallery__list" :class="{ 'gallery__list--preview': preview }">
                    <div
                        v-for="image in filteredImages.slice(0, displayedImages)"
                        :key="image.url"
                        class="gallery__image-wrapper"
                    >
                        <img :alt="image.alt" :src="image.url" class="gallery__image" />
                    </div>
                </div>
                <div v-if="preview" class="gallery__action-button">
                    <router-link :to="{ name: Route.GALLERY }">
                        <SimpleButton>Rodyti daugiau</SimpleButton>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useGalleryStore } from '@/stores/gallery/galleryStore';
import TitleItem from '@/components/shared/ui/TitleItem.vue';
import SubtitleItem from '@/components/shared/ui/SubtitleItem.vue';
import { IMAGE_GROUP } from '@/stores/gallery/models/enumerators';
import { computed, ref } from 'vue';
import type { Image } from '@/stores/gallery/models/interfaces';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import { Route } from '@/router/models/enumerators';

const props = defineProps({
    preview: {
        type: Boolean,
        default: false
    }
});

const { galleryImages } = useGalleryStore();
const { playRoomImages, kidsRestaurantImages, adultsRestaurantImages, terraceImages } =
    useGalleryStore();

const selectedFilter = ref<IMAGE_GROUP>(IMAGE_GROUP.ALL);

const filteredImages = computed<Image[]>(() => {
    switch (selectedFilter.value) {
        case IMAGE_GROUP.PLAY_ROOM:
            return playRoomImages;
        case IMAGE_GROUP.KIDS_RESTAURANT:
            return kidsRestaurantImages;
        case IMAGE_GROUP.ADULTS_RESTAURANT:
            return adultsRestaurantImages;
        case IMAGE_GROUP.TERRACE:
            return terraceImages;
        case IMAGE_GROUP.ALL:
        default:
            return galleryImages;
    }
});

const displayedImages = computed<number>(() => {
    if (props.preview) {
        return screen.width <= 650 ? 3 : 6;
    }

    return 100;
});

function updateSelectedFilter(filter: IMAGE_GROUP): void {
    selectedFilter.value = filter;
}
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.gallery {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: $default-margin 0;
    @include max-page-width();
    @include default-side-padding();

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        background-color: rgb(var(--secondary-background));
    }

    &__content {
        display: flex;
        flex-direction: column;

        width: 100%;

        background-color: #ffffff;
        border-radius: 20px;

        padding: 42px 30px;
        box-sizing: border-box;

        position: relative;
    }

    &__filter {
        display: flex;
        flex-wrap: wrap;
        column-gap: 20px;
        row-gap: 10px;

        margin-bottom: 38px;

        @media only screen and (max-width: $tablet) {
            gap: 5px;
            margin-bottom: 25px;
        }
    }

    &__filter-item {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.6rem;
        font-weight: 500;

        padding: 13px 20px;
        min-width: 90px;

        border-radius: 50px;

        cursor: pointer;

        transition: all 0.2s ease-in-out;

        border: 1px solid rgb(var(--system-red));
        color: rgb(var(--system-red));

        &--selected,
        &:hover {
            background-color: rgb(var(--system-red));
            color: rgb(var(--secondary-text));
        }

        @media only screen and (max-width: $tablet) {
            padding: 5px 10px;
            flex: 40%;
        }

        @media only screen and (max-width: $mobile) {
            padding: 5px 10px;
            flex: 50%;
        }
    }

    &__list {
        grid-auto-rows: 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        display: grid;
        grid-column-gap: 30px;

        width: 100%;

        @media only screen and (max-width: $tablet) {
            grid-template-columns: 1fr 1fr;
        }

        @media only screen and (max-width: $mobile) {
            grid-template-columns: 1fr;
        }

        &--preview {
            height: 100%;
            max-height: 600px;
            overflow: hidden;

            @media only screen and (max-width: $tablet) {
                max-height: 100%;
            }
        }
    }

    &__action-button {
        position: absolute;
        bottom: 25px;
        left: 50%;
        transform: translateX(-50%);

        display: flex;
        align-items: flex-end;
        justify-content: center;

        width: 100%;
        height: 100%;
        max-height: 300px;
        background-image: linear-gradient(180deg, #ffffff00, #ffffff);
    }

    &__image-wrapper {
        padding-bottom: 80%;
        position: relative;
        grid-row: 4 span;
        margin-bottom: 25px;

        &:nth-child(6n-4) {
            grid-row: 6 span;
        }
    }

    &__image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 30px;
    }
}
</style>
