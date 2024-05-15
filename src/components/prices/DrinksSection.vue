<template>
    <div class="section">
        <div class="section__title">Gėrimai</div>
        <div class="section__content">
            <div class="card">
                <div class="card__image">
                    <img :src="drinksList.image" alt="gerimai" class="image" />
                </div>
                <div class="card__info">
                    <div class="card__title">Gėrimai</div>
                    <div class="card__description">
                        Gėrimų užsakymas derinamas su administracija prieš šventę arba užsakomi iš
                        baro šventės metu.
                    </div>
                </div>
                <CardButton class="card__button" @click="openDrinksMenuPreview">
                    <MenuIcon /> Gėrimų meniu
                </CardButton>
            </div>
        </div>
        <DrinksMenu
            v-if="showDrinksMenuPreview"
            :drinks="drinksList"
            @close="closeDrinksMenuPreview()"
        />
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import CardButton from '@/components/prices/CardButton.vue';
import MenuIcon from '@/components/shared/icons/MenuIcon.vue';
import { useFoodStore } from '@/stores/food/foodStore';
import { ref } from 'vue';
import DrinksMenu from '@/components/modals/DrinksMenu.vue';

const { drinksList } = storeToRefs(useFoodStore());

const showDrinksMenuPreview = ref<boolean>(false);

function openDrinksMenuPreview(): void {
    showDrinksMenuPreview.value = true;
}

function closeDrinksMenuPreview(): void {
    showDrinksMenuPreview.value = false;
}
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.section {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    &__title {
        font-size: 2.4rem;
        font-weight: 500;
        margin-bottom: 18px;
    }

    &__content {
        display: flex;
    }
}

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

    @media only screen and (max-width: $tablet) {
        flex-direction: column;
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

        margin-right: auto;

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
            text-align: center;
        }
    }

    &__button {
        max-width: 200px;

        margin-left: 10px;

        @media only screen and (max-width: $tablet) {
            margin-top: 10px;

            max-width: 300px;
        }
    }
}

img {
    max-width: 180px;
    width: 100%;
}
</style>
