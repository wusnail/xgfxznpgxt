<template>
  <div>
    <mt-cell>
      <div slot="title"
           style="float:left">
        <img src="../../assets/images/用户.png"
             height="20"
             width="20"
             slot="icon" />
        <span>测试医生</span>
      </div>
      <mt-button size="small"
                 type="default"
                 icon="more"></mt-button>
    </mt-cell>
    <div>
      医生首页
      <mt-button type="default"
                 size="small"
                 @click.native="$router.push({ name: '/doctor/patientList', params: { selectedRecord: '1' } })">未处理</mt-button>
      <mt-button type="danger"
                 size="small"
                 @click.native="$router.push({ name: '/doctor/patientList', params: { selectedRecord: '2' } })">已处理</mt-button>
    </div>
    <div @click="JumpPage()">
      <mt-tabbar v-model="selectedAppointment">
        <mt-tab-item id="1">
          <!-- <img slot="icon"
             src="../assets/images/ONwenduji.png"> -->
          首页
        </mt-tab-item>
        <mt-tab-item id="2">
          <!-- <img slot="icon"
             src="../assets/images/ONwenjian.png"> -->
          预约列表
        </mt-tab-item>
      </mt-tabbar>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedAppointment: '1'
    }
  },
  methods: {
    JumpPage() {
      //跳转到预约列表
      if (this.selectedAppointment == '2') {
        this.$router.push({ name: '/doctor/patientList', params: { selectedRecord: '1' } })
      }
    },
  }
}
</script>

<style>
</style>