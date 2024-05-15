<template>
    <div
        class="card"
        :class="{ 'card--selected': isDessertSelected }"
        @click="setSelectedDesserts(DESERTS_TYPE.CLIENTS, 'Kliento desertai', 0.5)"
    >
        <div class="card__image">
            <img :src="foodClientDesertsImgae" alt="maistas" class="image" />
        </div>
        <div class="card__info">
            <div class="card__title">Desertus turėsime savo</div>
            <div class="mobile-description">
                <div class="mobile-description__description">
                    Reikalinga turėti atsinešamų desertų „kokybės pažymėjimą“.
                </div>
                <div class="mobile-description__description">
                    Taikomas aptarnavimo mokestis 0.50 € asmeniui.
                </div>
            </div>
            <div class="card__description">
                Reikalinga turėti atsinešamų desertų „kokybės pažymėjimą“.
            </div>
            <div class="card__description">Taikomas aptarnavimo mokestis 0.50 € asmeniui.</div>
        </div>
        <div class="card__calc-mobile calc-mobile">
            <div class="card__prices">
                <div class="card__text">{{ totalDesertsPrice }} €</div>
            </div>
            <div
                class="calc-mobile__selection"
                :class="{ 'calc-mobile__selection--active': isDessertSelected }"
            >
                <fa-icon :icon="['fa', 'check']" />
            </div>
        </div>
        <div class="card__prices">
            <div class="card__text">{{ totalDesertsPrice.toFixed(2) }} €</div>
        </div>
        <div class="card__selection" :class="{ 'card__selection--active': isDessertSelected }">
            <fa-icon :icon="['fa', 'check']" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { DESERTS_TYPE } from '@/stores/food/models/enumerators';
import foodClientDesertsImgae from '@/assets/images/calc/foodClientDeserts.webp';
import { usePricesStore } from '@/stores/prices/pricesStore';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

const { setSelectedDesserts } = usePricesStore();
const { selectedDesserts, peopleCount } = storeToRefs(usePricesStore());

const isDessertSelected = computed<boolean>(() => {
    return selectedDesserts.value?.type === DESERTS_TYPE.CLIENTS;
});

const totalDesertsPrice = computed<number>(() => {
    return 0.5 * peopleCount.value;
});
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.card {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;

    padding: 20px 25px;
    box-sizing: border-box;

    border-radius: 20px;
    border: 1px solid rgb(var(--system-beige));

    box-shadow: 25px 20px 20px 0 rgba(0, 0, 0, 0.05);
    transition: all 0.1s ease-in-out;

    position: relative;

    cursor: pointer;

    @media only screen and (max-width: $tablet) {
        flex-direction: column;
    }

    &--selected {
        border: 1px solid rgb(var(--active-green));
        background-color: rgb(var(--active-green), 0.1);
    }

    &__image {
        max-width: 130px;
        width: 100%;

        margin-right: 25px;

        @media only screen and (max-width: $tablet) {
            margin: 0 0 10px;
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media only screen and (max-width: $tablet) {
            width: 100%;
            align-items: center;
        }
    }

    &__title {
        font-size: 2.4rem;
        font-weight: 700;

        margin-bottom: 7px;

        @media only screen and (max-width: $tablet) {
            text-align: center;
        }
    }

    &__description {
        font-size: 1.6rem;

        @media only screen and (max-width: $tablet) {
            display: none;
        }
    }
    &__text {
        white-space: nowrap;
    }

    &__prices {
        display: flex;
        flex-direction: column;
        justify-content: center;

        gap: 27px;

        font-size: 1.8rem;
        font-weight: 700;

        margin-left: auto;
        @media only screen and (max-width: $tablet) {
            display: none;
        }
    }

    &__selection {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: 10px;
        height: 20px;
        width: 20px;

        background-color: #e6dfd0;
        border-radius: 20px;

        color: #ffffff;

        font-size: 1.4rem;

        &--active {
            background-color: rgb(var(--active-green));
            color: rgb(var(--secondary-text));
        }

        @media only screen and (max-width: $tablet) {
            display: none;
        }
    }
}

.calc-mobile {
    display: none;

    margin-top: 22px;

    @media only screen and (max-width: $tablet) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    &__row {
        display: flex;
        justify-content: space-between;
        gap: 5px;

        width: 80%;

        @media only screen and (max-width: $mobile) {
            width: 100%;
        }
    }

    &__text {
        font-size: 1.8rem;
        font-weight: 500;
        white-space: nowrap;
        width: 10px;

        &--sm {
            width: 10px;
        }
    }
    &__price {
        font-size: 1.8rem;
        font-weight: 600;
        width: 10px;

        white-space: nowrap;

        @media only screen and (max-width: $mobile) {
            width: fit-content;
        }
    }

    &__selection {
        display: none;

        @media only screen and (max-width: $tablet) {
            position: absolute;
            top: 20px;
            right: 20px;

            display: flex;
            align-items: center;
            justify-content: center;

            margin-left: 3%;
            height: 20px;
            width: 20px;

            background-color: #e6dfd0;
            border-radius: 20px;

            color: #ffffff;

            font-size: 1.4rem;

            &--active {
                background-color: rgb(var(--active-green));
                color: rgb(var(--secondary-text));
            }
        }
    }
}

.mobile-description {
    display: none;
    @media only screen and (max-width: $tablet) {
        display: flex;
        flex-direction: column;
        width: 80%;
    }

    @media only screen and (max-width: $mobile) {
        width: 100%;
    }

    &__description {
        font-size: 1.6rem;
    }
}

img {
    max-width: 180px;
    width: 100%;
}
</style>
