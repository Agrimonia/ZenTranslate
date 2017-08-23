<template>
  <div v-if="percentage !== 100">
    <el-progress :text-inside="true" :stroke-width="18" :percentage="percentage"></el-progress>
  </div>
  <div v-else> 
    <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
  </div>
</template>

<script>
export default {
  computed: {
    percentage() {
      return Math.floor(
        (this.$store.state.currentIndex * 100) / this.$store.state.translatedSentences.length);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
