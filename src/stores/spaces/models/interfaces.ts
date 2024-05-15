import type { SpaceType } from '@/stores/spaces/models/enumerators';

export interface SpacesStoreState {
    spacesInfo: Space[];
}

export interface Space {
    type: SpaceType;
    hash: string;
    title: string;
    image: string;
    alt: string;
    items?: Space[];
}
