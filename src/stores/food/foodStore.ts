import { defineStore } from 'pinia';
import { Service } from '@/stores/main/models/enumerators';
import alkavaImage from '@/assets/images/alkava.webp';
import gileMileImage from '@/assets/images/gileMile.webp';
import { MEALS, MENU_TYPES } from '@/stores/food/models/enumerators';
import type { Deserts, FoodStoreState, Meal } from '@/stores/food/models/interfaces';
import foodBuffet from '@/assets/images/calc/foodBuffet.webp';
import foodKids from '@/assets/images/calc/foodKids.webp';
import foodBanquet from '@/assets/images/calc/foodBanquet.webp';
import secondCource from '@/assets/images/calc/secondCource.webp';
import adultSalads from '@/assets/images/calc/adultSalads.webp';
import dessertsImage from '@/assets/images/menu/desserts.webp';
import kidsChristeningDesserts from '@/assets/images/menu/kidsChristeningDesserts.webp';
import kidsMainCourseImage from '@/assets/images/menu/kidsMainCourse.webp';
import kidsAppetizers from '@/assets/images/menu/kidsAppetizers.webp';
import appetizersImage from '@/assets/images/menu/appetizers.webp';
import drinksImage from '@/assets/images/drinks.webp';
import { usePricesStore } from '@/stores/prices/pricesStore';
import { MealPackageSize, MealType } from '@/stores/prices/models/enumerators';

