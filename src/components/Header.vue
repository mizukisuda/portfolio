<template>
  <Header>
    
    <div class="headerSection">
    
     </div>
     <div class="headerButton">
      <button @click="toggle" class="btn btn-success">
      <img class="img" src="../../src/assets/images/humburger.jpg" />
      </button>
      <div id="HeaderDrawer">
      
      <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">content here</div>
      </Drawer>
     </div>
    
    </div>
  </Header>
</template>

<script>
import Drawer from "vue-simple-drawer";

export default {
  name: 'HeaderDrawer',
  components: {
    Drawer
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
.headerSection{
  background-color: #F3F3F3;
  width: 100%;
  height: auto;
}
</style>
