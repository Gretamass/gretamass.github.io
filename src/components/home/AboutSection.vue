<template>
    <div class="about__wrapper">
        <CloudsRow />
        <div class="about">
            <div class="about__content">
                <div class="about__image-wrapper">
                    <div class="about__image-content">
                        <img class="about__image" :src="aboutImage" alt="Tortas su zvakutemis" />
                        <img
                            class="about__cloud about__cloud--1"
                            :src="cloudBlue"
                            alt="Debeselis"
                        />
                        <img
                            class="about__cloud about__cloud--2"
                            :src="cloudBlue"
                            alt="Debeselis"
                        />
                        <img
                            class="about__cloud about__cloud--3"
                            :src="cloudBlue"
                            alt="Debeselis"
                        />
                    </div>
                </div>
                <div class="about__text">
                    <h2 class="about__title">Daugiau apie mus</h2>
                    <p class="about__description">„Dėžutis” - šeimos švenčių edvė Kaune.</p>
                    <p class="about__description">
                        Erdvėje švenčiamos krikštynos, vaikų, mamyčių, tėvelių ir senelių
                        gimtadieniai, išleistuvių šventės ir kiti vakarėliai, Helovinas ar Kalėdos.
                        Vienoje erdvėje yra ir vaikų kambarys, ir restoranas, ir lauko kiemelis.
                    </p>
                    <p class="about__description">
                        „Dėžučio” virtuvė pasirūpina maitinimu, o organizatorių komanda gali
                        pasirūpinti šventės dekoracijomis ir pramogomis.
                    </p>
                    <router-link class="about__button" :to="{ name: Route.SERVICES }">
                        <SimpleButton> Mūsų paslaugos </SimpleButton>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import aboutImage from '@/assets/images/aboutSection.webp';
import cloudBlue from '@/assets/images/icon/cloud-blue.webp';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import { Route } from '@/router/models/enumerators';
import CloudsRow from '@/components/shared/ui/CloudsRow.vue';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.about {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    margin: 100px 0 calc($default-margin * 2.5);

    @include max-page-width();

    &__wrapper {
        display: flex;
        justify-content: center;

        position: relative;
        width: 100%;
        @include default-side-padding();
    }

    &__content {
        display: flex;
        justify-content: space-around;
        gap: 10%;

        width: 100%;

        @media only screen and (max-width: $tablet) {
            flex-direction: column;
            align-items: center;
        }
    }

    &__image-wrapper {
        flex: 1;
    }

    &__image-content {
        max-width: 450px;

        position: relative;

        @media only screen and (max-width: $tablet) {
            @include default-side-padding();
        }
    }

    &__image {
        max-width: 450px;
        width: 100%;
        border-radius: 50% 50% 24px 24px;
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

    &__text {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        flex: 1;

        font-weight: 300;
    }

    &__title {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 30px;

        @media only screen and (max-width: $tablet) {
            font-size: 2.4rem;
        }
    }

    &__description {
        font-size: 1.8rem;

        margin-bottom: 1.8rem;
    }

    &__button {
        width: fit-content;

        margin-top: 45px;

        @media only screen and (max-width: $tablet) {
            margin-top: 27px;
        }
    }
}
</style>
