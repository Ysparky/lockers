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
            ></v-text-field>
            <v-text-field
              placeholder="Contraseña"
              filled
              full-width
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="info" to="/" outlined>
              INGRESAR
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
