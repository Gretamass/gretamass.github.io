import type { Service } from '@/stores/main/models/enumerators';
import type { ServicePriceType } from '@/stores/prices/models/enumerators';
import { MealPackageSize, MealType, PriceCalcItem } from '@/stores/prices/models/enumerators';
import type { SERVICES } from '@/stores/additionalServices/models/enumerators';
import { DESERTS_TYPE, MEALS } from '@/stores/food/models/enumerators';

export interface PricesStoreState {
    pricesInfo: Record<Service, PriceInfo>;
    food: {
        [Service.BIRTHDAY]: {
            meals: Record<MealPackageSize, MealPackageInfo>;
            deserts: DesertsInfo[];
        };
        [Service.CHRISTENINGS]: {
            meals: MealInfo;
            deserts: DesertsInfo[];
        };
        [Service.PARTY]: {
            meals: MealInfo;
            deserts: DesertsInfo[];
        };
    };
    decorations: Record<Service, DecorationInfo[]>;
    additionalServices: Record<Service, AdditionalService[]>;
    selected: {
        [PriceCalcItem.PARTY_TYPE]: SelectedPartyItem;
        [PriceCalcItem.PEOPLE_COUNT]: PeopleCountItem;
        [PriceCalcItem.FOOD]: FoodItem;
        [PriceCalcItem.DECORATIONS]: DecorationItem;
        [PriceCalcItem.ADDITIONAL_SERVICE]: AdditionalServiceItem[];
        [PriceCalcItem.TABLE_CLOTHS]: number;
    };
}

export interface PriceInfo {
    service: Service;
    title: string;
    image: string;
    callToAction: string;
    defaultTime: string;
    defaultPriceType: ServicePriceType;
    prices: {
        type: ServicePriceType;
        title: string;
        price: number;
    }[];
    hash: string;
}

export interface DesertsInfo {
    type: string;
    image: string;
    contacts?: {
        email: string;
        phone: string;
    };
    pricePerPerson?: number;
}

export interface MealPackageInfo {
    minPeople: number;
    maxPeople: number;
    price: number;
    includes: string[];
}

export interface MealInfo {
    children: {
        image: string;
        pricePerPerson: number;
        includes: string[];
    };
    adults: {
        banquet: {
            image: string;
            pricePerPerson: number;
            includes: string[];
        };
        buffet: {
            image: string;
            pricePerPerson: number;
            includes: string[];
            tableClothPerUnit: number;
        };
    };
}

export interface DecorationInfo {
    type: string;
    description?: string;
    includes?: string[];
    pricePerPerson: number;
}

export interface AdditionalService {
    title: string;
    description: string;
    startingPrice?: number;
    recommendation?: {
        name: string;
        contact: string;
    };
}

export interface SelectedPartyItem {
    type: Service | null;
    title: string;
    priceType: ServicePriceType | null;
    price: number;
}

export interface PeopleCountItem {
    childrenCount: number;
    adultCount: number;
}

export interface FoodItem {
    meals: {
        [MealType.ADULTS]: {
            menuType: MEALS | null;
            title: string;
            pricePerPerson: number;
        };
        [MealType.CHILDREN]: {
            menuType: MEALS | null;
            title: string;
            pricePerPerson: number;
        };
        [MealType.PACKAGE]: {
            title: string;
            price: number;
        };
    };
    desserts: {
        type: DESERTS_TYPE | null;
        title: string;
        pricePerPerson: number;
    };
}

export interface DecorationItem {
    type: string;
    title: string;
    price: number | null;
    pricePerChild: number | null;
    additional: { title: string; price: number } | null;
}

export interface AdditionalServiceItem {
    type: SERVICES;
    title: string;
    price: number;
}
