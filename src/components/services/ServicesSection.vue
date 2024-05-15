<template>
    <div class="services__wrapper">
        <div class="services">
            <MainTitleItem> Pagrindinės paslaugos pramogų erdvėje „Dėžutis”! </MainTitleItem>
            <div class="services__list">
                <div
                    v-for="priceCard in pricesInfo"
                    :key="priceCard.service"
                    class="services__card card"
                >
                    <div class="card__image">
                        <img :src="priceCard.image" :alt="priceCard.title" />
                    </div>
                    <div class="card__content">
                        <div class="card__title">{{ priceCard.title }}</div>
                        <router-link
                            :to="{
                                name: Route.SERVICES,
                                hash: `#${priceCard.hash}`
                            }"
                            class="card__button-wrapper"
                        >
                            <SimpleButton class="card__button" :type="ButtonType.SECONDARY">
                                Plačiau
                            </SimpleButton>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePricesStore } from '@/stores/prices/pricesStore';
import { ButtonType } from '@/components/shared/ui/enumerators';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import { Route } from '@/router/models/enumerators';
import TitleItem from '@/components/shared/ui/TitleItem.vue';
import SubtitleItem from '@/components/shared/ui/SubtitleItem.vue';
import MainTitleItem from '@/components/shared/ui/MainTitleItem.vue';

const { pricesInfo } = usePricesStore();
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.services {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include max-page-width();
    @include default-side-padding();

    margin-top: $default-margin;

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        background-image: linear-gradient(180deg, #f9f5f050, rgb(var(--secondary-background)));
        width: 100%;

        @media only screen and (max-width: $tablet) {
            background: rgb(var(--secondary-background));
        }
    }

    &__list {
        display: flex;
        justify-content: space-between;
        gap: 24px;

        margin: 40px 0 60px;

        width: 100%;

        @media only screen and (max-width: $tablet) {
            flex-direction: column;
            margin: 36px 0;
            gap: 40px;
        }
    }
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    flex: 1;

    margin-top: 150px;

    position: relative;

    &__image {
        position: absolute;
        top: -150px;

        height: 250px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: rgb(var(--background-color));
        border-radius: 20px;
        @include box-shadow();

        width: 100%;
        height: 100%;

        padding: 130px 30px 20px;
        box-sizing: border-box;
    }

    &__title {
        text-align: center;
        font-size: 2.1rem;
        font-weight: 600;

        margin-bottom: 20px;
    }

    &__button-wrapper {
        width: 100%;
        margin-top: auto;
    }

    &__button {
        width: 100%;
        font-size: 1.4rem;
    }
}

img {
    height: 100%;
}
</style>
