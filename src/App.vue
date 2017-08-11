<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Welcome to Zentranslator</h1>
    <h2>A one-stop computer-assisted translation platform for lightweight translation work</h2>
    <br><br>
    <div id="form">
      <el-input type="textarea"
        :rows="10"
        style="width:500px;position:relative;"
        placeholder="在这里粘贴待翻译文本"
        v-model="textarea">
      </el-input>
      <ul id="test">
        <li v-for="sentence in sentences">
          {{ sentence }}
        </li>
      </ul>
      <br>
      <br>
      <br>
      <router-link to='/editPage'>
        <el-button size="large" @click="splitSentence">开始翻译</el-button>
      </router-link>
      <h3>或</h3>
      <div id = "paste" >
          <el-button size="large" @click="upload">上传文件</el-button>
      </div>
      <div id = "author">
        <h1>JoTang Studio</h1>
      </div>
    </div>
    <br>
    <br>
    <br>

    <router-view class="editPage"></router-view>
  </div>
</template>

<script>
// const reg = /\. |\n|! |; |\? /;
export default {
  name: 'app',
  data() {
    return {
      textarea: 'Test sentences 1。Test sentences 2！Test sentences 3？Test sentences 4：hello world! Test sentences 5? Test sentences 6. Test sentences 7! Test sentences 8: hello world!',
    };
  },
  methods: {
    splitSentence: function Split() {
      const reg = /\. +|! *|; *|\? *|:*\n|。|；|！|？/g;
      let strArray = [];
      let strFlag = [];
      strFlag = this.textarea.match(reg);
      strArray = this.textarea.split(reg);
      strArray.splice(strArray.length - 1, 1);
      for (let count = 0; count < strArray.length; count += 1) {
        strArray[count] += strFlag[count];
      }
      for (let count = 0; count < strArray.length; count += 1) {
        if (strArray[count] === '\n') {
          strArray.splice(count, 1);
        }
      }
      this.$store.state.sentences = strArray;
      this.$store.state.translatedSentences = this.$store.state.sentences;
    },
  },
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
