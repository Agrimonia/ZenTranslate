<template>
  <div @drop.prevent="freeDrag" @dragover.prevent>
    <el-row>
      <el-col :span="24">
        <page-header/>
      </el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="12">
        <raw-text class="text" />
      </el-col>
      <el-col :span="12">
        <translated-text class="text" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <editing-area ref="editingArea" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import pageHeader from './EditPageHeader';
import rawText from './RawText';
import translatedText from './TranslatedText';
import editingArea from './EditingArea';

export default {
  computed: {
    translatedSentences() {
      return this.$store.state.translatedSentences;
    },
  },
  components: {
    pageHeader,
    rawText,
    translatedText,
    editingArea,
  },
  methods: {
    freeDrag(event) {
      const offset = event.dataTransfer.getData('text/plain').split(',');
      const style = this.$refs.editingArea.$el.style;
      style.left = `${event.clientX + parseInt(offset[0], 10)}px`;
      style.top = `${event.clientY + parseInt(offset[1], 10)}px`;
    },
  },
};
</script>

<style scoped>
.text {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: medium;
  color: #1F2D3D;
  height: 700px;
  border-style: solid;
  border-color: #58B7FF;
  border-width: 2px;
  border-radius: 1em 1em;
  padding: 10px;
}
</style>
