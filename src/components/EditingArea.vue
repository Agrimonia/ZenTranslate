<template>
  <div @keydown.tab.prevent="switchToNext()" @keydown.enter.prevent  id="editingArea">
    <div id="dragBar" @dragstart="freeDrag" draggable="true"></div>
    <el-input type="textarea" v-model="currentSentence" resize="none" :rows="3" autofocus id="textarea">
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
      event.dataTransfer.setData('text/plain',
        `${window.getComputedStyle(this.$el).left.slice(0, -2) - event.clientX},${window.getComputedStyle(this.$el).top.slice(0, -2) - event.clientY}`);
    },
  },
};
</script>

<style scoped>
#textarea{
  width: 580px;
  margin: 10px;
}
#editingArea {
  width: 600px;
  height: 150px;
  position: absolute;
  border-style: solid;
  border-width: thin;
  border-color: #D3DCE6;
  border-radius: 0.5em 0.5em 0 0;
  background-color: white;
  text-align: center;
}

#dragBar{
  height: 20px;
  width: 600px;
  border-radius: 0.5em 0.5em 0 0;
  background-color: #D3DCE6;
  cursor: move;
}
</style>
