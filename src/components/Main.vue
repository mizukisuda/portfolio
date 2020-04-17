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
/* only comments */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainSection {
  background: linear-gradient(180deg, #80e1f7, #06c1e6);
  padding: 30px 0 20px 0;
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
  width: 128px;
  height: 128px;
  border-radius: 50%;
  padding: 5px 0 0 0;
  background-position: center;
}
</style>
