<template>
  <div>
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
  float: right;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
