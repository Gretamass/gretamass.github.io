<template>
    <div id="lauko-kiemelis" class="service__wrapper">
        <div class="service">
            <div class="service__image-wrapper">
                <h3 class="service__image-wrapper-title">Lauko kiemelis</h3>
                <div class="service__image-content">
                    <img class="service__image" :src="terraceImage" alt="Hero image" />
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
                <h3 class="service__title">Lauko kiemelis</h3>
                <p class="service__text">
                    „Dėžučio“ lauko kiemelis – jauki erdvė su terasa bet kokiai šventės idėjai
                    įgyvendinti.
                </p>
                <div class="service__text">
                    <p class="service__text service__text--small-margin">
                        Jame galima organizuoti:
                    </p>
                    <p class="service__list-item">- gražiausias fotosesijas;</p>
                    <p class="service__list-item">- kepsnių kepimą KAMADO grilyje;</p>
                    <p class="service__list-item">- vasarišką kokteilių barą;</p>
                    <p class="service__list-item">- desertų stalą;</p>
                    <p class="service__list-item">- šerbeto vežimėlį;</p>
                    <p class="service__list-item">- batutą;</p>
                    <p class="service__list-item">- burbulų fiestą;</p>
                    <p class="service__list-item">- putų šou;</p>
                    <p class="service__list-item">
                        - aktyvius žaidimus ant pievelės su mylimu pasakų ar filmų herojumi!
                    </p>
                </div>

                <!--  TODO: add link to gallery -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import terraceImage from '@/assets/images/terrace.webp';
import cloudBlue from '@/assets/images/icon/cloud-blue.webp';
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

        width: 100%;
        max-width: 400px;
        max-height: 450px;

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
        width: 100%;
        max-height: 450px;
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

        width: 100%;
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
