<template>
  <div id="app">  
    <img src="../assets/ic_launcher.png">
    <h1>欢迎使用 ZenTranslator 在线辅助翻译平台</h1>
    <h2>借助 Google 翻译结果，缩短你的翻译时间</h2>
    <br>
    <br>
    <!--
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in 3" :key="item">
        <h3>介绍图片{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    -->
    <table>
      <td>
        <el-button size="large" @click="dialogFormVisible = true">粘贴文本</el-button>
        <el-dialog size="small" :visible.sync="dialogFormVisible">
          <el-steps :space="200" :active="1" :center="true" finish-status="success">
            <el-step title="上传"></el-step>
            <el-step title="翻译"></el-step>
            <el-step title="导出"></el-step>
          </el-steps>
          <el-radio class="radio" v-model="radio" label='1'>English->中文</el-radio>
          <el-radio class="radio" v-model="radio" label='2'>中文->English</el-radio>
          <el-input type="textarea" :rows="20" placeholder="在这里键入或粘贴待翻译文本" v-model="textarea">
          </el-input>
          <br>
          <br>
          <router-link to='/editPage'>
            <el-button size="large" @click="splitSentence">开始翻译</el-button>
          </router-link>
        </el-dialog>
      </td>
      <td>
        <h3>&emsp;或&emsp;</h3>
      </td>
      <td>
        <el-button size="large" :disabled="true" @click="dialogUploadVisible = true">上传文件</el-button>
        <el-dialog size="tiny" :visible.sync="dialogUploadVisible">
          <el-steps :space="150" :active="1" :center="true" finish-status="success">
            <el-step title="上传"></el-step>
            <el-step title="翻译"></el-step>
            <el-step title="导出"></el-step>
          </el-steps>
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="true"
            :before-upload="beforeUpload"
            >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传TXT文件，且不超过100kb</div>
          </el-upload>
        </el-dialog>
      </td>
    </table>
    <br>
    <br>
    <br>
    <footer>
      <p>&copy;&nbsp;2017&nbsp;&hearts;&nbsp;Jotang Studio</p>
    </footer>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import tokenzier from 'sbd'; // eslint-disable-line

export default {
  data() {
    return {
      textarea: '',
      dialogFormVisible: false,
      dialogUploadVisible: false,
      radio: '1',
    };
  },
  computed: {
    sentences() {
      return this.$store.state.sentences;
    },
  },

  methods: {
    splitSentence() {
      this.$store.commit('changeLanguage', this.radio);
      const reg = /。|；|！|？|\n/g;
      let strArray = [];
      if (this.radio === '2') {
        let strFlag = [];
        strFlag = this.textarea.match(reg);
        const flagcount = strFlag.length;
        strArray = this.textarea.split(reg);
        for (let i = 0; i < flagcount; i += 1) {
          strArray[i] = strArray[i].concat(strFlag[i]);
        }
      } else {
        strArray = this.textarea.split(/\n/g);
        const paracount = strArray.length;
        for (let count = 0; count < paracount; count += 1) {
          strArray = strArray.concat(tokenzier.sentences(strArray[count]));
          strArray = strArray.concat('\n');
        }
        strArray = strArray.slice(paracount);
      }
      while (strArray[strArray.length - 1] === '\n' || strArray[strArray.length - 1] === '') {
        strArray.pop();
      }
      this.$store.commit('loadSentences', strArray);
      this.$store.dispatch('machineTranslate');
    },
    beforeUpload(file) {
      const isTXT = file.type === 'text/plain';
      const isLt100K = file.size / 1024 < 100;
      if (!isTXT) {
        this.$message.error('上传文件只能是 TXT 格式!');
      }
      if (!isLt100K) {
        this.$message.error('上传文件大小不能超过 100KB!');
      }
      return isTXT && isLt100K;
    },
  },
};
</script>
<style>
  table {
    margin: auto;
  }
  .el-input {
    width: 750px;
    position: relative;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  footer {
    position:absolute;
    bottom:0;
    width: 100%;
    height:100px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 16px;
    margin-left: -8px;
    margin-right:  -8px; 
  }
</style>
