import { defineStore } from 'pinia';
import type { GalleryStoreState, Image } from '@/stores/gallery/models/interfaces';
import image_1 from '@/assets/images/gallery/img_1.webp';
import image_2 from '@/assets/images/gallery/img_2.webp';
import image_3 from '@/assets/images/gallery/img_3.webp';
import image_4 from '@/assets/images/gallery/img_4.webp';
import image_5 from '@/assets/images/gallery/img_5.webp';
import image_6 from '@/assets/images/gallery/img_6.webp';
import image_7 from '@/assets/images/gallery/img_7.webp';
import image_8 from '@/assets/images/gallery/img_8.webp';
import image_10 from '@/assets/images/gallery/img_10.webp';
import image_11 from '@/assets/images/gallery/img_11.webp';
import image_13 from '@/assets/images/gallery/img_13.webp';
import image_14 from '@/assets/images/gallery/img_14.webp';
import image_15 from '@/assets/images/gallery/img_15.webp';
import image_16 from '@/assets/images/gallery/img_16.webp';
import image_17 from '@/assets/images/gallery/img_17.webp';
import image_18 from '@/assets/images/gallery/img_18.webp';
import image_19 from '@/assets/images/gallery/img_19.webp';
import image_20 from '@/assets/images/gallery/img_20.webp';
import image_21 from '@/assets/images/gallery/img_21.webp';
import image_22 from '@/assets/images/gallery/img_22.webp';
import image_23 from '@/assets/images/gallery/img_23.webp';
import image_24 from '@/assets/images/gallery/img_24.webp';
import image_25 from '@/assets/images/gallery/img_25.webp';
import image_26 from '@/assets/images/gallery/img_26.webp';
import image_27 from '@/assets/images/gallery/img_27.webp';
import image_28 from '@/assets/images/gallery/img_28.webp';
import image_29 from '@/assets/images/gallery/img_29.webp';
import image_30 from '@/assets/images/gallery/img_30.webp';
import { IMAGE_GROUP } from '@/stores/gallery/models/enumerators';

export const useGalleryStore = defineStore('gallery', {
    state: (): GalleryStoreState => ({
        galleryImages: [
            { url: image_1, alt: '', group: IMAGE_GROUP.ALL },
            { url: image_2, alt: '', group: IMAGE_GROUP.ADULTS_RESTAURANT },
            { url: image_3, alt: '', group: IMAGE_GROUP.ALL },
            { url: image_4, alt: '', group: IMAGE_GROUP.TERRACE },
            { url: image_5, alt: '', group: IMAGE_GROUP.TERRACE },
            { url: image_6, alt: '', group: IMAGE_GROUP.KIDS_RESTAURANT },
            { url: image_7, alt: '', group: IMAGE_GROUP.KIDS_RESTAURANT },
            { url: image_8, alt: '', group: IMAGE_GROUP.ADULTS_RESTAURANT },
            { url: image_10, alt: '', group: IMAGE_GROUP.ALL },
            { url: image_11, alt: '', group: IMAGE_GROUP.PLAY_ROOM },
            { url: image_13, alt: '', group: IMAGE_GROUP.ALL },
            { url: image_14, alt: '', group: IMAGE_GROUP.PLAY_ROOM },
            { url: image_15, alt: '', group: IMAGE_GROUP.ALL },
            { url: image_16, alt: '', group: IMAGE_GROUP.TERRACE },
            { url: image_17, alt: '', group: IMAGE_GROUP.ALL },
            { url: image_18, alt: '', group: IMAGE_GROUP.PLAY_ROOM },
            { url: image_19, alt: '', group: IMAGE_GROUP.TERRACE },
            { url: image_20, alt: '', group: IMAGE_GROUP.TERRACE },
            { url: image_21, alt: '', group: IMAGE_GROUP.TERRACE },
            { url: image_22, alt: '', group: IMAGE_GROUP.PLAY_ROOM },
            { url: image_23, alt: '', group: IMAGE_GROUP.PLAY_ROOM },
            { url: image_24, alt: '', group: IMAGE_GROUP.ADULTS_RESTAURANT },
            { url: image_25, alt: '', group: IMAGE_GROUP.ALL },
            { url: image_26, alt: '', group: IMAGE_GROUP.KIDS_RESTAURANT },
            { url: image_27, alt: '', group: IMAGE_GROUP.KIDS_RESTAURANT },
            { url: image_28, alt: '', group: IMAGE_GROUP.ALL },
            { url: image_29, alt: '', group: IMAGE_GROUP.PLAY_ROOM },
            { url: image_30, alt: '', group: IMAGE_GROUP.ADULTS_RESTAURANT }
        ]
    }),
    getters: {
        playRoomImages(state: GalleryStoreState): Image[] {
            return state.galleryImages.filter((image) => image.group === IMAGE_GROUP.PLAY_ROOM);
        },
        kidsRestaurantImages(state: GalleryStoreState): Image[] {
            return state.galleryImages.filter(
                (image) => image.group === IMAGE_GROUP.KIDS_RESTAURANT
            );
        },
        adultsRestaurantImages(state: GalleryStoreState): Image[] {
            return state.galleryImages.filter(
                (image) => image.group === IMAGE_GROUP.ADULTS_RESTAURANT
            );
        },
        terraceImages(state: GalleryStoreState): Image[] {
            return state.galleryImages.filter((image) => image.group === IMAGE_GROUP.TERRACE);
        }
    }
});
