<template>
    <div class="clouds">
        <div class="clouds__item"></div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.clouds {
    position: absolute;
    top: -100px;

    height: 200px;
    width: 100%;

    &__item {
        background-image: url('@/assets/images/clouds-image.webp');
        background-repeat: repeat-x;
        background-size: 40%;

        height: 100%;
        width: 100%;

        @media only screen and (max-width: 2000px) {
            background-size: 50%;
        }

        @media only screen and (max-width: 1600px) {
            background-size: 60%;
        }

        @media only screen and (max-width: 1400px) {
            background-size: 70%;
        }

        @media only screen and (max-width: 1100px) {
            background-size: 90%;
        }

        @media only screen and (max-width: 850px) {
            background-size: 105%;
        }

        @media only screen and (max-width: 750px) {
            background-size: 125%;
        }

        @media only screen and (max-width: 650px) {
            background-size: 155%;
        }

        @media only screen and (max-width: 550px) {
            background-size: 200%;
        }

        @media only screen and (max-width: 450px) {
            background-size: 230%;
        }
    }
}
</style>
