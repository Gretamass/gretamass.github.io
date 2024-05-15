<template>
    <BaseModal @close="emit('close')">
        <template #header>{{ menu.title }}</template>
        <template #content>
            <div class="content">
                <div class="content__info">
                    <div v-if="menu.info" class="content__description">{{ menu.info }}</div>
                    <div class="content__menu">
                        <div v-for="menuItem in menu.menu" :key="menuItem.title" class="menu-item">
                            <div class="menu-item__text">
                                <div class="menu-item__title">
                                    - {{ menuItem.title
                                    }}<span v-if="menuItem.info" class="menu-item__info">
                                        ({{ menuItem.info }})
                                    </span>
                                </div>

                                <div v-if="menuItem.price" class="menu-item__price">
                                    {{ menuItem.price }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content__image-wrapper">
                    <img class="content__image" :src="menu.image" :alt="menu.title" />
                </div>
            </div>
        </template>
    </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/modals/BaseModal.vue';
import type { PropType } from 'vue';
import type { MenuInfo } from '@/stores/food/models/interfaces';
import { onMounted, onUnmounted, ref } from 'vue';

defineProps({
    menu: {
        type: Object as PropType<MenuInfo>,
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
    gap: 36px;

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
            max-height: 350px;

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

        @media only screen and (max-width: $tablet) {
            max-width: 250px;
            max-height: 350px;
        }
    }

    &__description {
        font-size: 1.7rem;
        font-weight: 500;

        margin-bottom: 16px;
    }

    &__menu {
        display: flex;
        flex-direction: column;
        gap: 16px;

        padding: 12px 0;
    }
}

.menu-item {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__text {
        display: flex;
        width: 100%;
    }

    &__title {
        font-size: 1.7rem;
        flex: 1;
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
