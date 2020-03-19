<template>
  <div class="footer">
    <div class="weui-tabbar">
      <div class="weui-tabbar__item"
           @click="ToggleSelfExam()">
        <div style="display: inline-block; position: relative;">
          <img :src="ThermometerUrl"
               class="weui-tabbar__icon">
        </div>
        <p class="weui-tabbar__label"
           :style="{color:colorSelfExam}">新冠自查</p>
      </div>
      <div class="weui-tabbar__item"
           @click="ToggleAppointment()">
        <!-- <div :class="classAppointment"
           @click="ToggleAppointment()"> -->
        <img :src="DoctorUrl"
             class="weui-tabbar__icon">
        <p class="weui-tabbar__label"
           :style="{color:colorAppointment}">预约面诊</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorSelfExam: '#eeb174',//温度计图片选中颜色
      colorAppointment: '#707070',//灰色
      ThermometerUrl: require('../../assets/images/ONwenduji.png'),
      DoctorUrl: require('../../assets/images/yisheng.png')
    }
  },
  methods: {
    ToggleSelfExam() {
      //切换按钮及图片颜色
      this.colorSelfExam = '#eeb174'
      this.colorAppointment = '#707070'
      this.ThermometerUrl = require('../../assets/images/ONwenduji.png')
      this.DoctorUrl = require('../../assets/images/yisheng.png')
      //在下面写跳转到新冠自查页面

    },
    ToggleAppointment() {
      //切换按钮颜色
      this.colorAppointment = '#1296db'//医生选中颜色
      this.colorSelfExam = '#707070'
      this.ThermometerUrl = require('../../assets/images/wenduji.png')
      this.DoctorUrl = require('../../assets/images/ONyisheng.png')
      //在下面写跳转到预约面诊页面
    }
  }
}
</script>

<style>
.footer {
  flex: 0;
  background: white;
}
</style>