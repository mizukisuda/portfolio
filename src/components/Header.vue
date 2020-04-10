<template>
  <div id="headerSection">
    <button
      class="btn"
      @click="toggle"
    >
      <img
        class="headerButton"
        src="../assets/images/humburger.png"
      >
    </button>
    <Drawer
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <div v-if="open">
        <Menu />
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";
import Menu from "../components/Menu.vue"

export default {
  name: 'Header',
  components: {
    Drawer,
    Menu
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
  "~bootstrap/scss/buttons"
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#headerSection {
  background-color: #f3f3f3;
  width: 100%;
  height: auto;
}

.btn {
  box-shadow: none;
  border-style: none;
}

.headerButton {
  height: 30px;
  width: 30px;
}

</style>
