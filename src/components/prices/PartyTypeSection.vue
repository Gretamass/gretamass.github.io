<template>
    <CalculatorItem
        id="sventes-tema"
        :selected="!!selectedPartyType"
        :expanded="expendedItem[PriceCalcItem.PARTY_TYPE]"
        :selected-title="selectedPartyTypeName"
        @header-click="toggleSection"
    >
        <template #icon>
            <img :src="partyTypeIcon" alt="party type" class="section__img" />
        </template>
        <template #title> Šventės tema</template>
        <template #content>
            <PartyTypeContent />
        </template>
        <template #action-button>
            <SimpleButton
                :type="ButtonType.BEIGE"
                class="section__button"
                :disabled="!selectedPartyType"
                @click="moveToNextSection"
            >
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
import partyTypeIcon from '@/assets/images/icon/partyType.webp';
import CalculatorItem from '@/components/prices/CalculatorItem.vue';
import PartyTypeContent from '@/components/prices/PartyTypeContent.vue';
import { ButtonType } from '@/components/shared/ui/enumerators';

const { selectedPartyTypeName, selectedPartyType } = storeToRefs(usePricesStore());

const expendedItem = defineModel<Record<PriceCalcItem, boolean>>({ required: true });

function moveToNextSection(): void {
    expendedItem.value[PriceCalcItem.PARTY_TYPE] = false;
    expendedItem.value[PriceCalcItem.PEOPLE_COUNT] = true;

    setTimeout(() => {
        document.getElementById('zmoniu-kiekis')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function toggleSection(): void {
    expendedItem.value[PriceCalcItem.PARTY_TYPE] = !expendedItem.value[PriceCalcItem.PARTY_TYPE];

    if (expendedItem.value[PriceCalcItem.PARTY_TYPE]) {
        setTimeout(() => {
            document.getElementById('sventes-tema')?.scrollIntoView({ behavior: 'smooth' });
        }, 200);
    }
}
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.section {
    &__button {
        margin-left: auto;
    }

    &__img {
        height: 100%;
    }
}
</style>
