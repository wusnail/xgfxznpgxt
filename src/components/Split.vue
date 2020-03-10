<template>
  <div>
    <div class="weui-flex"
         style="margin:30px;">
      <div class="weui-flex__item">
        <img style="height:60px;"
             src="../assets/images/logo1_1.png" />
      </div>
      <div class="weui-flex__item">
        <img style="height:60px;"
             src="../assets/images/logo2.jpg" />
      </div>
    </div>
    <div class="weui_cell_bd weui_cell_primary">
      <span style="color:#07C160;font-size:20px;">新冠风险智能评估系统</span>
    </div>
    <div style="margin-top:50px">
      <div class="weui-flex ">
        <div class="weui-flex__item">
          <div @click='goSystem()'
             style="float:right;margin:20px ">
            <img style="height:90px;"
                 src="../assets/images/xitong.png" />
            <div style="color:black ">智能评估</div>
          </div>
        </div>
        <div class="weui-flex__item">
          <a href="#/Train"
             style="float:left;margin:20px ">
            <img style="height:90px;"
                 src="../assets/images/peixun.png" />
            <div style="color:black">在线培训</div>
          </a>
        </div>
      </div>
      <div class="weui-flex">
        <div class="weui-flex__item">
          <div
             style="float:right;margin:20px ">
            <img style="height:90px;"
                 src="../assets/images/tongji.png" />
            <div style="color:black">信息统计</div>
          </div>
        </div>
        <div class="weui-flex__item">
          <div
             style="float:left;margin:20px ">
            <img style="height:90px;"
                 src="../assets/images/jiahao.png" />
            <div style="color:black">待添加</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import global from './global.vue'
  import axios from 'axios';
export default {
  name: 'Split',
  data() {
    return {
      token:'',
      doctorSystemURL:''
    }
  },
  mounted() {
     axios
        .post("/newDoctorToken", {
          userId:window.localStorage.getItem("DocId")
        
      }).then((response) => {
        if (response.status == 200) {
          this.token=response.data.token
          console.log(this.token)
        }
      }).catch(function (error) {
        console.log("error", error);
      });
    
  },
  methods:{
    goSystem(){
      window.location.href = global.doctorSystemURL+'?token='+this.token;
    }
  }
  
}
</script>

<style scoped>
</style>