<template>
    <div class="contacts">
        <ContactsSection />
        <div class="contacts__clouds"><CloudsRow /></div>
    </div>
</template>

<script setup lang="ts">
import CloudsRow from '@/components/shared/ui/CloudsRow.vue';
import ContactsSection from '@/components/contacts/ContactsSection.vue';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.contacts {
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
