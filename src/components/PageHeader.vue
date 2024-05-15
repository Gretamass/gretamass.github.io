<template>
    <div class="header__wrapper">
        <div class="header">
            <img
                :src="logoImage"
                alt="Dėžutis logotipas"
                class="header__logo"
                @click="goToPage(Route.HOME)"
            />
            <div v-if="isMobile" class="header__mobile-navigation mobile-navigation">
                <div class="mobile-navigation__menu">
                    <fa-icon
                        v-show="!showNavigationDropdown"
                        class="mobile-navigation__menu-icon"
                        :icon="['fa', 'bars']"
                        @click="toggleNavigationDropdown"
                    />
                    <fa-icon
                        v-show="showNavigationDropdown"
                        class="mobile-navigation__menu-icon"
                        :icon="['fas', 'xmark']"
                        @click="closeNavigationDropdown"
                    />
                </div>
                <div
                    class="mobile-navigation__navigation"
                    :class="{ 'mobile-navigation__navigation--visible': showNavigationDropdown }"
                >
                    <div
                        v-for="navigation in navigationItems"
                        :key="navigation.route"
                        class="mobile-navigation__navigation-item"
                        @click="goToPage(navigation.route)"
                    >
                        {{ navigation.name }}
                    </div>
                    <SimpleButton
                        class="mobile-navigation__call-to-action"
                        @click="goToPage(callToAction.route)"
                    >
                        {{ callToAction.name }}
                    </SimpleButton>
                </div>
            </div>
            <div v-else class="header__navigation navigation">
                <div
                    v-for="navigation in navigationItems"
                    :key="navigation.route"
                    class="navigation__item"
                    @click="goToPage(navigation.route)"
                    @mouseenter="updateHoveredItem(navigation.route)"
                    @mouseleave="updateHoveredItem()"
                >
                    {{ navigation.name }}
                    <AnimatedWave
                        :active="
                            isHovered(navigation.route) ||
                            router.currentRoute.value.name === navigation.route
                        "
                    />
                </div>
            </div>
            <div v-if="!isMobile" class="header__navigation navigation">
                <SimpleButton class="call-to-action" @click="goToPage(callToAction.route)">
                    {{ callToAction.name }}
                </SimpleButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import logoImage from '@/assets/images/logo.webp';
import { Route } from '@/router/models/enumerators';
import router from '@/router';
import AnimatedWave from '@/components/shared/AnimatedWave.vue';
import { computed, ref } from 'vue';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

const navigationItems = [
    { route: Route.SPACES, name: 'Erdvės' },
    { route: Route.SERVICES, name: 'Paslaugos' },
    { route: Route.GALLERY, name: 'Galerija' },
    { route: Route.CONTACTS, name: 'Kontaktai' }
];

const callToAction = { route: Route.RESERVATION, name: 'Rezervuoti' };

const hoveredItem = ref<Route | null>(null);
const showNavigationDropdown = ref<boolean>(false);

const isMobile = computed<boolean>(() => {
    return width.value <= 950;
});

function isHovered(route: Route): boolean {
    return hoveredItem.value === route;
}

function updateHoveredItem(item?: Route): void {
    hoveredItem.value = item ? item : null;
}

function toggleNavigationDropdown(): void {
    showNavigationDropdown.value = !showNavigationDropdown.value;
}

function closeNavigationDropdown(): void {
    showNavigationDropdown.value = false;
}

function goToPage(route: Route): void {
    closeNavigationDropdown();
    router.push({ name: route });
}
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: $header-height;

    @include max-page-width();
    @include default-side-padding();

    position: relative;

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        box-shadow: 5px 5px 15px 0 #00000025;
        z-index: 2;
    }

    &__logo {
        height: $logo-height;
        cursor: pointer;
    }
}

.navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 36px;

    &__item {
        font-size: 1.5rem;
        font-weight: 500;

        cursor: pointer;

        position: relative;
    }
}

.mobile-navigation {
    &__menu-icon {
        height: 25px;
        width: 25px;
        cursor: pointer;
    }

    &__navigation {
        @include default-side-padding();

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6px;

        background-color: #fff;

        position: absolute;
        top: $header-height;
        left: 50%;
        transform: translateX(-50%);

        width: 100%;
        height: 0;
        overflow: hidden;

        box-shadow: 34px 29px 48px 0 #00000020;

        transition: all 0.3s ease-in-out;

        &--visible {
            height: 370px;
        }
    }

    &__navigation-item {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 400;

        cursor: pointer;

        height: 50px;
        width: 100%;

        position: relative;
    }

    &__call-to-action {
        padding: 10px 30px !important;
        width: 100%;
        margin: 10px 0 15px;
    }
}

.call-to-action {
    padding: 10px 30px !important;
}
</style>
