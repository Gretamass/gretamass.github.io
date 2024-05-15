import type {
    AdditionalServiceItem,
    DecorationInfo,
    DecorationItem,
    FoodItem,
    PricesStoreState
} from '@/stores/prices/models/interfaces';
import { defineStore } from 'pinia';
import { Service } from '@/stores/main/models/enumerators';
import {
    MealPackageSize,
    MealType,
    PriceCalcItem,
    ServicePriceType
} from '@/stores/prices/models/enumerators';
import birthdayImage from '@/assets/images/birthdayImage.webp';
import christeningImage from '@/assets/images/christeningImage.webp';
import partyImage from '@/assets/images/partyImage.webp';
import foodBuffet from '@/assets/images/calc/foodBuffet.webp';
import foodKids from '@/assets/images/calc/foodKids.webp';
import foodBanquet from '@/assets/images/calc/foodBanquet.webp';
import gileMileImage from '@/assets/images/gileMile.webp';
import alkavaImage from '@/assets/images/alkava.webp';
import type { Decoration } from '@/stores/decorations/models/interfaces';
import type { AdditionalService } from '@/stores/additionalServices/models/interfaces';
import type { SERVICES } from '@/stores/additionalServices/models/enumerators';
import type { Meal } from '@/stores/food/models/interfaces';
import { DESERTS_TYPE, MEALS } from '@/stores/food/models/enumerators';
import { useFoodStore } from '@/stores/food/foodStore';

