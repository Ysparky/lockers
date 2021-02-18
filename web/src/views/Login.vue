<template>
  <v-container fill-height fluid>
    <v-row justify="center">
      <v-col cols="4">
        <v-card class="pa-8" elevation="10">
          <v-card-title> <v-spacer /> LOGIN<v-spacer /> </v-card-title>
          <v-card-text>
            <v-text-field
              placeholder="Usuario"
              filled
              full-width
              v-model="username"
            ></v-text-field>
            <v-text-field
              placeholder="Contraseña"
              filled
              full-width
              v-model="password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="info" @click="handleLogin" outlined> INGRESAR </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters(['getUsers']),
  },
  methods: {
    ...mapActions(['setLoggedUser']),
    validateAccount() {
      let userMatch = -1;
      this.getUsers.forEach((user) => {
        let { username, password } = user;
        if (this.username == username && this.password == password) {
          userMatch = user;
          return;
        }
      });
      return userMatch;
    },
    handleLogin() {
      const user = this.validateAccount();
      if (user != -1) {
        this.setLoggedUser(user);
        this.$router.push('/');
      } else {
        console.log('Accound not Found');
      }
    },
  },
};
</script>
