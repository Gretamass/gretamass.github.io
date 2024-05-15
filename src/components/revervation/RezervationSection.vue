<template>
    <div class="rezervation__wrapper">
        <div class="rezervation">
            <h1 class="rezervation__title">Šventės rezervacija</h1>
            <p class="rezervation__subtitle">
                Dėl Jums tinkamo laiko - kreipkitės į administraciją
                <a href="mailto: labas@dezutis.lt" class="rezervation__subtitle--underline"
                    >labas@dezutis.lt</a
                >
                arba
                <a href="tel: +370 699 87781" class="rezervation__subtitle--underline"
                    >+37069987781</a
                >
            </p>
            <div class="rezervation__content content">
                <div class="content__info info">
                    <h2 class="info__title">Susisiekime</h2>
                    <p class="info__text">
                        Mes esame visada pasiruošę Jums padėti bei patarti. Parašykite arba
                        paskambinkite mums ir suderinsime Jūsų šventės detales!
                    </p>
                    <h2 class="info__subtitle">Kontaktai</h2>
                    <div class="info__text">
                        <a href="mailto: labas@dezutis.lt">
                            <div class="info__contact-info">labas@dezutis.lt</div>
                        </a>
                        <a href="tel: +370 699 87781">
                            <div class="info__contact-info">+370 699 87781</div>
                        </a>
                    </div>
                    <h2 class="info__title">Data ir laikas</h2>
                    <p class="info__text">
                        Šventės datos ir laiko rezervacijos patvirtinimui reikalingas 100 €
                        avansinis mokestis. Šventės atšaukimo atveju, likus mažiau nei 7 d. iki
                        planuojamos šventės, avansas nėra grąžinamas. Ligos atveju šventės datą
                        perkeliame į bet kurią datą per ateinančius metus.
                    </p>
                    <h2 class="info__title">Paslaugos ir maistas</h2>
                    <p class="info__text">
                        Maistas ir kitos paslaugos užsakomos ne vėliau nei 5 dienos iki šventės
                        susisiekus su administracija.
                    </p>
                </div>
                <div class="content__info info">
                    <div class="content__image-wrapper">
                        <div class="content__image-content">
                            <img
                                class="content__image"
                                :src="heroImage"
                                alt="Tortas su zvakutemis"
                            />
                            <img
                                class="content__cloud content__cloud--1"
                                :src="cloudBlue"
                                alt="Debeselis"
                            />
                            <img
                                class="content__cloud content__cloud--2"
                                :src="cloudBlue"
                                alt="Debeselis"
                            />
                            <img
                                class="content__cloud content__cloud--3"
                                :src="cloudBlue"
                                alt="Debeselis"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import heroImage from '@/assets/images/heroImage.webp';
import cloudBlue from '@/assets/images/icon/cloud-blue.webp';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.rezervation {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: $default-margin 0 200px;

    @include max-page-width();
    @include default-side-padding();

    @media only screen and (max-width: $tablet) {
        margin-bottom: 150px;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        background: rgb(var(--secondary-background));
    }

    &__title {
        font-size: 3.6rem;
        font-weight: 700;
        margin-bottom: 20px;

        @media only screen and (max-width: $tablet) {
            font-size: 2.4rem;
        }
    }

    &__subtitle {
        font-size: 1.6rem;
        text-align: center;
        margin-bottom: 30px;

        &--underline {
            text-decoration: underline;
        }
    }
}

.content {
    display: flex;
    gap: 25px;

    background-color: #ffffff;
    border-radius: 20px;

    padding: 30px 20px;

    @media only screen and (max-width: $tablet) {
        flex-direction: column-reverse;
    }

    &__image-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        z-index: 0;

        margin-bottom: 60px;
    }

    &__image-content {
        max-width: 350px;

        position: relative;
    }

    &__image {
        max-width: 350px;
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

.info {
    flex: 1;
    display: flex;
    flex-direction: column;

    &__title {
        font-size: 3rem;
        font-weight: 600;
        margin-bottom: 16px;

        @media only screen and (max-width: $tablet) {
            font-size: 2.4rem;
        }
    }

    &__text {
        font-size: 1.6rem;
        font-weight: 300;
        margin-bottom: 30px;
    }
}

.form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex: 1;
}

.info {
    flex: 1;
    display: flex;
    flex-direction: column;

    &__title {
        font-size: 3rem;
        font-weight: 600;
        margin-bottom: 16px;

        @media only screen and (max-width: $tablet) {
            font-size: 2.4rem;
        }
    }

    &__subtitle {
        font-size: 2.1rem;
        font-weight: 600;
        margin-bottom: 18px;

        @media only screen and (max-width: $tablet) {
            font-size: 1.8rem;
        }
    }

    &__text {
        display: flex;
        flex-direction: column;
        gap: 12px;

        font-size: 1.6rem;
        font-weight: 300;
        margin-bottom: 30px;
    }

    &__contact-info {
        font-size: 1.6rem;
        font-weight: 300;
        text-decoration: underline;
    }
}
</style>
