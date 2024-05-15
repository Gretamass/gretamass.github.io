<template>
    <BaseModal @close="emit('close')">
        <template #header>{{ decoration.title }}</template>
        <template #content>
            <div class="content">
                <div class="content__info">
                    <div v-if="decoration.description" class="content__description">
                        {{ decoration.description }}
                    </div>
                    <div class="content__menu">
                        <div v-for="item in decoration.includes" :key="item" class="menu-item">
                            <span class="menu-item__title">- {{ item }}</span>
                        </div>
                    </div>
                </div>
                <img
                    v-if="width > 650"
                    class="content__image"
                    :src="decoration.previewImage"
                    :alt="decoration.title"
                />
            </div>
        </template>
    </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/modals/BaseModal.vue';
import { onMounted, onUnmounted, ref, type PropType } from 'vue';
import type { Decoration } from '@/stores/decorations/models/interfaces';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

defineProps({
    decoration: {
        type: Object as PropType<Decoration>,
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
    gap: 10px;

    &__info {
        flex: 3;

        display: flex;
        flex-direction: column;
    }

    &__image {
        border-radius: 120px 120px 24px 24px;
        width: 40%;
        object-fit: cover;
    }

    &__description {
        font-size: 1.6rem;
        font-weight: 500;

        margin-bottom: 16px;
    }

    &__menu {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
}

.menu-item {
    &__title {
        font-size: 1.7rem;
    }

    &__info {
        font-size: 1.4rem;
        font-style: italic;
    }
}
</style>
