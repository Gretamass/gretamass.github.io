<template>
    <CalculatorItem
        id="dekoracijos"
        :selected="!!selectedDecorationTitle"
        :expanded="expendedItem[PriceCalcItem.DECORATIONS]"
        :selected-title="selectedDecorationTitle"
        :disabled="disableSection"
        @header-click="toggleSection"
    >
        <template #icon>
            <img :src="decorationsIcon" alt="decorations" class="section__img" />
        </template>
        <template #title>Dekoracijos</template>
        <template #content>
            <DecorationContent v-if="selectedPartyType" :service-type="selectedPartyType" />
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
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import { usePricesStore } from '@/stores/prices/pricesStore';
import { PriceCalcItem } from '@/stores/prices/models/enumerators';
import { storeToRefs } from 'pinia';
import decorationsIcon from '@/assets/images/icon/decorations.webp';
import CalculatorItem from '@/components/prices/CalculatorItem.vue';
import { ButtonType } from '@/components/shared/ui/enumerators';
import { computed } from 'vue';
import DecorationContent from '@/components/prices/DecorationContent.vue';

const { selectedPartyType, selectedDecorationTitle } = storeToRefs(usePricesStore());

const expendedItem = defineModel<Record<PriceCalcItem, boolean>>({ required: true });

const disableSection = computed<boolean>(() => {
    return !selectedPartyType.value;
});

function moveToNextSection(): void {
    expendedItem.value[PriceCalcItem.DECORATIONS] = false;
    expendedItem.value[PriceCalcItem.ADDITIONAL_SERVICE] = true;

    setTimeout(() => {
        document.getElementById('papildomos-paslaugos')?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
}

function goSectionBack(): void {
    expendedItem.value[PriceCalcItem.DECORATIONS] = false;
    expendedItem.value[PriceCalcItem.FOOD] = true;

    setTimeout(() => {
        document.getElementById('maistas')?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
}

function toggleSection(): void {
    expendedItem.value[PriceCalcItem.DECORATIONS] = !expendedItem.value[PriceCalcItem.DECORATIONS];

    if (expendedItem.value[PriceCalcItem.DECORATIONS]) {
        setTimeout(() => {
            document.getElementById('dekoracijos')?.scrollIntoView({ behavior: 'smooth' });
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
}
</style>
