import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueGtag from 'vue-gtag';

import mountFontAwesome from '@/fontAwesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from '@/App.vue';
import router from '@/router';

const app = createApp(App);

app.use(VueGtag, {
    config: {
        id: 'G-MGS1N8V21W'
    }
});

app.use(createPinia());
app.use(router);

mountFontAwesome();
app.component('FaIcon', FontAwesomeIcon);

app.mount('#app');
