<template>
  <div>
    <table>
      <!-- 暂时用一下最蠢的排版方式2333 -->
      <td>
        <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
      </td>
      <td>
      <el-steps :space="300" :active="2" :center="true" finish-status="success">
        <el-step title="上传"></el-step>
        <el-step title="翻译"></el-step>
        <el-step title="导出"></el-step>
      </el-steps>
      </td>
      <td>
        <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
      </td>

      <td>
        <el-button id="fb" type="primary" @click="dialogFinishVisible = true">完成翻译</el-button>
        <el-dialog style = "overflow-y: auto" size="large" :visible.sync="dialogFinishVisible">
          <el-steps :space="300" :active="3" :center="true" finish-status="success">
            <el-step title="上传"></el-step>
            <el-step title="翻译"></el-step>
            <el-step title="导出"></el-step>
          </el-steps>
          <el-button type="primary" v-clipboard="copyData">一键复制到剪贴板</el-button>
          <br>
          <br>
          <el-input id= "preformatted" type="textarea" :readonly='true' :rows="20" v-model="copyData">
          </el-input>
        </el-dialog>
      </td>
    </table>
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
  data() {
    return {
      dialogFinishVisible: false,
      // copyData: this.$store.state.translatedSentences.join(''),
    };
  },
  computed: {
    copyData() {
      return this.$store.state.translatedSentences.map((x) => {
        return x === '' ? '\n' : x;
      }).join('');
    },
    translatedSentences() {
      return this.$store.state.translatedSentences;
    },
  },
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
