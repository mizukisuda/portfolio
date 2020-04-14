<template>
  <div id="footerSection">
    <div class="footerCopyright">
      <div
        v-scroll="handleScroll"
        class="top-scroll"
        :class="{visible: visible}"
      >
        <a
          v-smooth-scroll
          href="#headerSection"
        ><img
          class="footerScroll"
          src="../assets/images/gotop.png"
          alt="トップへ戻る"
        ></a>
        <p>©Seattleconsulting</p>
      </div>
    </div>
  </div>
</template>

<script>
/* Only comments */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footerSection {
  width: 100%;
  height: auto;
  max-height: 40px;
  margin-top: auto;
  background: linear-gradient(180deg, #80e1f7, #06c1e6);
}

.footerCopyright {
  color: #555;
  font-size: 12pt;
  font-family: "Noto Sans JP", sans-serif;
  text-align: center;
  font-weight: bold;
  position: relative;
  padding: 10px;
}

.footerScroll {
  width: 25px;
  height: 25px;
  position: absolute;
  top: -15px;
  text-align: center;
}

</style>
