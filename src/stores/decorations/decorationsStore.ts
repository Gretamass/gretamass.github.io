import { defineStore } from 'pinia';
import type { Decoration, DecorationsStoreState } from '@/stores/decorations/models/interfaces';
import { Service } from '@/stores/main/models/enumerators';
import { ADDITIONAL_DECORATION, DECORATION } from '@/stores/decorations/models/enumerators';
import { usePricesStore } from '@/stores/prices/pricesStore';
import decorationNoneBirthday from '@/assets/images/calc/decorationNoneBirthday.webp';
import decorationsNone from '@/assets/images/calc/decorationsNone.webp';
import decorationPreviewDefault from '@/assets/images/calc/decorationPreviewDefault.webp';
import birthdayBallonArch from '@/assets/images/calc/birthdayBallonArch.webp';
import birthdayHeliumBallons from '@/assets/images/calc/birthdayHeliumBallons.webp';
import christeningHeliumBallons from '@/assets/images/calc/christeningHeliumBallons.webp';
import birthdayIndividualDecor from '@/assets/images/calc/birthdayIndividualDecor.webp';
import decorationChristening from '@/assets/images/calc/decorationChristening.webp';
import decorationAdults from '@/assets/images/calc/decorationAdults.webp';
import decorationChristeningIndividual from '@/assets/images/calc/decorationChristeningIndividual.webp';
import decorationTheme from '@/assets/images/calc/decorationTheme.webp';

export const useDecorationsStore = defineStore('decorations', {
    state: (): DecorationsStoreState => ({
        [Service.CHRISTENINGS]: [
            {
                type: DECORATION.NONE,
                title: 'Nereikia papildomų dekoracijų',
                image: decorationsNone,
                price: 0,
                description:
                    'Užteks „Dėžučio“ šventinio stalų dekoro arba dekoruosime patys.\n' +
                    'Šventinis „Dėžučio“ dekoras: lėkštės, stiklinės, įrankiai, servetėlės, tortinės, vazelės, žvakidės ir kiti derantys indai pagal užsakytus patiekalus.\n'
            },
            {
                type: DECORATION.DEFAULT,
                title: 'Dekoracijos',
                image: decorationChristening,
                previewImage: decorationPreviewDefault,
                price: 180,
                description:
                    'Į dekoracijas įskaičiuota saldaus stalo, foto kampelio, suaugusių stalo ir vaikų stalo dekorai.',

                includes: [
                    'Foto sienelės',
                    'Šviečiantis užrašas „Krikštynos“',
                    'Žaislai, girliandos ar kiti derantys aksesuarai foto kampeliui',
                    'Desertų staliukai',
                    'Indai desertams',
                    'Indeliai vaikų stalui: vienkartinės lėkštutės, puodeliai, servetėlės, šiaudeliai, žvakutės ir kiti priderinti stalo papuošimai',
                    'Gėlės ir žvakės suaugusių stalui'
                ]
            },
            {
                type: ADDITIONAL_DECORATION.HELIUM_BALLONS,
                title: 'Foto sienelė su helio balionais',
                image: christeningHeliumBallons,
                price: 45,
                description: ''
            },
            {
                type: ADDITIONAL_DECORATION.BALLON_ARCH,
                title: 'Foto sienelė su balionų girlianda',
                image: birthdayBallonArch,
                price: 75,
                description: ''
            },
            {
                type: DECORATION.PERSONALIZED,
                title: 'Individualus dekoras',
                image: decorationChristeningIndividual,
                price: 290,
                description:
                    'Pasirinkus individualų dekorą visos šventės išpildymas bus toks, apie kokį svajojate. Išpildysime kiekvieną Jūsų pageidavimą. '
            }
        ],
        [Service.BIRTHDAY]: [
            {
                type: DECORATION.NONE,
                title: 'Nereikia teminių ir papildomų dekoracijų',
                image: decorationNoneBirthday,
                price: 0,
                description:
                    'Užteks „Dėžučio“ šventinio stalų dekoro arba dekoruosime patys.\n' +
                    'Šventinis „Dėžučio“ dekoras: lėkštutės, stiklinės, įrankiai, servetėlės, tortinės, vazelės, žvakidės ir kiti derantys indai pagal užsakytus patiekalus.'
            },
            {
                type: DECORATION.DEFAULT,
                title: 'Teminis gimtadienis',
                image: decorationTheme,
                pricePerChild: 4,
                description:
                    'Į teminį gimtadienį įskaičiuota: vienkartinės lėkštutės, puodeliai, servetėlės, šiaudeliai, žvakutės ir kiti priderinti stalo papuošimai.',
                themes: true
            },
            {
                type: ADDITIONAL_DECORATION.HELIUM_BALLONS,
                title: 'Foto sienelė su helio balionais',
                image: birthdayHeliumBallons,
                price: 45,
                description: ''
            },
            {
                type: ADDITIONAL_DECORATION.BALLON_ARCH,
                title: 'Foto sienelė su balionų girlianda',
                image: birthdayBallonArch,
                price: 75,
                description: ''
            },
            {
                type: DECORATION.PERSONALIZED,
                title: 'Individualus dekoras',
                image: birthdayIndividualDecor,
                price: 150,
                description:
                    'Pasirinkus individualų dekorą visos šventės išpildymas bus toks, apie kokį svajojate. Galėsite rinktis ne tik šventės temą, bet ir personalizuoti gimtadienį.'
            }
        ],
        [Service.PARTY]: [
            {
                type: DECORATION.NONE,
                title: 'Nereikia dekoracijų',
                image: decorationsNone,
                price: 0,
                description:
                    'Užteks „Dėžučio“ šventinio stalų dekoro arba dekoruosime patys.\n' +
                    'Šventinis „Dėžučio“ dekoras: lėkštutės, stiklinės, įrankiai, servetėlės, tortinės, vazelės, žvakidės ir kiti derantys indai pagal užsakytus patiekalus.'
            },
            {
                type: DECORATION.DEFAULT,
                title: 'Reikia dekoracijų',
                image: decorationAdults,
                price: 150,
                description:
                    'Pasirinkus individualų dekorą visos šventės išpildymas bus toks, apie kokį svajojate. Nuo dekoro gėlėmis iki gražiausių foto kampelių - Išpildysime kiekvieną Jūsų pageidavimą!'
            }
        ]
    }),
    actions: {
        updateSelectedDecoration(type: DECORATION, serviceType: Service): void {
            const { setSelectedDecorations } = usePricesStore();

            const decoration = this[serviceType].find((decoration) => decoration.type === type);

            if (decoration) {
                setSelectedDecorations(decoration);
            }
        },
        getServiceDecorations(serviceType: Service): Decoration[] {
            return this[serviceType];
        }
    },
    getters: {
        christeningDecorations(state): Decoration[] {
            return state[Service.CHRISTENINGS];
        },
        birthdayDecorations(state): Decoration[] {
            return state[Service.BIRTHDAY];
        },
        partyDecorations(state): Decoration[] {
            return state[Service.PARTY];
        }
    }
});
