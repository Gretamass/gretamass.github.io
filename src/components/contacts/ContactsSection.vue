<template>
    <div class="contacts__wrapper">
        <div class="contacts">
            <TitleItem>Kontaktai</TitleItem>
            <SubtitleItem>Turite klausimų? Norite savo šventę surengti „Dėžutyje”?</SubtitleItem>
            <div class="contacts__content content">
                <div class="content__info info">
                    <div class="info__title">Susisiekime</div>
                    <div class="info__text">
                        Mes esame visada pasiruošę Jums padėti bei patarti. Parašykite arba
                        paskambinkite mums ir atsakysime į visus Jums rūpimus klausimus.
                    </div>
                    <div class="info__subtitle">Kontaktai</div>
                    <a href="mailto: labas@dezutis.lt">
                        <div class="info__contact-info">labas@dezutis.lt</div>
                    </a>
                    <a href="tel: +370 699 87781">
                        <div class="info__contact-info">+370 699 87781</div>
                    </a>
                </div>
                <form
                    action="https://formsubmit.co/19fde75f4c1f7d485521aee542baddee"
                    method="POST"
                    class="content__form form"
                >
                    <input type="hidden" name="_next" value="https://dezutis.lt" />
                    <div class="form__item item">
                        <div class="item__label">Vardas</div>
                        <input class="item__input" name="Vardas" required />
                    </div>
                    <div class="form__item item">
                        <div class="item__label">El. paštas</div>
                        <input class="item__input" name="Paštas" required />
                    </div>
                    <div class="form__item item">
                        <div class="item__label">Jūsų žinutė</div>
                        <textarea
                            class="item__input item__input--textarea"
                            name="Žinutė"
                            required
                        />
                    </div>
                    <SimpleButton class="form__button">Siųsti</SimpleButton>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SimpleButton from '@/components/shared/ui/SimpleButton.vue';
import TitleItem from '@/components/shared/ui/TitleItem.vue';
import SubtitleItem from '@/components/shared/ui/SubtitleItem.vue';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.contacts {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: $default-margin 0 200px;

    @include max-page-width();
    @include default-side-padding();

    @media only screen and (max-width: $tablet) {
        margin-bottom: 150px;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        background: rgb(var(--secondary-background));
    }
}

.content {
    display: flex;
    gap: 25px;

    background-color: #ffffff;
    border-radius: 20px;

    padding: 30px 42px;

    @media only screen and (max-width: $tablet) {
        flex-direction: column;
    }

    a {
        width: fit-content;
    }
}

.info {
    flex: 1;
    display: flex;
    flex-direction: column;

    &__title {
        font-size: 3rem;
        font-weight: 600;
        margin-bottom: 16px;

        @media only screen and (max-width: $tablet) {
            font-size: 2.4rem;
        }
    }

    &__subtitle {
        font-size: 2.1rem;
        font-weight: 600;
        margin-bottom: 18px;

        @media only screen and (max-width: $tablet) {
            font-size: 1.8rem;
        }
    }

    &__text {
        font-size: 1.6rem;
        font-weight: 300;
        margin-bottom: 30px;
    }

    &__contact-info {
        font-size: 1.6rem;
        font-weight: 300;
        margin-bottom: 12px;
        text-decoration: underline;
    }
}

.form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex: 1;

    &__button {
        width: 100%;
    }
}

.item {
    width: 100%;

    margin-bottom: 18px;

    &__label {
        font-size: 1.4rem;
        font-weight: 300;
        margin-bottom: 6px;
    }

    &__input {
        width: 100%;
        padding: 10px;
        border: 1px solid rgb(var(--system-beige));
        border-radius: 3px;

        &--textarea {
            min-height: 70px;
            resize: vertical;
        }
    }
}

.required {
    font-size: 1.2rem;
    color: rgb(var(--system-red));
    padding-left: 5px;
}
</style>
