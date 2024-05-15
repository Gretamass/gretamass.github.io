import { library, config } from '@fortawesome/fontawesome-svg-core';

import {
    faXmark,
    faChevronLeft,
    faChevronRight,
    faChevronDown,
    faChevronUp,
    faCheck,
    faBars
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default (): void => {
    config.autoAddCss = true;
    library.add(
        faChevronLeft,
        faChevronRight,
        faChevronDown,
        faChevronUp,
        faCheck,
        faFacebook,
        faInstagram,
        faXmark,
        faBars
    );
};
