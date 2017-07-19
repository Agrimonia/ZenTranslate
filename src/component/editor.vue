<template>
  <div id="editor">
    <el-input type="textarea"
      :rows="10"
      style="width:500px;position:relative;"
      placeholder="在这里粘贴待翻译文本"
      v-model="textarea">
    </el-input>
  </div>
</template>

<script type = "text/javascript">
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>

<style>

</style>
