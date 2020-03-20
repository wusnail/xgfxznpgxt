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
      <span style="color:#07C160;font-size:20px;">新冠肺炎风险智能评估系统</span>
    </div>
    <div style="margin-top:30px">
      <div class="weui-flex ">
        <div class="weui-flex__item">
          <div @click='goSystem()'
               style="display: flex;justify-content: center;align-items: center;margin: 0px 50px 20px 50px;height:80px; padding:15px;border:1px solid #BFBFBF;border-radius: 10px;box-shadow:2px 2px 3px #aaaaaa; ">
            <div style="float:left; display:inline; ">
              <img style="height:80px;"
                   src="../assets/images/评估.png" />
            </div>
            <div style="float:left; display:inline;margin-left:10px;font-size:18px;color:#5fc3f3 ">
              智能评估
            </div>
          </div>
        </div>
      </div>
      <div class="weui-flex ">
        <div class="weui-flex__item">
          <div @click="gotrain()"
               style="display: flex;justify-content: center;align-items: center;margin: 0px 50px 20px 50px;height:80px; padding:15px;border:1px solid #BFBFBF;border-radius: 10px;box-shadow:2px 2px 3px #aaaaaa; ">
            <div style="float:left; display:inline; ">
              <img style="height:80px;"
                   src="../assets/images/学习.png" />
            </div>
            <div style="float:left; display:inline;margin-left:10px;font-size:18px;color:#f19601;">
              在线培训</div>
          </div>
        </div>
      </div>
      <div class="weui-flex ">
        <div class="weui-flex__item">
          <div @click='gostatistics()'
               style="display: flex;justify-content: center;align-items: center;margin: 0px 50px 20px 50px;height:80px; padding:15px;border:1px solid #BFBFBF;border-radius: 10px;box-shadow:2px 2px 3px #aaaaaa; ">
            <div style="float:left; display:inline; ">
              <img style="height:80px;"
                   src="../assets/images/统计.png" />
            </div>
            <div style="float:left; display:inline;margin-left:10px;font-size:18px;color:#53C891 ">
              平台统计
            </div>
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
      token: '',
      doctorSystemURL: ''
    }
  },
  mounted() {
    axios
      .post("/newDoctorToken", {
        userId: window.localStorage.getItem("DocId")

      }).then((response) => {
        if (response.status == 200) {
          this.token = response.data.token
          console.log(this.token)
        }
      }).catch(function (error) {
        console.log("error", error);
      });

  },
  methods: {
    goSystem() {
      window.location.href = global.doctorSystemURL + '?token=' + this.token;
    },
    gotrain() {
      this.$router.push({ name: "Train" });
    },
    gostatistics() {
      this.$router.push({ name: "Statistics" });
    }
  }

}
</script>

<style scoped>
</style>