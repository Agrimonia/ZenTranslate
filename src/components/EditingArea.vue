<template>
  <div @keydown.tab.prevent="switchToNext()">
    <el-input type="textarea"
      :rows="5"
      style="width:800px;position:relative;"
      v-model="currentSentence" autofocus>
    </el-input>
    <div>
      <el-button @click="switchToNext()">下一句(Tab)</el-button>
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
    },
  },
};
</script>

<style scoped>

</style>
