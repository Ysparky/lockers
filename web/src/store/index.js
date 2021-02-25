import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        username: 'us1',
        name: 'Alvaro Diaz',
        password: '123456',
      },
      {
        id: 2,
        username: 'us2',
        name: 'José Caldas',
        password: '123456',
      },
    ],
    packages: [
      {
        id: 1,
        package: 'Compra en Tienda A',
        detail: 'Set de minitaladro con accesorios',
        location: 'Casillero 1',
        command: '1',
        userId: 1,
      },
      {
        id: 2,
        package: 'Compra en Tienda B',
        detail: 'Par de zapatillas deportivas marca X',
        location: 'Casillero 2',
        command: '2',
        userId: 2,
      },
      {
        id: 3,
        package: 'Encomienda particular',
        detail: 'Envío de Juliana Caldas desde Miraflores',
        location: 'Casillero 3',
        command: '3',
        userId: 2,
      },
    ],
    loggedUser: {
      id: 1,
      username: 'us1',
      name: 'Alvaro Diaz',
      password: '123456',
    },
  },
  mutations: {
    changeLoggedUser: (state, payload) => {
      state.loggedUser = payload;
    },
  },
  actions: {
    setLoggedUser: (context, user) => context.commit('changeLoggedUser', user),
    setActiveidle: (context, value) =>
      context.commit('idleVue/IDLE_CHANGED', value),
  },
  getters: {
    getUsers: state => state.users,
    getPackages: state => state.packages,
    getLoggedUser: state => state.loggedUser,
  },
  modules: {},
});
