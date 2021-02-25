<template>
  <v-container fill-height fluid>
    <v-row justify="center">
      <v-col cols="4">
        <v-card elevation="10">
          <v-card-title class="text-center">
            Escanee el QR de su celular para identificarse
          </v-card-title>
          <v-card-text class="text-center">
            <img
              src="https://streamline-production-bucket.cellar-c2.services.clever-cloud.com/icons/low/subc_M9YctUtkRSwnKjquQFVkDCZi/phone-qr-code-wkbp5bzqutbkhhzn4nen7.png"
              alt="Código QR"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="info" to="/options">
              REGRESAR
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
