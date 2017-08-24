<template>
  <div>
    <el-row>
      <el-col :span="4" :push="2">
        <router-link to='/'>
          <el-button>返回首页</el-button>
        </router-link>
      </el-col>
      <el-col :span="10" :push="3">
        <el-steps :space="300" :active="2" :center="true" finish-status="success" space="50%">
          <el-step title="上传"></el-step>
          <el-step title="翻译"></el-step>
          <el-step title="导出"></el-step>
        </el-steps>
      </el-col>
      <el-col :span="4" :push="7">
        <el-button type="primary" @click="dialogFinishVisible = true, refreshData()">完成翻译</el-button>
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
        <el-col :span="10" :push="10">
          <el-button type="primary" v-clipboard="copyData">一键复制</el-button>
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
      dialogVisible: false,
    };
  },
  computed: {
    percentage() {
      return Math.floor((this.$store.state.currentIndex * 100) / (this.$store.state.translatedSentences.length - 1));// eslint-disable-line
    },
  },
  methods: {
    refreshData() {
      this.copyData = this.$store.state.translatedSentences.map(x => (x === '' ? '\n' : x)).join('');
    },
  },
  watch: {
    percentage(currentPercentage) {
      if (currentPercentage === 100) {
        this.dialogFinishVisible = true;
        this.refreshData();
      }
    },
  },
};
</script>
