<template>
    <div class="page">
        <!--        <div class="page__sidebar">-->
        <!--            <Sidebar />-->
        <!--        </div>-->
        <div class="page__content">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style lang="scss">
#app {
    height: 100vh;
}

.page {
    display: flex;

    width: 100%;
    height: 100%;

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;

        width: 100%;

        overflow: scroll;
    }
}
</style>
