<template>
    <CalculatorItem
        id="zmoniu-kiekis"
        :selected="!!selectedPeopleCountTitle"
        :expanded="expendedItem[PriceCalcItem.PEOPLE_COUNT]"
        :selected-title="selectedPeopleCountTitle"
        @header-click="toggleSection"
    >
        <template #icon>
            <img :src="peopleCountIcon" alt="people count" class="section__img" />
        </template>
        <template #title> Žmonių skaičius </template>
        <template #content>
            <PeopleCountContent
                v-model:children="childrenCountValue"
                v-model:adult="adultCountValue"
            />
        </template>
        <template #action-button>
            <SimpleButton :type="ButtonType.SECONDARY" @click="goSectionBack"> Atgal </SimpleButton>
            <SimpleButton :type="ButtonType.BEIGE" @click="addSelection"> Toliau </SimpleButton>
        </template>
    </CalculatorItem>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { usePricesStore } from '@/stores/prices/pricesStore';
import { PriceCalcItem } from '@/stores/prices/models/enumerators';
import { storeToRefs } from 'pinia';
import CalculatorItem from '@/components/prices/CalculatorItem.vue';
import peopleCountIcon from '@/assets/images/icon/peopleCount.webp';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import PeopleCountContent from '@/components/prices/PeopleCountContent.vue';
import { ButtonType } from '@/components/shared/ui/enumerators';

const { updateSelectedPeopleCount } = usePricesStore();
const { selectedPeopleCountTitle, selectedPartyType } = storeToRefs(usePricesStore());

const childrenCountValue = ref<number>(0);
const adultCountValue = ref<number>(0);

const expendedItem = defineModel<Record<PriceCalcItem, boolean>>({ required: true });

function addSelection(): void {
    expendedItem.value[PriceCalcItem.PEOPLE_COUNT] = false;
    expendedItem.value[PriceCalcItem.FOOD] = true;

    setTimeout(() => {
        document.getElementById('maistas')?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
}

function goSectionBack(): void {
    expendedItem.value[PriceCalcItem.PEOPLE_COUNT] = false;
    expendedItem.value[PriceCalcItem.PARTY_TYPE] = true;

    setTimeout(() => {
        document.getElementById('sventes-tema')?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
}

function toggleSection(): void {
    expendedItem.value[PriceCalcItem.PEOPLE_COUNT] =
        !expendedItem.value[PriceCalcItem.PEOPLE_COUNT];

    if (expendedItem.value[PriceCalcItem.PEOPLE_COUNT]) {
        setTimeout(() => {
            document.getElementById('zmoniu-kiekis')?.scrollIntoView({ behavior: 'smooth' });
        }, 200);
    }
}

watch(selectedPartyType, () => {
    childrenCountValue.value = 0;
    adultCountValue.value = 0;
});

watch([childrenCountValue, adultCountValue], () => {
    updateSelectedPeopleCount(childrenCountValue.value, adultCountValue.value);
});
</script>

<style scoped lang="scss">
@use '@/assets' as *;

@include calculator-section();

.section {
    &__img {
        height: 100%;
    }
}

.content {
    display: flex;
    justify-content: space-around;

    width: 100%;

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }

    &__item-title {
        font-size: 1.8rem;
    }
}
</style>
