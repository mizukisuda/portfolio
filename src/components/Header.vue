<template>
  <div id="headerSection">
    <div class="header__menu">
      <div
        class="header__menu__line"
        :class="{'is-active': active}"
        @click="naviOpen"
      >
        <span />
        <span />
        <span />
      </div>
    </div>
    <transition name="navi">
      <nav
        v-show="navi"
        class="navi"
      >
        <ul class="drawerMenuSection">
          <li><a href="../components/Main.vue">Home</a></li>
          <li><a href="../components/About.vue">About Me</a></li>
          <li><a href="../components/Skill.vue">Skills Sets</a></li>
          <li><a href="../components/Vision.vue">Vision</a></li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
export default( {
  name: "Header",
    data() {
      return {
    active: false,
    navi: false,
      }
  },
  methods: {
    naviOpen: function() {
      this.active = !this.active;
      this.navi = !this.navi;
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#headerSection {
  padding: 0;
  background-color: #f3f3f3;
  width: auto;
  height: 50px;
}

.header__menu {
  position: fixed;
  top: 1;
  right: 0;
}

.header__menu__line {
  right: 0;
  width: 36px;
  height: 30px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: 20px;
  position: absolute;
  cursor: pointer;
}

.header__menu__line span {
  width: 100%;
  height: 2px;
  background: #000;
  display: block;
  transition: 0.6s;
  position: absolute;
}

.header__menu__line span:first-child {
  top: 0;
}

.header__menu__line span:nth-child(2) {
  top: 14px;
}

.header__menu__line span:last-child {
  bottom: 0;
}

.header__menu__line.is-active span {
  transition: 0.6s;
}

.header__menu__line.is-active span:first-child {
  transform: rotate(45deg);
  top: 50%;
}

.header__menu__line.is-active span:nth-child(2) {
  opacity: 0;
}

.header__menu__line.is-active span:last-child {
  transform: rotate(-45deg);
  top: 50%;
}

.navi {
  width: 100%;
  height: 100vh;
  display: flex;
}

.drawerMenuSection {
  list-style-type: none;
  text-align: center;
  background: gray;
  padding: 60px 0;
  width: 250px;
  margin: 0 0 0 auto;
}

.drawerMenuSection li a {
  text-decoration: none;
  color: #fff;
  display: block;
  padding: 20px 50px;
}

.navi-enter,
.navi-leave-to {
  opacity: 0;
}

.navi-enter-to,
.navi-leave {
  opacity: 1;
}

.navi-enter-active,
.navi-leave-active {
  transition: 0.6s;
}

</style>
