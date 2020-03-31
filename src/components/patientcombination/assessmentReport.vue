<template>
  <div class="reportcard">
    <div class="reportheader">
      <div v-if="role=='patient'">
        <span style="float:right;padding-right:20px;" @click="$router.push('/patient/dailyreport')"> 每日上报</span><br>
      </div>
      <div class="updatetime">更新时间:&nbsp;&nbsp;{{myform.updatetime}}</div>
      <div v-if="qflag" class="updateinfo" @click="$router.push('/patient/form')"><i
          class="iconfont icon-bianji"></i>&nbsp;更新信息
      </div>
      <div v-else class="updatetime">报告人:{{myform.reportername}}
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
            姓名 &nbsp; {{myform.name}}
          </div>
          <div class="change">
            年龄 &nbsp;{{myform.age}}
          </div>
        </div>
        <div class="parent">
          <div class="stable">
            性别 &nbsp;{{myform.gender|genderFliter}}
          </div>
          <div class="change">
            手机 &nbsp;{{myform.phone}}
          </div>
        </div>
        <div class="parent">
          <div class="stable">
            孕妇 &nbsp;{{myform.preg|pregFliter}}
          </div>
        </div>
      </div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>既往病史</div>
      <div class="litext2">无</div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>过敏史</div>
      <div class="litext2">无</div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>流行病学接触史
        <!-- <mt-button plain type="primary" size="small" style="float:right">查看详情
        </mt-button> -->
      </div>
      <div class="litext2">无</div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>临床表现
        <!-- <mt-button plain type="primary" size="small" style="float:right">查看详情
        </mt-button> -->
      </div>
      <div class="litext2">无</div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>实验室检查发现
        <!-- <mt-button plain type="primary" size="small" style="float:right">查看详情
        </mt-button> -->
      </div>
      <div class="litext2">无</div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>实验室检查发现
        <!-- <mt-button plain type="primary" size="small" style="float:right">查看详情
        </mt-button> -->
      </div>
      <div class="litext2">无</div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>影像学发现
        <!-- <mt-button plain type="primary" size="small" style="float:right">查看详情
        </mt-button> -->
      </div>
      <div class="litext2">无</div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>检验检查信息采集</div>
      <div class="litext2">没有没有
      </div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>体温信息采集</div>
      <div id="linechart" class="chart"></div>
    </div>
    <br><br>
  </div>

</template>
<script>

export default {

  // 怀孕0无1有2不清楚，性别1男2女
  props: ['reportId', 'qflag'],
  data () {
    return {
      unrealease: this.$route.params.realeaseFlag,
      myform: {
        updatetime: "2020年3月21日1点28分",
        reportername: "赵英浩",
        name: '张三',
        preg: '0',
        gender: '1',


      },
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
    console.log(this.role)
    let h1 = document.getElementById("id1").offsetHeight
    console.log(h1)
    this.drawline()

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

  }

}
</script>
<style>
@import "../../assets/gyx/iconfont.css";
.reportcard {
  margin: 10px;
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