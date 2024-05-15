<template>
    <CalculatorItem
        id="maistas"
        :selected="!!selectedFoodTitle"
        :expanded="expendedItem[PriceCalcItem.FOOD]"
        :selected-title="selectedFoodTitle"
        :disabled="disableSection"
        @header-click="toggleSection"
    >
        <template #icon>
            <img :src="disableSection ? foodIcon : foodIcon" alt="food" class="section__img" />
        </template>
        <template #title>Maistas</template>
        <template #content>
            <div class="section__content">
                <ChristeningFoodSection v-if="selectedPartyType === Service.CHRISTENINGS" />
                <BirthdayFoodSection v-if="selectedPartyType === Service.BIRTHDAY" />
                <PartyFoodSection v-if="selectedPartyType === Service.PARTY" />
                <DesertsSection />
                <DrinksSection />
            </div>
        </template>
        <template #action-button>
            <SimpleButton :type="ButtonType.SECONDARY" @click="goSectionBack"> Atgal </SimpleButton>
            <SimpleButton :type="ButtonType.BEIGE" @click="moveToNextSection">
                Toliau
            </SimpleButton>
        </template>
    </CalculatorItem>
</template>

<script setup lang="ts">
import { usePricesStore } from '@/stores/prices/pricesStore';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import { storeToRefs } from 'pinia';
import { PriceCalcItem } from '@/stores/prices/models/enumerators';
import { computed } from 'vue';
import foodIcon from '@/assets/images/icon/food.webp';
import CalculatorItem from '@/components/prices/CalculatorItem.vue';
import ChristeningFoodSection from '@/components/prices/ChristeningFoodSection.vue';
import { Service } from '@/stores/main/models/enumerators';
import DesertsSection from '@/components/prices/DesertsSection.vue';
import { ButtonType } from '@/components/shared/ui/enumerators';
import BirthdayFoodSection from '@/components/prices/BirthdayFoodSection.vue';
import PartyFoodSection from '@/components/prices/PartyFoodSection.vue';
import DrinksSection from '@/components/prices/DrinksSection.vue';

const { selectedPartyType, selectedFoodTitle } = storeToRefs(usePricesStore());

const expendedItem = defineModel<Record<PriceCalcItem, boolean>>({ required: true });

const disableSection = computed<boolean>(() => {
    return !selectedPartyType.value;
});

function moveToNextSection(): void {
    expendedItem.value[PriceCalcItem.FOOD] = false;
    expendedItem.value[PriceCalcItem.DECORATIONS] = true;

    setTimeout(() => {
        document.getElementById('dekoracijos')?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
}

function goSectionBack(): void {
    expendedItem.value[PriceCalcItem.FOOD] = false;
    expendedItem.value[PriceCalcItem.PEOPLE_COUNT] = true;

    setTimeout(() => {
        document.getElementById('zmoniu-kiekis')?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
}

function toggleSection(): void {
    expendedItem.value[PriceCalcItem.FOOD] = !expendedItem.value[PriceCalcItem.FOOD];

    if (expendedItem.value[PriceCalcItem.FOOD]) {
        setTimeout(() => {
            document.getElementById('maistas')?.scrollIntoView({ behavior: 'smooth' });
        }, 200);
    }
}
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.section {
    &__img {
        height: 100%;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 50px;

        width: 100%;
    }
}
</style>
