<template>
  <div style = "overflow-y: auto" >
    <div v-for="(sentence, key) in sentences" :key="key">
      <span @click="switchCurrentIndex(key)" :class="{selected:currentIndex==key}">{{sentence}}</span>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    sentences() {
      return this.$store.state.sentences;
    },
    currentIndex() {
      return this.$store.state.currentIndex;
    },
  },
  methods: {
    switchCurrentIndex(key) {
      this.$store.commit('switchCurrentIndex', key);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selected {
  background-color: skyblue;
  border-color: blue;
}
</style>
