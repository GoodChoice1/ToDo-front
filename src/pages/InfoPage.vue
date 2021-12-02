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