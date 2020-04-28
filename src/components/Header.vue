<template>
  <div id="headerSection">
    <div id="nav-drawer">
      <input
        id="nav-input"
        v-model="checked"
        type="checkbox"
        class="nav-unshown"
      >
      <label
        id="nav-close"
        class="nav-unshown"
        for="nav-input"
      />
      <label
        id="nav-open"
        for="nav-input"
      ><span /></label>
      <div id="nav-content">
        <Menu @close="closeMenuEvent" />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue"
export default {
  name: 'Header',
  components: {
    Menu
  },
  data(){
    return{
      checked:false,
    }
  },
  methods:{
    closeMenuEvent(){
      this.checked=false
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#headerSection {
  background: #f3f3f3;
  position: fixed;
  width: 100%;
  padding: 20px;
}

#nav-drawer {
  position: relative;
}

.nav-unshown {
  display: none;
}

#nav-open {
  display: inline-block;
  width: 30px;
  height: 20px;
  vertical-align: middle;
  cursor: pointer;
}

#nav-open span,
#nav-open span::before,
#nav-open span::after {
  position: absolute;
  height: 3px;
  width: 25px;
  border-radius: 3px;
  background: #555;
  display: block;
  content: '';
  cursor: pointer;
}

#nav-open span::before {
  bottom: -8px;
}

#nav-open span::after {
  bottom: -16px;
}

#nav-close {
  display: none;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

#nav-content {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 80%;
  max-width: 330px;
  height: 100%;
  background: #f3f3f3;
  transition: 0.3s ease-in-out;
  -webkit-transform: translateX(-105%);
  transform: translateX(-105%);
}

#nav-input:checked ~ #nav-close {
  display: block;
  opacity: 0.5;
}

#nav-input:checked ~ #nav-content {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
  box-shadow: 6px 0 25px rgba(0, 0, 0, 0.15);
}
</style>
