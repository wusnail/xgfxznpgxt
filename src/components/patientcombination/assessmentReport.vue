<template>
  <div class="reportcard">
    <div class="reportheader">
      <!-- <div v-if="role=='patient'">
        <span style="float:right;padding-right:20px;" @click="$router.push('/patient/dailyreport')"> 每日上报</span><br>
      </div> -->
      <div class="updatetime">更新时间:&nbsp;&nbsp;{{evform.SubmitDate}}</div>
      <div v-if="qflag" class="updateinfo" @click="$router.push('/patient/form')"><i
          class="iconfont icon-bianji"></i>&nbsp;更新信息
      </div>
      <div v-else class="updatetime">报告人:{{evform.SubmitUser}}
      </div>

    </div>
    <div class="cardheader"></div>
    <div style="padding-left:10px;color:red"> <i class="iconfont icon-fengxian"></i>&nbsp;新冠肺炎高风险</div>
    <!-- <div>
      &nbsp; &nbsp; &nbsp; <mt-button type="primary" size="small" @click="showdetails()">查看风险详情</mt-button>
    </div> -->
    <div v-if="unrealease">
      &nbsp; &nbsp; &nbsp; <mt-button type="primary" size="small">解除隔离</mt-button>
    </div>
    <div class="cardcontainer" id="id1">

      <div class="litext1"> <i class="iconfont icon-shugang"></i>基本信息</div>
      <div class="litext2">
        <div class="parent">
          <div class="stable">
            姓名 &nbsp; {{evform.Name}}
          </div>
          <div class="change">
            出生年月 &nbsp;{{evform.Birthday}}
          </div>
        </div>
        <div class="parent">
          <div class="stable">
            性别 &nbsp;{{evform.Gender|genderFliter}}
          </div>
          <div class="change">
            手机 &nbsp;{{evform.Phone}}
          </div>
        </div>
        <div class="parent">
          <div class="stable">
            孕妇 &nbsp;{{evform.Pregnant|pregFliter}}
          </div>
        </div>
      </div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>手写接触史
      </div>
      <div class="litext2">
        {{evform.ContactHistory}}
      </div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>既往病史</div>
      <div class="litext2">
        {{evform.MedicalHis}}
      </div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>过敏史</div>
      <div class="litext2">{{evform.AllergyHistory}}</div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>流行病学接触史</div>
      <div class="litext2" v-html="evform.EpidemiProb"></div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>临床表现</div>
      <div class="litext2">{{evform.SymptomProb}}</div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>生理参数</div>
      <div class="litext2">{{evform.VitalSigns}}</div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>每日体温变化</div>
      <div class="litext2">{{evform.VitalSigns}}</div>
      <div id="linechart" class="chart"></div>
    </div>
    <br><br><br>
  </div>

</template>
<script>
import axios from 'axios'
export default {

  // 怀孕0无1有2不清楚，性别1男2女
  props: ['reportId', 'qflag'],
  data () {
    return {
      unrealease: this.$route.params.realeaseFlag,
      evform: {},
      role: window.localStorage.getItem("role"),
    }
  },

  filters: {
    genderFliter: function (val) {
      switch (Number(val)) {
        case 1:
          return '男'
        case 2:
          return '女'

        default:
          break
      }
    },
    pregFliter: function (val) {
      switch (Number(val)) {
        case 0:
          return '是'
        case 1:
          return '否'
        case 2:
          return '不清楚'
        default:
          break
      }
    }
  },
  mounted () {
    console.log(this.$route.params.patientId, 'mounted')
    this.getEvaluationByID(this.$route.params.evaluId)
    //获取最新列表的接口
    console.log(this.role)
    let h1 = document.getElementById("id1").offsetHeight
    console.log(h1)
    this.drawline()

  },
  activated () {
    //keep-alive 进来先加载这个
    console.log(this.$route.params.patientId, '评估报告active')
    this.getEvaluation()
  },

  deactivated () {
    console.log(this.$route.params.patientId, 'deactive')
  },
  methods: {
    showdetails () {
      console.log('查看详情')
      // 跳转到风险详情-sj
      this.$router.push('/patient/risk')
    },
    drawline () {
      let myChart = this.$echarts.init(document.getElementById('linechart'));
      var option = {
        legend: {
          data: ['早晨体温', '夜晚体温']
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          top: '15%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1.30', '1.31', '2.1', '2.2', '2.3', '2.4', '2.5']
        },
        yAxis: {
          type: 'value',
          min: 35,
          max: 38//获取数据后改为根据最大最小值+1设置纵坐标范围
        },
        series: [
          {
            name: '早晨体温',
            type: 'line',
            data: [36.7, 36.8, 37, 36.9, 37, 36.8, 37]
          },
          {
            name: '夜晚体温',
            type: 'line',
            data: [36.8, 37, 36.9, 37, 36.5, 37, 36.9]
          }
        ]
      };
      myChart.setOption(option);
    },
    getEvaluation () {
      axios.post('/getEvaluation', {
        "patientId": this.$route.params.patientId
      }).then(response => {
        // console.log(response.data.results[0])
        this.evform = response.data.results[0]
        this.evform.EpidemiProb = this.evform.EpidemiProb.replace(/\r\n/g, "<br>")
      })
        .catch(function (error) {
          console.log('error', error)
        })    }

  }

}
</script>
<style>
@import "../../assets/gyx/iconfont.css";
.reportcard {
  margin: 10px 10px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: left;
}
.reportheader {
  font-size: 14px;
}
.updatetime {
  display: inline;
  color: grey;
  padding-left: 20px;
}
.updateinfo {
  padding-right: 20px;
  float: right;
  color: dodgerblue;
}
.cardheader {
  margin-top: 5px;
  border-radius: 8px 8px 0px 0px;
  background: red;
  width: 100%;
  height: 10px;
}
.cardcontainer {
  padding: 10px;
  /* max-width: 300px; */
  overflow: auto;
}
/* li {
  list-style: inside url("../../assets/shugang.svg");
} */
.litext1 {
  color: #4aab44;
}
.litext2 {
  padding-left: 10px;
}
.parent {
  display: flex;
  flex-flow: row;
}
.stable {
  width: 150px;
}
.change {
  flex: 1;
}
.chart {
  width: 90%;
  height: 200px;
  margin: auto;
}
</style>