<template>
    <CalculatorItem
        id="papildomos-paslaugos"
        :selected="!!selectedAdditionalService.length"
        :expanded="expendedItem[PriceCalcItem.ADDITIONAL_SERVICE]"
        :selected-title="selectedAdditionalServiceTitle"
        :disabled="disableSection"
        @header-click="toggleSection"
    >
        <template #icon>
            <img :src="additionalServiceIcon" alt="additional service" class="section__img" />
        </template>
        <template #title>Papildomos paslaugos</template>
        <template #content>
            <AdditionalServiceContent
                v-if="
                    selectedPartyType === Service.CHRISTENINGS ||
                    selectedPartyType === Service.BIRTHDAY
                "
            />
            <AdultAdditionalService v-else-if="selectedPartyType === Service.PARTY" />
        </template>
        <template #action-button>
            <SimpleButton :type="ButtonType.SECONDARY" @click="goSectionBack"> Atgal </SimpleButton>
            <SimpleButton :type="ButtonType.BEIGE" @click="closeSection"> Toliau </SimpleButton>
        </template>
    </CalculatorItem>
</template>

<script setup lang="ts">
import { usePricesStore } from '@/stores/prices/pricesStore';
import { PriceCalcItem } from '@/stores/prices/models/enumerators';
import { storeToRefs } from 'pinia';
import additionalServiceIcon from '@/assets/images/icon/additionalService.webp';
import CalculatorItem from '@/components/prices/CalculatorItem.vue';
import AdditionalServiceContent from '@/components/prices/AdditionalServiceContent.vue';
import { Service } from '@/stores/main/models/enumerators';
import AdultAdditionalService from '@/components/prices/AdultAdditionalService.vue';
import { computed } from 'vue';
import { ButtonType } from '@/components/shared/ui/enumerators';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';

const { selectedAdditionalServiceTitle, selectedPartyType, selectedAdditionalService } =
    storeToRefs(usePricesStore());

const expendedItem = defineModel<Record<PriceCalcItem, boolean>>({ required: true });

const disableSection = computed<boolean>(() => {
    return !selectedPartyType.value;
});

function closeSection(): void {
    expendedItem.value[PriceCalcItem.ADDITIONAL_SERVICE] = false;

    setTimeout(() => {
        document.getElementById('sventes-tema')?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
}

function goSectionBack(): void {
    expendedItem.value[PriceCalcItem.ADDITIONAL_SERVICE] = false;
    expendedItem.value[PriceCalcItem.DECORATIONS] = true;

    setTimeout(() => {
        document.getElementById('dekoracijos')?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
}

function toggleSection(): void {
    expendedItem.value[PriceCalcItem.ADDITIONAL_SERVICE] =
        !expendedItem.value[PriceCalcItem.ADDITIONAL_SERVICE];

    if (expendedItem.value[PriceCalcItem.ADDITIONAL_SERVICE]) {
        setTimeout(() => {
            document.getElementById('papildomos-paslaugos')?.scrollIntoView({ behavior: 'smooth' });
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
