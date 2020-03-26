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

    <span>{{this.$route.params.hospitalname}}</span> 
    <span>{{nowDate}}</span>        

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
        nowDate: "",    // 当前日期
        nowTime: "",    // 当前时间
        nowWeek: "",     // 当前星期
        doctorlist:[
        {
          doctorid:1,
          name:'测试医生',
          time:'出诊时间：周一至周五 08:00-17:00'
        },
        {
          doctorid:2,
          name:'测试医生',
          time:'出诊时间：周一至周五 08:00-17:00'
        },
        {
          doctorid:3,
          name:'测试医生',
          time:'出诊时间：周一至周五 08:00-17:00'
        },
        {
          doctorid:4,
          name:'测试医生',
          time:'出诊时间：周一至周五 08:00-17:00'
        },
        {
          doctorid:5,
          name:'测试医生',
          time:'出诊时间：周一至周五 08:00-17:00'
        },
      ]
      }
    },
    methods: {
        currentTime() {
            setInterval(this.getDate, 500);
        },
        getDate: function() {
            var _this = this;
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth() + 1;
            let dd = new Date().getDate();
            let week = new Date().getDay();
            let hh = new Date().getHours();
            let mf =
                new Date().getMinutes() < 10
                    ? "0" + new Date().getMinutes()
                    : new Date().getMinutes();
            if (week == 1) {
                this.nowWeek = "星期一";
            } else if (week == 2) {
                this.nowWeek = "星期二";
            } else if (week == 3) {
                this.nowWeek = "星期三";
            } else if (week == 4) {
                this.nowWeek = "星期四";
            } else if (week == 5) {
                this.nowWeek = "星期五";
            } else if (week == 6) {
                this.nowWeek = "星期六";
            } else {
                this.nowWeek = "星期日";
            }
            _this.nowDate = yy + "/" + mm + "/" + dd;
        },
      open(picker) {
        this.$refs[picker].open();
      },

      handleChange(value) {
        Toast({
          message: '已选择 ' + value.toString(),
          position: 'bottom'
        });
      },

      handleVisibleChange(isVisible) {
        console.log('弹窗是否展示:', isVisible);
      }
    },

    mounted() {
        this.currentTime();
    },
    // 销毁定时器
    beforeDestroy: function() {
        if (this.getDate) {
            console.log("销毁定时器")
            clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
        }
    }
  }
</script>

<style>
</style>