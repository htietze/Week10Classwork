import Vue from 'vue'
import App from './App.vue'

// vue proto adds new variable to object
import HelloAPI from '@/services/HelloAPI'

Vue.config.productionTip = false

// convention is to start vue proto methods with $, valid JS variable name
Vue.prototype.$hello_api = HelloAPI

// Really don't know what this does.
// New Vue app, rendered as the App imported from App.vue?
new Vue({
  render: h => h(App),
}).$mount('#app')
