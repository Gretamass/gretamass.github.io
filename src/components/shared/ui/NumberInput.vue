<template>
    <div class="input">
        <!--  TODO: validate this input -->
        <input
            ref="input"
            :value="modelValue"
            class="input__field"
            inputmode="decimal"
            @input.prevent="handleInput"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
    max: {
        type: Number,
        default: 30
    }
});

const number = defineModel<number>({ required: true });

const input = ref<HTMLInputElement | null>(null);
const modelValue = ref<string>(number.value.toString());

function handleInput(): void {
    if (!input.value) {
        return;
    }

    let newValue = Number(input.value.value.replace(/\D/g, '')) || 0;

    if (newValue > props.max) {
        newValue = props.max;
    }

    if (newValue < 0) {
        newValue = 0;
    }

    input.value.value = newValue.toString();
    modelValue.value = newValue.toString();
    number.value = newValue;
}

watch(
    () => number.value,
    () => {
        modelValue.value = number.value.toString();
    }
);
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.input {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #ffffff;
    border: 1px solid rgb(var(--system-beige));
    border-radius: 6px;

    height: 55px;
    width: 130px;

    padding: 0 6px;
    box-sizing: border-box;

    box-shadow: 15px 10px 15px 0 rgba(0, 0, 0, 0.05);

    &__field {
        text-align: center;
        color: rgb(var(--system-red));
        font-size: 2.4rem;
        font-weight: 700;

        width: 100%;
    }
}
</style>
