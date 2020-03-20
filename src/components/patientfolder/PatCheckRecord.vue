<template>
  <!-- 患者主页新冠自查-评估记录 -->
  <div>
    <!--  -->
    <mt-cell>
      <div slot="title"
           style="float:left">
        <img src="../../assets/images/用户.png"
             height="20"
             width="20"
             slot="icon" />
        <span>测试患者</span>
      </div>
      <mt-button size="small"
                 icon="more"></mt-button>
    </mt-cell>
    <div @click="JumpPage()">
      <mt-navbar v-model="selectedRecord">
        <mt-tab-item id="1">
          我的评估报告
        </mt-tab-item>
        <mt-tab-item id="2">评估记录</mt-tab-item>
      </mt-navbar>
    </div>
    <div>
      评估记录
      <mt-cell title="评估记录跳转"
               label="跳转到具体评估记录页"
               is-link
               to="/patient/evaluation"></mt-cell>
    </div>
    <div @click="JumpPage()">
      <mt-tabbar v-model="selectedAppointment">
        <mt-tab-item id="1">
          <img slot="icon"
               src="../../assets/images/ONwenduji.png">
          新冠自查
        </mt-tab-item>
        <mt-tab-item id="2">
          <img slot="icon"
               src="../../assets/images/ONwenjian.png">
          预约问诊
        </mt-tab-item>
      </mt-tabbar>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      selectedRecord: '2',
      selectedAppointment: '1',
    }
  },
  methods: {
    JumpPage() {
      if (this.selectedAppointment == '2') {
        //跳转到预约问诊
        this.$router.push({ name: "/patient/appt/consulation" });
      }
      else if (this.selectedRecord == '1') {
        //跳转到记录页
        this.$router.push("/patient/check");
      }
    }
  }
}
</script>

<style>
</style>