<template>
  <v-container class="pa-0 no-center" fill-height fluid>
    <v-dialog v-model="openBox" persistent width="500">
      <v-card>
        <v-card-text class="text-center pt-5">
          RETIRE SU PAQUETE
          <br />
          <v-chip class="ma-3" color="primary">
            CASILLERO 1
          </v-chip>
          <br />
          GRACIAS POR UTILIZAR NUESTRO SERVICIO
          <v-progress-linear
            indeterminate
            color="primary"
            class="mb-0 mt-2"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-row justify="center" dense no-gutters>
      <v-col cols="12" style="height: fit-content">
        <v-app-bar color="primary" dense flat>
          <v-spacer />
          <v-toolbar-title class="white--text"> {{ name }}</v-toolbar-title>
          <v-spacer />
          <v-btn color="white" to="/options" icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-btn>
        </v-app-bar>
      </v-col>
      <v-col cols="10" class="my-12">
        <v-data-table
          :headers="headers"
          :items="packages"
          class="elevation-2"
          disable-filtering
          disable-pagination
          disable-sort
          hide-default-footer
        >
          <template v-slot:item.action="{}">
            <v-btn depressed color="primary" @click="openBox = true">
              ABRIR
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      openBox: false,
      name: 'Alvaro Diaz',
      headers: [
        { text: '#', value: 'id' },
        { text: 'PAQUETE', value: 'package' },
        { text: 'DETALLE', value: 'detail' },
        { text: 'UBICACIÓN', value: 'location' },
        { text: 'ACCIÓN', value: 'action' },
      ],
      packages: [
        {
          id: 1,
          package: 'Compra en Tienda A',
          detail: 'Set de minitaladro con accesorios',
          location: 'Casillero 1',
        },
      ],
    };
  },
  methods: {
    logOut: function() {
      this.$router.push('Options');
    },
  },
  watch: {
    openBox(val, oldV) {
      console.log(val, oldV);
      if (!val) return;
      this.$socket.emit('moveServo', 'L-01 02 03');
      setTimeout(() => (this.openBox = false), 4000);
    },
  },
};
</script>

<style scoped>
.no-center {
  align-items: initial !important;
}
</style>
