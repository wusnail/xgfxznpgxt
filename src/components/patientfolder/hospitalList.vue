<template>
  <!-- 患者主页预约问诊 -->
  <div class="patcheck">
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
                 type="default"
                 icon="more"></mt-button>
    </mt-cell>
    <div @click="JumpPage()">
      <mt-navbar v-model="selectedRecord">
        <mt-tab-item id="1">预约问诊</mt-tab-item>
        <mt-tab-item id="2">预约记录</mt-tab-item>
      </mt-navbar>
    </div>

    <div>
      患者主页预约问诊
      <mt-button type="default"
                 size="small"
                 @click.native="$router.push("/patient/appt")">跳转医生选择
                 </mt-button>
                 </div>
                 <div
                 @click="JumpPage()">
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
      selectedRecord: '1',
      selectedAppointment: '2',
    }
  },
  methods: {
    JumpPage() {
      if (this.selectedAppointment == '1') {
        //跳转新冠自查
        this.$router.push("/patient/check");
      }
      else if (this.selectedRecord == '2') {
        //跳转到记录页
        this.$router.push("/patient/appt/record");
      }
    },
  }
}
</script>

<style>
</style>