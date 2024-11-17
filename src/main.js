import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "../src/scss/main.scss";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

/* import Pinia */
import { createPinia } from 'pinia';

// Add icons to the library
library.add(fas, fab, far);

// Create Pinia instance
const pinia = createPinia();

// Create app instance
const app = createApp(App);

// Use store, Pinia, and router
app.use(store);
app.use(pinia);
app.use(router);

// Register FontAwesomeIcon component
app.component('font-awesome-icon', FontAwesomeIcon);

// Mount the app
app.mount('#app');