export const usePricesStore = defineStore('prices', {
    state: (): PricesStoreState => ({
        pricesInfo: {
            [Service.BIRTHDAY]: {
                service: Service.BIRTHDAY,
                hash: 'vaiku-gimtadieniai',
                title: 'Vaikų gimtadienis',
                callToAction: 'Plačiau apie gimtadienius',
                image: birthdayImage,
                defaultTime: '2.5 val.',
                defaultPriceType: ServicePriceType.WEEKDAY_PRICE,
                prices: [
                    { type: ServicePriceType.WEEKDAY_PRICE, price: 119, title: 'I - IV' },
                    { type: ServicePriceType.WEEKEND_PRICE, price: 139, title: 'V - VII' },
                    {
                        type: ServicePriceType.ADDITIONAL_HALF_HOUR,
                        price: 34,
                        title: 'Papildomos 30 min.'
                    },
                    {
                        type: ServicePriceType.ADDITIONAL_HOUR,
                        price: 49,
                        title: 'Papildoma 1 val.'
                    }
                ]
            },
            [Service.CHRISTENINGS]: {
                service: Service.CHRISTENINGS,
                hash: 'krikstynu-studija-kaune',
                title: 'Krikštynos',
                callToAction: 'Plačiau apie krikštynas',
                image: christeningImage,
                defaultTime: '4 val.',
                defaultPriceType: ServicePriceType.WEEK_PRICE,
                prices: [
                    { type: ServicePriceType.WEEK_PRICE, price: 199, title: 'I - VII' },
                    {
                        type: ServicePriceType.ADDITIONAL_HALF_HOUR,
                        price: 34,
                        title: 'Papildomos 30 min.'
                    },
                    {
                        type: ServicePriceType.ADDITIONAL_HOUR,
                        price: 49,
                        title: 'Papildoma 1 val.'
                    }
                ]
            },
            [Service.PARTY]: {
                service: Service.PARTY,
                hash: 'mamyciu-teveliu-seneliu-gimtadieniai',
                title: 'Mamyčių, tėvelių, senelių gimtadieniai',
                callToAction: 'Plačiau apie šventes',
                image: partyImage,
                defaultTime: '4 val.',
                defaultPriceType: ServicePriceType.WEEK_PRICE,
                prices: [
                    { type: ServicePriceType.WEEK_PRICE, price: 199, title: 'I - VII' },
                    {
                        type: ServicePriceType.ADDITIONAL_HOUR_BEFORE_MIDNIGHT,
                        price: 49,
                        title: 'Papildoma 1 val. iki 24h.'
                    },
                    {
                        type: ServicePriceType.ADDITIONAL_HOUR_AFTER_MIDNIGHT,
                        price: 69,
                        title: 'Papildoma 1 val. po 24h.'
                    }
                ]
            }
        },
        food: {
            [Service.BIRTHDAY]: {
                meals: {
                    [MealPackageSize.SMALL]: {
                        minPeople: 0,
                        maxPeople: 20,
                        price: 119,
                        includes: ['Vaikų meniu', 'Suaugusių meniu', '„Dėžučio” desertai']
                    },
                    [MealPackageSize.MEDIUM]: {
                        minPeople: 21,
                        maxPeople: 30,
                        price: 177,
                        includes: ['Vaikų meniu', 'Suaugusių meniu', '„Dėžučio” desertai']
                    },
                    [MealPackageSize.LARGE]: {
                        minPeople: 31,
                        maxPeople: 40,
                        price: 236,
                        includes: ['Vaikų meniu', 'Suaugusių meniu', '„Dėžučio” desertai']
                    },
                    [MealPackageSize.EXTRA_LARGE]: {
                        minPeople: 41,
                        maxPeople: Infinity,
                        price: 295,
                        includes: ['Vaikų meniu', 'Suaugusių meniu', '„Dėžučio” desertai']
                    }
                },
                deserts: [
                    {
                        type: 'Desertinė „Alkava”',
                        contacts: {
                            email: 'info@alkava.lt',
                            phone: '8 656 53 333'
                        }
                    },
                    {
                        type: 'Tortinė „Gilė Milė”',
                        contacts: {
                            email: 'vaiva@gilemile.lt',
                            phone: '8 687 84 350'
                        }
                    },
                    {
                        type: 'Turėsime savo desertų',
                        pricePerPerson: 0.5
                    },
                    {
                        type: 'Nereikia papildomų desertų'
                    }
                ]
            },
            [Service.CHRISTENINGS]: {
                meals: {
                    [MealType.CHILDREN]: {
                        image: foodKids,
                        pricePerPerson: 13,
                        includes: ['Karšti patiekalai', '„Dėžučio” desertai']
                    },
                    [MealType.ADULTS]: {
                        banquet: {
                            image: foodBanquet,
                            pricePerPerson: 39,
                            includes: [
                                'Svečių sutikimo užkandžiai',
                                'Šalti patiekalai',
                                'Karšti patiekalai'
                            ]
                        },
                        buffet: {
                            image: foodBuffet,
                            pricePerPerson: 36,
                            includes: ['Užkandžiai', 'Salotos'],
                            tableClothPerUnit: 6
                        }
                    }
                },
                deserts: [
                    {
                        type: 'Desertinė „Alkava”',
                        image: alkavaImage,
                        contacts: {
                            email: 'info@alkava.lt',
                            phone: '8 656 53 333'
                        }
                    },
                    {
                        type: 'Tortinė „Gilė Milė”',
                        image: gileMileImage,
                        contacts: {
                            email: 'vaiva@gilemile.lt',
                            phone: '8 687 84 350'
                        }
                    }
                ]
            },
            [Service.PARTY]: {
                meals: {
                    [MealType.ADULTS]: {
                        type: MealType.ADULTS,
                        banquet: {
                            pricePerPerson: 39,
                            includes: [
                                'Svečių sutikimo užkandžiai',
                                'Pirmasis patiekalas',
                                'Antrasis patiekalas'
                            ],
                            menu: {
                                appetizers: [
                                    { title: 'Tortilijos traškutis su lašišos seviče' },
                                    {
                                        title: 'Karališka krevetė traškia panko plutele su sweet chilli padažu'
                                    },
                                    {
                                        title: 'Sviestiniai kruasanai su pesto padažu ir vytintu kumpiu'
                                    },
                                    {
                                        title: 'Crostini su ricotos sūriu, naminiais karamelizuotais svogūnais ir figa'
                                    },
                                    {
                                        title: 'Užkandžių rinkinukai: mėlynasis pelėsinis sūris, brie sūris, alyvuogės, vynuogės, saliami dešra, marinuoti agurkėliai, tarškios naminės lazdelės su parmezano sūriu'
                                    }
                                ],
                                appetizersInfo:
                                    'Ruošiamas išvardintų vieno kąsnio užkandžių stalas svečių pasitikimui ir šventės pradžiai',
                                mainCourse: [
                                    {
                                        title: 'Plėšyta aštri BBQ vištiena traškiama krepšelyje, pateikiama su meksikietiško stiliaus daržovėmis - pupelėmis, kukurūzais, pomidorų salsa (galima rinktis ir ne aštriai)'
                                    },
                                    {
                                        title: 'Salotos su burata ir keptomis paprikomis, pateikiama su švelniu pesto padažu'
                                    },
                                    {
                                        title: 'Naminės sūdytos lašišos užkandis su keptomis bulvytėmis'
                                    },
                                    {
                                        title: 'Salotos su keptu ožkos sūriu ir burokėlių triufeliais'
                                    }
                                ],
                                mainCourseInfo:
                                    'Prašome pasirinkti ne daugiau kaip 2 skirtingas patiekalų rūšis',
                                secondCourse: [
                                    {
                                        title: 'Vištienos file su itališka daržovių caponata bei grietinėlės, špinatų ir parmezano sūrio padažu'
                                    },
                                    {
                                        title: 'Traškus vištienos suktinukas su saulėje džiovintais pomidorais, žirnelių pure ir šviežiai keptomis prancūziškomis bulvytėmis'
                                    },
                                    {
                                        title: 'Sous vide būdu kepta kiaulienos sprandinė su šparagų-žirnelių garnyru, keptomis bulvytėmis ir batatų griežinėliais, patiekiama su garstyčių grietinėlės padažu'
                                    },
                                    {
                                        title: 'Kepta sterko file, marinuota sviesto ir žolelių marinate, pateikiama su kokosine moliūgų piure, žiedinių kopūstų ir brokolių kroketais'
                                    },
                                    {
                                        title: 'Ravioli su ricotos sūriu ir špinatais, pateikiama su sviesto padažu ir skrudintais riešutais'
                                    }
                                ],
                                secondCourseInfo:
                                    'Prašome pasirinkti ne daugiau kaip 2 skirtingas patiekalų rūšis'
                            }
                        }
                    },
                    [MealType.CHILDREN]: {
                        type: MealType.CHILDREN,
                        pricePerPerson: 13,
                        includes: ['Karštas patiekalas', 'Saldumynas gardumynas'],
                        menu: {
                            mainCourse: [
                                { title: 'Daržovių tyrelė su ekologiška vištiena' },
                                {
                                    title: 'Vištienos maltinukai su bulvių ir pastarnokų koše, garintomis daržovėmis'
                                },
                                {
                                    title: 'Vištienos kepsneliai „Nuggets” su traškiomis prancūziškomis bulvytėmis „Fri” ir šviežiomis daržovių lazdelėmis'
                                },
                                {
                                    title: 'Jautienos mėsainis su sūriu ir traškiomis prancūziškomis bulvytėmis „Fri”'
                                },
                                { title: 'Belgiški vafliai' },
                                {
                                    title: 'Pica su sūriu / su sūriu ir kumpiu / su sūriu, kumpiu ir pievagrybiais / su sūriu ir vištiena / su sūriu, kumpiu ir ananasais',
                                    info: 'užsakoma ne mažiau 10 picų'
                                }
                            ],
                            mainCourseInfo:
                                'Rekomenduojame pasirinkti vienos rūšies karštus patiekalus vaikams.',
                            deserts: [],
                            desertsInfo: 'Prašome pasirinkti vienos rūšies desertus vaikams.'
                        }
                    }
                },
                deserts: [
                    {
                        type: 'Desertinė „Alkava”',
                        contacts: {
                            email: 'info@alkava.lt',
                            phone: '8 656 53 333'
                        }
                    },
                    {
                        type: 'Tortinė „Gilė Milė”',
                        contacts: {
                            email: 'vaiva@gilemile.lt',
                            phone: '8 687 84 350'
                        }
                    }
                ]
            }
        },
        decorations: {
            [Service.BIRTHDAY]: [
                {
                    type: 'Reikia dekoracijų',
                    pricePerPerson: 15,
                    description:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    type: 'Nereikia dekoracijų, turėsime savo',
                    pricePerPerson: 0
                }
            ],
            [Service.CHRISTENINGS]: [
                {
                    type: 'Mergaitė',
                    pricePerPerson: 8,
                    includes: [
                        'Sienelė fotosesijai',
                        'LED užrašas „Krikštynos“',
                        'Helio balionai 18 vnt',
                        'Gėlės',
                        'Žvakės'
                    ]
                },
                {
                    type: 'Berniukas',
                    pricePerPerson: 8,
                    includes: [
                        'Sienelė fotosesijai',
                        'LED užrašas „Krikštynos“',
                        'Helio balionai 18 vnt',
                        'Gėlės',
                        'Žvakės'
                    ]
                },
                {
                    type: 'Personalizuotas',
                    pricePerPerson: 15,
                    description:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    type: 'Dekoracijų nereikia, turėsime savo',
                    pricePerPerson: 0
                }
            ],
            [Service.PARTY]: [
                {
                    type: 'Reikia dekoracijų',
                    pricePerPerson: 15,
                    description:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    type: 'Nereikia dekoracijų, turėsime savo',
                    pricePerPerson: 0
                }
            ]
        },
        additionalServices: {
            [Service.BIRTHDAY]: [
                {
                    title: 'Animatorius',
                    description:
                        'Ilgai lauktas momentas atėjo šiandien – mylimiausias personažas aplankys ypatingiausią dieną!',
                    startingPrice: 89
                },
                {
                    title: 'Fotografas',
                    description: 'Rekomanduojame šį fotografą',
                    recommendation: {
                        name: 'Donatas Zaščiurinskas',
                        contact: 'https://dz-foto.lt/'
                    }
                }
            ],
            [Service.CHRISTENINGS]: [
                {
                    title: 'Animatorius',
                    description:
                        'Ilgai lauktas momentas atėjo šiandien – mylimiausias personažas aplankys ypatingiausią dieną!',
                    startingPrice: 89
                },
                {
                    title: 'Fotografas',
                    description: 'Rekomanduojame šį fotografą',
                    recommendation: {
                        name: 'Donatas Zaščiurinskas',
                        contact: 'https://dz-foto.lt/'
                    }
                }
            ],
            [Service.PARTY]: [
                {
                    title: 'Fotografas',
                    description: 'Rekomanduojame šį fotografą',
                    recommendation: {
                        name: 'Donatas Zaščiurinskas',
                        contact: 'https://dz-foto.lt/'
                    }
                },
                {
                    title: 'DJ',
                    description: 'Kreipkitės į administraciją'
                },
                {
                    title: 'Animatorius',
                    description:
                        'Ilgai lauktas momentas atėjo šiandien – mylimiausias personažas aplankys ypatingiausią dieną!',
                    startingPrice: 89
                }
            ]
        },
        selected: {
            [PriceCalcItem.PARTY_TYPE]: {
                type: Service.BIRTHDAY,
                title: 'Vaikų gimtadienis',
                priceType: ServicePriceType.WEEKDAY_PRICE,
                price: 119
            },
            [PriceCalcItem.PEOPLE_COUNT]: {
                childrenCount: 0,
                adultCount: 0
            },
            [PriceCalcItem.TABLE_CLOTHS]: 0,
            [PriceCalcItem.FOOD]: {
                meals: {
                    [MealType.ADULTS]: {
                        menuType: null,
                        title: '',
                        pricePerPerson: 0
                    },
                    [MealType.CHILDREN]: {
                        menuType: null,
                        title: '',
                        pricePerPerson: 0
                    },
                    [MealType.PACKAGE]: {
                        title: '',
                        price: 0
                    }
                },
                desserts: {
                    type: null,
                    title: '',
                    pricePerPerson: 0
                }
            },
            [PriceCalcItem.DECORATIONS]: {
                type: '',
                title: '',
                price: null,
                pricePerChild: null,
                additional: null
            },
            [PriceCalcItem.ADDITIONAL_SERVICE]: []
        }
    }),
    actions: {
        updateSelectedPartyType(serviceType: Service, priceType?: ServicePriceType): void {
            const { christeningKidsMeal, partyAdultsMeal, partyKidsMeal } = useFoodStore();
            const service = Object.values(this.pricesInfo).find(
                (serviceItem) => serviceItem.service === serviceType
            );

            if (this.selectedPartyType !== serviceType) {
                this.clearSelectedObject();
            }

            const servicePriceType =
                priceType ||
                this.selected[PriceCalcItem.PARTY_TYPE].priceType ||
                service?.defaultPriceType ||
                ServicePriceType.WEEKDAY_PRICE;

            if (service) {
                const price = service.prices.find((price) => price.type === servicePriceType);

                this.selected[PriceCalcItem.PARTY_TYPE] = {
                    type: service.service,
                    title: service.title,
                    priceType: servicePriceType,
                    price: price?.price || 0
                };

                if (serviceType === Service.CHRISTENINGS) {
                    this.setSelectedMeal(christeningKidsMeal);
                }

                if (serviceType === Service.BIRTHDAY) {
                    this.setSelectedPackage();
                }

                if (serviceType === Service.PARTY) {
                    this.setSelectedMeal(partyAdultsMeal);
                    this.setSelectedMeal(partyKidsMeal);
                }
            }
        },
        updateSelectedPeopleCount(childrenCount: number, adultCount: number): void {
            this.selected[PriceCalcItem.PEOPLE_COUNT] = {
                childrenCount,
                adultCount
            };

            this.setSelectedPackage();
        },
        setSelectedMeal(meal: Meal): void {
            if (meal.type === MEALS.KIDS) {
                this.selected[PriceCalcItem.FOOD].meals[MealType.CHILDREN] = {
                    menuType: meal.type,
                    title: meal.title,
                    pricePerPerson: meal.pricePerPerson
                };

                return;
            }

            if (meal.type === MEALS.ADULTS_BANQUET || meal.type === MEALS.ADULTS_BUFFET) {
                this.selected[PriceCalcItem.FOOD].meals[MealType.ADULTS] = {
                    menuType: meal.type,
                    title: meal.title,
                    pricePerPerson: meal.pricePerPerson
                };

                return;
            }

            this.selected[PriceCalcItem.FOOD].meals[MealType.PACKAGE] = {
                title: 'Maistas',
                price: meal.price
            };
        },
        setSelectedDesserts(type: DESERTS_TYPE, title: string, pricePerPerson: number): void {
            if (this.selectedDesserts.type === type) {
                this.selected[PriceCalcItem.FOOD].desserts = {
                    type: null,
                    title: '',
                    pricePerPerson: 0
                };

                return;
            }

            this.selected[PriceCalcItem.FOOD].desserts = {
                type,
                title,
                pricePerPerson
            };
        },
        setSelectedPackage(): void {
            const { birthdayMealPackage } = useFoodStore();

            const availablePackage = Object.values(birthdayMealPackage).find((packageItem) => {
                return (
                    packageItem.minPeople <= this.peopleCount &&
                    this.peopleCount <= packageItem.maxPeople
                );
            });

            this.selected[PriceCalcItem.FOOD].meals[MealType.PACKAGE] = {
                title: 'Maistas',
                price: availablePackage.price
            };
        },
        setSelectedDecorations(decoration: Decoration): void {
            this.selected[PriceCalcItem.DECORATIONS].title = decoration.title;
            this.selected[PriceCalcItem.DECORATIONS].type = decoration.type;
            this.selected[PriceCalcItem.DECORATIONS].price = decoration.price ?? null;
            this.selected[PriceCalcItem.DECORATIONS].pricePerChild =
                decoration.pricePerChild ?? null;
        },
        addAdditionalDecoration(item: { title: string; price: number } | null): void {
            this.selected[PriceCalcItem.DECORATIONS].additional = item;
        },
        setSelectedAdditionalService(service: AdditionalService): void {
            this.selected[PriceCalcItem.ADDITIONAL_SERVICE].push({
                type: service.type,
                title: service.title,
                price: service.startingPrice || 0
            });
        },
        setTableClothsCount(count: number): void {
            this.selected[PriceCalcItem.TABLE_CLOTHS] = count;
        },
        removeSelectedAdditionalService(serviceType: SERVICES): void {
            const serviceIndex = this.selectedAdditionalService.findIndex(
                (serviceItem) => serviceItem.type === serviceType
            );

            if (serviceIndex > -1) {
                this.selected[PriceCalcItem.ADDITIONAL_SERVICE].splice(serviceIndex, 1);
            }
        },
        clearSelectedObject(): void {
            this.selected = {
                [PriceCalcItem.PARTY_TYPE]: {
                    type: null,
                    title: '',
                    priceType: null,
                    price: 0
                },
                [PriceCalcItem.PEOPLE_COUNT]: {
                    childrenCount: 0,
                    adultCount: 0
                },
                [PriceCalcItem.TABLE_CLOTHS]: 0,
                [PriceCalcItem.FOOD]: {
                    meals: {
                        [MealType.ADULTS]: {
                            menuType: null,
                            title: '',
                            pricePerPerson: 0
                        },
                        [MealType.CHILDREN]: {
                            menuType: null,
                            title: '',
                            pricePerPerson: 0
                        },
                        [MealType.PACKAGE]: {
                            title: '',
                            price: 0
                        }
                    },
                    desserts: {
                        title: '',
                        pricePerPerson: 0
                    }
                },
                [PriceCalcItem.DECORATIONS]: {
                    type: '',
                    title: '',
                    price: null,
                    pricePerChild: null,
                    additional: null
                },
                [PriceCalcItem.ADDITIONAL_SERVICE]: []
            };
        }
    },
    getters: {
        childrenCount(state: PricesStoreState): number {
            return state.selected[PriceCalcItem.PEOPLE_COUNT].childrenCount;
        },
        adultsCount(state: PricesStoreState): number {
            return state.selected[PriceCalcItem.PEOPLE_COUNT].adultCount;
        },
        peopleCount(): number {
            return this.childrenCount + this.adultsCount;
        },
        selectedPeopleCountTitle(): string {
            if (this.selectedPartyType === Service.PARTY) {
                return this.childrenCount || this.adultsCount
                    ? `${this.adultsCount} suaugusieji ir ${this.childrenCount} vaikai`
                    : '';
            }
            return this.childrenCount || this.adultsCount
                ? `${this.childrenCount} vaikai ir ${this.adultsCount} tėveliai`
                : '';
        },
        selectedParty(state: PricesStoreState) {
            return state.selected[PriceCalcItem.PARTY_TYPE];
        },
        selectedPartyType(state: PricesStoreState): Service | null {
            return state.selected[PriceCalcItem.PARTY_TYPE].type;
        },
        selectedPartyTypeName(): string {
            return this.selectedParty
                ? `${this.selectedParty.title} ${this.selectedParty.price} €`
                : '';
        },
        selectedDesserts(state) {
            return state.selected[PriceCalcItem.FOOD].desserts;
        },
        selectedDessertsTitle(): string {
            return this.selectedDesserts?.title
                ? `${this.selectedDesserts.title}  ${this.selectedDecorations.pricePerPerson * this.peopleCount} €`
                : '';
        },
        selectedDecorationTitle(): string {
            let price = 0;

            if (
                this.selectedDecorations.additional === null &&
                this.selectedDecorations.pricePerChild === null &&
                this.selectedDecorations.price === null
            ) {
                return '';
            }

            if (this.selectedDecorations.pricePerChild) {
                price = this.selectedDecorations.pricePerChild * this.childrenCount;
            } else if (this.selectedDecorations.price) {
                price = this.selectedDecorations.price;
            }

            if (this.selectedDecorations.additional?.price) {
                price = price + this.selectedDecorations.additional.price;
            }

            return `Dekoracijos ${price} €`;
        },
        selectedAdditionalServiceTitle(): string {
            if (!this.selectedAdditionalService.length) {
                return '';
            }

            let title = '';

            this.selectedAdditionalService.forEach((service) => {
                if (!title) {
                    title = `${service.title} ${service.price} €`;

                    return;
                }

                title = title + ', ' + `${service.title} ${service.price} €`;
            });

            return title;
        },
        serviceDecorationList(state: PricesStoreState): DecorationInfo[] | null {
            return this.selectedPartyType ? state.decorations[this.selectedPartyType] : null;
        },
        additionalServiceList(state: PricesStoreState): AdditionalService[] | null {
            return this.selectedPartyType ? state.additionalServices[this.selectedPartyType] : null;
        },
        selectedDecorations(state: PricesStoreState): DecorationItem {
            return state.selected[PriceCalcItem.DECORATIONS];
        },
        selectedAdditionalService(state: PricesStoreState): AdditionalServiceItem[] {
            return state.selected[PriceCalcItem.ADDITIONAL_SERVICE];
        },
        selectedAdditionalServiceList(state: PricesStoreState): SERVICES[] {
            return state.selected[PriceCalcItem.ADDITIONAL_SERVICE].map((service) => service.type);
        },
        selectedFood(state: PricesStoreState): FoodItem {
            return state.selected[PriceCalcItem.FOOD];
        },
        selectedFoodTitle(): string {
            let title = '';
            let desserts = '';
            let tableCloth = '';

            if (this.selectedFood.desserts.pricePerPerson) {
                const dessertsPrice = this.selectedFood.desserts.pricePerPerson * this.peopleCount;

                if (Number.isInteger(dessertsPrice)) {
                    desserts = `. Desertai ${dessertsPrice} €`;
                } else {
                    desserts = `. Desertai ${dessertsPrice.toFixed(2)} €`;
                }
            }

            // if (
            //     this.selected[PriceCalcItem.FOOD].meals[MealType.ADULTS].menuType ===
            //     MEALS.ADULTS_BUFFET
            // ) {
            //     tableCloth = `. Staltiesės ${this.selected[PriceCalcItem.TABLE_CLOTHS] * 6} €`;
            // }

            if (this.selectedFood.meals[MealType.PACKAGE].price) {
                title = `Maistas ${this.selectedFood.meals[MealType.PACKAGE].price} €`;
            }

            if (this.selectedPartyType === Service.PARTY) {
                title = `Maistas suaugusiems ${this.selectedFood.meals[MealType.ADULTS].pricePerPerson * this.adultsCount} € ir vaikams ${this.selectedFood.meals[MealType.CHILDREN].pricePerPerson * this.childrenCount} €`;

                return title + tableCloth + desserts;
            }

            if (this.selectedFood.meals[MealType.CHILDREN].title) {
                title = `Maistas vaikams ${this.selectedFood.meals[MealType.CHILDREN].pricePerPerson * this.childrenCount} €`;
            }

            if (this.selectedFood.meals[MealType.ADULTS].title) {
                title =
                    title +
                    ` ir tėveliams ${this.selectedFood.meals[MealType.ADULTS].pricePerPerson * this.adultsCount} €`;
            }

            return title + tableCloth + desserts;
        },
        serviceFoodList(state: PricesStoreState): any {
            return state.food[this.selectedPartyType];
        },
        serviceMealsList(state: PricesStoreState) {
            return this.selectedPartyType ? state.food[this.selectedPartyType].meals : null;
        },
        christeningChildrenMeals(state: PricesStoreState) {
            return state.food[Service.CHRISTENINGS].meals[MealType.CHILDREN];
        },
        christeningAdultsBuffetMeals(state: PricesStoreState) {
            return state.food[Service.CHRISTENINGS].meals[MealType.ADULTS].buffet;
        },
        christeningAdultsBanquetMeals(state: PricesStoreState) {
            return state.food[Service.CHRISTENINGS].meals[MealType.ADULTS].banquet;
        },
        christeningDeserts(state: PricesStoreState) {
            return state.food[Service.CHRISTENINGS].deserts;
        },
        tableClothsCount(state) {
            return state.selected[PriceCalcItem.TABLE_CLOTHS];
        }
    }
});
