<template>
    <div class="section">
        <CardItem
            v-for="service in partyAdditionalService"
            :key="service.type"
            :selected="selectedAdditionalServiceList.includes(service.type)"
            :non-selectable="!service.startingPrice"
            @click="updateSelectedService(service.type)"
        >
            <template #image>
                <img :src="service.image" :alt="service.title" />
            </template>
            <template #title>
                {{ service.title }}
                <div class="card__description">
                    {{ service.description }}
                </div>
            </template>
            <template #content>
                <div class="card__content">
                    <div v-if="service.startingPrice" class="card__price">
                        <div>Viena valanda</div>
                        <div>{{ service.startingPrice }} €</div>
                    </div>
                    <template v-if="service.recommendation">
                        <div class="card__contact">{{ service.recommendation.name }}</div>
                        <SimpleButton
                            class="card__button-wrapper"
                            :type="ButtonType.SECONDARY"
                            @click="goToPage(service.recommendation.contact)"
                        >
                            Susisiekti
                        </SimpleButton>
                    </template>
                    <router-link
                        v-if="service.type === SERVICES.DJ"
                        :to="{ name: Route.CONTACTS }"
                        class="card__button-wrapper"
                    >
                        <SimpleButton class="card__button" :type="ButtonType.SECONDARY">
                            Susisiekti
                        </SimpleButton>
                    </router-link>
                </div>
            </template>
        </CardItem>
    </div>
</template>

<script setup lang="ts">
import CardItem from '@/components/prices/CardItem.vue';
import { usePricesStore } from '@/stores/prices/pricesStore';
import { useAdditionalServiceStore } from '@/stores/additionalServices/additionalServicesStore';
import { storeToRefs } from 'pinia';
import { ButtonType } from '@/components/shared/ui/enumerators';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import { SERVICES } from '@/stores/additionalServices/models/enumerators';
import { Route } from '@/router/models/enumerators';

const { updateSelectedService } = useAdditionalServiceStore();
const { partyAdditionalService } = storeToRefs(useAdditionalServiceStore());
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
        width: 100%;
    }

    &__button-wrapper {
        margin-top: auto;
        width: 100%;
        max-width: 290px;
    }
}

img {
    max-width: 180px;
    width: 100%;
}
</style>
