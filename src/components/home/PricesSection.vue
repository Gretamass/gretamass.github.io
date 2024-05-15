<template>
    <div class="prices__wrapper">
        <div class="prices">
            <TitleItem>Paslaugų kainos</TitleItem>
            <SubtitleItem>
                Pasirinkite, kokią šventę švęsite pas mus, ir pamatysite, kiek apytiksliai tai gali
                kainuoti.
            </SubtitleItem>
            <div class="prices__content">
                <div
                    v-for="priceCard in pricesInfo"
                    :key="priceCard.service"
                    class="prices__card card"
                >
                    <div class="card__image">
                        <img :src="priceCard.image" :alt="priceCard.title" />
                    </div>
                    <div class="card__content">
                        <div class="card__title">{{ priceCard.title }}</div>
                        <div class="card__time">{{ priceCard.defaultTime }}</div>
                        <div class="card__prices">
                            <template v-for="priceItem in priceCard.prices" :key="priceItem.type">
                                <div
                                    v-if="
                                        priceItem.type === ServicePriceType.WEEK_PRICE ||
                                        priceItem.type === ServicePriceType.WEEKDAY_PRICE ||
                                        priceItem.type === ServicePriceType.WEEKEND_PRICE
                                    "
                                    class="card__price-item price-item"
                                >
                                    <div class="price-item__text">
                                        {{ priceItem.title }}
                                    </div>
                                    <div class="price-item__price">{{ priceItem.price }} €</div>
                                </div>
                            </template>
                        </div>
                        <router-link
                            :to="{
                                name: Route.SERVICES,
                                hash: `#${priceCard.hash}`
                            }"
                            class="card__button-wrapper"
                        >
                            <SimpleButton :type="ButtonType.SECONDARY" class="card__button">
                                {{ priceCard.callToAction }}
                            </SimpleButton>
                        </router-link>
                    </div>
                </div>
            </div>
            <!--            <router-link :to="{ name: Route.PRICES }">-->
            <!--                <SimpleButton>Kainos skaičiuoklė</SimpleButton>-->
            <!--            </router-link>-->
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePricesStore } from '@/stores/prices/pricesStore';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';

import { ServicePriceType } from '@/stores/prices/models/enumerators';
import { Route } from '@/router/models/enumerators';
import { ButtonType } from '@/components/shared/ui/enumerators';
import TitleItem from '@/components/shared/ui/TitleItem.vue';
import SubtitleItem from '@/components/shared/ui/SubtitleItem.vue';

const { pricesInfo } = usePricesStore();
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.prices {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: $default-margin 0;

    @include max-page-width();
    @include default-side-padding();

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #f9f5f0;
        width: 100%;

        position: relative;
    }

    &__content {
        display: flex;
        justify-content: space-between;
        gap: 24px;

        margin: 20px 0 60px 0;

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

    height: 400px;
    width: 100%;
    flex-grow: 1;

    margin-top: 150px;

    position: relative;

    box-shadow: 35px 30px 48px #0000000d;
    border-radius: 20px;

    @media only screen and (max-width: $tablet) {
        height: 100%;
    }

    &__image {
        position: absolute;
        top: -150px;

        height: 300px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: rgb(var(--background-color));
        border-radius: 20px;

        width: 100%;
        height: 100%;

        padding: 170px 30px 20px;
        box-sizing: border-box;
    }

    &__title {
        text-align: center;
        font-size: 2.1rem;
        font-weight: 700;

        margin-bottom: 9px;
    }

    &__time {
        font-size: 2.4rem;
        font-weight: 700;
        color: rgb(var(--system-red));

        margin-bottom: 17px;
    }

    &__prices {
        display: flex;
        flex-direction: column;
        gap: 6px;

        width: 100%;
        max-width: 170px;

        margin-top: auto;
    }

    &__button-wrapper {
        margin: 10px auto 0 auto;
        width: 100%;
    }

    &__button {
        width: 100%;
    }
}

.price-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    width: 100%;
    font-size: 1.6rem;
    font-weight: 600;
}

img {
    height: 100%;
}
</style>
