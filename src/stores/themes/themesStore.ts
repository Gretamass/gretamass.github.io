import { defineStore } from 'pinia';
import dinozaurai from '@/assets/images/themes/dinozaurai.webp';
import cirkoParadas from '@/assets/images/themes/cirko-paradas.webp';
import fejos from '@/assets/images/themes/fejos.webp';
import ferma from '@/assets/images/themes/fermos.webp';
import ugniagesiai from '@/assets/images/themes/gaisrininkas.webp';
import kosmosas from '@/assets/images/themes/kosmosas.webp';
import boho from '@/assets/images/themes/boho.webp';
import masineles from '@/assets/images/themes/masineles.webp';
import povandeninisPasaulis from '@/assets/images/themes/povandeninis-pasaulis.webp';
import balerina from '@/assets/images/themes/balerina.webp';
import suniukai from '@/assets/images/themes/suniukai.webp';
import superherojai from '@/assets/images/themes/superherojai.webp';
import undineles from '@/assets/images/themes/undineliu-karasyte.webp';
import other from '@/assets/images/themes/gimtadienio-dekoravimas.webp';
import type { ThemesStoreState } from '@/stores/themes/models/interfaces';

export const useThemesStore = defineStore('themes', {
    state: (): ThemesStoreState => ({
        themes: [
            {
                title: 'Balerina',
                image: balerina
            },
            {
                title: 'Dinozaurai',
                image: dinozaurai
            },
            {
                title: 'Cirko paradas',
                image: cirkoParadas
            },
            {
                title: 'Fėjos',
                image: fejos
            },
            {
                title: 'Ferma',
                image: ferma
            },
            {
                title: 'Ugniagesiai',
                image: ugniagesiai
            },
            {
                title: 'Kosmosas',
                image: kosmosas
            },
            {
                title: 'Boho',
                image: boho
            },
            {
                title: 'Mašinėlės',
                image: masineles
            },
            {
                title: 'Povandeninis pasaulis',
                image: povandeninisPasaulis
            },
            {
                title: 'Šuniukai',
                image: suniukai
            },
            {
                title: 'Superherojai',
                image: superherojai
            },
            {
                title: 'Undinėlių karalystė',
                image: undineles
            },
            {
                title: 'Kitos temos',
                image: other
            }
        ]
    })
});
