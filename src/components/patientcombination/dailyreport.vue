<template>
  <div>
    <mt-header title="每日上报" fixed>
      <router-link to="" slot="left">
        <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="drcontainer">
      <div class="drcard">
        今日日期：{{dataVal | formatDate}} <br>
        <!-- <mt-button @click.native="open('picker')">{{dataVal | formatDate}}</mt-button> <br>
        <mt-datetime-picker v-model="dataVal" type="date" ref="picker" :endDate="endDate" year-format="{value} 年"
          month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm">
        </mt-datetime-picker> -->
        今日体温：<br>
        <input type="checkbox" value="AM" v-model="am">上午
        <input class="input1" v-model="amtemp" placeholder="请填写上午体温" />℃
        <br>
        <input type="checkbox" value="PM" v-model="pm">下午
        <input class="input1" v-model="pmtemp" placeholder="请填写下午体温" />℃
        <br>
        临床症状:
        <br>
        <div> <input type="checkbox" value="0" v-model="clinicalSymptoms">咳嗽</div>
        <div> <input type="checkbox" value="1" v-model="clinicalSymptoms">气促</div>
        <div> <input type="checkbox" value="2" v-model="clinicalSymptoms">其他

          <input class="input1" v-model="describe" placeholder="请填写其他症状" /></div>
      </div>

    </div>

  </div>
</template>
<script>
import { picker } from 'mint-ui';
import { formatDate } from '../../../static/js/datedd.js'
export default {
  data () {
    return {
      am: false,
      pm: false,
      amtemp: '',
      pmtemp: '',
      clinicalSymptoms: [],
      describe: '',
      dataVal: new Date(),
      endDate: new Date(),
      datepickerVisiable: false,

    }
  },
  filters: {                    //时间转换
    formatDate (time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd');
    }
  },
  methods: {
    handleConfirm () {
      // console.log(this.dataVal)
      var date = formatDate(this.dataVal, 'yyyy-MM-dd')
      this.datepickerVisiable = true


    },
    open (picker) {
      this.$refs[picker].open();
      this.dataVal = new Date()   //设置开始
    },
  }

}
</script>
<style>
.drcontainer {
  background: #f5f5f9;
  margin-top: 40px;
}
.drcard {
  margin: 10px;
  padding: 10px;
  border: 1px solid white;
  background: white;
  border-radius: 5px;
  text-align: left;
}
input[type="checkbox"] {
  margin-right: 10px;
  line-height: 12px;

  cursor: pointer;
  font-size: 14px;
  width: 12px;
  height: 12px;
  position: relative;
}
input[type="checkbox"]:after {
  position: absolute;
  width: 12px;
  height: 12px;
  top: 0;
  content: " ";
  color: #fff;
  display: inline-block;
  visibility: visible;
  padding: 0px;
  border-radius: 3px;
  background: #ffffff;
  border: 1px solid #dddddd;
}
.input1 {
  border: 0;
  outline: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font-size: inherit;
  color: inherit;
  height: 1.41176471em;
  line-height: 1.41176471;
}
input[type="checkbox"]:checked:after {
  content: "✓";
  font-size: 14px;
  font-weight: 600;
  background-color: #36aeff;
}
</style>