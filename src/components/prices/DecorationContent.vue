<template>
    <div class="section">
        <DescriptionText>
            Šventę galite dekoruoti patys arba pasirinkite vieną ar kelis mūsų pasiūlymus.
        </DescriptionText>
        <div class="section__content">
            <template v-for="decoration in decorations" :key="decoration.type">
                <CardItem
                    v-if="
                        decoration.type !== ADDITIONAL_DECORATION.HELIUM_BALLONS &&
                        decoration.type !== ADDITIONAL_DECORATION.BALLON_ARCH
                    "
                    class="card"
                    :selected="selectedDecorations.type === decoration.type"
                    @click="updateSelectedDecoration(decoration.type, serviceType)"
                >
                    <template #image>
                        <img :src="decoration.image" alt="decoracija" class="card__img" />
                    </template>
                    <template #title>
                        {{ decoration.title }}
                    </template>
                    <template #content>
                        <div class="card__price">
                            <div>{{ decoration.price > 0 ? 'Kaina nuo' : 'Kaina' }}</div>

                            <div v-if="decoration.pricePerChild >= 0">
                                {{ decoration.pricePerChild }} € / vaikui
                            </div>
                            <div v-if="decoration.price >= 0">{{ decoration.price }} €</div>
                        </div>
                        <div v-if="decoration.description" class="card__description">
                            {{ decoration.description }}
                        </div>
                        <SimpleButton
                            v-if="decoration.includes"
                            class="card__button"
                            :type="ButtonType.SECONDARY"
                            @click.stop="openModal(decoration)"
                        >
                            Plačiau
                        </SimpleButton>
                        <SimpleButton
                            v-if="decoration.themes"
                            class="card__button"
                            :type="ButtonType.SECONDARY"
                            @click.stop="openThemes"
                        >
                            Temos
                        </SimpleButton>
                    </template>
                </CardItem>
            </template>
        </div>
        <div class="section__title">Papildomos dekoracijos</div>
        <div class="section__content">
            <template v-for="decoration in decorations" :key="decoration.type">
                <CardItem
                    v-if="
                        decoration.type === ADDITIONAL_DECORATION.HELIUM_BALLONS ||
                        decoration.type === ADDITIONAL_DECORATION.BALLON_ARCH
                    "
                    class="card"
                    :selected="isAdditionalDecorationSelected(decoration.title)"
                    @click="toggleAdditionalDecoration(decoration)"
                >
                    <template #image>
                        <img :src="decoration.image" alt="decoracija" class="card__img" />
                    </template>
                    <template #title>
                        {{ decoration.title }}
                    </template>
                    <template #content>
                        <div class="card__price">
                            <div>{{ decoration.price > 0 ? 'Kaina nuo' : 'Kaina' }}</div>

                            <div v-if="decoration.pricePerChild >= 0">
                                {{ decoration.pricePerChild }} € / vaikui
                            </div>
                            <div v-if="decoration.price >= 0">{{ decoration.price }} €</div>
                        </div>
                        <div v-if="decoration.description" class="card__description">
                            {{ decoration.description }}
                        </div>
                        <SimpleButton
                            v-if="decoration.includes"
                            class="card__button"
                            :type="ButtonType.SECONDARY"
                            @click.stop="openModal(decoration)"
                        >
                            Plačiau
                        </SimpleButton>
                        <SimpleButton
                            v-if="decoration.themes"
                            class="card__button"
                            :type="ButtonType.SECONDARY"
                            @click.stop="openThemes"
                        >
                            Temos
                        </SimpleButton>
                    </template>
                </CardItem>
            </template>
        </div>
        <ThemeModal v-if="showThemes" @close="closeThemes" />
        <DecorationModal
            v-if="decorationPreview"
            :decoration="decorationPreview"
            @close="closeModal"
        />
    </div>
</template>

<script setup lang="ts">
import CardItem from '@/components/prices/CardItem.vue';
import { storeToRefs } from 'pinia';
import { usePricesStore } from '@/stores/prices/pricesStore';
import { useDecorationsStore } from '@/stores/decorations/decorationsStore';
import DescriptionText from '@/components/shared/ui/DescriptionText.vue';
import { computed, type PropType, ref } from 'vue';
import type { Decoration } from '@/stores/decorations/models/interfaces';
import { Service } from '@/stores/main/models/enumerators';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import DecorationModal from '@/components/modals/DecorationModal.vue';
import { ButtonType } from '@/components/shared/ui/enumerators';
import { ADDITIONAL_DECORATION, DECORATION } from '@/stores/decorations/models/enumerators';

const { updateSelectedDecoration, getServiceDecorations } = useDecorationsStore();
const { addAdditionalDecoration } = usePricesStore();
const { selectedDecorations } = storeToRefs(usePricesStore());
import { useWindowSize } from '@vueuse/core';
import ThemeModal from '@/components/modals/ThemeModal.vue';

const { width } = useWindowSize();

const props = defineProps({
    serviceType: {
        type: String as PropType<Service>,
        required: true
    }
});

const decorationPreview = ref<Decoration | null>(null);
const showThemes = ref<boolean>(false);

const decorations = computed<Decoration[]>(() => {
    return getServiceDecorations(props.serviceType);
});

function toggleAdditionalDecoration(item: Decoration): void {
    addAdditionalDecoration(isAdditionalDecorationSelected(item.title) ? null : item);
}

function isAdditionalDecorationSelected(decorationTitle: string): boolean {
    return selectedDecorations.value.additional?.title === decorationTitle;
}

function openModal(decoration: Decoration): void {
    decorationPreview.value = decoration;
}

function closeModal(): void {
    decorationPreview.value = null;
}

function openThemes(): void {
    showThemes.value = true;
}

function closeThemes(): void {
    showThemes.value = false;
}
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.section {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    &__content {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        margin-bottom: 24px;

        @media only screen and (max-width: $mobile) {
            flex-direction: column;
            gap: 24px;
        }
    }

    &__title {
        font-size: 2.4rem;
        font-weight: 500;
        margin-bottom: 18px;
    }

    &__additional {
        display: flex;
        gap: 20px;

        @media only screen and (max-width: $mobile) {
            flex-direction: column;
        }
    }
}

img {
    max-width: 180px;
    width: 100%;
}

.card {
    flex: 30%;

    &__title {
        font-size: 2.4rem;
        font-weight: 600;

        margin-right: 30px;

        @media only screen and (max-width: $tablet) {
            text-align: center;
            margin: 0 0 10px 0;
        }
    }

    &--row {
        img {
            max-width: 200px;
            width: 100%;
        }

        .card__price {
            width: 125px;

            margin: 0 50px 0 auto;

            @media only screen and (max-width: $tablet) {
                width: 100%;
            }
        }
    }

    &__content {
        display: flex;
        flex-direction: row;
        gap: 8px;

        height: 100%;

        &--col {
            flex-direction: column;
            .card__price {
                width: 125px;

                margin: auto 0 0 auto;

                @media only screen and (max-width: $tablet) {
                    width: 100%;
                }
            }
        }
    }

    &__price {
        display: flex;
        justify-content: space-between;
        width: 100%;

        font-size: 1.8rem;
        font-weight: 600;
    }

    &__description {
        font-size: 1.6rem;
        color: #2d2d2d;

        margin-top: 20px;
        margin-bottom: auto;
    }

    &__button {
        margin-top: 18px;
    }
}
</style>
