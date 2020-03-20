<template>
  <div class="wrapper">
    <div class="page__hd">
      <h1 align="center" style="color:#07C160;font-size:20px;margin-top:30px" class="page__title">平台统计</h1>
    </div>
   <!--  <div class="header">
      <div class="user">
        <img style="height:40px;vertical-align: middle;" src="../assets/images/用户.png">
      </div>
      <div class="userinfo">
        <div class="username">测试用户1 </div>
      </div>
      <div class="right_icon">
        <img style="height:30px;vertical-align: middle;" src="../assets/images/设置.png">
      </div>
    </div> -->
    <div class="section" align="center">
      <br><br>
      <div class="text1">平台现有医生用户数：{{nowDoctorCount}}</div>
      <div class="text1">平台现有患者用户数：{{nowPatientCount}}</div>
      <br><br>
      <div id="myChart" class="barchart"></div>
    </div>
   <!--  <div class="footer">
      <div class="weui-tabbar">
        <div class="weui-tabbar__item weui-bar__item_on">
          <div style="display: inline-block; position: relative;">
            <img src="../assets/images/wenduji.png" alt="" class="weui-tabbar__icon">
          </div>
          <p class="weui-tabbar__label">新冠自查</p>
        </div>
        <div class="weui-tabbar__item">
          <img src="../assets/images/yisheng.png" alt="" class="weui-tabbar__icon">
          <p class="weui-tabbar__label">预约面诊</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data () {
    return {
      nowPatientCount: '',
      nowDoctorCount: '',
      barData: {},


    }
  },
  mounted () {
    this.getnowPatientCount()
    this.getnowDoctorCount()
    this.getRecentNewPatientCount()

  },
  methods: {
    getnowPatientCount () {
      axios.get('/nowPatientCount', {})
        .then(res => {
          this.nowPatientCount = res.data.results[0].countnum

        })
        .catch(function (error) {
          console.log('error', error)
        })
    },
    getnowDoctorCount () {
      axios.get('/nowDoctorCount', {})
        .then(res => {
          this.nowDoctorCount = res.data.results[0].countnum

        })
        .catch(function (error) {
          console.log('error', error)
        })
    },
    getRecentNewPatientCount () {
      axios.get('/getRecentNewPatientCount', {})
        .then(res => {

          let data1 = []
          let data2 = []
          for (let item of res.data.results) {
            data1.push(item.RTime)
            data2.push(item.countnum)
          }
          this.barData.data1 = data1
          this.barData.data2 = data2
          this.drawline()
        })
        .catch(function (error) {
          console.log('error', error)
        })
    },
    drawline () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '近七日新增患者用户数',
          left: '20 %'        },
        // tooltip: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          data: this.barData.data1,
          axisLabel: {

            interval: 0

          }
        },
        yAxis: {},
        series: [{
          name: '用户数',
          type: 'bar',
          data: this.barData.data2,
          label: {
                show: true,
                position: 'top'
            }
        }]
      });
    }
  }

}
</script>

<style>
.barchart {
  width: 90%;
  height: 300px;
}
.text1 {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 10px 20px;
}
html,
body {
  height: 100%;
}
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.header {
  flex: 0;
  color: black;
  height: 80px;
  background: #f7f7f7;
}
.section {
  flex: 1;
  /* display: -webkit-box; */
  width: 100%;
  height: 2rem;
  background: #fff;
}
.footer {
  flex: 0;
  background: #f7f7f7;
}
/* header {
  color: black;
  height: 80px;
  background: white;
} */
.user {
  vertical-align: middle;
  height: 100%;
  width: 20%;
  float: left;
  line-height: 80px;
}
.userinfo {
  height: 80px;
  float: left;
  width: 50%;
}
.username {
  display: block;
  float: left;
  margin-block-start: 25px;
  margin-block-end: 20px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.right_icon {
  font-size: 8px;
  float: left;
  width: 26%;
  line-height: 80px;
  text-align: right;
  padding-right: 4%;
}
/* section {
  display: -webkit-box;
  width: 100%;
  height: 2rem;
  background: #fff;
} */
a {
  color: #777;
  text-decoration: none;
  outline: 0;
}
</style>