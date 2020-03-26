<template>
  <div>
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__bd">
          <a href="javascript:void(0);" v-for="item in hospitallist" :key="item.hospitalid" @click="doctorappt(item.name)" class="weui-media-box weui-media-box_appmsg" >
            <div class="weui-media-box__hd">
              <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/redcross.png" alt="">
            </div>
            <div class="weui-media-box__bd">
              <p class="weui-media-box__desc" style="color:blue;text-align:left">{{item.name}}</p>
              <p class="weui-media-box__desc" style="text-align:left">地址：{{item.address}}</p>
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
      hospitallist:[
        {
          hospitalid:1,
          name:'浙江大学医学院附属第一医院',
          address:'杭州市上城区庆春路79号'
        },
        {
          hospitalid:2,
          name:'浙江大学医学院附属第二医院（解放路院区）',
          address:'杭州市上城区解放路88号'
        },
        {
          hospitalid:3,
          name:'杭州市第一人民医院',
          address:'杭州市上城区浣纱路261号'
        },
        {
          hospitalid:4,
          name:'浙江大学医学院附属邵逸夫医院（庆春院区）',
          address:'杭州市江干区庆春东路3号'
        },
      ]
    }
  },
  methods: {
    doctorappt(name){
      this.$router.push({name:"/patient/appt",params:{hospitalname:name}});
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
