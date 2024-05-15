<template>
    <div class="section">
        <div
            v-for="mealList in serviceMealsList"
            :key="mealList"
            class="section__card card"
            :class="{ 'card--selected': isMealSelected(mealList.type) }"
        >
            <img
                class="card__image"
                :src="mealList.type === MealType.CHILDREN ? childrenImage : adultsImage"
                :alt="mealList.type"
            />
            <!--            <div class="card__content">-->
            <!--                <div class="card__title">{{ priceCard.title }}</div>-->
            <!--                <div class="card__time">{{ priceCard.defaultTime }}</div>-->
            <!--                <div class="card__prices">-->
            <!--                    <div-->
            <!--                        v-for="priceItem in priceCard.prices"-->
            <!--                        :key="priceItem.type"-->
            <!--                        class="card__price-item price-item"-->
            <!--                        :class="{-->
            <!--                            'price-item&#45;&#45;margin-top':-->
            <!--                                priceItem.type === ServicePriceType.ADDITIONAL_HALF_HOUR ||-->
            <!--                                priceItem.type === ServicePriceType.ADDITIONAL_HOUR_BEFORE_MIDNIGHT-->
            <!--                        }"-->
            <!--                    >-->
            <!--                        <div class="price-item__text">-->
            <!--                            {{ priceItem.title }}-->
            <!--                        </div>-->
            <!--                        <div class="price-item__price">{{ priceItem.price }} €</div>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--                <SimpleButton-->
            <!--                    :type="-->
            <!--                        isTypeSelected(priceCard.service)-->
            <!--                            ? ButtonType.TERTIARY-->
            <!--                            : ButtonType.SECONDARY-->
            <!--                    "-->
            <!--                    class="card__button"-->
            <!--                    @click="toggleSelection(priceCard.service)"-->
            <!--                >-->
            <!--                    {{ isTypeSelected(priceCard.service) ? 'Pasirinkta' : 'Rinktis' }}-->
            <!--                </SimpleButton>-->
            <!--            </div>-->
        </div>
    </div>
</template>

<script setup lang="ts">
import { MealType, PriceCalcItem, ServicePriceType } from '@/stores/prices/models/enumerators';
import { ButtonType } from '@/components/shared/ui/enumerators';
import { storeToRefs } from 'pinia';
import { usePricesStore } from '@/stores/prices/pricesStore';
import childrenImage from '@/assets/images/birthdayImage.webp';
import adultsImage from '@/assets/images/partyImage.webp';

const { serviceMealsList } = storeToRefs(usePricesStore());

const expendedItem = defineModel<Record<PriceCalcItem, boolean>>({ required: true });

function isMealSelected(type: MealType): void {}
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.section {
    display: flex;
    gap: 30px;
    width: 100%;

    @media only screen and (max-width: $tablet) {
        flex-direction: column;
    }
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    padding: 24px 28px;
    box-sizing: border-box;

    border-radius: 20px;
    border: 1px solid rgb(var(--system-beige));

    box-shadow: 25px 20px 20px 0 rgba(0, 0, 0, 0.05);
    transition: all 0.1s ease-in-out;

    @media only screen and (max-width: $tablet) {
        height: 100%;
    }

    &--selected {
        border: 1px solid rgb(var(--active-green));
        background-color: rgb(var(--active-green), 0.1);
    }

    &__image {
        max-width: 180px;
        width: 100%;
    }
}
</style>
