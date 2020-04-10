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
/* Only comments */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

.mainSection {
  margin-top: 60px;
  min-height: 200px;
  border-bottom: solid 1px #cbcbcb;
  background: linear-gradient(to bottom, #80e1f7, #06c1e6);
  width: 100%;
  height: auto;
  padding-bottom: 30px;
  text-align: center;
}

.Name {
  font-style: bold;
  font-size: 18pt;
  font-family: "Noto Sans JP", sans-serif;
  color: #fff;
  text-shadow: 1px 2px 3px #808080;
}

.userName {
  padding: 20px 0 0 10px;
}

.companyName {
  padding: 10px;
}

.profilePicture {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  padding: 10px;
  background-position: center;
}
</style>
