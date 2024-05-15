<template>
    <div class="prices-heading">
        <MainTitleItem>Įsivertinkite savo šventės kainą</MainTitleItem>
        <h2 class="prices-heading__subtitle">
            Pasirinkite, kokią šventę švęsite, ir pamatysite, kiek apytiksliai tai gali kainuoti.
        </h2>
    </div>
</template>

<script setup lang="ts">
import MainTitleItem from '@/components/shared/ui/MainTitleItem.vue';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.prices-heading {
    display: flex;
    flex-direction: column;

    margin-top: $default-margin;

    &__subtitle {
        font-size: 1.6rem;
        text-align: center;
        margin-bottom: 30px;
        font-weight: 300;
    }
}
</style>
