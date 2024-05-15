<template>
    <div class="section">
        <div class="section__title">Maisto kaina asmeniui nuo 5.90 €</div>
        <DescriptionText>
            Minimali maisto užsakymo suma šventei parenkama automatiškai pagal dalyvių skaičių.
        </DescriptionText>
        <div class="section__row">
            <CardItem
                v-for="mealPackage in birthdayMealPackage"
                :key="mealPackage.type"
                non-selectable
                :disabled="!isCardAvailable(mealPackage.minPeople, mealPackage.maxPeople)"
                :selected="isCardAvailable(mealPackage.minPeople, mealPackage.maxPeople)"
                class="package-card"
            >
                <template #title>
                    <div v-if="mealPackage.minPeople === 41" class="title">
                        {{ mealPackage.minPeople }}+
                    </div>
                    <div v-else class="title">
                        {{ mealPackage.minPeople }}-{{ mealPackage.maxPeople }}
                    </div>

                    <div class="title__description">Dalyvių skaičius</div>
                </template>
                <template #content>
                    <div class="section__description">
                        <div>Maisto suma nuo</div>
                        <div>{{ mealPackage.price }} €</div>
                    </div>
                </template>
            </CardItem>
        </div>
        <DescriptionText>
            Peržiūrėkite meniu ir išsirinkite patinkančius patiekalus už minimalią maisto užsakymo
            sumą arba daugiau.
        </DescriptionText>

        <div class="section__row">
            <CardItem non-selectable small-image>
                <template #image>
                    <img :src="foodKids" alt="vaiku meniu" />
                </template>
                <template #title> Vaikų meniu </template>
                <template #content>
                    <div class="section__menus">
                        <CardButton
                            v-for="mealItem in packageMeals[MealType.CHILDREN]"
                            :key="mealItem.type"
                            class="card"
                            @click="updateSelectedKidsMenuPreview(mealItem.type)"
                        >
                            <MenuIcon />{{ mealItem.title }}
                        </CardButton>
                    </div>
                </template>
            </CardItem>
            <CardItem non-selectable small-image>
                <template #image>
                    <img :src="birthdayParentsFood" alt="teveliu meniu" />
                </template>
                <template #title> Tėvelių meniu </template>
                <template #content>
                    <div class="section__menus">
                        <CardButton
                            v-for="mealItem in packageMeals[MealType.ADULTS]"
                            :key="mealItem.type"
                            class="card"
                            @click="updateSelectedAdultsMenuPreview(mealItem.type)"
                        >
                            <MenuIcon />{{ mealItem.title }}
                        </CardButton>
                    </div>
                </template>
            </CardItem>
        </div>
        <MealsMenu
            v-if="selectedKidsMenuPreview"
            :menu="birthdayKidsMenus[selectedKidsMenuPreview]"
            @close="updateSelectedKidsMenuPreview()"
        />
        <MealsMenu
            v-if="selectedAdultsMenuPreview"
            :menu="birthdayAdultsMenus[selectedAdultsMenuPreview]"
            @close="updateSelectedAdultsMenuPreview()"
        />
    </div>
</template>

<script setup lang="ts">
import { useFoodStore } from '@/stores/food/foodStore';
import MenuIcon from '@/components/shared/icons/MenuIcon.vue';
import CardButton from '@/components/prices/CardButton.vue';
import CardItem from '@/components/prices/CardItem.vue';
import { storeToRefs } from 'pinia';
import { usePricesStore } from '@/stores/prices/pricesStore';
import MealsMenu from '@/components/modals/MealsMenu.vue';
import { ref } from 'vue';
import { MENU_TYPES } from '@/stores/food/models/enumerators';
import { MealType } from '@/stores/prices/models/enumerators';
import foodKids from '@/assets/images/calc/foodKids.webp';
import birthdayParentsFood from '@/assets/images/calc/birthdayParentsFood.webp';
import DescriptionText from '@/components/shared/ui/DescriptionText.vue';

const { birthdayMealPackage, birthdayKidsMenus, birthdayAdultsMenus } = storeToRefs(useFoodStore());
const { peopleCount } = storeToRefs(usePricesStore());

const packageMeals = {
    [MealType.CHILDREN]: [
        { title: 'Užkandžiai ir rinkiniai', type: MENU_TYPES.APPETIZERS },
        { title: 'Karšti patiekalai', type: MENU_TYPES.MAIN_COURSE },
        { title: '„Dėžučio” desertai', type: MENU_TYPES.DESERTS }
    ],
    [MealType.ADULTS]: [
        { title: 'Užkandžiai ir rinkiniai', type: MENU_TYPES.APPETIZERS },
        { title: 'Šalti patiekalai', type: MENU_TYPES.MAIN_COURSE },
        { title: 'Karšti patiekalai', type: MENU_TYPES.SECOND_COURSE }
    ]
};

const selectedKidsMenuPreview = ref<MENU_TYPES | null>(null);
const selectedAdultsMenuPreview = ref<MENU_TYPES | null>(null);

function updateSelectedKidsMenuPreview(menu: MENU_TYPES | null = null): void {
    selectedKidsMenuPreview.value = menu;
}

function updateSelectedAdultsMenuPreview(menu: MENU_TYPES | null = null): void {
    selectedAdultsMenuPreview.value = menu;
}

function isCardAvailable(min: number, max: number): boolean {
    return min <= peopleCount.value && peopleCount.value <= max;
}
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.section {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    &__row {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin: 0 0 30px 0;

        @media only screen and (max-width: $mobile) {
            flex-direction: column;
        }
    }

    &__title {
        font-size: 2.4rem;
        font-weight: 500;

        margin-bottom: 5px;
    }

    &__description {
        display: flex;
        justify-content: space-between;
        width: 100%;

        font-size: 1.8rem;
        font-weight: 500;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        width: 100%;

        padding: 20px 25px;
        box-sizing: border-box;

        border-radius: 20px;
        border: 1px solid rgb(var(--system-beige));

        box-shadow: 25px 20px 20px 0 rgba(0, 0, 0, 0.05);
        transition: all 0.1s ease-in-out;

        position: relative;
    }

    &__menus {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
    }
}

.title {
    color: rgb(var(--active-green));
    font-size: 4.4rem;
    font-weight: 700;
    line-height: 4.4rem;

    &__description {
        font-size: 1.4rem;
        line-height: 1.4rem;
        color: rgb(var(--active-green));
        text-transform: uppercase;
    }
}

img {
    max-width: 140px;
    width: 100%;
}

.package-image {
    max-width: 90px;
    width: 100%;
}

.package-card {
    flex: 1;

    @media only screen and (max-width: 1000px) {
        padding: 30px 10px;
    }

    @media only screen and (max-width: $tablet) {
        flex: 45%;
        padding: 20px 25px;
    }
}
</style>
