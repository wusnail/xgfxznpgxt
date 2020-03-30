<template>
  <div class="statisticscard">
    <div class="cardcontainer">
      <div class="litext1"> <i class="iconfont icon-shugang"></i>今日预约
        <span style="color:black;float:right">0</span></div>
      <div class="box">
        <div class="box-item">
          <span style="color:gray;">正在隔离</span>
          <br>0
          <a href="javascript:void(0);"
             @click="goappt('1')"
             style="color:#4aab44">>></a>
        </div>
        <div class="box-item">
          <span style="color:gray;">已解除隔离</span>
          <br>0
          <a href="javascript:void(0);"
             @click="goappt('2')"
             style="color:#4aab44">>></a>
        </div>
      </div>
      <div id="barchart"
           class="chart"></div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>预约总览
        <span style="color:black;float:right">0</span></div>
      <div id="piechart"
           class="chart"></div>
    </div>
  </div>
</template>
 
<script>

export default {
  data() {
    return {

    }
  },
  mounted() {
    this.drawbar()
    this.drawpie()
  },
  methods: {
    drawbar() {
      let myChart = this.$echarts.init(document.getElementById('barchart'));
      var option = {
        tooltip: {},
        color: ['#4aab44'],
        xAxis: {
          data: ["低风险", "中风险", "高风险", "确诊", "暂无风险"],
          axisLabel: {
            interval: 0,
            textStyle: {
              fontsize: 12
            }
          }
        },
        yAxis: {},
        series: [{
          name: '人数',
          type: 'bar',
          data: [0, 1, 2, 8, 10, 5]
        }],
        grid: { height: 150, x: 20, y: 10, x2: 20, y2: 20 },
      };
      myChart.setOption(option);
    },
    drawpie() {
      let myChart = this.$echarts.init(document.getElementById('piechart'));
      var option = {
        tooltip: {},
        series: [{
          type: 'pie',
          radius: '50%',
          data: [{ name: '低风险', value: 0 },
          { name: '中风险', value: 1 },
          { name: '高风险', value: 2 },
          { name: '确诊', value: 8 },
          { name: '暂无风险', value: 10 }]
        }],
      };
      myChart.setOption(option);
    },
    goappt(record) {
      this.$emit('staValue', record)
    }
  }
}
</script>

<style>
.statisticscard {
  margin: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: left;
}
.cardcontainer {
  padding: 10px;
  overflow: auto;
}
.litext1 {
  color: #4aab44;
}
.litext2 {
  padding-left: 10px;
}
.box {
  margin: 10px;
  display: flex;
  justify-content: space-around;
}
.box-item {
  flex: 1;
  text-align: center;
}
.chart {
  width: 90%;
  height: 200px;
  margin: auto;
}
</style>