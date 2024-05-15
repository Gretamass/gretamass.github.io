<template>
    <div class="footer">
        <div class="footer__info">
            <TitleItem> Lauksime Jūsų! </TitleItem>
            <p class="footer__address">Savanorių prospektas 266, Kaunas</p>
            <div class="footer__text-wrapper">
                <div class="footer__maps-wrapper">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2293.2283820401117!2d23.94502067682891!3d54.91646437278612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7188d6a3d4c29%3A0xce02cf3fac4b490!2z4oCeRMSXxb51dGlz4oCc!5e0!3m2!1slt!2slt!4v1710267616799!5m2!1slt!2slt"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        class="footer__maps"
                    ></iframe>
                </div>
                <div class="footer__additional-info additional-info">
                    <div class="additional-info__col">
                        <div class="additional-info__title">Apie</div>
                        <router-link :to="{ name: Route.SPACES }">
                            <div class="additional-info__row">Erdvės</div>
                        </router-link>
                        <router-link :to="{ name: Route.SERVICES }">
                            <div class="additional-info__row">Paslaugos</div>
                        </router-link>
                    </div>
                    <div class="additional-info__col">
                        <div class="additional-info__title">Nuorodos</div>
                        <!--                        <router-link :to="{ name: Route.PRICES }">-->
                        <!--                            <div class="additional-info__row">Kainos</div>-->
                        <!--                        </router-link>-->
                        <router-link :to="{ name: Route.RESERVATION }">
                            <div class="additional-info__row">Savitarnos rezervacija</div>
                        </router-link>
                    </div>
                    <div class="additional-info__col">
                        <div class="additional-info__title"></div>
                        <router-link :to="{ name: Route.TERMS_AND_CONDITIONS }">
                            <div class="additional-info__row">Sąlygos ir taisyklės</div>
                        </router-link>

                        <router-link :to="{ name: Route.PRIVACY_POLICY }">
                            <div class="additional-info__row">Privatumo politika</div>
                        </router-link>
                    </div>
                    <div class="additional-info__col">
                        <div class="additional-info__title">Kontaktai</div>
                        <a href="tel: +370 699 87781">
                            <div class="additional-info__row">+370 699 87781</div>
                        </a>
                        <a href="mailto: labas@dezutis.lt">
                            <div class="additional-info__row">labas@dezutis.lt</div>
                        </a>
                        <div class="additional-info__row">
                            <a href="https://www.facebook.com/Dezutis/" target="_blank">
                                <div class="additional-info__social">
                                    <fa-icon :icon="['fab', 'facebook']" />
                                </div>
                            </a>
                            <a href="https://www.instagram.com/dezutis" target="_blank">
                                <div class="additional-info__social">
                                    <fa-icon :icon="['fab', 'instagram']" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom-row">
            <CloudsRow class="footer__clouds" />
            <div class="footer__copy-right">Copyrights © 2024, DĖŽUTIS – ŠEIMOS ŠVENTĖS</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CloudsRow from '@/components/shared/ui/CloudsRow.vue';
import { Route } from '@/router/models/enumerators';
import TitleItem from '@/components/shared/ui/TitleItem.vue';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        position: relative;
    }

    &__address {
        font-size: 2.1rem;

        margin-bottom: 42px;

        @media only screen and (max-width: $tablet) {
            font-size: 1.6rem;
            margin-bottom: 28px;
        }
    }

    &__text-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        background: rgb(var(--secondary-background));

        position: relative;

        padding-top: 150px;
        margin-top: 150px;
    }

    &__maps-wrapper {
        height: 300px;
        width: 100%;
        max-width: 900px;
        @include default-side-padding();

        position: absolute;
        top: -150px;
    }

    &__maps {
        width: 100%;
        height: 100%;

        border-radius: 10px;
        @include box-shadow();
    }

    &__bottom-row {
        display: flex;
        justify-content: center;

        width: 100%;

        padding: 16px 0;

        position: relative;
    }

    &__copy-right {
        z-index: 1;
        font-size: 1.4rem;
        color: #50505050;
    }
}

.additional-info {
    display: flex;
    justify-content: space-between;

    max-width: 900px;
    width: 100%;

    @include default-side-padding();
    margin: 60px 0 80px 0;

    z-index: 1;

    @media only screen and (max-width: $mobile) {
        flex-direction: column;
    }

    &__col {
        width: fit-content;

        @media only screen and (max-width: $mobile) {
            margin-bottom: 20px;
        }
    }

    &__title {
        font-size: 1.8rem;
        font-weight: 500;
        margin-bottom: 14px;
        height: 27px;
    }

    &__row {
        display: flex;
        gap: 14px;

        font-size: 1.6rem;
        font-weight: 300;

        margin-bottom: 10px;

        color: #4f5665;
    }

    &__social {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 33px;
        width: 33px;

        background-color: rgb(var(--background-color));
        border-radius: 50%;

        @include box-shadow();

        color: rgb(var(--system-red));

        margin-top: 8px;

        font-size: 1.7rem;
        cursor: pointer;
    }
}

a {
    cursor: pointer;
}
</style>
