<template>
    <div class="hero__wrapper">
        <div class="hero">
            <div class="hero__text">
                <h1 class="hero__title">{{ heroText }}</h1>
                <div class="hero__action-buttons">
                    <router-link :to="{ name: Route.RESERVATION }" class="hero__button">
                        <SimpleButton class="hero__call-to-action"> Rezervuoti </SimpleButton>
                    </router-link>
                    <a href="https://fb.watch/rGqh9e364d/" target="_blank">
                        <SimpleButton
                            class="hero__call-to-action hero__button"
                            :type="ButtonType.SECONDARY"
                        >
                            Žiūrėti video
                        </SimpleButton>
                    </a>
                </div>
            </div>
            <div class="hero__image-wrapper">
                <div class="hero__image-content">
                    <img class="hero__image" :src="heroImage" alt="Hero image" />
                    <img class="hero__cloud hero__cloud--1" :src="cloudBlue" alt="Debeselis" />
                    <img class="hero__cloud hero__cloud--2" :src="cloudBlue" alt="Debeselis" />
                    <img class="hero__cloud hero__cloud--3" :src="cloudBlue" alt="Debeselis" />
                </div>
            </div>
        </div>
        <MetricsSection />
    </div>
</template>

<script setup lang="ts">
import heroImage from '@/assets/images/heroImage.webp';
import { useMainStore } from '@/stores/main/mainStore';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import { ButtonType } from '@/components/shared/ui/enumerators';
import { Route } from '@/router/models/enumerators';
import MetricsSection from '@/components/home/MetricsSection.vue';
import cloudBlue from '@/assets/images/icon/cloud-blue.webp';

const { heroText } = useMainStore();
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.hero {
    display: flex;
    justify-content: center;
    gap: 20px;
    height: 100%;

    @include max-page-width();
    @include default-side-padding();

    margin: $default-margin 0;

    @media only screen and (max-width: $tablet) {
        flex-direction: column-reverse;
        align-items: center;
        gap: 90px;
        margin-bottom: 16px;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;

        background-image: linear-gradient(180deg, #ffffff, #f9f5f0);
        position: relative;
        z-index: 0;
    }

    &__text {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;

        @media only screen and (max-width: $tablet) {
            gap: 28px;
        }
    }

    &__title {
        font-size: 3.8rem;
        font-weight: 700;
        line-height: 4.9rem;

        @media only screen and (max-width: $tablet) {
            font-size: 2.4rem;
            line-height: 3.1rem;
            text-align: center;
        }
    }

    &__action-buttons {
        display: flex;
        gap: 30px;

        @media only screen and (max-width: $tablet) {
            justify-content: center;
        }

        @media only screen and (max-width: $mobile) {
            flex-direction: column;
            align-items: center;
            gap: 16px;
        }
    }

    &__button {
        @media only screen and (max-width: $mobile) {
            width: 225px;

            .button {
                width: 100%;
            }
        }
    }

    &__image-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;

        margin-right: 50px;

        @media only screen and (max-width: $tablet) {
            margin-right: 0;
        }
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
}
</style>
