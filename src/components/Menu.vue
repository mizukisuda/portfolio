<template>
  <div id="drawersection">
    <div class="drawerButton">
      <img
        class="nav-close"
        src="../assets/images/close.png"
      >
    </div>
    <ul class="drawerMenuSection">
      <li class="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href="#headerSection"
          @click="Home()"
        >Home</a>
      </li>
      <li class="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href="#aboutSection"
          @click="About()"
        >About Me</a>
      </li>
      <li class="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href="#skillSection"
          @click="Skill()"
        >Skills Sets</a>
      </li>
      <li class="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href="#visionSection"
          @click="Vision()"
        >Vision</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: 'Menu',
  methods: {
    Home () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#headerSection'),
        400,
        null,
        null,
        'y'
      )
    },
    About () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#aboutSection'),
        400,
        null,
        null,
        'y'
      )
    },
    Skill () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#skillSection'),
        400,
        null,
        null,
        'y'
      )
    },
  Vision () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#visionSection'),
        400,
        null,
        null,
        'y'
      )
  }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#drawersection {
  background-color: #f3f3f3;
  width: 100%;
  height: 40px;
}

.nav-close {
  display: block;
  margin: 0 0 0 auto;
  padding: 10px 10px 0 0;
}

.drawerMenuSection {
  list-style-type: none;
  text-align: center;
  background: white;
  width: 250px;
  margin: 60px auto;
  padding: 10px;
}

.drawerMenuSection li a {
  text-decoration: none;
  color: gray;
  display: block;
  padding: 20px 50px;
}
</style>
