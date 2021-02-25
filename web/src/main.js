import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client';
import IdleVue from 'idle-vue';

const socketConnection = SocketIO('http://localhost:5001');

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: socketConnection,
  })
);

const eventsHub = new Vue();

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 10000,
  store,
  startAtIdle: false,
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
