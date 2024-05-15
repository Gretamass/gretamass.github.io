<template>
    <div
        class="card"
        :class="{ 'card--selected': isDecorationSelected }"
        @click="updateSelectedDecoration(decoration.type, serviceType)"
    >
        <div class="card__image">
            <img :src="decoration.image" alt="decoracija" />
        </div>
        <div class="card__info">
            <div class="card__title">{{ decoration.title }}</div>
            <div class="mobile-description">
                <div v-if="decoration.description" class="mobile-description__description">
                    {{ decoration.description }}
                </div>
            </div>
            <div class="card__prices">
                <div>Kaina</div>

                <div v-if="decoration.pricePerChild >= 0">
                    {{ decoration.pricePerChild }} € / vaikui
                </div>
                <div v-if="decoration.price >= 0">{{ decoration.price }} €</div>
            </div>
            <div v-if="decoration.description" class="card__description">
                {{ decoration.description }}
            </div>
            <div v-if="decoration.additional" class="card__prices">
                <!--  TODO: add selection logic -->
                <CardButton v-for="item in decoration.additional" :key="item.title" preview>
                    {{ item.title }}
                    {{ item.price }} €
                </CardButton>
            </div>
        </div>

        <div class="card__calc-mobile calc-mobile">
            <div
                class="calc-mobile__selection"
                :class="{
                    'calc-mobile__selection--active': isDecorationSelected
                }"
            >
                <fa-icon :icon="['fa', 'check']" />
            </div>
        </div>
        <!--        <div class="card__prices">-->
        <!--            <div class="card__text">{{ totalDesertsPrice.toFixed(2) }} €</div>-->
        <!--        </div>-->
        <div class="card__selection" :class="{ 'card__selection--active': isDecorationSelected }">
            <fa-icon :icon="['fa', 'check']" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Decoration } from '@/stores/decorations/models/interfaces';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { usePricesStore } from '@/stores/prices/pricesStore';
import { useDecorationsStore } from '@/stores/decorations/decorationsStore';
import { Service } from '@/stores/main/models/enumerators';
import CardButton from '@/components/prices/CardButton.vue';

const { updateSelectedDecoration } = useDecorationsStore();
const { selectedDecorations } = storeToRefs(usePricesStore());

const props = defineProps({
    decoration: {
        type: Object as PropType<Decoration>,
        required: true
    },
    serviceType: {
        type: String as PropType<Service>,
        required: true
    }
});

const isDecorationSelected = computed<boolean>(() => {
    return selectedDecorations.value.additional?.title === props.decoration?.title;
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

        flex: 1;

        @media only screen and (max-width: $tablet) {
            width: 100%;
            align-items: center;
        }
    }

    &__title {
        font-size: 2.4rem;
        font-weight: 600;

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

        gap: 15px;

        font-size: 1.6rem;
        font-weight: 600;

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
