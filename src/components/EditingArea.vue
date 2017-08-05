<template>
  <div @keydown.tab.prevent="switchToNext()">
    <textarea v-model="currentSentence" autofocus></textarea>
    <div>
      <button @click="switchToNext()">下一句(Tab)</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentSentence: {
      get() {
        return this.$store.getters.currentTranslatedSentence;
      },
      set(value) {
        this.$store.commit('updateTranslatedSentence', value);
      },
    },
  },
  methods: {
    switchToNext() {
      this.$store.commit('switchToNext');
      // if (this.currentSentence === '') {
      //   this.$store.dispatch('machineTranslate', this.currentSentence);
      // }
    },
  },
};
</script>

<style scoped>

</style>
