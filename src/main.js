import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from '@/store/store'

Vue.config.productionTip = false

require('bootstrap/dist/css/bootstrap.min.css');

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})