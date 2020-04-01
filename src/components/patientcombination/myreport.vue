<template>
  <div>
    <div v-if="isnew">
      <br>
      <div>
        <img src="../../assets/logo.png">
        <div class="infotext1">
          您还没未填写自查信息
        </div><br>
        <mt-button type="primary" @click="$router.push('/patient/form')">立即填写</mt-button>
      </div>
    </div>
    <div v-else>

      <assessmentReport :reportId="reportId" :qflag="qflag"></assessmentReport>

    </div>

  </div>
</template>
<script>
import assessmentReport from './assessmentReport'
export default {
  components: {
    assessmentReport,
  },
  data () {
    return {
      isnew: false,//是否是第一次登录，第一次的话要新建页面
      qflag: 'true',//我的报告页面要显示更新信息项目

      reportId: '',
      myform: {
        updatetime: "2020年3月21日1点28分"
      }

    }
  },
  methods: {

  }
}
</script>
<style >
.infotext1 {
  color: grey;
  text-align: center;
}
</style>