<template>
    <div class="spaces__wrapper">
        <div class="spaces">
            <MainTitleItem>„Dėžučio” erdvės Jūsų šventei</MainTitleItem>
            <SubtitleItem>
                Vienoje erdvėje yra ir vaikų kambarys, ir restoranas, ir lauko kiemelis.
            </SubtitleItem>
            <div class="spaces__content">
                <div v-for="space in spacesInfo" :key="space.title" class="space">
                    <router-link
                        :to="{ name: Route.SPACES, hash: `#${space.hash}` }"
                        class="space__router-link"
                    >
                        <div class="space__image-wrapper">
                            <img class="space__image" :src="space.image" :alt="space.alt" />
                        </div>

                        <div class="space__title">
                            {{ space.title }}
                            <span class="space__title-icon">></span>
                        </div>
                    </router-link>
                </div>
            </div>
            <router-link v-if="showRouteButton" :to="{ name: Route.SPACES }">
                <SimpleButton>Sužinoti daugiau</SimpleButton>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSpacesStore } from '@/stores/spaces/spacesStore';
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import { Route } from '@/router/models/enumerators';
import SubtitleItem from '@/components/shared/ui/SubtitleItem.vue';
import MainTitleItem from '@/components/shared/ui/MainTitleItem.vue';

const { spacesInfo } = useSpacesStore();

defineProps({
    showRouteButton: {
        type: Boolean,
        default: false
    }
});
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.spaces {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include max-page-width();
    @include default-side-padding();

    margin: $default-margin 0 60px;

    &__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        background-color: rgb(var(--secondary-background));
        position: relative;
    }

    &__content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 20px;

        margin: 20px 0;

        width: 100%;

        @media only screen and (max-width: $mobile) {
            flex-direction: column;
            align-items: center;
            gap: 30px;
            margin-bottom: 30px;
        }
    }
}

.space {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    @media only screen and (max-width: $tablet) {
        flex: 40%;
    }

    @media only screen and (max-width: $mobile) {
        flex: 1;
        max-width: 450px;
        width: 100%;
    }

    &__image-wrapper {
        height: 320px;
        width: 100%;
        overflow: hidden;

        @media only screen and (max-width: $mobile) {
            @include default-side-padding();
            height: 310px;
        }
    }

    &__image {
        border-radius: 50% 50% 24px 24px;

        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__router-link {
        width: 100%;

        &:hover {
            color: rgb(var(--system-red));
        }

        @media only screen and (max-width: $tablet) {
            max-width: 320px;
        }
    }

    &__title {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

        font-size: 2rem;
        font-weight: 600;
        text-align: center;

        height: 60px;
        margin-top: 20px;

        transition: all 0.2s ease-in-out;

        @media only screen and (max-width: $mobile) {
            height: 32px;
        }
    }

    &__title-icon {
        color: rgb(var(--system-red));
        font-size: 2.8rem;
        font-weight: 300;
    }
}
</style>
