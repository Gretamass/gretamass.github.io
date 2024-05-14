<template>
    <div class="sidebar">
        <div class="sidebar__header header">
            <div class="header__title">Daily meal</div>
        </div>
        <div class="sidebar__navigation">
            <Button
                :variant="route.name === Route.MENU ? 'default' : 'ghost'"
                class="w-full justify-start gap-4 transition ease-in-out"
                @click="goToPage(Route.MENU)"
            >
                <Utensils />
                <p class="text-sm">Maisto meniu</p>
            </Button>
        </div>
        <div class="sidebar__footer footer">
            <div class="footer__title">Greta Masiulyte</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Utensils } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { useRoute } from 'vue-router';
import router, { Route } from '@/router';

const route = useRoute();

function goToPage(routeName: Route): void {
    router.push({ name: routeName });
}
</script>

<style scoped lang="scss">
.sidebar {
    display: flex;
    flex-direction: column;

    width: 250px;
    height: 100%;

    overflow: hidden;

    padding: 24px 16px;
    box-sizing: border-box;

    &__navigation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 12px;
    }
}

.header {
    display: flex;
    align-items: center;

    width: 100%;

    margin-bottom: 18px;

    &__title {
        font-size: 1.9rem;
        white-space: nowrap;
    }
}

.footer {
    margin-top: auto;
    font-size: 1.4rem;
}
</style>
