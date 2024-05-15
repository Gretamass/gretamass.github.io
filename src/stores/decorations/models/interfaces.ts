import { ADDITIONAL_DECORATION, DECORATION } from '@/stores/decorations/models/enumerators';
import { Service } from '@/stores/main/models/enumerators';

export type DecorationsStoreState = Record<Service, Decoration[]>;

export interface Decoration {
    type: DECORATION | ADDITIONAL_DECORATION;
    title: string;
    image: string;
    previewImage?: string;
    price?: number;
    pricePerChild?: number;
    description?: string;
    includes?: string[];
    themes?: boolean;
}
