<template>
  <div id="mainSection">
    <div class="Name">
      <div class="userName">
        M.Suda
      </div>
      <div class="companyName">
        Seattleconsulting
      </div>
    </div>
    <img
      class="profilePicture"
      src="../assets/images/profilePicture.png"
    >
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    main: { /* 親から受け取る属性名 */
    type: Boolean,  /* データの型 */
    default: false, /* デフォルト値 */
  }
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

#mainSection {
  background: linear-gradient(180deg, #80e1f7, #06c1e6);
  padding-bottom: 10px;
  text-align: center;
}

.Name {
  font-weight: bold;
  font-size: 18pt;
  font-family: "Noto Sans JP", sans-serif;
  color: #fff;
  text-shadow: 1px 2px 3px #808080;
}

.userName {
  border-bottom: solid 2px #fff;
  margin: 0 auto;
  padding: 20px 0 15px 0;
  width: 150px;
}

.companyName {
  padding: 10px;
}

.profilePicture {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  padding: 5px 0 0 0;
  background-position: center;
}
</style>
