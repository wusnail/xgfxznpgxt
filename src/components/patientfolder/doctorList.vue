<template>
  <div>
    <!--患者选择医生列表页 -->
    <mt-header title="医生列表">
      <router-link to=""
                   slot="left">
        <mt-button icon="back"
                   @click.native="$router.back(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <div>{{this.$route.params.hospitalname}}</div>

    <div>
        <div class="weui-panel weui-panel_access">
          <div class="weui-panel__bd">

              <div  class="weui-media-box weui-media-box_appmsg" >
                <div class="weui-media-box__hd">
                  <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/yisheng.png" alt="">
                 </div>
                <div class="weui-media-box__bd">
                  <p class="weui-media-box__desc" style="color:blue;text-align:left">测试医生</p>
                  <p class="weui-media-box__desc" style="text-align:left">出诊时间：周一至周五 08:00-17:00</p>
                </div>
                <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">剩余20</a>            
              </div>

              <div  class="weui-media-box weui-media-box_appmsg" >
                <div class="weui-media-box__hd">
                  <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/yisheng.png" alt="">
                 </div>
                <div class="weui-media-box__bd">
                  <p class="weui-media-box__desc" style="color:blue;text-align:left">测试医生</p>
                  <p class="weui-media-box__desc" style="text-align:left">出诊时间：周一至周五 08:00-17:00</p>
                </div>
                <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">剩余20</a>              
              </div>

              <div  class="weui-media-box weui-media-box_appmsg" >
                <div class="weui-media-box__hd">
                  <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/yisheng.png" alt="">
                 </div>
                <div class="weui-media-box__bd">
                  <p class="weui-media-box__desc" style="color:blue;text-align:left">测试医生</p>
                  <p class="weui-media-box__desc" style="text-align:left">出诊时间：周一至周五 08:00-17:00</p>
                </div>
                <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">剩余20</a>              
              </div>  

               <div  class="weui-media-box weui-media-box_appmsg" >
                <div class="weui-media-box__hd">
                  <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/yisheng.png" alt="">
                 </div>
                <div class="weui-media-box__bd">
                  <p class="weui-media-box__desc" style="color:blue;text-align:left">测试医生</p>
                  <p class="weui-media-box__desc" style="text-align:left">出诊时间：周一至周五 08:00-17:00</p>
                </div>
                <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">剩余20</a>              
              </div>
              <div  class="weui-media-box weui-media-box_appmsg" >
                <div class="weui-media-box__hd">
                  <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/yisheng.png" alt="">
                 </div>
                <div class="weui-media-box__bd">
                  <p class="weui-media-box__desc" style="color:blue;text-align:left">测试医生</p>
                  <p class="weui-media-box__desc" style="text-align:left">出诊时间：周一至周五 08:00-17:00</p>
                </div>
                <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">剩余20</a>              
              </div>
              <div  class="weui-media-box weui-media-box_appmsg" >
                <div class="weui-media-box__hd">
                  <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/yisheng.png" alt="">
                 </div>
                <div class="weui-media-box__bd">
                  <p class="weui-media-box__desc" style="color:blue;text-align:left">测试医生</p>
                  <p class="weui-media-box__desc" style="text-align:left">出诊时间：周一至周五 08:00-17:00</p>
                </div>
                <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">剩余20</a>              
              </div> 
              <div  class="weui-media-box weui-media-box_appmsg" >
                <div class="weui-media-box__hd">
                  <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/yisheng.png" alt="">
                 </div>
                <div class="weui-media-box__bd">
                  <p class="weui-media-box__desc" style="color:blue;text-align:left">测试医生</p>
                  <p class="weui-media-box__desc" style="text-align:left">出诊时间：周一至周五 08:00-17:00</p>
                </div>
                <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">剩余20</a>              
              </div>
              <div  class="weui-media-box weui-media-box_appmsg" >
                <div class="weui-media-box__hd">
                  <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/yisheng.png" alt="">
                 </div>
                <div class="weui-media-box__bd">
                  <p class="weui-media-box__desc" style="color:blue;text-align:left">测试医生</p>
                  <p class="weui-media-box__desc" style="text-align:left">出诊时间：周一至周五 08:00-17:00</p>
                </div>
                <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">剩余20</a>              
              </div>
              <div  class="weui-media-box weui-media-box_appmsg" >
                <div class="weui-media-box__hd">
                  <img slot="icon" class="weui-media-box__thumb lazy" style="height:70%;width:70%;vertical-align:middle" src="../../assets/images/yisheng.png" alt="">
                 </div>
                <div class="weui-media-box__bd">
                  <p class="weui-media-box__desc" style="color:blue;text-align:left">测试医生</p>
                  <p class="weui-media-box__desc" style="text-align:left">出诊时间：周一至周五 08:00-17:00</p>
                </div>
                <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">剩余20</a>              
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

      }
    },
    methods: {
      
    }

  }
</script>

<style>
</style>