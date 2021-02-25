<template>
  <div class="overlay">
    <div class="modal pa-2">
      <div class="modal__title">
        <span>Sesión a punto de expirar</span>
      </div>
      <div class="p-3">
        <p>{{ second }} {{ second > 1 ? 'segundos' : 'segundo' }} restantes</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 10000,
    };
  },
  created() {
    let timerId = setInterval(() => {
      this.time -= 1000;
      if (!this.$store.state.idleVue.isIdle) clearInterval(timerId);
      if (this.time < 1) {
        clearInterval(timerId);
        this.$emit('log-out');
      }
    }, 1000);
  },
  computed: {
    second() {
      return this.time / 1000;
    },
  },
};
</script>

<style lang="postcss" scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 500px;
  box-shadow: 1px 2px 4px rgba(153, 155, 168, 0.12);
  border-radius: 4px;
  background-color: white;
}

.modal__title {
  color: #38404f;
  @apply flex items-center justify-between p-3 font-bold;
}
</style>
