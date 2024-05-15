<template>
    <BaseModal @close="emit('close')">
        <template #header>Gėrimai</template>
        <template #content>
            <div class="content">
                <div class="content__info">
                    <div class="content__menu">
                        <div
                            v-for="drinksGroup in drinks.menu"
                            :key="drinksGroup.title"
                            class="menu-item"
                        >
                            <div class="content__description">{{ drinksGroup.title }}</div>
                            <div
                                v-for="drink in drinksGroup.menu"
                                :key="drink.title"
                                class="menu-item"
                            >
                                <div class="menu-item__title">
                                    - {{ drink.title }}
                                    <div class="menu-item__price">{{ drink.price }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content__image-wrapper">
                    <img class="content__image" :src="drinksImage" :alt="drinks.title" />
                </div>
            </div>
        </template>
    </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/modals/BaseModal.vue';
import type { DrinksInfo } from '@/stores/food/models/interfaces';
import { onMounted, onUnmounted, ref, type PropType } from 'vue';
import drinksImage from '@/assets/images/calc/drinksImage.webp';

defineProps({
    drinks: {
        type: Object as PropType<{ title: string; menu: DrinksInfo[]; image: string }>,
        required: true
    }
});

const emit = defineEmits(['close']);

const scrollY = ref<number>(0);

onMounted(() => {
    const body = document.body;

    scrollY.value = window.scrollY;

    body.style.setProperty('--scrollY', `-${scrollY.value}px`);
    body.classList.add('modal-open');
});

onUnmounted(() => {
    const body = document.body;

    body.classList.remove('modal-open');
    window.scrollTo({ top: scrollY.value });
});
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.content {
    display: flex;
    gap: 35px;

    max-height: inherit;
    overflow: auto;

    @media only screen and (max-width: $mobile) {
        flex-direction: column-reverse;
    }

    &__info {
        flex: 3;

        display: flex;
        flex-direction: column;

        max-height: calc(95vh - 250px);
        overflow: auto;
    }

    &__image-wrapper {
        display: flex;
        justify-content: flex-end;
        gap: 24px;

        max-height: calc(95vh - 250px);
        flex: 2;

        @media only screen and (max-width: $tablet) {
            margin: 0 auto;
            width: 100%;
        }

        @media only screen and (max-width: $mobile) {
            display: none;
        }
    }

    &__image {
        border-radius: 120px 120px 24px 24px;

        height: 100%;
        width: 100%;

        object-fit: cover;
    }

    &__description {
        font-size: 1.7rem;
        font-weight: 500;
        margin-bottom: 8px;
    }

    &__menu {
        display: flex;
        flex-direction: column;
        gap: 26px;
    }
}

.menu-item {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__title {
        display: flex;
        font-size: 1.7rem;
        width: 100%;
    }

    &__info {
        font-size: 1.4rem;
        font-style: italic;
    }

    &__price {
        width: 100px;
        font-size: 1.5rem;
        font-weight: 300;
        font-style: italic;

        text-align: right;

        margin: 0 10px 0 auto;
    }
}
</style>
