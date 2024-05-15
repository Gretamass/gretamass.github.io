<template>
    <div class="section">
        <div class="section__column section__column--adults">
            <div class="section__title">Suaugusių meniu</div>
            <div class="section__subtitle">
                Maisto užsakymo kiekis šventei automatiškai paskaičiuojamas pagal suaugusių skaičių.
            </div>
            <div class="section__row">
                <CardItem selected non-selectable>
                    <template #image>
                        <img :src="partyAdultsMeal.image" alt="maistas" />
                    </template>
                    <template #title>{{ partyAdultsMeal.title }}</template>
                    <template #content>
                        <div class="section__description">
                            <div>Asmeniui</div>
                            <div>{{ partyAdultsMeal.pricePerPerson }} €</div>
                        </div>
                        <div class="section__content">
                            <CardButton
                                v-for="mealItem in partyAdultsMeal.includes"
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
        <div class="section__separator" />

        <div class="section__column section__column--kids">
            <div class="section__title">Vaikų meniu</div>
            <div class="section__subtitle">
                Maisto užsakymo kiekis šventei automatiškai paskaičiuojamas pagal vaikų skaičių.
            </div>
            <CardItem selected non-selectable>
                <template #image>
                    <img :src="partyKidsMeal.image" alt="maistas" />
                </template>
                <template #title>{{ partyKidsMeal.title }}</template>
                <template #content>
                    <div class="section__description">
                        <div>Asmeniui</div>
                        <div>{{ partyKidsMeal.pricePerPerson }} €</div>
                    </div>
                    <div class="section__content">
                        <CardButton
                            v-for="mealItem in partyKidsMeal.includes"
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
        <MealsMenu
            v-if="selectedKidsMenuPreview"
            :menu="partyKidsMenus[selectedKidsMenuPreview]"
            @close="updateSelectedKidsMenuPreview()"
        />
        <MealsMenu
            v-if="selectedAdultsMenuPreview"
            :menu="partyAdultsMenus[selectedAdultsMenuPreview]"
            @close="updateSelectedAdultsMenuPreview()"
        />
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import CardItem from '@/components/prices/CardItem.vue';
import CardButton from '@/components/prices/CardButton.vue';
import MenuIcon from '@/components/shared/icons/MenuIcon.vue';
import { useFoodStore } from '@/stores/food/foodStore';
import { MENU_TYPES } from '@/stores/food/models/enumerators';
import MealsMenu from '@/components/modals/MealsMenu.vue';
import { ref } from 'vue';

const { partyKidsMeal, partyAdultsMeal, partyKidsMenus, partyAdultsMenus } =
    storeToRefs(useFoodStore());

const selectedKidsMenuPreview = ref<MENU_TYPES | null>(null);
const selectedAdultsMenuPreview = ref<MENU_TYPES | null>(null);

function updateSelectedKidsMenuPreview(menu: MENU_TYPES | null = null): void {
    selectedKidsMenuPreview.value = menu;
}

function updateSelectedAdultsMenuPreview(menu: MENU_TYPES | null = null): void {
    selectedAdultsMenuPreview.value = menu;
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
        flex: 1;
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
</style>
