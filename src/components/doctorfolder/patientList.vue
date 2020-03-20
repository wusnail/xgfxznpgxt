<template>
  <!-- 患者列表-->
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
    <div @click="JumpPage()">
      <mt-navbar v-model="selectedRecord">
        <mt-tab-item id="1">未处理</mt-tab-item>
        <mt-tab-item id="2">已处理</mt-tab-item>
      </mt-navbar>
      <mt-tabbar v-model="selectedAppointment"
                 @click="JumpPage()">
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
      selectedAppointment: '2',
      selectedRecord: this.$route.params.selectedRecord
    }
  },
  methods: {
    JumpPage() {
      //跳转到预约列表
      if (this.selectedAppointment == '1') {
        this.$router.push({ name: '/doctor/home' })
      }
    },
  }
}
</script>

<style>
</style>