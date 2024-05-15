import { defineStore } from 'pinia';
import playRoomImage from '@/assets/images/playRoomPreview.webp';
import terraceImage from '@/assets/images/terrace.webp';
import adultRestaurant from '@/assets/images/adultRestaurant.webp';
import kidsRestuarantImage from '@/assets/images/kidsRestuarant.webp';
import type { SpacesStoreState } from '@/stores/spaces/models/interfaces';
import { SpaceType } from '@/stores/spaces/models/enumerators';

export const useSpacesStore = defineStore('spaces', {
    state: (): SpacesStoreState => ({
        spacesInfo: [
            {
                type: SpaceType.PLAY_ROOM,
                hash: 'zaidimu-kambarys',
                title: 'Žaidimų kambarys',
                image: playRoomImage,
                alt: 'Žaidimų kambarys'
            },
            {
                type: SpaceType.KIDS_RESTAURANT,
                hash: 'restoranas-vaikams',
                title: 'Restoranas vaikams',
                image: kidsRestuarantImage,
                alt: 'Restoranas vaikams'
            },
            {
                type: SpaceType.ADULTS_RESTAURANT,
                hash: 'restoranas-suaugusiems',
                title: 'Restoranas suaugusiems',
                image: adultRestaurant,
                alt: 'Restoranas suaugusiems'
            },
            {
                type: SpaceType.TERRACE,
                hash: 'lauko-kiemelis',
                title: 'Lauko kiemelis',
                image: terraceImage,
                alt: 'Lauko kiemelis'
            }
        ]
    })
});
