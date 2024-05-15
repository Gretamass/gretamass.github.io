import type { MainStoreState } from '@/stores/main/models/interfaces';
import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
    state: (): MainStoreState => ({
        heroText: 'Išpakuokite savo šeimos šventę smagioje erdvėje „Dėžutis”!',
        aboutText: {
            descriptionTitle: '„Dėžutis” - šeimos švenčių erdvė Kaune.',
            description:
                'Erdvėje galima švęsti krikštynas, vaikų gimtadienius, suaugusių šventes. Vienoje erdvėje yra ir vaikų žaidimų kambarys, ir restoranas, ir lauko kiemelis. „Dėžučio“ komanda gali pasirūpinti šventės dekoracijomis, maitinimu ir pramogomis.'
        }
    })
});
