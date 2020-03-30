<template>
  <!-- 患者主页新冠自查-我的评估报告 -->
  <div class="page-tabbar">
    <div class="page-wrap">

      <mt-cell>
        <div slot="title" style="float:left">
          <img src="../../assets/images/用户.png" height="20" width="20" slot="icon" />
          <span>测试患者</span>
        </div>
      </mt-cell>

      <mt-tab-container class="page-tabbar-container" v-model="selectedTab">
        <mt-tab-container-item id="1">
          <!-- 我的评估报告/评估记录gyx -->
          <mt-navbar v-model="selectedRecord">
            <mt-tab-item id="1"><i class="iconfont icon-myreport"></i>&nbsp;我的评估报告</mt-tab-item>
            <mt-tab-item id="2"><i class="iconfont icon-jilu"></i>&nbsp;评估记录</mt-tab-item>
          </mt-navbar>
          <mt-tab-container v-model="selectedRecord">
            <mt-tab-container-item id="1">
              <!-- 我的评估报告在这个组件里写 -->
              <myreport></myreport>

            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <!-- 评估记录在这个组件里写 -->

              <reportHistory></reportHistory>

            </mt-tab-container-item>
          </mt-tab-container>

        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <!-- 预约问诊/预约记录gyx -->
          <mt-navbar v-model="selectedAppointment">
            <mt-tab-item id="1"><i class="iconfont icon-yuyue"></i>&nbsp;预约问诊</mt-tab-item>
            <mt-tab-item id="2"><i class="iconfont icon-yuyuejilu1"></i>&nbsp;预约记录</mt-tab-item>
          </mt-navbar>
          <mt-tab-container v-model="selectedAppointment">
            <mt-tab-container-item id="1">
              <!-- 预约问诊在这个组件里写 -->                  
              <appointVisit></appointVisit>

            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <!-- 问诊记录在这个组件里写 -->
              <appointmentRecord></appointmentRecord>

            </mt-tab-container-item>
          </mt-tab-container>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <mt-tabbar v-model="selectedTab" fixed>
      <mt-tab-item id="1">
        <img slot="icon" src="../../assets/images/wenduji.png">
        新冠自查
      </mt-tab-item>
      <mt-tab-item id="2">
        <img slot="icon" src="../../assets/images/wenjian.png">
        预约问诊
      </mt-tab-item>
    </mt-tabbar>

  </div>

</template>

<script>
import myreport from './myreport'
import reportHistory from './reportHistory'
import appointmentRecord from './appointmentRecord'
import appointVisit from './appointVisit'
export default {
  components: {
    reportHistory,
    myreport,
    appointmentRecord,
    appointVisit,

  },
  data () {
    return {
      selectedTab: '1',
      selectedRecord: '1',
      selectedAppointment: '1',
    }
  },
  methods: {

  },

}
</script>

<style scoped>
.page-tabbar {
  overflow: hidden;
}
body {
  overflow: hidden;
}
@import "../../assets/gyx/iconfont.css";
</style>>
