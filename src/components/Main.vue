<template>
  <div class="mainSection">
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
    name: 'HelloWorld',
    props: {
    msg: String 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainSection {
  background: linear-gradient(to bottom, #80e1f7, #06c1e6);
  width: 100%;
  height: auto;
  padding-bottom: 30px;
  text-align: center;
}

.Name {
  font-size: 18pt;
  color: bold;
  text-shadow: 1px 2px 3px #808080;
  padding: 20px;
}

.profilePicture {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  padding: 20px;
}
</style>
