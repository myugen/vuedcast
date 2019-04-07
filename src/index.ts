import Vue from 'vue';
import AppVue from './App.vue';

const app = new Vue({
  render: (h) => h(AppVue)
}).$mount('#app');
