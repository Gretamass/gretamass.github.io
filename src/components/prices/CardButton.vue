<template>
    <div
        class="card-button"
        :class="{ 'card-button--selected': selected, 'card-button--clickable': !preview }"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
defineProps({
    selected: {
        type: Boolean,
        default: false
    },
    preview: {
        type: Boolean,
        default: false
    }
});
</script>

<style scoped lang="scss">
.card-button {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;

    padding: 13px 15px;
    box-sizing: border-box;
    border-radius: 25px;
    border: 1px solid rgb(var(--system-beige));
    background-color: #ffffff;

    box-shadow: 0 4px 5px 0 #00000010;

    font-size: 1.6rem;

    &--clickable {
        cursor: pointer;
    }

    &--selected {
        border: 1px solid rgb(var(--active-green));
        color: rgb(var(--active-green));
    }
}
</style>
