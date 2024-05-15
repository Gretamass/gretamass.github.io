export enum ServicePriceType {
    WEEKDAY_PRICE = 'weekday',
    WEEKEND_PRICE = 'weekend',
    WEEK_PRICE = 'week',
    ADDITIONAL_HOUR = 'additional_hour',
    ADDITIONAL_HALF_HOUR = 'additional_half_hour',
    ADDITIONAL_HOUR_BEFORE_MIDNIGHT = 'additional_hour_before_midnight',
    ADDITIONAL_HOUR_AFTER_MIDNIGHT = 'additional_hour_after_midnight'
}

export enum PriceCalcItem {
    PARTY_TYPE = 'party_type',
    PEOPLE_COUNT = 'people_count',
    FOOD = 'food',
    DECORATIONS = 'decorations',
    ADDITIONAL_SERVICE = 'additional_service',
    TABLE_CLOTHS = 'table_cloths'
}

export enum MealPackageSize {
    SMALL,
    MEDIUM,
    LARGE,
    EXTRA_LARGE
}

export enum MealType {
    ADULTS = 'adults',
    CHILDREN = 'children',
    PACKAGE = 'package'
}
