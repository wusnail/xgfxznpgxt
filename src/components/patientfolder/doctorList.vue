<template>
  <div>
    <!--患者选择医生列表页 -->
    <mt-header title="医生列表">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
      </router-link>
    </mt-header>

    <span>{{this.$route.params.hospitalname}}</span>    

    <div>
        <div class="weui-panel weui-panel_access">
          <div class="weui-panel__bd">
              <div  class="weui-media-box weui-media-box_appmsg" v-for="item in doctorlist" :key="item.doctorid">
                <div class="weui-media-box__hd">
                  <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/yisheng.png" alt="">
                 </div>
                <div class="weui-media-box__bd">
                  <p class="weui-media-box__desc" style="color:blue;text-align:left">{{item.name + item.doctorid}}</p>
                  <p class="weui-media-box__desc" style="text-align:left">{{item.time}}</p>
                </div>
                <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">绑定</a>                          
              </div>
          </div>
        </div>   
      </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        doctorlist:[
        {
          doctorid:1,
          name:'测试医生',
          time:'XX科主任医师'
        },
        {
          doctorid:2,
          name:'测试医生',
          time:'XX科副主任医师'
        },
        {
          doctorid:3,
          name:'测试医生',
          time:'XX科主治医师'
        },
        {
          doctorid:4,
          name:'测试医生',
          time:'XX科副主任医师'
        },
        {
          doctorid:5,
          name:'测试医生',
          time:'XX科主任医师'
        },
      ]
      }
    },
    methods:{

    }
  }
</script>

<style>
</style>