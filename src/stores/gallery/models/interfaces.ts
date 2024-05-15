import { IMAGE_GROUP } from '@/stores/gallery/models/enumerators';

export interface GalleryStoreState {
    galleryImages: Image[];
}

export interface Image {
    url: string;
    alt: string;
    group: IMAGE_GROUP;
}
