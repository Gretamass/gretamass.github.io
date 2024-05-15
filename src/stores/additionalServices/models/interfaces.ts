import { Service } from '@/stores/main/models/enumerators';
import { SERVICES } from '@/stores/additionalServices/models/enumerators';

export interface AdditionalServiceState {
    [Service.CHRISTENINGS]: AdditionalService[];
    [Service.BIRTHDAY]: AdditionalService[];
    [Service.PARTY]: AdditionalService[];
}

export interface AdditionalService {
    type: SERVICES;
    title: string;
    image: string;
    description: string;
    startingPrice?: number;
    recommendation?: {
        name: string;
        contact: string;
    };
}
