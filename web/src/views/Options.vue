<template>
  <v-container fill-height fluid>
    <v-row justify="center">
      <v-col class="col-sm-4">
        <v-card
          to="/qr"
          color="cyan lighten-4 rounded-xl pa-4"
          min-height="100"
        >
          <v-card-text class="text-center">
            <h2>INGRESO POR QR</h2>
            (muestre su celular)
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="col-sm-4">
        <v-card
          to="/login"
          color="green lighten-4 rounded-xl pa-4"
          min-height="100"
        >
          <v-card-text class="text-center">
            <h2>
              INGRESO POR <br />
              CONTRASEÑA
            </h2>
          </v-card-text>
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

<style scoped></style>
