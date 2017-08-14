<template>
  <div @keydown.tab.prevent="switchToNext()" draggable="true" >
    <el-input type="textarea"
      v-model="currentSentence"
      resize="both"
      autosize
      autofocus>
    </el-input>
    <div>
      <el-button size="mini" @click="switchToPrevious()">上一句</el-button>
      <el-button size="mini" @click="switchToNext()">下一句(Tab)</el-button>
      <el-button size="mini" @click="resetText()">采用翻译建议</el-button>
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
    switchToPrevious() {
      this.$store.commit('switchToPrevious');
    },
  },
};
</script>

<style scoped>

</style>
