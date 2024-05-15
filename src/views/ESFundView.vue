<template>
    <div class="es__wrapper">
        <div class="es">
            <TitleItem>ES parama</TitleItem>
            <img :src="esImage" alt="europos sajungos parama" />
            <div class="es__info">
                <div class="es__title">UAB BALTIC CONCEPT e. komercijos modelio diegimas</div>
                <div class="es__title">Nr. 13.1.1-LVPA-K-860-01-0633</div>
                <div class="es__text">
                    <strong>Priemonė:</strong> 13.1.1-LVPA-K-860 E. komercijos modelis COVID-19
                </div>
                <div class="es__text"><strong>Projekto vertė:</strong> 66.550 EUR</div>
                <div class="es__text"><strong>Skirtas finansavimas:</strong> 49.912,50 EUR</div>
                <div class="es__text">
                    UAB BALTIC CONCEPT (www.dezutis.lt) valdo žaidimų kambarį, organizuoja įvairius
                    renginius, atlieka dekoracijas, teikia maitinimo paslaugas. Įmonė ženkliai
                    nukentėjo nuo COVID19 pandemijos ir ieško plėtros krypčių ir papildomų pajamų
                    šaltinių.
                </div>
                <div class="es__text">
                    Tam stipriai pasitarnaus renginių rezervacijos ir savitarnos sistema, kurios
                    sukūrimas yra pagrindinis šio projekto tikslas. Sistema apims dvi pirkėjų
                    grupes: B2B renginių pirkėjus (renginių organizatorius) ir B2C (renginių
                    užsakovus pavienius asmenis).
                </div>
                <div class="es__text">
                    Sistema įgalins daugiau pardavimų, nes leis klientams paprasčiau rezervuoti
                    renginius. Ji įgalins naujas įmonės paslaugų įgyvendinimą. Ji ženkliai pagerins
                    klientų aptarnavimą ir iš to kylančius pakartotinius užsakymus.
                </div>
                <div class="es__text">
                    IT sprendimas bus kuriamas pasitelkiant išorės IT kompaniją.
                </div>
                <div class="es__text">Projekto įgyvendinimo trukmė – 12 mėn.</div>
                <div class="es__text">Finansuojama iš Europos regioninės plėtros fondo.</div>
                <div class="es__text">
                    Finansuojama kaip Sąjungos atsako į COVID-19 pandemiją priemonė.
                </div>
                <div class="es__text">Projekto vykdytojas:</div>
                <div class="es__text"><strong>UAB BALTIC CONCEPT</strong></div>
            </div>
            <img :src="esImage" alt="europos sajungos parama" />
            <div class="es__info">
                <div class="es__title">
                    UAB BALTIC CONCEPT netechnologinių dizaino inovacijų kūrimas ir diegimas
                </div>
                <div class="es__title">Nr. 13.1.1-LVPA-K-861-01-0557</div>
                <div class="es__text"><strong>Priemonė:</strong> Kūrybiniai čekiai COVID-19</div>
                <div class="es__text"><strong>Projekto vertė:</strong> 58.400 EUR</div>
                <div class="es__text"><strong>Skirtas finansavimas:</strong> 43.800 EUR</div>
                <div class="es__text">
                    UAB BALTIC CONCEPT (www.dezutis.lt) valdo žaidimų kambarį, organizuoja įvairius
                    renginius, atlieka dekoracijas, teikia maitinimo paslaugas. Įmonė ženkliai
                    nukentėjo nuo COVID19 pandemijos ir ieško plėtros krypčių ir papildomų pajamų
                    šaltinių.
                </div>
                <div class="es__text">
                    Šio projekto metu planuojama sukurti dvi naujas paslaugų grupes, kurių
                    pardavimas įmonei generuos ženkliai didesnes ir pastovias pajamas:
                </div>
                <div class="es__text">1. Nuolatiniai užsiėmimai vaikų grupėms;</div>
                <div class="es__text">2. Išvykstamųjų renginių organizavimo paslauga.</div>
                <div class="es__text">
                    Dizaino sprendimas bus kuriamas pasitelkiant išorės dizaino kompaniją.
                </div>
                <div class="es__text">Projekto įgyvendinimo trukmė- 12 mėn.</div>
                <div class="es__text">Finansuojama iš Europos regioninės plėtros fondo.</div>
                <div class="es__text">
                    Finansuojama kaip Sąjungos atsako į COVID-19 pandemiją priemonė.
                </div>
                <div class="es__text">Projekto vykdytojas:</div>
                <div class="es__text"><strong>UAB BALTIC CONCEPT</strong></div>
            </div>
        </div>
        <div class="es__clouds"><CloudsRow /></div>
    </div>
</template>

<script setup lang="ts">
import esImage from '@/assets/images/es_parama.webp';
import CloudsRow from '@/components/shared/ui/CloudsRow.vue';
import TitleItem from '@/components/shared/ui/TitleItem.vue';
</script>

<style scoped lang="scss">
@use '@/assets' as *;

.es {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @include max-page-width();
    @include default-side-padding();

    margin: 50px 0 150px;

    &__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;

        background-image: linear-gradient(180deg, #ffffff, #f9f5f0);
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__title {
        font-size: 1.6rem;
        font-weight: 500;
    }

    &__text {
        font-size: 1.6rem;
    }

    &__clouds {
        position: relative;
        width: 100%;
        height: 100px;

        background-color: #fff;

        @media only screen and (max-width: $tablet) {
            height: 75px;
        }
    }
}

strong {
    font-weight: 600;
}

img {
    max-width: 450px;
}
</style>
