<template>
  <div style = "overflow-y: auto">
    <div v-for="(sentence, key) in translatedSentences" :key="key">
      <span @click="switchCurrentIndex(key)" :class="{selected:currentIndex==key}">{{sentence}}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    translatedSentences() {
      return this.$store.state.translatedSentences;
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

<style scoped>
.selected {
  background-color: skyblue;
  border-color: blue;
}
</style>
