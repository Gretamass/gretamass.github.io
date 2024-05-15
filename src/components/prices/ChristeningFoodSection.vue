<template>
    <div class="section">
        <div class="section__column section__column--kids">
            <div class="section__title">Vaikų meniu</div>
            <div class="section__subtitle">
                Maisto užsakymo kiekis šventei automatiškai paskaičiuojamas pagal vaikų skaičių.
            </div>
            <CardItem selected>
                <template #image>
                    <img :src="christeningKidsMeal.image" alt="maistas" />
                </template>
                <template #title>Vaikų meniu</template>
                <template #content>
                    <div class="section__description">
                        <div>Asmeniui</div>
                        <div>{{ christeningKidsMeal.pricePerPerson }} €</div>
                    </div>
                    <div class="section__content">
                        <CardButton
                            v-for="mealItem in christeningKidsMeal.includes"
                            :key="mealItem.type"
                            class="card"
                            @click="updateSelectedKidsMenuPreview(mealItem.type)"
                        >
                            <MenuIcon />{{ mealItem.title }}
                        </CardButton>
                    </div>
                </template>
            </CardItem>
        </div>
        <div class="section__separator" />
        <div class="section__column section__column--adults">
            <div class="section__title">Tėvelių meniu</div>
            <div class="section__subtitle">
                Maisto užsakymo kiekis šventei automatiškai paskaičiuojamas pagal tėvelių skaičių.
            </div>
            <div class="section__subtitle">Prašome pasirinkti vieną iš meniu.</div>

            <div class="section__row">
                <CardItem
                    :selected="isMenuSelected(MEALS.ADULTS_BUFFET)"
                    @click="updateSelectedMeal(MEALS.ADULTS_BUFFET)"
                >
                    <template #image>
                        <img :src="christeningMeals[MEALS.ADULTS_BUFFET].image" alt="maistas" />
                    </template>
                    <template #title>Švediško stalo meniu</template>
                    <template #content>
                        <div class="section__description">
                            <div>Asmeniui</div>
                            <div>{{ christeningMeals[MEALS.ADULTS_BUFFET].pricePerPerson }} €</div>
                        </div>
                        <div class="section__content">
                            <CardButton
                                v-for="mealItem in christeningMeals[MEALS.ADULTS_BUFFET].includes"
                                :key="mealItem.type"
                                class="card"
                                @click="updateSelectedAdultsMenuPreview(mealItem.type)"
                            >
                                <MenuIcon />{{ mealItem.title }}
                            </CardButton>
                        </div>
                        <div v-if="false" class="section__tablecloth tablecloth">
                            <div class="tablecloth__info">
                                <div>Staltiesės*</div>
                                <div
                                    class="tablecloth__selected"
                                    @click.stop="toggleTableClothsOptions"
                                >
                                    {{ tableClothsCount }}
                                    <div
                                        class="tablecloth__chevron-down chevron-down"
                                        :class="{ 'chevron-down--rotated': showTableClothOptions }"
                                    >
                                        <fa-icon :icon="['fa', 'chevron-down']" />
                                    </div>
                                    <div
                                        v-show="showTableClothOptions"
                                        ref="dropdown"
                                        class="tablecloth__dropdown"
                                    >
                                        <div
                                            v-for="index in 8"
                                            :key="index"
                                            class="tablecloth__dropdown-option"
                                            @click="updateTableClothsCount(index - 1)"
                                        >
                                            {{ index - 1 }}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {{
                                        christeningMeals[MEALS.ADULTS_BUFFET].tableClothPerUnit *
                                        tableClothsCount
                                    }}
                                    €
                                </div>
                            </div>
                            <div class="tablecloth__additional-info">* bendram stalui</div>
                        </div>
                    </template>
                </CardItem>
                <CardItem
                    :selected="isMenuSelected(MEALS.ADULTS_BANQUET)"
                    @click="updateSelectedMeal(MEALS.ADULTS_BANQUET)"
                >
                    <template #image>
                        <img :src="christeningMeals[MEALS.ADULTS_BANQUET].image" alt="maistas" />
                    </template>
                    <template #title>Bendro stalo meniu</template>
                    <template #content>
                        <div class="section__description">
                            <div>Asmeniui</div>
                            <div>{{ christeningMeals[MEALS.ADULTS_BANQUET].pricePerPerson }} €</div>
                        </div>
                        <div class="section__content">
                            <CardButton
                                v-for="mealItem in christeningMeals[MEALS.ADULTS_BANQUET].includes"
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
        </div>
        <MealsMenu
            v-if="selectedKidsMenuPreview"
            :menu="christeningKidsMenus[selectedKidsMenuPreview]"
            @close="updateSelectedKidsMenuPreview()"
        />
        <MealsMenu
            v-if="selectedAdultsMenuPreview"
            :menu="christeningAdultsMenus[selectedAdultsMenuPreview]"
            @close="updateSelectedAdultsMenuPreview()"
        />
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePricesStore } from '@/stores/prices/pricesStore';
import CardItem from '@/components/prices/CardItem.vue';
import CardButton from '@/components/prices/CardButton.vue';
import MenuIcon from '@/components/shared/icons/MenuIcon.vue';
import { useFoodStore } from '@/stores/food/foodStore';
import { MEALS, MENU_TYPES } from '@/stores/food/models/enumerators';
import { MealType } from '@/stores/prices/models/enumerators';
import MealsMenu from '@/components/modals/MealsMenu.vue';
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core/index';

