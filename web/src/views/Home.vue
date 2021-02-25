<template>
  <v-container class="pa-0 no-center" fill-height fluid>
    <v-dialog v-model="showDialog" persistent width="500">
      <v-card>
        <v-card-text class="text-center pt-5">
          RETIRE SU PAQUETE
          <br />
          <v-chip class="ma-3" color="primary">
            {{ selectedPackage.location }}
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
          <v-toolbar-title class="white--text">
            {{ getLoggedUser.name }}
          </v-toolbar-title>
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
          <template v-slot:item.action="{ item }">
            <v-btn depressed color="primary" @click="openBox(item)">
              ABRIR
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      showDialog: false,
      selectedPackage: {},
      timeoutId: '',
      headers: [
        { text: '#', value: 'id' },
        { text: 'PAQUETE', value: 'package' },
        { text: 'DETALLE', value: 'detail' },
        { text: 'UBICACIÓN', value: 'location' },
        { text: 'ACCIÓN', value: 'action' },
      ],
      packages: [],
    };
  },
  created() {
    this.setPackages();
  },
  computed: {
    ...mapGetters(['getUsers', 'getPackages', 'getLoggedUser']),
  },
  methods: {
    logOut() {
      this.$router.push('Options');
      this.$socket.emit('stopListening');
    },
    setPackages() {
      this.getPackages.forEach((pack) => {
        if (pack.userId === this.getLoggedUser.id) {
          this.packages.push(pack);
        }
      });
    },
    openBox(selectedPackage) {
      this.showDialog = true;
      this.selectedPackage = selectedPackage;
    },
    closeBox() {
      const index = this.packages.indexOf(this.selectedPackage);
      if (index != -1) {
        this.packages.splice(index, 1);
      }
      clearTimeout(this.timeoutId);
      this.showDialog = false;
    },
  },
  mounted() {
    this.sockets.subscribe('closeLocker', () => this.closeBox());
  },
  watch: {
    showDialog(val) {
      if (!val) return;
      this.$socket.emit('moveServo', this.selectedPackage.command);
      this.timeoutId = setTimeout(() => this.logOut(), 30000);
    },
  },
};
</script>

<style scoped>
.no-center {
  align-items: initial !important;
}
</style>
