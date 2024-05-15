<template>
    <div
        class="people-count-section"
        :class="{ 'people-count-section--reverted': selectedPartyType === Service.PARTY }"
    >
        <CardItem non-selectable>
            <template #image>
                <img class="people-count-card__image" :src="birthdayImage" alt="birthday image" />
            </template>
            <template #title> Vaikų skaičius </template>
            <template #content>
                <div class="people-count-card__content">
                    <NumberInput v-model="childrenCountValue" :max="maxChildren" />
                    <VueSlider
                        v-model="childrenCountValue"
                        :height="10"
                        :width="'calc(100% - 60px)'"
                        :min="0"
                        :max="maxChildren"
                        :dot-size="[100, 43]"
                        color="red"
                        tooltip="none"
                        class="people-count-slider"
                    >
                        <template #dot>
                            <div class="dot">
                                <span class="arrow">&lt;</span>
                                Skaičius
                                <span class="arrow">></span>
                            </div>
                        </template>
                        <template #process="{ end }">
                            <div
                                :style="
                                    'position: absolute; width: ' +
                                    end +
                                    '%; height: 0px; border-radius: 6px; border: 6px solid #009379'
                                "
                            ></div>
                        </template>
                    </VueSlider>
                </div>
            </template>
        </CardItem>
        <CardItem non-selectable>
            <template #image>
                <img class="people-count-card__image" :src="partyImage" alt="adult image" />
            </template>
            <template #title>
                {{
                    selectedPartyType === Service.PARTY ? 'Suaugusių skaičius' : 'Tėvelių skaičius'
                }}</template
            >
            <template #content>
                <div class="people-count-card__content">
                    <NumberInput v-model="adultCountValue" :max="maxAdults" />
                    <VueSlider
                        v-model="adultCountValue"
                        :height="10"
                        :width="'calc(100% - 60px)'"
                        :min="0"
                        :max="maxAdults"
                        :dot-size="[100, 43]"
                        tooltip="none"
                        class="people-count-slider"
                    >
                        <template #dot>
                            <div class="dot">
                                <span class="arrow">&lt;</span>
                                Skaičius
                                <span class="arrow">></span>
                            </div>
                        </template>
                        <template #process="{ end }">
                            <div
                                :style="
                                    'position: absolute; width: ' +
                                    end +
                                    '%; height: 0px; border-radius: 6px; border: 6px solid #009379'
                                "
                            ></div>
                        </template>
                    </VueSlider>
                </div>
            </template>
        </CardItem>
    </div>
</template>

<script setup lang="ts">
import NumberInput from '@/components/shared/ui/NumberInput.vue';
import CardItem from '@/components/prices/CardItem.vue';
import birthdayImage from '@/assets/images/birthdayImage.webp';
import partyImage from '@/assets/images/partyImage.webp';
import VueSlider from 'vue-3-slider-component';
import { storeToRefs } from 'pinia';
import { usePricesStore } from '@/stores/prices/pricesStore';
import { Service } from '@/stores/main/models/enumerators';

const { selectedPartyType } = storeToRefs(usePricesStore());

const maxChildren = 35;
const maxAdults = 45;

const childrenCountValue = defineModel<number>('children', { required: true });
const adultCountValue = defineModel<number>('adult', { required: true });
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.people-count-section {
    display: flex;
    gap: 30px;
    width: 100%;

    @media only screen and (max-width: $tablet) {
        flex-direction: column;
        gap: 24px;
    }

    &--reverted {
        flex-direction: row-reverse;
    }
}

.people-count-card {
    &__image {
        max-width: 180px;
        width: 100%;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        height: 100%;

        margin-top: 13px;
        box-sizing: border-box;
    }
}

.people-count-slider {
    margin: 38px 0 20px;
}

.dot {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;

    height: 43px;
    width: 100px;

    background-color: #009379;
    border-radius: 20px;

    font-size: 1.4rem;
    color: #fff;
    font-weight: 500;

    cursor: pointer;
}

.arrow {
    font-size: 2.1rem;
}
</style>
