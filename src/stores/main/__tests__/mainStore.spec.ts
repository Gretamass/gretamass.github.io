import { beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { useMainStore } from '@/stores/main/mainStore';
import { createPinia, setActivePinia } from 'pinia';

describe('MainStore', () => {
    beforeAll(() => {
        setActivePinia(createPinia());
    });

    beforeEach(() => {
        useMainStore().$reset();
    });

    it('initializes with correct state', () => {
        const { heroText, aboutText } = useMainStore();

        expect(heroText).toBe('Įamžinkite savo šeimos akimirkas švenčių erdvėje „Dėžutis”');
        expect(aboutText.descriptionTitle).toBe('Dėžutis - šeimos švenčių erdvė Kaune.');
        expect(aboutText.description).toBe(
            'Erdvėje galima švęsti krikštynas, vaikų gimtadienius, suaugusių šventes. Vienoje erdvėje yra ir vaikų žaidimų kambarys, ir restoranas, ir lauko kiemelis. „Dėžučio“ komanda gali pasirūpinti šventės dekoracijomis, maitinimu ir pramogomis.'
        );
    });
});
