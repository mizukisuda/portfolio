<template>
  <div class="drawerSection">
    <div class="drawerButton">
      <button 
        class="btn close" 
        @click="toggle"
      >
        <img
          class="closeImage"
          src="../assets/images/closeImage.png"
        >
      </button>
    </div>
    <ul class="drawerMenuSection">
      <li class="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href="../components/Main.vue"
        >Home</a>
      </li>
      <li class="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href="../components/About.vue"
        >About Me</a>
      </li>
      <li class="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href="../components/Skill.vue"
        >Skills Sets</a>
      </li>
      <li class="drawerMenuItem">
        <a
          class="drawerMenuItemLink"
          href="../components/Vision.vue"
        >Vision</a>
      </li>
    </ul>
  </div>
</template>

<script>
/* Only comments */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);

.drawerSection {
  background-color: #f3f3f3;
  width: 100%;
  height: auto;
}

.drawerMenuSection {
  background-color: #fff;
  width: 100%;
  height: auto;
}

.drawerMenuItem {
  background-color: #fff;
  width: 100%;
  height: 50px;
}

.drawerMenuItemLink {
  color: #707070;
  font-size: 12px;
  font-family: "Noto Sans Japanese", sans-serif;
}

</style>