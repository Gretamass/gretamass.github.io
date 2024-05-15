<template>
    <div class="item" :class="{ disabled: disabled }">
        <div class="item__header header" @click="handleHeaderClick">
            <div class="header__icon">
                <slot name="icon" />
            </div>
            <div class="header__title">
                <slot name="title" />
                <div class="selected-info selected-info--mobile">
                    <div
                        class="header__selection"
                        :class="{ 'header__selection--active': selected }"
                    >
                        <fa-icon :icon="['fa', 'check']" />
                    </div>
                    <div class="header__selection-content selection-content">
                        {{ selected ? selectedTitle : 'Nepasirinkta' }}
                    </div>
                </div>
            </div>
            <div class="selected-info selected-info--desktop">
                <div class="header__selection" :class="{ 'header__selection--active': selected }">
                    <fa-icon :icon="['fa', 'check']" />
                </div>
                <div class="header__selection-content selection-content">
                    {{ selected ? selectedTitle : 'Nepasirinkta' }}
                </div>
            </div>

            <div
                class="header__chevron-down chevron-down"
                :class="{ 'chevron-down--rotated': expanded }"
            >
                <fa-icon :icon="['fa', 'chevron-down']" />
            </div>
        </div>
        <div
            v-show="expanded"
            ref="display"
            class="item__display display"
            :class="{ 'display--visible': expanded }"
        >
            <div class="item__content content">
                <slot name="content" />
            </div>
            <div class="item__action-button action-button">
                <slot name="action-button" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    selected: {
        type: Boolean,
        default: false
    },
    expanded: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    selectedTitle: {
        type: String,
        default: ''
    }
});

const emit = defineEmits(['header-click']);

const display = ref<HTMLElement | null>(null);

const handleHeaderClick = () => {
    if (!props.disabled) {
        emit('header-click');
    }
};
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.item {
    display: flex;
    flex-direction: column;

    &__content {
        background-color: #ffffff;
    }
}

.header {
    display: flex;
    align-items: center;
    background-color: #ffffff;

    border-bottom: 1px solid rgb(var(--secondary-background));

    padding: 20px 30px;

    cursor: pointer;

    @media only screen and (max-width: $tablet) {
        padding: 15px 19px 13px 15px;
    }

    &__icon {
        height: 42px;
        width: 42px;

        margin-right: 19px;

        @media only screen and (max-width: $tablet) {
            margin-right: 10px;
        }
    }

    &__title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;

        font-size: 2.4rem;
        font-weight: 600;

        @media only screen and (max-width: $mobile) {
            font-size: 1.8rem;
        }
    }

    &__chevron {
        font-size: 1.6rem;
    }

    &__selection {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: auto;
        height: 20px;
        width: 20px;

        background-color: #e6dfd0;
        border-radius: 20px;

        color: #ffffff;

        font-size: 1.4rem;

        &--active {
            background-color: rgb(var(--active-green));
            color: rgb(var(--secondary-text));
        }
    }
}

.display {
    overflow: hidden;

    background-color: #ffffff;

    transition: height 0.5s ease-in-out;
}

.content {
    display: flex;
    align-items: flex-end;

    padding: 45px 40px 36px;

    @media only screen and (max-width: $tablet) {
        padding: 20px 16px 15px;
    }
}

.action-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;

    margin-bottom: 35px;

    padding: 0 40px;

    @media only screen and (max-width: $tablet) {
        margin-bottom: 20px;

        padding: 0 16px;
    }
}

.selection-content {
    font-size: 1.8rem;
    font-weight: 500;
    color: #2d2d2d;

    margin: 0 10px;

    flex: 1;

    @media only screen and (max-width: $mobile) {
        font-size: 1.4rem;
    }
}

.chevron-down {
    font-size: 1.4rem;
    color: #0a033c80;

    transition: all 0.2s ease-in-out;

    &--rotated {
        transform: rotate(180deg);
    }

    @media only screen and (max-width: $tablet) {
        margin-left: auto;
        font-size: 1.8rem;
    }
}

.selected-info {
    display: flex;
    align-items: center;

    margin-left: auto;

    &--mobile {
        display: none;
    }

    @media only screen and (max-width: $tablet) {
        margin-left: 0;

        &--desktop {
            display: none;
        }

        &--mobile {
            display: flex;
            align-items: flex-start;
        }
    }
}

.disabled {
    opacity: 0.5;

    .header {
        cursor: default;
    }
}
</style>
