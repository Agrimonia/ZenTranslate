<template>
  <div>
    <el-steps :space="300" :active="2" center="true" finish-status="success">
      <el-step title="上传"></el-step>
      <el-step title="翻译"></el-step>
      <el-step title="导出"></el-step>
    </el-steps>
    <raw-text id="a"></raw-text>
    <translated-text id="b"></translated-text>
    <editing-area id="c"></editing-area>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import rawText from './RawText';
import translatedText from './TranslatedText';
import editingArea from './EditingArea';

export default {
  components: {
    rawText,
    translatedText,
    editingArea,
  },
};
</script>

<style scoped>
#a {
  float: left;
  height: 800px;
  width: 47%;
  background-color: grey;
}

#b {
  float: right;
  height: 800px;
  width: 47%;
  background-color: grey;
}

#c {
  float:left;
  width: 500px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}

</style>
