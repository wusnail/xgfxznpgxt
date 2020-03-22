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
        <div class="weui-panel weui-panel_access">
          <div class="weui-panel__bd">
              <a href="javascript:void(0);" @click="doctorappt()" class="weui-media-box weui-media-box_appmsg" >
                <div class="weui-media-box__hd">
                  <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/redcross.png" alt="">
                 </div>
                <div class="weui-media-box__bd">
                  <p class="weui-media-box__desc" style="color:blue;text-align:left">浙江大学医学院附属第一医院</p>
                  <p class="weui-media-box__desc" style="text-align:left">地址：杭州市上城区庆春路79号</p>
                </div>
                <div class="arrow"></div>
              </a>

              <a href="javascript:void(0);" @click="doctorappt()" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd">
                  <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/redcross.png" alt="">
                 </div>
                <div class="weui-media-box__bd">
                  <p class="weui-media-box__desc" style="color:blue;text-align:left">浙江大学医学院附属第二医院（解放路院区）</p>
                  <p class="weui-media-box__desc" style="text-align:left">地址：杭州市上城区解放路88号</p>
                </div>
                <div class="arrow"></div>
              </a>

              <a href="javascript:void(0);" @click="doctorappt()" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd">
                  <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/redcross.png" alt="">
                </div>
                <div class="weui-media-box__bd">
                  <p class="weui-media-box__desc" style="color:blue;text-align:left">杭州市第一人民医院</p>
                  <p class="weui-media-box__desc" style="text-align:left">地址：杭州市上城区浣纱路261号</p>
                </div>
                <div class="arrow"></div>
              </a>

              <a href="javascript:void(0);" @click="doctorappt()" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd">
                  <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/redcross.png" alt="">
                </div>
                <div class="weui-media-box__bd">
                  <p class="weui-media-box__desc" style="color:blue;text-align:left">浙江大学医学院附属邵逸夫医院（庆春院区）</p>
                  <p class="weui-media-box__desc" style="text-align:left">地址：杭州市江干区庆春东路3号</p>
                </div>
                <div class="arrow"></div>
              </a> 
          </div>
        </div>          
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
    doctorappt(){
      this.$router.push("/patient/appt");
    }
  }
}
</script>

<style>
 .arrow{
         width:12px;
         height:12px;
         border-top:2px solid;
         border-right:2px solid;
         transform: rotate(45deg);
        }
</style>