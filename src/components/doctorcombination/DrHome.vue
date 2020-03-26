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
    </mt-cell>
    <!-- <div>
      医生首页
      <mt-button type="default"
                 size="small"
                 @click.native="$router.push({ name: '/doctor/patientList', params: { selectedRecord: '1' } })">未处理</mt-button>
      <mt-button type="danger"
                 size="small"
                 @click.native="$router.push({ name: '/doctor/patientList', params: { selectedRecord: '2' } })">已处理</mt-button>
    </div> -->
    <mt-tab-container class="page-tabbar-container"
                      v-model="selectedTab">
      <mt-tab-container-item id="1">
        <statistics @staValue='staClick'></statistics>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-navbar v-model="selectedRecord">
          <mt-tab-item id="1">未处理</mt-tab-item>
          <mt-tab-item id="2">已处理</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selectedRecord">
          <mt-tab-container-item id="1">
            <!-- 未处理在这 -->
          <unprocessed></unprocessed>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <!-- 已处理在这 -->
          <processed></processed>
          </mt-tab-container-item>
        </mt-tab-container>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selectedTab"
               fixed>
      <mt-tab-item id="1">
        <img slot="icon"
             src="../../assets/images/zhuye.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="2">
        <img slot="icon"
             src="../../assets/images/liebiao.png" />
        预约列表
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
import statistics from './statistics'
import processed from './processed'
import unprocessed from './unprocessed'
export default {
  components: {
    statistics,
    processed,
    unprocessed,
  },
  data() {
    return {
      selectedTab: '1',
      selectedRecord: '1'
    }
  },
  methods: {
    staClick(record) {
      this.selectedTab = '2',
        this.selectedRecord = record
    }
  }
}
</script>

<style>
@import "../../assets/gyx/iconfont.css";
</style>