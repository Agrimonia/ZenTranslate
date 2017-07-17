import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})

var start = new Vue({
  el: '#start',
  // 在 `methods` 对象中定义方法
  // methods: {
  //   nextpage: function (event) {
  //
  //   }
  // }
})
