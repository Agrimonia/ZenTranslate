<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>{{ readme }}</h2>
    <br><br>
    <div id = "start">
      <el-button size="large" @click="nextpage">Start Now</el-button>
    </div>
    <br><br><br><br>

    <div style="float:left;width:100%;">
      <div style="float:left;width:40%">
        <editor></editor>
      </div>
      <div style="float:left;width:30%">
        <workflow></workflow>
      </div>
      <br><br>
    </div>

    <author></author>


  </div>
</template>



<script>
import author from './component/author.vue'
import editor from './component/editor.vue'
import workflow from './component/workflow.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to ZenTranslate',
      readme: "ZenTranslate 是一个用于进行轻量翻译工作的在线工具 "
    }
  },
  components:{ author , editor , workflow }
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
