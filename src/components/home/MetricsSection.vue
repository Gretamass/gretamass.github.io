<template>
    <div class="metrics">
        <div class="metrics__item">
            <div class="metrics__number">1944+</div>
            <div class="metrics__title">Organizuotų švenčių</div>
        </div>
        <div class="metrics__item">
            <div class="metrics__number">32k</div>
            <div class="metrics__title">Dėžučio draugų</div>
        </div>
        <div class="metrics__item">
            <div class="metrics__number">1200+</div>
            <div class="metrics__title">Pagaminta ledų tortų</div>
        </div>
        <div class="metrics__item">
            <div class="metrics__number">9m</div>
            <div class="metrics__title">Patirtis organizavime</div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/assets' as *;

.metrics {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 24px;

    @include max-page-width();
    @include default-side-padding();

    margin: $default-margin 0;

    &__item {
        display: flex;
        flex-direction: column;
        justify-content: center;

        border-left: 4px solid rgb(var(--system-blue));
        padding: 6px 18px;

        @media only screen and (max-width: $tablet) {
            flex: 40%;
        }

        @media only screen and (max-width: $mobile) {
            padding: 6px 8px;
        }
    }

    &__number {
        color: rgb(var(--system-red));
        font-size: 3rem;
        font-weight: 700;

        @media only screen and (max-width: $tablet) {
            font-size: 2.4rem;
        }
    }

    &__title {
        font-size: 1.6rem;
        font-weight: 300;
        color: #4f5665;

        @media only screen and (max-width: $tablet) {
            font-size: 1.4rem;
        }
    }
}
</style>
