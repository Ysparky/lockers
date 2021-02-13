<template>
  <v-container fill-height fluid>
    <v-row justify="center">
      <v-col cols="4">
        <v-card elevation="10">
          <v-card-title>
            <v-spacer />
            Escanee el QR con su celular
            <v-spacer />
          </v-card-title>
          <v-card-text class="text-center">
            <img
              src="https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024.jpg"
              alt="Código QR"
              width="400"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="info" to="/">
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
