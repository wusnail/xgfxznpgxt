<template>
  <div>
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__bd">
          <a href="javascript:void(0);" @click="doctorappt(0)" class="weui-media-box weui-media-box_appmsg" >
            <div class="weui-media-box__hd">
              <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/redcross.png" alt="">
            </div>
            <div class="weui-media-box__bd">
              <p class="weui-media-box__desc" style="color:blue;text-align:left">{{hospitalname[0]}}</p>
              <p class="weui-media-box__desc" style="text-align:left">地址：杭州市上城区庆春路79号</p>
            </div>
            <div class="arrow"></div>
          </a>
          <a href="javascript:void(0);" @click="doctorappt(1)" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/redcross.png" alt="">
            </div>
            <div class="weui-media-box__bd">
              <p class="weui-media-box__desc" style="color:blue;text-align:left">{{hospitalname[1]}}</p>
              <p class="weui-media-box__desc" style="text-align:left">地址：杭州市上城区解放路88号</p>
            </div>
            <div class="arrow"></div>
          </a>
          <a href="javascript:void(0);" @click="doctorappt(2)" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/redcross.png" alt="">
            </div>
            <div class="weui-media-box__bd">
              <p class="weui-media-box__desc" style="color:blue;text-align:left">{{hospitalname[2]}}</p>
              <p class="weui-media-box__desc" style="text-align:left">地址：杭州市上城区浣纱路261号</p>
            </div>
            <div class="arrow"></div>
          </a>
          <a href="javascript:void(0);" @click="doctorappt(3)" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/redcross.png" alt="">
            </div>
            <div class="weui-media-box__bd">
              <p class="weui-media-box__desc" style="color:blue;text-align:left">{{hospitalname[3]}}</p>
              <p class="weui-media-box__desc" style="text-align:left">地址：杭州市江干区庆春东路3号</p>
            </div>
            <div class="arrow"></div>
          </a> 
      </div>
    </div>  
  </div>
</template>
<script>
export default {
  data () {
    return {
      hospitalname:new Array('浙江大学医学院附属第一医院','浙江大学医学院附属第二医院（解放路院区）','杭州市第一人民医院','浙江大学医学院附属邵逸夫医院（庆春院区）'),
    }
  },
  methods: {
    doctorappt(hospitalnumber){
      this.$router.push({name:"/patient/appt",params:{hospitalname:this.hospitalname[hospitalnumber]}});
    }
  }

}
</script>
<style >
  .arrow{
    width:12px;
    height:12px;
    border-top:2px solid;
    border-right:2px solid;
    transform: rotate(45deg);
  }
</style>
