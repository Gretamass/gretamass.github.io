import { defineStore } from 'pinia';
import type { MenuStoreState } from '@/stores/menu/models/interfaces';

export const useMenuStore = defineStore('menu', {
    state: (): MenuStoreState => ({
        kids: {
            mainCourse: {
                title: 'Karštas patiekalas',
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
                    {
                        title: 'Pica su sūriu / su sūriu ir kumpiu / su sūriu, kumpiu ir pievagrybiais / su sūriu ir vištiena / su sūriu, kumpiu ir ananasais',
                        info: 'užsakoma ne mažiau 10 picų'
                    },
                    { title: 'Belgiški vafliai' }
                ],
                info: 'Rekomenduojame pasirinkti vienos rūšies karštus patiekalus vaikams.'
            },
            deserts: {
                title: 'Saldumynas gardumynas',
                menu: [
                    { title: '„Donut’s” spurgos' },
                    { title: 'Belgiški vafliukai su šokolado skraiste' },
                    { title: 'Naminiai ledai su saldainiais ir pabarstukais' },
                    {
                        title: 'Pieno ir ledų kokteiliai',
                        types: [
                            'Vanilinis su guminukais',
                            'Braškinis su saldainiukais',
                            'Šokoladinis su Oreo'
                        ]
                    }
                ],
                info: 'Prašome pasirinkti vienos rūšies desertus vaikams.'
            }
        },
        adults: {
            banquet: {
                title: 'Bendro stalo meniu',
                appetizers: {
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
                    info: 'Ruošiamas išvardintų vieno kąsnio užkandžių stalas svečių pasitikimui ir šventės pradžiai'
                },
                mainCourse: {
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
                    info: 'Prašome pasirinkti ne daugiau kaip 2 skirtingas patiekalų rūšis'
                },
                secondCourse: {
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
                    info: 'Prašome pasirinkti ne daugiau kaip 2 skirtingas patiekalų rūšis'
                }
            },
            buffet: {
                title: 'Švediško stalo meniu',
                appetizers: {
                    title: 'Užkandžiai',
                    menu: []
                }
            }
        }
    })
});
