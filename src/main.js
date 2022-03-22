import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // Monta el componente App en el id #app 
  render: h => h(App),
}).$mount('#app')
