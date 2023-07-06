import { createApp } from 'vue'
import App from './App.vue';
import router from './router.js';
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      count: 1
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify);
app.mount('#app')
