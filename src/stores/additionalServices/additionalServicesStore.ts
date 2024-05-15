import { defineStore, storeToRefs } from 'pinia';
import { Service } from '@/stores/main/models/enumerators';
import { usePricesStore } from '@/stores/prices/pricesStore';
import type {
    AdditionalService,
    AdditionalServiceState
} from '@/stores/additionalServices/models/interfaces';
import { SERVICES } from '@/stores/additionalServices/models/enumerators';
import serviceAnimator from '@/assets/images/calc/serviceAnimator.webp';
import serviceDJ from '@/assets/images/calc/serviceDJ.webp';
import servicePhotographer from '@/assets/images/calc/servicePhotographer.webp';

export const useAdditionalServiceStore = defineStore('additionalService', {
    state: (): AdditionalServiceState => ({
        [Service.BIRTHDAY]: [
            {
                type: SERVICES.ANIMATOR,
                image: serviceAnimator,
                title: 'Animatorius',
                description:
                    'Ilgai lauktas momentas atėjo šiandien – mylimiausias personažas aplankys ypatingiausią dieną!',
                startingPrice: 89
            },
            {
                type: SERVICES.PHOTOGRAPHER,
                image: servicePhotographer,
                title: 'Fotografas',
                description: 'Rekomanduojame šį fotografą',
                recommendation: {
                    name: 'Donatas Zaščiurinskas',
                    contact: 'https://dz-foto.lt/'
                }
            }
        ],
        [Service.CHRISTENINGS]: [
            {
                type: SERVICES.ANIMATOR,
                image: serviceAnimator,
                title: 'Animatorius',
                description:
                    'Ilgai lauktas momentas atėjo šiandien – mylimiausias personažas aplankys ypatingiausią dieną!',
                startingPrice: 89
            },
            {
                type: SERVICES.PHOTOGRAPHER,
                image: servicePhotographer,
                title: 'Fotografas',
                description: 'Rekomanduojame šį fotografą',
                recommendation: {
                    name: 'Donatas Zaščiurinskas',
                    contact: 'https://dz-foto.lt/'
                }
            }
        ],
        [Service.PARTY]: [
            {
                type: SERVICES.PHOTOGRAPHER,
                image: servicePhotographer,
                title: 'Fotografas',
                description: 'Rekomanduojame šį fotografą',
                recommendation: {
                    name: 'Donatas Zaščiurinskas',
                    contact: 'https://dz-foto.lt/'
                }
            },
            {
                type: SERVICES.DJ,
                image: serviceDJ,
                title: 'DJ',
                description: 'Kreipkitės į administraciją'
            },
            {
                type: SERVICES.ANIMATOR,
                image: serviceAnimator,
                title: 'Vaikų animatorius',
                description: 'Kreipkitės į administraciją',
                startingPrice: 89
            }
        ]
    }),
    actions: {
        updateSelectedService(type: SERVICES): void {
            const { setSelectedAdditionalService, removeSelectedAdditionalService } =
                usePricesStore();
            const { selectedAdditionalServiceList, selectedPartyType } =
                storeToRefs(usePricesStore());
            const serviceSelected = selectedAdditionalServiceList.value.includes(type);

            if (type !== SERVICES.ANIMATOR) {
                return;
            }

            if (serviceSelected) {
                removeSelectedAdditionalService(type);

                return;
            }

            const service = this[selectedPartyType.value].find((service) => service.type === type);

            if (service) {
                setSelectedAdditionalService(service);
            }
        }
    },
    getters: {
        partyAdditionalService(state): AdditionalService[] {
            return state[Service.PARTY];
        }
    }
});
