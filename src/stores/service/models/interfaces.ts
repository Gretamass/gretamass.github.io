import type { Service } from '@/stores/main/models/enumerators';
import type { Route } from '@/router/models/enumerators';

export interface ServiceStoreState {
    serviceList: ServiceItem[];
    testimonials: Testimonial[];
}

export interface ServiceItem {
    type: Service;
    image: string;
    pathName: Route;
}

export interface Image {
    url: string;
    alt: string;
}

export interface Testimonial {
    name: string;
    text: string;
}
