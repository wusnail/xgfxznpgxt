<template>
  <div class="statisticscard">
    <div class="cardcontainer">
      <div class="litext1"> <i class="iconfont icon-shugang"></i>隔离人员总览
        <!-- <span style="color:black;float:right">0</span> -->
      </div>
      <div class="box">
        <div class="box-item">
          <span style="color:gray;">正在隔离</span>
          <br>{{reserveundergoing}}
          <a href="javascript:void(0);"
             @click="goappt('1')"
             style="color:#4aab44">>></a>
        </div>
        <div class="box-item">
          <span style="color:gray;">已解除隔离</span>
          <br>{{reservedone}}
          <a href="javascript:void(0);"
             @click="goappt('2')"
             style="color:#4aab44">>></a>
        </div>
      </div>
      <div id="barchart"
           class="chart"></div>
      <div id="piechart"
           class="chart"></div>
    </div>
  </div>
</template>
 
<script>
import axios from 'axios';
export default {
  data() {
    return {
      data: [
        { name: '暂无风险', value: 0 },
        { name: '低风险', value: 0 },
        { name: '中风险', value: 0 },
        { name: '高风险', value: 0 }
      ],
      reservedone:0,
      reserveundergoing:0,
    }
  },
  activated(){
    this.getReservListUndergoing()
    this.getReservListDone()
  },
  mounted() {
    this.getReservListUndergoing()
    this.getReservListDone()
    this.getdata()
  },
  methods: {
    getReservListUndergoing () {
      axios.post('/getReservListUndergoing', {"doctorId": window.localStorage.getItem("doctorId")})
        .then(response => {
          var dd = response.data.results
          this.reserveundergoing=0;
          for(var item in dd){
            this.reserveundergoing++;
          }    
        })
        .catch(function (error) {
          console.log('error', error)
        })
    },
    getReservListDone () {
      axios.post('/getReservListDone', {"doctorId": window.localStorage.getItem("doctorId")})
        .then(response => {
          var dd = response.data.results
          this.reservedone=0;
          for(var item in dd){
            this.reservedone++;
          }    
        })
        .catch(function (error) {
          console.log('error', error)
        })
    },
    getdata() {
      axios.post('/nowRankPatientCount', {
        'doctorId': window.localStorage.getItem("doctorId")
      }).then((response) => {
        let results = response.data.results
        for (var i in results) {
          switch (Number(results[i].MachineRes)) {
            case 0:
              for (var j in this.data) {
                if (this.data[j].name == '暂无风险') this.data[j].value = results[i].countnum
              }
              break;
            case 1:
              for (var j in this.data) {
                if (this.data[j].name == '低风险') this.data[j].value = results[i].countnum
              }
              break;
            case 2:
              for (var j in this.data) {
                if (this.data[j].name == '中风险') this.data[j].value = results[i].countnum
              }
              break;
            case 3:
              for (var j in this.data) {
                if (this.data[j].name == '高风险') this.data[j].value = results[i].countnum
              }
              break;
          }
        }
        this.drawbar()
        this.drawpie()
      }).catch(function (error) {
        console.log("error", error);
      });
    },
    drawbar() {
      let myChart = this.$echarts.init(document.getElementById('barchart'));
      var name = []
      var num = []
      for (var i in this.data) {
        name.push(this.data[i].name)
        num.push(this.data[i].value)
      }
      var option = {
        tooltip: {},
        color: ['#4aab44'],
        xAxis: {
          data: name,
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
          data: num
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
          data: this.data
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