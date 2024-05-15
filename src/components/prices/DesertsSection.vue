<template>
    <div class="section">
        <div class="section__title">Kiti desertai</div>
        <DescriptionText>
            Desertus galite atsinešti savo arba pasirinkti iš mūsų partnerių, kurie nemokamai
            pristato užsakytus desertus šventės dieną.
        </DescriptionText>
        <div class="section__content">
            <div v-for="desert in desertsList" :key="desert.type" class="section__column">
                <CardItem non-selectable class="card" @click="goToPage(desert.website)">
                    <template #image>
                        <img :src="desert.image" alt="maistas" />
                    </template>
                    <template #title>{{ desert.type }}</template>
                    <template #content>
                        <div class="section__contacts">
                            <a
                                v-for="item in desert.contacts"
                                :key="item.type"
                                :href="
                                    item.type === 'email'
                                        ? `mailto:${item.contact}`
                                        : `tel:${item.contact}`
                                "
                                @click.stop
                            >
                                <SimpleButton :type="ButtonType.SECONDARY" class="section__contact">
                                    {{ item.contact }}
                                </SimpleButton>
                            </a>
                        </div>
                    </template>
                </CardItem>
            </div>
        </div>
        <ClientDesertCard />
    </div>
</template>

<script setup lang="ts">
import CardItem from '@/components/prices/CardItem.vue';
import { storeToRefs } from 'pinia';
import ClientDesertCard from '@/components/prices/ClientDesertCard.vue';
import { useFoodStore } from '@/stores/food/foodStore';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import { ButtonType } from '@/components/shared/ui/enumerators';
import DescriptionText from '@/components/shared/ui/DescriptionText.vue';

const { desertsList } = storeToRefs(useFoodStore());

function goToPage(url: string): void {
    window.open(url, '_blank', 'noreferrer');
}
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 100%;
    height: 100%;

    &__title {
        font-size: 2.4rem;
        font-weight: 500;
        margin-bottom: 5px;
    }

    &__column {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    &__content {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        margin-bottom: 20px;
    }

    &__row {
        flex: 1;
    }

    &__contacts {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    &__contact {
        text-align: center;
        font-size: 1.6rem;
        color: #2d2d2d;
        width: 100%;
    }

    &__button {
        display: flex;
        gap: 8px;
        margin-top: auto;
    }
}

.card {
    cursor: pointer;
}

img {
    max-width: 180px;
    width: 100%;
}

.image--medium {
    width: 70%;
}

a {
    width: 100%;
}
</style>
