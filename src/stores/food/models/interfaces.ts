import { Service } from '@/stores/main/models/enumerators';
import { MEALS, MENU_TYPES } from '@/stores/food/models/enumerators';
import { MealPackageSize, MealType } from '@/stores/prices/models/enumerators';

export interface FoodStoreState {
    [Service.CHRISTENINGS]: {
        meals: {
            [MEALS.KIDS]: Meal;
            [MEALS.ADULTS_BUFFET]: BuffetMeal;
            [MEALS.ADULTS_BANQUET]: Meal;
        };
    };
    [Service.BIRTHDAY]: {
        meals: Record<MealPackageSize, MealPackage>;
    };
    [Service.PARTY]: {
        meals: {
            [MEALS.KIDS]: Meal;
            [MEALS.ADULTS_BANQUET]: Meal;
        };
    };
    deserts: Deserts[];
    menuInfo: {
        [Service.BIRTHDAY]: {
            [MealType.ADULTS]: {
                [MENU_TYPES.APPETIZERS]: MenuInfo;
                [MENU_TYPES.MAIN_COURSE]: MenuInfo;
                [MENU_TYPES.SECOND_COURSE]: MenuInfo;
            };
            [MealType.CHILDREN]: {
                [MENU_TYPES.MAIN_COURSE]: MenuInfo;
                [MENU_TYPES.DESERTS]: MenuInfo;
            };
        };
        [Service.PARTY]: {
            [MealType.ADULTS]: {
                [MENU_TYPES.APPETIZERS]: MenuInfo;
                [MENU_TYPES.MAIN_COURSE]: MenuInfo;
                [MENU_TYPES.SECOND_COURSE]: MenuInfo;
            };
            [MealType.CHILDREN]: {
                [MENU_TYPES.MAIN_COURSE]: MenuInfo;
                [MENU_TYPES.DESERTS]: MenuInfo;
            };
        };
        [Service.CHRISTENINGS]: {
            [MealType.ADULTS]: {
                [MENU_TYPES.APPETIZERS]: MenuInfo;
                [MENU_TYPES.MAIN_COURSE]: MenuInfo;
                [MENU_TYPES.SECOND_COURSE]: MenuInfo;
            };
            [MealType.CHILDREN]: {
                [MENU_TYPES.MAIN_COURSE]: MenuInfo;
                [MENU_TYPES.DESERTS]: MenuInfo;
            };
        };
    };
    drinksInfo: DrinksInfo[];
}

export interface DrinksInfo {
    title: string;
    menu: { title: string; price: string }[];
}

export interface MenuInfo {
    title: string;
    menu: {
        title: string;
        info?: string;
        price?: string;
    }[];
    info: string;
    image: string;
}

export interface Meal {
    type: MEALS;
    title: string;
    image: string;
    pricePerPerson: number;
    includes: { title: string; type: MENU_TYPES }[];
}

export interface BuffetMeal extends Meal {
    tableClothPerUnit: number;
}

export interface Deserts {
    type: string;
    image: string;
    contacts: {
        type: string;
        contact: string;
    }[];
    website: string;
}

export interface MealPackage {
    type: MealPackageSize;
    minPeople: number;
    maxPeople: number;
    price: number;
}
