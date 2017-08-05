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
      <br>
      <br>
      <br>
      <router-link to='/editPage'>
        <el-button size="large" @click="start">开始翻译</el-button>
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

    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
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
