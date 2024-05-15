<template>
    <div class="prices__wrapper">
        <div class="prices">
            <PricesHeading />
            <div class="prices__content">
                <PartyTypeSection v-model="expendedItem" />
                <PeopleCountSection v-model="expendedItem" />
                <FoodSection v-model="expendedItem" />
                <DecorationsSection v-model="expendedItem" />
                <AdditionalServicesSection v-model="expendedItem" />
                <TotalPrice />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TotalPrice from '@/components/prices/TotalPrice.vue';
import FoodSection from '@/components/prices/FoodSection.vue';
import PricesHeading from '@/components/prices/PricesHeading.vue';
import PartyTypeSection from '@/components/prices/PartyTypeSection.vue';
import PeopleCountSection from '@/components/prices/PeopleCountSection.vue';
import AdditionalServicesSection from '@/components/prices/AdditionalServicesSection.vue';
import DecorationsSection from '@/components/prices/DecorationsSection.vue';
import { ref } from 'vue';
import { PriceCalcItem } from '@/stores/prices/models/enumerators';

const expendedItem = ref<Record<PriceCalcItem, boolean>>({
    [PriceCalcItem.PARTY_TYPE]: true,
    [PriceCalcItem.PEOPLE_COUNT]: false,
    [PriceCalcItem.FOOD]: false,
    [PriceCalcItem.DECORATIONS]: false,
    [PriceCalcItem.ADDITIONAL_SERVICE]: false
});
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.prices {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include max-page-width();
    @include default-side-padding();
    margin-bottom: 200px;

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        background-color: rgb(var(--secondary-background));
    }

    &__content {
        border-radius: 20px;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        gap: 1px;

        width: 100%;
    }
}
</style>
