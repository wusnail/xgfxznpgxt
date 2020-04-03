<template>
  <div>
    <div class="header">
      <div style="display:flex;align-items: center;flex:1">
        <img src="../../assets/images/用户.png"
             height="20"
             width="20"
             style="margin-left:5px"
             slot="icon" />
        <span>&nbsp;测试医生</span>
        <div style="flex:1;">
          <i class="iconfont icon-sj-tuichu"
             style="float:right;margin-left:5px"
             @click="exit()"> </i>
          <i class="iconfont icon-sj-erweima"
             style="float:right"
             @click="showQRCode()"> </i>
        </div>
      </div>
    </div>
    <mt-popup v-model="popupVisible"
              position="right"
              class="mint-popup"
              :modal="false">
      <div class="weui-flex"
           style="margin:30px;">
        <div class="weui-flex__item">
          <img style="height:60px;"
               src="../../assets/images/logo1_1.png" />
        </div>
        <div class="weui-flex__item">
          <img style="height:60px;"
               src="../../assets/images/logo2.jpg" />
        </div>
      </div>
      <div style="margin-top:30px;color:#07C160;font-size:20px;text-align: center;">
        请扫描二维码获取问卷链接
      </div>
      <div style="text-align: center;margin-top:10px;">
        <img :src="qrcodeUrl">
      </div>
      <mt-button @click.native="popupVisible = false"
                 type="primary">返回医生主页</mt-button>
    </mt-popup>
    <mt-tab-container class="page-tabbar-container"
                      v-model="selectedTab">
      <mt-tab-container-item id="1">
        <statistics @staValue='staClick'></statistics>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-navbar v-model="selectedRecord">
          <mt-tab-item id="1"><span style="font-size:16px">正在隔离</span></mt-tab-item>
          <mt-tab-item id="2"><span style="font-size:16px">已解除隔离</span></mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selectedRecord"
                          style="margin-top:3px">
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
import { MessageBox } from 'mint-ui'
import QRCode from "qrcode"
export default {
  components: {
    statistics,
    processed,
    unprocessed,
  },
  data() {
    return {
      selectedTab: '1',
      selectedRecord: '1',
      popupVisible: false,
      qrcodeUrl: ''
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.qrcode();
    })
  },
  methods: {
    staClick(record) {
      this.selectedTab = '2',
        this.selectedRecord = record
    },
    exit() {
      MessageBox.confirm('确认是否退出系统？').then(action => {
        if (action == 'confirm') {     //确认的回调
          this.$router.push('/doctor')
        }
      }).catch(err => {
      })
    },
    showQRCode() {
      this.popupVisible = true
    },
    qrcode() {
      let self = this
      QRCode.toDataURL(
        'http://frznflxt.zhejianglab.com/#/patient',
        { errorCorrectionLevel: 'H', version: '10' },
        function (err, url) {
          if (!err) {
            self.qrcodeUrl = url;
          }
        }
      )
      console.log(this.qrcodeUrl)
    },
  }
}
</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  margin: 5px;
}
.mint-popup {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
@import "../../assets/gyx/iconfont.css";
@import "../../assets/sj/iconfont.css";
</style>