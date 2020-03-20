<template>
  <div class="exaluationNavBar">
    <mt-navbar>
      <mt-tab-item>
        <div style="display: flex;justify-content: center;align-items: center;"
             @click="ToggleSelfReport()">
          <div style="float:left; display:inline; ">
            <img style="height:20px;"
                 :src="SelfReportUrl" />
          </div>
          <div style="float:left; display:inline;margin-left:5px;font-size:15px;">
            <span :style="{color:colorSelfReport}">我的评估报告</span>
          </div>
        </div>
      </mt-tab-item>
      <mt-tab-item>
        <div style="display: flex;justify-content: center;align-items: center;"
             @click="ToggleRecord()">
          <div style="float:left; display:inline; ">
            <img style="height:20px;"
                 :src="RecordUrl" />
          </div>
          <div style="float:left; display:inline;margin-left:5px;font-size:15px;">
            <span :style="{color:colorRecord}">评估记录</span>
          </div>
        </div>
      </mt-tab-item>
    </mt-navbar>
  </div>

</template>

<script>

export default {
  data() {
    return {
      colorSelfReport: '#eeb174',
      SelfReportUrl: require('../../assets/images/ONperziyuan.png'),
      colorRecord: '#707070',
      RecordUrl: require('../../assets/images/wenjian.png'),
    }
  },
  methods: {
    ToggleSelfReport() {
      this.colorSelfReport = '#eeb174'
      this.SelfReportUrl = require('../../assets/images/ONperziyuan.png')
      this.colorRecord = '#707070'
      this.RecordUrl = require('../../assets/images/wenjian.png')
      //跳转页面

    },
    ToggleRecord() {
      this.colorRecord = '#1296db'
      this.RecordUrl = require('../../assets/images/ONwenjian.png')
      this.colorSelfReport = '#707070'
      this.SelfReportUrl = require('../../assets/images/ziyuan.png')
    }
  }
}
</script>

<style>
</style>