<template>
    <BaseModal @close="emit('close')">
        <template #header>Teminiai gimtadienio dekorai</template>
        <template #content>
            <div class="content">
                <div class="content__description">
                    Galite rinktis iš mūsų siūlomų temų arba teirautis pas administratorę kitos
                    norimos gimtadienio temos.
                </div>
                <div class="content__decorations">
                    <div v-for="item in themes" :key="item.title" class="decoration">
                        <img class="decoration__image" :src="item.image" :alt="item.title" />
                        <span class="decoration__title">{{ item.title }}</span>
                    </div>
                </div>
            </div>
        </template>
    </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/modals/BaseModal.vue';
import { useThemesStore } from '@/stores/themes/themesStore';
import { onMounted, onUnmounted, ref } from 'vue';

const { themes } = useThemesStore();

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
    flex-direction: column;

    max-height: inherit;
    overflow: auto;

    &__description {
        font-size: 1.6rem;
        font-weight: 500;

        margin-bottom: 16px;
    }

    &__decorations {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(max(23% - 26px, 200px), 1fr));

        gap: 26px;
    }
}

.decoration {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    gap: 12px;
    margin: 0 auto;

    &__image {
        max-width: 200px;

        border-radius: 6px;

        @media only screen and (max-width: $mobile) {
            max-width: 250px;
        }
    }

    &__title {
        font-size: 1.8rem;
        font-weight: 500;
    }
}
</style>
