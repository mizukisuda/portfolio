<template>
  <div class= mainSection>
		<div class= Name>
			<div class= userName>M.Suda</div>
			<div class= companyName>Seattleconsulting</div>
		</div>
		<img class= "profilePicture" src="../assets/images/profilePicture.png"/>
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
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);

.mainSection{
		position: relative;
    background: linear-gradient(to bottom,#80E1F7 , #06C1E6) ;
    width: 100%;
    height: auto;
		padding-bottom: 30px;
		text-align: center;
}

.Name{
	position: absolute;
	top: 5px;
	background-color: #FFFFFF;
	font-size: 18pt;
	color: Bold;
	text-shadow: 1px 2px 3px #808080;
	font-family: "Noto Sans";
}


.profilePicture{
	Border-radius: 50%;
	width: 20%; 
	height: 20%; 
}
</style>
