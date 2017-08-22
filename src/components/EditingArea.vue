<template>
  <div @keydown.tab.prevent="switchToNext()" @keydown.enter.prevent draggable="true" @dragstart="freeDrag" id="dragme">
    <el-input type="textarea" v-model="currentSentence" resize="both" :autosize="{maxRows:5}" autofocus>
    </el-input>
    <div>
      <el-button type="small" @click="switchToPrevious()">上一句</el-button>
      <el-button type="small" @click="switchToNext()">下一句(Tab)</el-button>
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
    switchToPrevious() {
      this.$store.commit('switchToPrevious');
    },
    freeDrag(event) {
      const style = window.getComputedStyle(event.target, null);
      event.dataTransfer.setData('text/plain',
        `${parseInt(style.getPropertyValue('left'), 10) - event.clientX},${parseInt(style.getPropertyValue('top'), 10) - event.clientY}`);
    },
  },
};
</script>

<style scoped>
textarea {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

#dragme {
  width: 500px;
  position: absolute;
}
</style>
