<template>
    <div class="prices">
        <PricesSection />
        <div class="prices__clouds"><CloudsRow /></div>
    </div>
</template>

<script setup lang="ts">
import CloudsRow from '@/components/shared/ui/CloudsRow.vue';
import PricesSection from '@/components/prices/PricesSection.vue';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.prices {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    &__clouds {
        position: relative;
        width: 100%;
        height: 100px;

        @media only screen and (max-width: $tablet) {
            height: 75px;
        }
    }
}
</style>
