<template>
    <div id="mamyciu-teveliu-seneliu-gimtadieniai" class="service__wrapper">
        <div class="service">
            <div class="service__image-wrapper">
                <h2 class="service__image-wrapper-title">Suaugusių šventės</h2>

                <div class="service__image-content">
                    <img class="service__image" :src="adultPartyServiceImage" alt="Hero image" />
                    <img
                        class="service__cloud service__cloud--1"
                        :src="cloudBlue"
                        alt="Debeselis"
                    />
                    <img
                        class="service__cloud service__cloud--2"
                        :src="cloudBlue"
                        alt="Debeselis"
                    />
                    <img
                        class="service__cloud service__cloud--3"
                        :src="cloudBlue"
                        alt="Debeselis"
                    />
                </div>
            </div>
            <div class="service__info">
                <h2 class="service__title">Suaugusių šventės</h2>
                <p class="service__text">
                    „Dėžutyje” malonu švęsti visos šeimos narių šventes, nes patalpos ir paslaugos
                    pritaikytos įvairaus amžiaus dalyviams, tad pas mus galite smagiai švęsti ir su
                    vaikais.
                </p>
                <p class="service__text">
                    „Dėžučio” komanda pasirūpins švente nuo A iki Z, kad ši Jums taptų džiaugsmingu
                    prisiminimu be jokių organizavimo rūpesčių.
                </p>
                <div class="service__list">
                    <p class="service__list-item">- Šventės dekoracijomis.</p>
                    <p class="service__list-item">
                        - Pramogomis – vaikų laukia didelis žaidimų kambarys!
                    </p>
                    <p class="service__list-item">
                        - Maitinimu ir užkandžiais tiek vaikams, tiek suaugusiems.
                    </p>
                    <p class="service__list-item">- Aptarnavimu.</p>
                </div>
                <router-link :to="{ name: Route.RESERVATION }">
                    <SimpleButton class="service__button">Rezervuoti laiką</SimpleButton>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import adultPartyServiceImage from '@/assets/images/adultPartyService.webp';
import cloudBlue from '@/assets/images/icon/cloud-blue.webp';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import { Route } from '@/router/models/enumerators';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.service {
    display: flex;
    align-items: center;
    gap: 50px;
    @include max-page-width();
    @include default-side-padding();

    margin: $default-margin 0 100px;

    @media only screen and (max-width: $tablet) {
        flex-direction: column;
        margin-bottom: 0;
    }

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        background: rgb(var(--secondary-background));
        width: 100%;
        z-index: 0;

        padding-bottom: 50px;

        @media only screen and (max-width: $tablet) {
            padding-bottom: 0;
        }
    }

    &__image-wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media only screen and (max-width: $tablet) {
            align-items: center;
            margin-bottom: 30px;
        }
    }

    &__image-wrapper-title {
        display: none;

        @media only screen and (max-width: $tablet) {
            display: block;
            font-size: 2.8rem;
            font-weight: 600;
            margin-bottom: 30px;
        }
    }

    &__image-content {
        position: relative;

        @media only screen and (max-width: $tablet) {
            @include default-side-padding();
            max-width: 450px;
            width: 100%;
        }
        @media only screen and (max-width: $tablet) {
            max-width: 320px;
        }
    }

    &__image {
        max-width: 400px;
        width: 100%;
        height: 450px;
        border-radius: 50% 50% 24px 24px;
        object-fit: cover;
        transform: scaleX(-1);

        @media only screen and (max-width: $tablet) {
            height: 310px;
            max-width: 100%;
        }
    }

    &__cloud {
        position: absolute;

        height: 30%;

        &--1 {
            top: -5%;
            left: -7%;
            z-index: -1;
        }

        &--2 {
            top: 12%;
            right: -15%;
        }

        &--3 {
            bottom: -11%;
            left: -16%;
        }
        @media only screen and (max-width: $tablet) {
            &--1 {
                left: 1%;
            }
            &--2 {
                right: -3%;
            }
            &--3 {
                left: -3%;
            }
        }
    }

    &__info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    &__title {
        font-size: 2.8rem;
        font-weight: 600;
        margin-bottom: 20px;

        @media only screen and (max-width: $tablet) {
            display: none;
        }
    }

    &__text {
        font-size: 1.4rem;
        font-weight: 300;
        margin-bottom: 20px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 10px;

        margin-bottom: 20px;
    }

    &__list-item {
        font-size: 1.4rem;
        font-weight: 300;
    }

    &__button {
        width: max-content;
        margin-top: 20px;

        @media only screen and (max-width: $tablet) {
            margin: 0 auto;
        }
    }
}
</style>
