<template>
    <div id="krikstynu-studija-kaune" class="service__wrapper">
        <div class="service">
            <div class="service__image-wrapper">
                <h2 class="service__image-wrapper-title">Krikštynų studija Kaune</h2>

                <div class="service__image-content">
                    <img class="service__image" :src="christeningServiceImage" alt="Hero image" />
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
                <h2 class="service__title">Krikštynų studija Kaune</h2>
                <p class="service__text">
                    „Dėžučio“ komanda pasirūpins krikštynomis nuo A iki Z – viskuo, ko reikia vaiko
                    krikštynoms, kad Jums šventė taptų džiaugsmingu prisiminimu be jokių
                    organizavimo rūpesčių.
                </p>
                <ul class="service__list">
                    <li class="service__list-item">
                        <p>
                            Krikštynų erdvė: „Dėžutis“ yra ideali vieta krikštynoms, kurioje
                            galėsite ne tik atšvęsti šventę, bet ir pasinaudoti krikštynų studijos
                            privalumais.
                        </p>
                    </li>
                    <li class="service__list-item">
                        <p>
                            Pramogos: vaikų laukia didelis žaidimų kambarys – tobula aplinka smagiai
                            ir saugiai leisti laiką šventės metu.
                        </p>
                    </li>
                    <li class="service__list-item">
                        <p>
                            Maitinimas ir užkandžiai: siūlome skanius užkandžius ir subalansuotą
                            maitinimą tiek vaikams, tiek suaugusiems, kad Jūsų krikštynos būtų
                            pilnos skonio akimirkų.
                        </p>
                    </li>
                    <li class="service__list-item">
                        <p>
                            Aptarnavimas: mūsų profesionali komanda pasirūpins, kad šventė vyktų
                            sklandžiai ir Jūsų svečiai jaustųsi ypatingai.
                        </p>
                    </li>
                </ul>
                <p class="service__text">
                    Susisiekite su mumis ir užsisakykite savo laiką krikštynų erdvėje „Dėžutis”
                    Kaune jau šiandien!
                </p>
                <router-link :to="{ name: Route.RESERVATION }">
                    <SimpleButton class="service__button">Rezervuoti laiką</SimpleButton>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import christeningServiceImage from '@/assets/images/christeningService.webp';
import cloudBlue from '@/assets/images/icon/cloud-blue.webp';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import { Route } from '@/router/models/enumerators';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.service {
    display: flex;
    flex-direction: row-reverse;
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
        align-items: flex-end;

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
        font-size: 1.4rem;
        font-weight: 300;
        margin-bottom: 20px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 10px;

        margin-bottom: 20px;

        list-style-type: disc;
    }

    &__list-item {
        font-size: 1.4rem;
        font-weight: 300;

        margin-left: 25px;
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
