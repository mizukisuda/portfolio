<template>
  <div id="footerSection">
    <a
      href="#app"
      @click="clickSmoothScroll()"
    >
      <img
        class="gotop"
        src="../assets/images/gotop.png"
        alt="トップへ戻る"
      ></a>
    <div class="footerCopyright">
      &copy;Seattleconsulting
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#app'),
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
  #footerSection {
    background: linear-gradient(#80e1f7, #06c1e6);
    width: 100%;
    height: auto;
    text-align: center;
    padding-bottom: 20px;
  }

  .footerCopyright {
    color: #555;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18px;
  }

  .gotop {
    width: 40px;
    height: 40px;
    top: -20px;
    position: relative;
  }

</style>
