import './style.css';
import {createApp} from 'vue';
import {createPinia} from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import router from '@/router';

import AppComposition from './App.vue';
import apolloClient from '@/apollo';
import {DefaultApolloClient} from '@vue/apollo-composable';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { md3 } from 'vuetify/blueprints';

const vuetify = createVuetify({
  blueprint: md3,
  components,
  directives,
  // theme: {
  //   themes: {
  //     // light: {
  //     //   dark: false,
  //     //   colors: {
  //     //     primary: '#E53935',
  //     //     secondary: '#FFCDD2',
  //     //     background: '#00ff00',
  //     //     surface: '#1200FF',
  //     //   }
  //     // },
  //   },
  // },
});

createApp(AppComposition)
  .use(createPinia().use(piniaPluginPersistedState))
  .provide(DefaultApolloClient, apolloClient)
  .use(router)
  .use(vuetify)
  .mount('#app');
