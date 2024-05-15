<template>
    <div class="section">
        <div class="warning">
            <div class="warning__text warning__text--bold">Tai tik orientacinė skaičiuoklė.</div>
            <div class="warning__text">
                Šventės datos ir laiko rezervacijai reikalingas 100 € avansinis mokestis. Maistas ir
                kitos paslaugos užsakomos tiesiogiai susisiekus su administracija prieš šventę.
            </div>
            <div class="warning__text">Išrašome PVM sąskaitas-faktūras.</div>
        </div>

        <div class="section__info">
            <div class="section__title">
                Bendra kaina:
                <div class="section__price">{{ totalValue }} €</div>
            </div>
            <router-link :to="{ name: Route.RESERVATION }">
                <SimpleButton class="section__button" @click="reserveTime">
                    Rezervuoti laiką
                </SimpleButton>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import { storeToRefs } from 'pinia';
import { usePricesStore } from '@/stores/prices/pricesStore';
import { MealType, PriceCalcItem } from '@/stores/prices/models/enumerators';
import { MEALS } from '@/stores/food/models/enumerators';
import { Route } from '@/router/models/enumerators';
import { Service } from '@/stores/main/models/enumerators';

const { selected, peopleCount, childrenCount, adultsCount } = storeToRefs(usePricesStore());

const totalValue = computed<number>(() => {
    const partyPrice = selected.value[PriceCalcItem.PARTY_TYPE].price;
    const childrenFoodPrice =
        (selected.value[PriceCalcItem.FOOD].meals[MealType.CHILDREN]?.pricePerPerson || 0) *
        childrenCount.value;
    const adultFoodPrice =
        (selected.value[PriceCalcItem.FOOD].meals[MealType.ADULTS]?.pricePerPerson || 0) *
        adultsCount.value;
    const packageFoodPrice =
        selected.value[PriceCalcItem.PARTY_TYPE].type === Service.BIRTHDAY
            ? selected.value[PriceCalcItem.FOOD].meals[MealType.PACKAGE]?.price || 0
            : 0;
    const tableClothsPrice =
        selected.value[PriceCalcItem.FOOD].meals[MealType.ADULTS].menuType === MEALS.ADULTS_BUFFET
            ? selected.value[PriceCalcItem.TABLE_CLOTHS] * 6
            : 0;
    const dessertsPrice =
        (selected.value[PriceCalcItem.FOOD].desserts.pricePerPerson || 0) * peopleCount.value;

    let decorationPrice = 0;

    if (selected.value[PriceCalcItem.DECORATIONS].pricePerChild) {
        decorationPrice =
            selected.value[PriceCalcItem.DECORATIONS].pricePerChild * childrenCount.value;
    } else if (selected.value[PriceCalcItem.DECORATIONS].price) {
        decorationPrice = selected.value[PriceCalcItem.DECORATIONS].price;
    }

    if (selected.value[PriceCalcItem.DECORATIONS].additional?.price) {
        decorationPrice =
            decorationPrice + selected.value[PriceCalcItem.DECORATIONS].additional.price;
    }

    const additionalServicePrice = selected.value[PriceCalcItem.ADDITIONAL_SERVICE][0]?.price ?? 0;

    return (
        partyPrice +
        childrenFoodPrice +
        adultFoodPrice +
        packageFoodPrice +
        tableClothsPrice +
        dessertsPrice +
        decorationPrice +
        additionalServicePrice
    );
});

function reserveTime(): void {}
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.section {
    display: flex;

    background-color: #ffffff;

    padding: 20px 30px 40px;

    @media only screen and (max-width: $tablet) {
        flex-direction: column-reverse;
        gap: 30px;

        padding: 20px 16px 40px;
    }

    &__info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        flex: 4;
    }

    &__title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 26px;

        font-size: 2.4rem;
        font-weight: 500;

        margin-bottom: 20px;

        @media only screen and (max-width: $tablet) {
            font-size: 2.1rem;
        }
    }

    &__price {
        font-size: 2.8rem;
        font-weight: 700;

        @media only screen and (max-width: $tablet) {
            font-size: 2.4rem;
        }
    }

    &__button {
        width: fit-content;
    }
}

.warning {
    flex: 3;

    &__text {
        font-size: 1.6rem;
        font-weight: 300;

        color: #e64c3c;

        &--bold {
            font-weight: 500;
        }
    }
}
</style>
