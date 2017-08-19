<template>
  <div style = "overflow-y: auto">
    <span v-for="(sentence, key) in translatedSentences"
      :key="key"
      @click="switchCurrentIndex(key)"
      :class="{selected:currentIndex==key}"
      v-if=" sentence !== '' && sentence !== '\n' ">
      {{sentence}}
    </span>
    <div v-else>
      <br>
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
  background-color: #D3DCE6;
}
</style>