const { setTableClothsCount } = usePricesStore();
const { selectedFood, tableClothsCount } = storeToRefs(usePricesStore());

const { updateSelectedMeal } = useFoodStore();
const { christeningKidsMeal, christeningMeals, christeningKidsMenus, christeningAdultsMenus } =
    storeToRefs(useFoodStore());

const dropdown = ref(null);

onClickOutside(dropdown, () => (showTableClothOptions.value = false));

const selectedKidsMenuPreview = ref<MENU_TYPES | null>(null);
const selectedAdultsMenuPreview = ref<MENU_TYPES | null>(null);
const showTableClothOptions = ref<boolean>(false);

function updateSelectedKidsMenuPreview(menu: MENU_TYPES | null = null): void {
    selectedKidsMenuPreview.value = menu;
}

function updateSelectedAdultsMenuPreview(menu: MENU_TYPES | null = null): void {
    selectedAdultsMenuPreview.value = menu;
}

function isMenuSelected(menuType: MEALS): boolean {
    return selectedFood.value.meals[MealType.ADULTS].menuType === menuType;
}

function toggleTableClothsOptions(): void {
    showTableClothOptions.value = !showTableClothOptions.value;
}

function updateTableClothsCount(count: number): void {
    setTableClothsCount(count);
}
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.section {
    display: flex;
    gap: 20px;

    width: 100%;
    height: 100%;

    @media only screen and (max-width: $tablet) {
        flex-direction: column;
    }

    &__column {
        display: flex;
        flex-direction: column;

        &--kids {
            flex: 1;
        }
        &--adults {
            flex: 2;
        }
    }

    &__title {
        font-size: 2.4rem;
        font-weight: 500;

        margin-bottom: 5px;
    }

    &__subtitle {
        font-size: 1.6rem;
        font-weight: 300;

        margin-bottom: 18px;
    }

    &__row {
        display: flex;
        gap: 20px;

        @media only screen and (max-width: $mobile) {
            flex-direction: column;
        }
    }

    &__separator {
        border-right: 2px dashed rgb(var(--system-beige));
    }

    &__description {
        display: flex;
        justify-content: space-between;
        width: 100%;

        font-size: 1.8rem;
        font-weight: 500;

        margin-bottom: 17px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    &__button {
        margin-top: auto;
    }
}

.card {
    display: flex;
    align-items: center;
    gap: 8px;
}

img {
    max-width: 180px;
    width: 100%;
}

.tablecloth {
    display: flex;
    flex-direction: column;

    width: 100%;
    gap: 10px;

    font-size: 1.8rem;
    font-weight: 500;

    margin-top: auto;

    @media only screen and (max-width: $tablet) {
        margin-top: 18px;
    }

    &__info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 7px;
    }

    &__additional-info {
        font-size: 1.4rem;
        margin-left: auto;
    }

    &__selected {
        display: flex;
        justify-content: flex-end;
        gap: 10px;

        font-size: 1.6rem;
        align-items: center;
        position: relative;

        text-align: center;

        height: 36px;
        width: 50px;

        border: 1px solid rgb(var(--system-beige));
        background-color: #fff;

        border-radius: 5px;
        padding: 0 5px;
        box-sizing: border-box;

        margin-right: auto;
    }

    &__dropdown {
        position: absolute;
        top: 35px;
        left: 50%;
        transform: translateX(-50%);

        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;

        z-index: 1;

        border: 1px solid rgb(var(--system-beige));
        box-sizing: border-box;

        @include box-shadow();
    }

    &__dropdown-option {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #fff;

        height: 30px;
        width: 100%;

        cursor: pointer;

        &:hover {
            background-color: rgb(var(--secondary-background));
        }

        &:last-child {
            border-radius: 0 0 5px 5px;
        }
    }
}

.chevron-down {
    font-size: 1.4rem;

    transition: all 0.2s ease-in-out;

    &--rotated {
        transform: rotate(180deg);
    }

    @media only screen and (max-width: $tablet) {
        margin-left: auto;
        font-size: 1.8rem;
    }
}
</style>
