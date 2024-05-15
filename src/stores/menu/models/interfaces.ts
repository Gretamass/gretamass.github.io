export interface MenuStoreState {
    kids: {
        mainCourse: MenuInfo;
        deserts: MenuInfo;
    };
    adults: {
        banquet: {
            title: string;
            appetizers: MenuInfo;
            mainCourse: MenuInfo;
            secondCourse: MenuInfo;
        };
        buffet: {
            title: string;
            appetizers: MenuInfo;
        };
    };
}

export interface MenuInfo {
    title: string;
    menu: MenuItem[];
    info?: string;
}

export interface MenuItem {
    title: string;
    info?: string;
    type?: string[];
}
