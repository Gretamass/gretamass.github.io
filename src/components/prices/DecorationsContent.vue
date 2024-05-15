<template>
    <div class="section">
        <div class="section__content">
            <div
                v-for="decoration in serviceDecorationList"
                :key="decoration.type"
                class="section__column"
            >
                <CardItem>
                    <template #image>
                        <!--                        <img :src="desert.image" alt="maistas" />-->
                    </template>
                    <template #title>{{ decoration.type }}</template>
                    <template #content> </template>
                </CardItem>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ButtonType } from '@/components/shared/ui/enumerators';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import CardItem from '@/components/prices/CardItem.vue';
import { storeToRefs } from 'pinia';
import { usePricesStore } from '@/stores/prices/pricesStore';

const { serviceDecorationList } = storeToRefs(usePricesStore());
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.section {
    display: flex;
    flex-direction: column;
    gap: 29px;

    width: 100%;
    height: 100%;

    &__title {
        font-size: 2.4rem;
        font-weight: 500;
    }

    &__column {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    &__content {
        display: flex;
        gap: 20px;
    }

    &__contacts {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    &__contact {
        text-align: center;
        font-size: 1.6rem;
        color: #2d2d2d;
    }

    &__button {
        margin-top: auto;
    }
}

img {
    width: 100%;
}
</style>
