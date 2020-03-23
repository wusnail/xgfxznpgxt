<template>
  <!-- 患者主页新冠自查-我的评估报告 -->
  <div class="patcheck">
    <!--  -->
    <mt-cell>
      <div slot="title" style="float:left">
        <img src="../../assets/images/用户.png" height="20" width="20" slot="icon" />
        <span>测试患者</span>
      </div>
    </mt-cell>
    <div>
      <mt-navbar v-model="selectedRecord">
        <mt-tab-item id="1">我的评估报告</mt-tab-item>
        <mt-tab-item id="2">评估记录</mt-tab-item>
      </mt-navbar>
    </div>
    <!-- <div>
      我的评估报告
      <mt-button type="default" size="small" @click.native="$router.push({ name: '/patient/form'})">更新个人信息</mt-button>
      <mt-button type="danger" size="small" @click.native="$router.push({ name: '/patient/risk'})">查看风险详情</mt-button>
    </div> -->
    <div @click="JumpPage()">
      <mt-tabbar v-model="selectedAppointment">
        <mt-tab-item id="1">
          <img slot="icon" src="../../assets/images/ONwenduji.png">
          新冠自查
        </mt-tab-item>
        <mt-tab-item id="2">
          <img slot="icon" src="../../assets/images/ONwenjian.png">
          预约问诊
        </mt-tab-item>
      </mt-tabbar>
    </div>
    <!-- 这里是展示我的评估报告和评估记录 byGYX-->
    <!-- <mt-tab-container v-model="selectedRecord">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 4" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>

    </mt-tab-container> -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedRecord: '1',
      selectedAppointment: '1',
    }
  },
  methods: {
    JumpPage () {
      if (this.selectedAppointment == '2') {
        //跳转到预约问诊
        this.$router.push({ name: "/patient/appt/consulation" });
      }
      else if (this.selectedRecord == '2') {
        //跳转到记录页
        this.$router.push({ name: "/patient/check/risk" });
      }
    },
  }
}
</script>

<style>
</style>