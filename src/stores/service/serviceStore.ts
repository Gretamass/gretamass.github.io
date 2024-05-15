import { defineStore } from 'pinia';
import type { ServiceStoreState } from '@/stores/service/models/interfaces';
import { Service } from '@/stores/main/models/enumerators';
import birthdayImage from '@/assets/images/birthdayImage.webp';
import christeningImage from '@/assets/images/christeningImage.webp';
import partyImage from '@/assets/images/partyImage.webp';
import { Route } from '@/router/models/enumerators';

export const useServiceStore = defineStore('service', {
    state: (): ServiceStoreState => ({
        serviceList: [
            { type: Service.BIRTHDAY, image: birthdayImage, pathName: Route.SERVICE_BIRTHDAY },
            {
                type: Service.CHRISTENINGS,
                image: christeningImage,
                pathName: Route.SERVICE_CHRISTENING
            },
            { type: Service.PARTY, image: partyImage, pathName: Route.SERVICE_PARTY }
        ],
        testimonials: [
            {
                name: 'Živilė',
                text: 'Tik geriausi atsiliepimai! Švaru, tvarkinga, didelė ir įdomi erdvė vaikams žaisti. Maistas skanus, jo paserviravimas labai gražus. O aptarnaujančios merginos labai malonios, paslaugios ir su šypsena veide. Ačiū Jums už gražià šventę!'
            },
            {
                name: 'Vaida',
                text: 'Labai draugiškas kolektyvas, jauki atmosfera, skanus maistas. Viską pavyko suderinti greitai, konkrečiai, o šventė buvo tokia, kokią ir įsivaizdavau 🙂 Rekomenduoju!'
            },
            {
                name: 'Loreta',
                text: 'Patys geriausi atsiliepimai! Jauki vieta šeimos šventėms. Aptarnavimas malonus, maistas labai skanus, visi svečiai liko sužavėti ir patenkinti. Apie vaikus net nekalbu, kiek laimės jiems buvo dugti žaidimų kambary Tikrai visiems rekomenduosiu, Ačiū Jums!'
            },
            {
                name: 'Vidmantė',
                text: 'Šventėme Krikštynas, geresnės vietos tokioms vaikų šventėms Kaune nelabai ir įsivaizduoju. Vaikams labai patiko kitoks, nei įprasta, žaidimų kambarys, maistas buvo skanus, patiekta skoningai, aplinka jauki, šviesi, žaisminga. Ačiū labai!Linkiu sėkmės ir tik tobulėti bei eiti pirmyn!'
            },
            {
                name: 'Gerda',
                text: 'Erdvi ir jauki vieta šeimos šventėms! Restoranas, gardus maistas, profesionalus ir malonus aptarnaujantis personalas, šėlionės ir pramogos vaikams. 😊 Šventės čia suaugusiems be jokių organizavimo rūpesčių. 😊'
            },
            {
                name: 'Elena',
                text: 'Puiki vieta krikštynoms! Didelis dėmesys detalėms, skanus maistas, labai jauki atmosfera - viskas kruopščiai apgalvota. Likome itin patenkinti :)'
            }
        ]
    })
});
