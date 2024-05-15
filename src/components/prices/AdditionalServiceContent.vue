<template>
    <div class="section">
        <CardItem
            :selected="selectedAdditionalServiceList.includes(SERVICES.ANIMATOR)"
            @click="updateSelectedService(SERVICES.ANIMATOR)"
        >
            <template #image>
                <img :src="serviceAnimator" alt="aimatorius" />
            </template>
            <template #title
                >Animatorius
                <div class="card__description">
                    Ilgai lauktas momentas atėjo šiandien - mylimiausias personažas aplankys
                    ypatingiausią dieną!
                </div>
            </template>
            <template #content>
                <div class="card__content">
                    <div class="card__price">
                        <div>Viena valanda</div>
                        <div>89 €</div>
                    </div>
                </div>
            </template>
        </CardItem>
        <CardItem non-selectable>
            <template #image>
                <img :src="servicePhotographer" alt="fotografas" />
            </template>
            <template #title>
                Fotografas
                <div class="card__description">Rekomenduojame šį fotografą</div>
            </template>
            <template #content>
                <div class="card__content">
                    <div class="card__contact">Donatas Zaščiurinskas</div>
                    <SimpleButton
                        class="card__button"
                        :type="ButtonType.SECONDARY"
                        @click="goToPage('https://dz-foto.lt/')"
                    >
                        Susisiekti
                    </SimpleButton>
                </div>
            </template>
        </CardItem>
    </div>
</template>

<script setup lang="ts">
import { ButtonType } from '@/components/shared/ui/enumerators';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import CardItem from '@/components/prices/CardItem.vue';
import serviceAnimator from '@/assets/images/calc/serviceAnimator.webp';
import servicePhotographer from '@/assets/images/calc/servicePhotographer.webp';
import { usePricesStore } from '@/stores/prices/pricesStore';
import { useAdditionalServiceStore } from '@/stores/additionalServices/additionalServicesStore';
import { SERVICES } from '@/stores/additionalServices/models/enumerators';
import { storeToRefs } from 'pinia';

const { updateSelectedService } = useAdditionalServiceStore();
const { selectedAdditionalServiceList } = storeToRefs(usePricesStore());

function goToPage(url: string): void {
    window.open(url, '_blank', 'noreferrer');
}
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.section {
    display: flex;
    gap: 29px;

    width: 100%;
    height: 100%;

    @media only screen and (max-width: $tablet) {
        flex-direction: column;
        gap: 24px;
    }
}

.card {
    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;

        height: 100%;
        width: 100%;
    }

    &__contact {
        font-size: 1.8rem;
        font-weight: 600;
        text-align: center;
    }

    &__price {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        max-width: 260px;

        height: 50px;

        font-size: 1.8rem;
        font-weight: 600;
        text-align: center;

        margin-top: auto;
    }

    &__description {
        font-size: 1.6rem;
        text-align: center;
        font-weight: 300;
        color: #2d2d2d;

        margin-bottom: auto;
    }

    &__button {
        margin-top: 17px;
        width: 100%;
        max-width: 290px;
    }
}

img {
    max-width: 180px;
    width: 100%;
}
</style>
