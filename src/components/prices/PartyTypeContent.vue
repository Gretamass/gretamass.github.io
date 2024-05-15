<template>
    <div class="section">
        <SubtitleItem>Prašome pasirinkti vieną iš šventės temų.</SubtitleItem>
        <div class="section__content">
            <CardItem
                v-for="priceCard in pricesInfo"
                :key="priceCard.service"
                :selected="isTypeSelected(priceCard.service)"
                class="card"
                @click="updateSelectedPartyType(priceCard.service)"
            >
                <template #image>
                    <img class="card__image" :src="priceCard.image" :alt="priceCard.title" />
                </template>
                <template #content>
                    <div class="card__content">
                        <div class="card__title">{{ priceCard.title }}</div>
                        <div class="card__time">{{ priceCard.defaultTime }}</div>
                        <div class="card__prices">
                            <div
                                v-for="priceItem in priceCard.prices"
                                :key="priceItem.type"
                                class="card__price-item price-item"
                                :class="{
                                    'price-item--margin-top':
                                        priceItem.type === ServicePriceType.ADDITIONAL_HALF_HOUR ||
                                        priceItem.type ===
                                            ServicePriceType.ADDITIONAL_HOUR_BEFORE_MIDNIGHT
                                }"
                            >
                                <CardButton
                                    v-if="
                                        priceItem.type === ServicePriceType.WEEK_PRICE ||
                                        priceItem.type === ServicePriceType.WEEKDAY_PRICE ||
                                        priceItem.type === ServicePriceType.WEEKEND_PRICE
                                    "
                                    class="card__selection"
                                    :selected="
                                        isPartyTimeSelected(priceCard.service, priceItem.type)
                                    "
                                    @click.stop="
                                        updateSelectedPartyType(priceCard.service, priceItem.type)
                                    "
                                >
                                    <div class="price-item__text">
                                        {{ priceItem.title }}
                                    </div>
                                    <div class="price-item__price">{{ priceItem.price }} €</div>
                                </CardButton>
                                <template v-else>
                                    <div class="price-item__text">
                                        {{ priceItem.title }}
                                    </div>
                                    <div class="price-item__price">{{ priceItem.price }} €</div>
                                </template>
                            </div>
                        </div>
                    </div>
                </template>
            </CardItem>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePricesStore } from '@/stores/prices/pricesStore';
import { PriceCalcItem, ServicePriceType } from '@/stores/prices/models/enumerators';
import type { Service } from '@/stores/main/models/enumerators';
import { storeToRefs } from 'pinia';
import CardItem from '@/components/prices/CardItem.vue';
import SubtitleItem from '@/components/shared/ui/SubtitleItem.vue';
import CardButton from '@/components/prices/CardButton.vue';

const { pricesInfo, updateSelectedPartyType } = usePricesStore();
const { selected } = storeToRefs(usePricesStore());

function isTypeSelected(type: Service): boolean {
    return selected.value[PriceCalcItem.PARTY_TYPE].type === type;
}

function isPartyTimeSelected(type: Service, priceType: ServicePriceType): boolean {
    return isTypeSelected(type) && selected.value[PriceCalcItem.PARTY_TYPE].priceType === priceType;
}
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;

    &__content {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        width: 100%;

        @media only screen and (max-width: $tablet) {
            flex-direction: column;
            gap: 24px;
        }
    }
}

.card {
    &__image {
        max-width: 180px;
        width: 100%;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        height: 100%;

        margin-top: 13px;
        box-sizing: border-box;
    }

    &__title {
        text-align: center;
        font-size: 2.1rem;
        font-weight: 700;

        margin-bottom: 9px;

        @media only screen and (max-width: $tablet) {
            margin-bottom: 0;
        }
    }

    &__time {
        font-size: 2.4rem;
        font-weight: 700;
        color: rgb(var(--system-red));

        margin-bottom: 17px;

        @media only screen and (max-width: $tablet) {
            margin-bottom: 12px;
        }
    }

    &__selection {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;

        background-color: #fff;
    }

    &__prices {
        display: flex;
        flex-direction: column;
        gap: 6px;

        width: 100%;

        margin-top: auto;
    }
}

.price-item {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;

    width: 100%;
    font-size: 1.6rem;
    font-weight: 400;

    &__price {
        font-weight: 600;

        white-space: nowrap;
    }

    &--margin-top {
        margin-top: 20px;

        @media only screen and (max-width: $tablet) {
            margin-top: 12px;
        }
    }
}
</style>
