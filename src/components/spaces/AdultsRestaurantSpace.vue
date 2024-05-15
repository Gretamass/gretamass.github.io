<template>
    <div id="restoranas-suaugusiems" class="service__wrapper">
        <div class="service">
            <div class="service__image-wrapper">
                <h3 class="service__image-wrapper-title">Restoranas suaugusiems</h3>
                <div class="service__image-content">
                    <img class="service__image" :src="adultRestaurantImage" alt="Hero image" />
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
                <h3 class="service__title">Restoranas suaugusiems</h3>
                <p class="service__text">
                    „Dėžučio” šefas kiekvieną šventės dalyvį nuneš į skonių pasaulį: saulėje
                    džiovinti pomidorai, pelėsinis sūris, lašišos tartarai, vieno kąsnio užkandėlės,
                    picos ir kiti gardūs patiekalai.
                </p>
                <p class="service__text">
                    „Dėžučio” padavėjai pasirūpins, kad šventėje nieko netrūktų ir galėtumėte be
                    rūpesčių mėgautis gimtadieniu.
                </p>
                <div class="service__text">
                    <p class="service__text service__text--small-margin">Tėvelių čia laukia:</p>
                    <p class="service__list-item">- serviruotas banketo ir užkandžių stalas;</p>
                    <p class="service__list-item">- kavos ir gėrimų baras;</p>
                    <p class="service__list-item">
                        - TV monitoriai, kuriuose šventės metu galėsite matyti, kaip žaidimų
                        kambaryje linksminasi vaikai;
                    </p>
                    <p class="service__list-item">- muzika.</p>
                </div>
                <!--  TODO: add link to gallery -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import adultRestaurantImage from '@/assets/images/adultRestaurant.webp';
import cloudBlue from '@/assets/images/icon/cloud-blue.webp';
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
        width: 100%;

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
        font-size: 1.6rem;
        font-weight: 300;
        margin-bottom: 20px;

        &--small-margin {
            margin-bottom: 10px;
        }
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 10px;

        margin-bottom: 20px;
    }

    &__list-item {
        font-weight: 300;

        margin-left: 10px;
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
