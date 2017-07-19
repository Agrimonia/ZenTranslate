<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>{{ readme }}</h2>
    <br><br>


    <editor></editor>
    <br><br>
    <div id = "start" >
        <el-button size="large" @click="start">开始翻译</el-button>
    </div>
    <h3>或</h3>
    <div id = "start" >
        <el-button size="large" @click="upload">上传文件</el-button>
    </div>
    <author></author>


  </div>
</template>



<script>
import author from './component/author.vue'
import editor from './component/editor.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to ZenTranslate',
      readme: "ZenTranslate 是一个用于进行轻量翻译工作的在线工具 "
    }
  },
  components:{ author , editor }
}

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
