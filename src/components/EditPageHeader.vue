<template>
  <div>
    <el-row>
      <el-col :span="10" :push="7">
        <el-steps :space="300" :active="2" :center="true" finish-status="success" space="50%">
          <el-step title="上传"></el-step>
          <el-step title="翻译"></el-step>
          <el-step title="导出"></el-step>
        </el-steps>
      </el-col>
      <el-col :span="4" :offset="10">
        <el-button id="fb" type="primary" @click="dialogFinishVisible = true, refreshData()">完成翻译</el-button>
      </el-col>
    </el-row>
    <el-dialog style="overflow-y: auto" size="small" :visible.sync="dialogFinishVisible">
      <el-row>
        <el-col :span="10" :push="7">
          <el-steps :space="300" :active="3" :center="true" finish-status="success" space="50%">
            <el-step title="上传"></el-step>
            <el-step title="翻译"></el-step>
            <el-step title="导出"></el-step>
          </el-steps>
        </el-col>
        <el-col :span="4" :offset="10">
          <el-button type="primary" v-clipboard="copyData">一键复制到剪贴板</el-button>
        </el-col>
      </el-row>
      <el-input id="preformatted" type="textarea" :readonly='true' :rows="20" v-model="copyData">
      </el-input>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFinishVisible: false,
      copyData: 'empty',
    };
  },
  methods: {
    refreshData() {
      this.copyData = this.$store.state.translatedSentences.map(x => (x === '' ? '\n' : x)).join('');
    },
  },
};
</script>
