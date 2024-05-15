<template>
    <div class="modal__overlay">
        <div ref="modal" class="modal">
            <div class="modal__header header">
                <div class="header__title">
                    <slot name="header" />
                </div>
                <div class="header__close" @click="emit('close')">
                    <fa-icon class="header__close__icon" :icon="['fas', 'xmark']" />
                </div>
            </div>
            <div class="modal__content content">
                <slot name="content" />
            </div>
            <div class="modal__footer footer">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

const emit = defineEmits(['close']);

const modal = ref(null);

onClickOutside(modal, () => emit('close'));
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.modal {
    height: fit-content;
    max-height: 80%;
    width: 1100px;
    max-width: 95dvw;

    overflow: hidden;

    background-color: rgb(var(--background-color));
    border-radius: 6px;

    @media only screen and (max-width: $tablet) {
        max-height: 90%;
    }

    &__overlay {
        display: flex;
        align-items: center;
        justify-content: center;

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-color: rgba(var(--primary-text), 0.4);

        z-index: 2;
    }
}
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 80px;
    width: 100%;

    padding: 0 30px;
    box-sizing: border-box;

    border-bottom: 1px solid #e6dfd0;

    @media only screen and (max-width: $tablet) {
        height: 60px;
    }

    @media only screen and (max-width: $mobile) {
        height: 50px;
    }

    &__title {
        font-size: 2.8rem;
        font-weight: 500;

        @media only screen and (max-width: $tablet) {
            font-size: 2rem;
        }

        @media only screen and (max-width: $mobile) {
            font-size: 1.8rem;
        }
    }

    &__close {
        display: flex;
        align-items: center;
        gap: 5px;

        font-size: 2.8rem;

        cursor: pointer;

        transition: all 0.2s ease-in-out;

        @media only screen and (max-width: $mobile) {
            font-size: 2.4rem;
        }

        &:hover {
            color: rgb(var(--system-red));
            transform: scale(1.2);
        }
    }
}

.content {
    padding: 12px 24px;

    max-height: calc(70dvh - 80px);

    @media only screen and (max-width: $tablet) {
        overflow-y: scroll;
    }

    @media only screen and (max-width: $mobile) {
        max-height: 500px;
    }
}

.footer {
    padding: 12px 24px;
}
</style>
