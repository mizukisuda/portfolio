<template>
  <div id="footerSection">
    <a
      id="smoothScroll"
      href="#app"
      @click="clickSmoothScroll()"
    >
      <img
        class="gotop"
        src="../assets/images/gotop.png"
        alt="トップへ戻る"
      ></a>
    <div class="footerCopyright">
      <small> &copy;Seattleconsulting</small>
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
    margin-top: auto;
    text-align: center;
    padding: 20px 0 15px 0;
    position: relative;
  }

  .foterCopyright {
    font-family: 'Noto Sans JP', sans-serif;
    padding: 10px;
  }

  .gotop {
    width: 30px;
    height: 30px;
    margin: 0 auto;
    top: -15px;
    left: 49%;
    position: absolute;
  }

</style>