export const useFoodStore = defineStore('food', {
    state: (): FoodStoreState => ({
        [Service.CHRISTENINGS]: {
            meals: {
                [MEALS.KIDS]: {
                    type: MEALS.KIDS,
                    title: 'Vaikų meniu',
                    image: foodKids,
                    pricePerPerson: 13,
                    includes: [
                        { title: 'Karšti patiekalai', type: MENU_TYPES.MAIN_COURSE },
                        { title: '„Dėžučio” desertai', type: MENU_TYPES.DESERTS }
                    ]
                },
                [MEALS.ADULTS_BUFFET]: {
                    type: MEALS.ADULTS_BUFFET,
                    title: 'Švediško stalo meniu',
                    image: foodBuffet,
                    pricePerPerson: 39,
                    includes: [{ title: 'Užkandžiai ir rinkiniai', type: MENU_TYPES.APPETIZERS }],
                    tableClothPerUnit: 6
                },
                [MEALS.ADULTS_BANQUET]: {
                    type: MEALS.ADULTS_BANQUET,
                    title: 'Bendro stalo meniu',
                    image: foodBanquet,
                    pricePerPerson: 39,
                    includes: [
                        { title: 'Svečių sutikimo užkandžiai', type: MENU_TYPES.APPETIZERS },
                        { title: 'Šalti patiekalai', type: MENU_TYPES.MAIN_COURSE },
                        { title: 'Karšti patiekalai', type: MENU_TYPES.SECOND_COURSE }
                    ]
                }
            }
        },
        [Service.BIRTHDAY]: {
            meals: {
                [MealPackageSize.SMALL]: {
                    type: MealPackageSize.SMALL,
                    minPeople: 0,
                    maxPeople: 20,
                    price: 119
                },
                [MealPackageSize.MEDIUM]: {
                    type: MealPackageSize.MEDIUM,
                    minPeople: 21,
                    maxPeople: 30,
                    price: 177
                },
                [MealPackageSize.LARGE]: {
                    type: MealPackageSize.LARGE,
                    minPeople: 31,
                    maxPeople: 40,
                    price: 236
                },
                [MealPackageSize.EXTRA_LARGE]: {
                    type: MealPackageSize.EXTRA_LARGE,
                    minPeople: 41,
                    maxPeople: Infinity,
                    price: 295
                }
            }
        },
        [Service.PARTY]: {
            meals: {
                [MEALS.KIDS]: {
                    type: MEALS.KIDS,
                    title: 'Vaikų meniu',
                    image: foodKids,
                    pricePerPerson: 13,
                    includes: [
                        { title: 'Karšti patiekalai', type: MENU_TYPES.MAIN_COURSE },
                        { title: '„Dėžučio” desertai', type: MENU_TYPES.DESERTS }
                    ]
                },
                [MEALS.ADULTS_BANQUET]: {
                    type: MEALS.ADULTS_BANQUET,
                    title: 'Bendro stalo meniu',
                    image: foodBanquet,
                    pricePerPerson: 39,
                    includes: [
                        { title: 'Svečių sutikimo užkandžiai', type: MENU_TYPES.APPETIZERS },
                        { title: 'Šalti patiekalai', type: MENU_TYPES.MAIN_COURSE },
                        { title: 'Karšti patiekalai', type: MENU_TYPES.SECOND_COURSE }
                    ]
                }
            }
        },
        deserts: [
            {
                type: 'Desertinė „Alkava”',
                image: alkavaImage,
                contacts: [
                    { type: 'email', contact: 'info@alkava.lt' },
                    { type: 'phone', contact: '8 656 53 333' }
                ],
                website: 'https://alkava.lt'
            },
            {
                type: 'Tortinė „Gilė Milė”',
                image: gileMileImage,
                contacts: [
                    { type: 'email', contact: 'vaiva@gilemile.lt' },
                    { type: 'phone', contact: '8 687 84 350' }
                ],
                website: 'https://gilemile.lt'
            }
        ],
        menuInfo: {
            [Service.BIRTHDAY]: {
                [MealType.CHILDREN]: {
                    [MENU_TYPES.APPETIZERS]: {
                        title: 'Vaikų užkandžiai',
                        menu: [
                            { title: 'Traškūs vištienos rutuliukai', price: '13 € / 10 vnt' },
                            {
                                title: 'Kibinukai su kiauliena',
                                price: '13 € / 10 vnt'
                            },
                            {
                                title: 'Blyneliai su šaltyje džiovintomis uogomis',
                                price: '15 € / 10 vnt'
                            },
                            {
                                title: 'Maži kruasanai',
                                price: '11 € / 10 vnt'
                            },
                            {
                                title: 'Maži mėsainiai su vištiena',
                                price: '19 € / 10 vnt'
                            },
                            {
                                title: 'Daržovių traškučiai, spragėsiai, morkų lazdelės',
                                price: '12 € rinkinys'
                            },
                            {
                                title: 'Kukurūzų spragėsiai su karamele / šokoladu',
                                price: '3,5 € / 100 g'
                            },
                            { title: 'Sūrių spragėsių aparatas', price: '18 €' },
                            { title: 'Vaisiai indeliuose', price: '25 € / 10 indelių' }
                        ],
                        image: kidsAppetizers
                    },
                    [MENU_TYPES.MAIN_COURSE]: {
                        title: 'Karšti patiekalai',
                        menu: [
                            {
                                title: 'Traškūs vištienos kepsneliai su keptomis prancūziškomis bulvytėmis ir šviežiomis daržovėmis',
                                price: '6 € / porcija'
                            },
                            { title: 'Belgiški vafliai', price: '6 € / porcija' },
                            {
                                title: 'Amerikietiški blyneliai su šokoladu',
                                price: '6 € / porcija'
                            },
                            {
                                title: 'Vištienos maltinukai „Buratinai“ su bulvių koše ir garintomis daržovėmis',
                                price: '6 € / porcija'
                            },
                            {
                                title: 'Daržovių tyrelė su vištiena',
                                info: 'patiems mažiausiems',
                                price: '6 € / porcija'
                            },
                            {
                                title: 'Pica su sūriu / su sūriu ir kumpiu / su sūriu, kumpiu ir pievagrybiais / su sūriu ir vištiena / su sūriu, kumpiu ir ananasais',
                                info: 'užsakoma ne mažiau 10 picų',
                                price: '6 € / porcija'
                            }
                        ],
                        image: kidsMainCourseImage,
                        info: 'Vaikams užsakomi vienodi karšti patiekalai arba ne daugiau nei du skirtingi.'
                    },
                    [MENU_TYPES.DESERTS]: {
                        title: '„Dėžučio” desertai',
                        menu: [
                            { title: '„Dėžučio“ ledų tortas', price: '25 € / kg' },
                            {
                                title: 'Prancūziškų sausainių Macarons rinkinys',
                                price: '12 € / 12 vnt'
                            },
                            { title: 'Spurgų „Donuts” rinkinys', price: '18 € / 12 vnt' },
                            {
                                title: 'Belgiški vafliukai su šokoladu ir pabarstukais',
                                price: '14 € / 8 vnt'
                            },
                            {
                                title: 'Desertų rinkinys - su karamele, su šokoladinu ganašu, su raudonomis uogomis, su kokosais ir mangais',
                                price: '24 € / 8 vnt'
                            },
                            { title: 'Mažos varškės spurgytės', price: '8 € / 250 g' },
                            {
                                title: 'Naminiai ledai su saldainiais ir pabarstukais',
                                price: '3,5 € / vnt'
                            },
                            { title: 'Pieno ir ledų kokteiliai', price: '4,50 € / vnt' }
                        ],
                        image: dessertsImage
                    }
                },
                [MealType.ADULTS]: {
                    [MENU_TYPES.APPETIZERS]: {
                        title: 'Užkandžiai ir rinkiniai',
                        menu: [
                            {
                                title: 'Tortilijos traškutis su lašišos seviče',
                                price: '13 € / 10 vnt'
                            },
                            {
                                title: 'Skrudintos itališkos duonelės brusketos su saulėje džiovintais pomidorais ir mėlynuoju pelėsiniu sūriu',
                                price: '15 € / 10 vnt'
                            },
                            {
                                title: 'Croastini su karamelizuota kriauše ir mėlynuoju pelėsiniu sūriu, graikiniais riešutais ir medumi',
                                price: '14 € / 10 vnt'
                            },
                            {
                                title: 'Kruasanai su lašiša',
                                price: '19 € / 10 vnt'
                            },
                            {
                                title: 'Tortilijos suktinukai su vytintu kumpiu, sūriu „Philadelphia“ ir špinatais',
                                price: '14 € / 10 vnt'
                            },
                            {
                                title: 'Maži mėsainiai su šoninės traškučiu ir sūriu',
                                price: '19 € / 10 vnt'
                            },
                            {
                                title: 'Traškios vištienos lazdelės su saldžiu aitriųjų paprikų padažu',
                                price: '19 € / 10 vnt'
                            },
                            { title: 'Traški krevetė su kimchi majonezu', price: '16 € / 10 vnt' },
                            {
                                title: 'Kepta duona su sūrio ir kanapių padažu',
                                price: '5 € / 200 g'
                            },
                            { title: '„Spring Rolls“ su daržovėmis', price: '11 € / 10 vnt' },
                            {
                                title: 'Aštrio sūrio spurgytės su mango čatniu',
                                price: '12 € / 10 vnt'
                            },
                            {
                                title: 'Džiovinta slyva su pelėsinio sūrio kremu ir karamelizuotais graikiniais riešutais',
                                price: '13 € / 10 vnt'
                            },
                            {
                                title: 'Rūkyta skumbrė ant keptos duonelės su obuoliu ir krienų padažu',
                                price: '13 € / 10 vnt'
                            },
                            {
                                title: '„Cezario“ salotos su krevetėmis ir ančiuvių padažu',
                                price: '10 € / 4 vnt'
                            },
                            { title: 'Salotos su vištiena ir riešutais', price: '10 € / 4 vnt' },
                            {
                                title: 'Graikiškos salotos su medaus - citrinų padažu',
                                price: '10 € / 4 vnt'
                            }
                        ],
                        image: appetizersImage
                    },
                    [MENU_TYPES.MAIN_COURSE]: {
                        title: 'Šalti patiekalai',
                        menu: [
                            {
                                title: 'Ožkos sūrio salotos su skrudintais burokėlių popsais',
                                price: '8,90 €'
                            },
                            {
                                title: 'Lašišos tartaras su avokadu ir mangais',
                                price: '9,50 €'
                            },
                            {
                                title: 'Cezario salotos su vištiena',
                                price: '9,50 €'
                            }
                        ],
                        image: adultSalads
                    },
                    [MENU_TYPES.SECOND_COURSE]: {
                        title: 'Karšti patiekalai',
                        menu: [
                            {
                                title: 'Grill kiaulienos išpjovos medalionai su skrudintomis bulvytėmis ir grill daržovėmis',
                                price: '12,50 €'
                            },
                            {
                                title: 'Vištienos kijevas su žaliųjų žirnelių ir bulvių piure, "coleslow" salotomis',
                                price: '11,90 €'
                            },
                            {
                                title: 'Lašišos file kepsnys su žirnelių piure, keptais moliūgais ir daržovių kroketais',
                                price: '18,50 €'
                            },
                            {
                                title: 'Burgeris su jautiena ir keptomis bulvytėmis',
                                price: '12,50 €'
                            }
                        ],
                        info: 'Prašome išsirinkti ne daugiau kaip 2 skirtingas patiekalų rūšis.',
                        image: secondCource
                    }
                }
            },
            [Service.CHRISTENINGS]: {
                [MealType.ADULTS]: {
                    [MENU_TYPES.APPETIZERS]: {
                        title: 'Užkandžiai ir rinkiniai',
                        menu: [
                            { title: 'Tortilijos traškučiai su lašišos seviče' },
                            {
                                title: 'Karališkos krevetės traškia panko plutele su sweet chilli padažu'
                            },
                            {
                                title: 'Sviestiniai kruasanai su pesto padažu ir vytintu kumpiu'
                            },
                            {
                                title: 'Crostiniai su ricotos sūriu, naminiais karamelizuotais svogūnais ir figa'
                            },
                            {
                                title: 'Sūrių rinkinukai: mėlynasis pelėsinis sūris, brie sūris, alyvuogės, vynuogės, saliami dešra, marinuoti agurkėliai, tarškios naminės lazdelės, su parmezano sūriu'
                            }
                        ],
                        image: appetizersImage,
                        info: 'Ruošiamas išvardintų vieno kąsnio užkandžių stalas svečių pasitikimui.'
                    },
                    [MENU_TYPES.MAIN_COURSE]: {
                        title: 'Šalti patiekalai',
                        menu: [
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
                        info: 'Prašome pasirinkti ne daugiau kaip 2 skirtingas patiekalų rūšis.',
                        image: adultSalads
                    },
                    [MENU_TYPES.SECOND_COURSE]: {
                        title: 'Karšti patiekalai',
                        menu: [
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
                        info: 'Prašome pasirinkti ne daugiau kaip 2 skirtingas patiekalų rūšis.',
                        image: secondCource
                    }
                },
                [MealType.CHILDREN]: {
                    [MENU_TYPES.MAIN_COURSE]: {
                        title: 'Karšti patiekalai',
                        menu: [
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
                        image: kidsMainCourseImage,
                        info: 'Rekomenduojame pasirinkti vienos rūšies karštus patiekalus vaikams.'
                    },
                    [MENU_TYPES.DESERTS]: {
                        title: '„Dėžučio” desertai',
                        menu: [
                            { title: 'Spurgos „Donuts”' },
                            { title: 'Belgiški vafliukai su šokoladu ir pabarstukais' },
                            { title: 'Naminiai ledai su saldainiais ir pabarstukais' },
                            { title: 'Pieno ir ledų kokteiliai' }
                        ],
                        image: kidsChristeningDesserts,
                        info: 'Prašome pasirinkti vienos rūšies desertus vaikams.'
                    }
                }
            },
            [Service.PARTY]: {
                [MealType.ADULTS]: {
                    [MENU_TYPES.APPETIZERS]: {
                        title: 'Svečių sutikimo užkandžiai',
                        menu: [
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
                        image: appetizersImage,
                        info: 'Ruošiamas išvardintų vieno kąsnio užkandžių stalas svečių pasitikimui.'
                    },
                    [MENU_TYPES.MAIN_COURSE]: {
                        title: 'Šalti patiekalai',
                        menu: [
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
                        info: 'Prašome pasirinkti ne daugiau kaip 2 skirtingas patiekalų rūšis.',
                        image: adultSalads
                    },
                    [MENU_TYPES.SECOND_COURSE]: {
                        title: 'Karšti patiekalai',
                        menu: [
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
                        info: 'Prašome pasirinkti ne daugiau kaip 2 skirtingas patiekalų rūšis.',
                        image: secondCource
                    }
                },
                [MealType.CHILDREN]: {
                    [MENU_TYPES.MAIN_COURSE]: {
                        title: 'Karšti patiekalai',
                        menu: [
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
                        image: kidsMainCourseImage,
                        info: 'Rekomenduojame pasirinkti vienos rūšies karštus patiekalus vaikams.'
                    },
                    [MENU_TYPES.DESERTS]: {
                        title: '„Dėžučio” desertai',
                        menu: [
                            { title: 'Spurgų „Donuts” rinkinys' },
                            { title: 'Belgiški vafliukai su šokoladu ir pabarstukais' },
                            { title: 'Mažos varškės spurgytės' },
                            { title: 'Naminiai ledai su saldainiais ir pabarstukais' },
                            { title: 'Pieno ir ledų kokteiliai' }
                        ],
                        image: kidsChristeningDesserts,
                        info: 'Prašome pasirinkti vienos rūšies desertus vaikams.'
                    }
                }
            }
        },
        drinksInfo: [
            {
                title: 'Baro meniu',
                menu: [
                    { title: '„Dėžučio” citrinų limonadas', price: '5.50 € / 1 l' },
                    {
                        title: 'Stalo vanduo su citrusiniais vaisiais / be priedų',
                        price: '1.80 € / 1 l'
                    },
                    {
                        title: 'Kava espreso / juoda / kapučinas / latė / su pienu',
                        price: '2 € / vnt'
                    },
                    { title: 'Sultys apelsinų / įvairių vaisių / obuolių', price: '3.90 € / 1 l' },
                    { title: '„Coca-cola“ / „Coca-cola zero“ / „Fanta“', price: '1.60 € / vnt' },
                    { title: 'Arbata žalia / vaisinė / juoda', price: '2.50 € / vnt' }
                ]
            },

            {
                title: 'Nealkoholiniai gėrimai',
                menu: [
                    { title: 'Alus GENYS „Kalifornikacija“', price: '4.20 € / 0.4 l' },
                    { title: 'Sidras „Tinginio pantis“', price: '2.60 € / 0.33 l' },
                    { title: 'Putojantis vynas „Alita“', price: '11 € / 0.75 l' },
                    { title: 'Baltas / raudonas vynas „Appalina”', price: '12.50 € / 0.75 l' }
                ]
            },
            {
                title: 'Nealkoholiniai kokteiliai',
                menu: [
                    { title: 'Aperol Spritz', price: '5 €' },
                    { title: 'Mimoza', price: '5 €' }
                ]
            },
            {
                title: 'Kokteiliai',
                menu: [
                    { title: 'Aperol Spritz', price: '6 €' },
                    { title: 'Mimoza', price: '5 €' },
                    { title: 'Džinas su toniku', price: '5 €' }
                ]
            },
            {
                title: 'Alus',
                menu: [
                    {
                        title: 'GENYS „Kalifornikacija“ / „Baltas melas“ / „Tamsus miškas“',
                        price: '4.60 € / 0.4 l'
                    },
                    {
                        title: 'Volfas Engelman „Rinktinis“ / „Balta pinta“',
                        price: '3.80 € / 0.568 l'
                    },
                    { title: 'Corona Extra', price: '3.7 € / 0.355 l' }
                ]
            },
            {
                title: 'Sidras',
                menu: [{ title: 'Obuolių sidras „Tinginio pantis“', price: '3.60 € / 0.33 l' }]
            },
            {
                title: 'Putojantis vynas',
                menu: [
                    { title: 'Alita Classic Medium Dry / Sweet / Brut', price: '14 € / 0.75 l' },
                    { title: 'Botter Prosecco DOC Spumante', price: '18 € / 0.75 l' },
                    { title: 'Codorniu Clasico Cava Brut', price: '17 € / 0.75 l' },
                    { title: 'Martini Asti', price: '18 € / 0.75 l' },
                    { title: 'LaCheteau Cremant', price: '23 € / 0.75 l' }
                ]
            },
            {
                title: 'Šampanas',
                menu: [
                    { title: 'Moutard Brut Grande Cuvee', price: '45 € / 0.75 l' },
                    { title: 'Piper Heidsieck Brut', price: '55 € / 0.75 l' }
                ]
            },
            {
                title: 'Rožinis vynas',
                menu: [
                    { title: "B&G Rose D'Anjou p. sausas", price: '18 € / 0.75 l' },
                    { title: 'Codurniu Classic Rose Brut putojantis vynas', price: '17 € / 0.75 l' }
                ]
            },
            {
                title: 'Batasis vynas',
                menu: [
                    { title: 'Namų vynas', price: '15 € / 1 l' },
                    { title: 'Ernst Ludwig Riesling pusiau sausas', price: '16 € / 0.75 l' },
                    { title: 'Carmelle Sauvignon Blanc su SGN sausas', price: '15 € / 0.75 l' },
                    { title: 'Zabu Grillo Sicilia IGT su SGN sausas', price: '18 € / 0.75 l' },
                    { title: 'Doppio Passo Pinot Grigio DOC su SGN sausas', price: '18 € / 0.75 l' }
                ]
            },
            {
                title: 'Raudonasis vynas',
                menu: [
                    { title: 'Namų vynas', price: '15 € / 1 l' },
                    { title: 'Carmelle Malbec su SGN', price: '15 € / 0.75 l' },
                    { title: 'Zabu Nero d’Avola Sicilia IGT su SGN', price: '18 € / 0.75 l' },
                    { title: 'Doppio Passo Primitivo IGT Salento su SGN', price: '18 € / 0.75 l' }
                ]
            },
            {
                title: 'Stiprieji gėrimai',
                menu: [
                    { title: 'Degtinė Stumbro Šimtmečio', price: '20€ / 0.5 l' },
                    { title: 'Degtinė Finlandia', price: '32 € / 0.7 l' },
                    { title: 'Brendis Torres 5', price: '28 € / 0.7 l' },
                    { title: 'Brendis J.P.Chenet XO', price: '28 € / 0.7 l' },
                    { title: 'Brendis Stock 84 Riversa', price: '28 € / 0.7 l' },
                    { title: 'Romas Angostura', price: '36 € / 0.7 l' },
                    { title: 'Džinas Finsbury London Dry', price: '28 € / 0.7 l' },
                    { title: 'Viskis Jack Daniels', price: '34 € / 0.7 l' },
                    { title: 'Viskis Black Velvet Canadian', price: '28 € / 0.7 l' },
                    { title: 'Viskis Famous Grouse Shcotch', price: '35 € / 0.7 l' },
                    { title: 'Konjakas Hennessy', price: '45 € / 0.5 l' }
                ]
            }
        ]
    }),
    actions: {
        updateSelectedMeal(type: MEALS): void {
            const { setSelectedMeal } = usePricesStore();

            setSelectedMeal(this.christeningMeals[type]);
        }
    },
    getters: {
        christeningMeals(state) {
            return state[Service.CHRISTENINGS].meals;
        },
        desertsList(state): Deserts[] {
            return state.deserts;
        },
        christeningKidsMeal(state): Meal {
            return state[Service.CHRISTENINGS].meals[MEALS.KIDS];
        },
        birthdayMealPackage(state) {
            return state[Service.BIRTHDAY].meals;
        },
        partyKidsMeal(state): Meal {
            return state[Service.PARTY].meals[MEALS.KIDS];
        },
        partyAdultsMeal(state): Meal {
            return state[Service.PARTY].meals[MEALS.ADULTS_BANQUET];
        },
        partyKidsMenus(state) {
            return state.menuInfo[Service.PARTY][MealType.CHILDREN];
        },
        partyAdultsMenus(state) {
            return state.menuInfo[Service.PARTY][MealType.ADULTS];
        },
        christeningKidsMenus(state) {
            return state.menuInfo[Service.CHRISTENINGS][MealType.CHILDREN];
        },
        christeningAdultsMenus(state) {
            return state.menuInfo[Service.CHRISTENINGS][MealType.ADULTS];
        },
        birthdayKidsMenus(state) {
            return state.menuInfo[Service.BIRTHDAY][MealType.CHILDREN];
        },
        birthdayAdultsMenus(state) {
            return state.menuInfo[Service.BIRTHDAY][MealType.ADULTS];
        },
        drinksList(state) {
            return { title: 'Gėrimai', image: drinksImage, menu: state.drinksInfo };
        }
    }
});
