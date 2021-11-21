<template>
  <div id="main">
      <InfoCard/> 
      <FormCard/>
  </div>
</template>

<script>
import InfoCard from "@/components/InfoCardd.vue";
import FormCard from "@/components/FormCard.vue";
export default {
  name: "InfoPage",
  components: {
    FormCard,InfoCard
  },
};
</script>

<style>
#main {
  display: block;
  font-family: Comic Sans MS, Comic Sans, cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;  
  height: 100%;     
}

@media only screen and (min-width: 800px) {
  #main {
    display: flex;
  }
}
.card {
  border: 2px solid black;
  border-radius: 8px;
  width: 275px;
  height: 350px;
  background: #F29987;
  box-shadow: 6px 8px 8px gray ;
  margin: 20px;
  padding: 10px;
  line-height: 0.7;
  display: inline-block;
  vertical-align: top;
}

</style>