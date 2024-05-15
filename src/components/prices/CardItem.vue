<template>
    <div
        class="card"
        :class="{
            'card--selected': selected,
            'card--clickable': !nonSelectable,
            'card--disabled': disabled
        }"
    >
        <div
            v-if="!nonSelectable"
            class="card__selection selection"
            :class="{ 'selection--selected': selected }"
        >
            <div class="selection__circle" />
        </div>
        <div v-if="selected" class="selection-text">PASIRINKTA</div>
        <div v-if="$slots.image" class="card__image" :class="{ 'card__image--small': smallImage }">
            <slot name="image" />
        </div>
        <div v-if="$slots.title" class="card__title">
            <slot name="title" />
        </div>
        <div class="card__content">
            <slot name="content" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    selected: {
        type: Boolean,
        default: false
    },
    nonSelectable: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    smallImage: {
        type: Boolean,
        default: false
    }
});
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.card {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    padding: 20px 25px;
    box-sizing: border-box;

    border-radius: 20px;
    border: 1px solid rgb(var(--system-beige));

    box-shadow: 25px 20px 20px 0 rgba(0, 0, 0, 0.05);
    transition: all 0.1s ease-in-out;

    position: relative;

    &--row {
        flex-direction: row;

        gap: 20px;

        .card__image {
            max-height: 200px;
        }

        .card__image,
        .card__title {
            margin-bottom: 0;
        }

        .card__content {
            height: max-content;
        }

        @media only screen and (max-width: $tablet) {
            flex-direction: column;
        }
    }

    &--clickable {
        cursor: pointer;
    }

    &__image {
        display: flex;
        align-items: center;
        justify-content: center;

        max-height: 180px;
        height: 100%;

        object-fit: cover;

        overflow: hidden;
        margin-bottom: 26px;

        @media only screen and (max-width: $tablet) {
            margin-bottom: 12px;
        }

        &--small {
            height: fit-content;
        }
    }

    &__title {
        font-size: 2.4rem;
        font-weight: 600;

        text-align: center;

        margin-bottom: 20px;
    }

    &__content {
        display: flex;
        flex-direction: column;

        flex: 1;
        height: 100%;
        width: 100%;
    }

    &--selected {
        border: 1px solid rgb(var(--active-green));
        background-color: rgb(var(--active-green), 0.1);
    }

    &--disabled {
        opacity: 0.8;
        background-color: rgb(var(--primary-text), 0.1);
    }
}

.selection {
    position: absolute;
    top: 24px;
    right: 20px;

    height: 24px;
    width: 24px;

    background-color: #f2efe7;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s ease-in-out;

    &__circle {
        height: 14px;
        width: 14px;

        background-color: #e6dfd0;
        border-radius: 50%;
    }

    &--selected {
        background-color: #ffffff;

        .selection__circle {
            background-color: rgb(var(--active-green));
        }
    }
}

.selection-text {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -12px;

    height: 24px;
    width: 100px;

    background-color: rgb(var(--active-green));
    border-radius: 20px;

    font-size: 1.4rem;
    font-weight: 400;
    color: #ffffff;
}
</style>
