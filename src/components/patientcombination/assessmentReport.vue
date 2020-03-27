<template>
  <div class="reportcard">
    <div class="reportheader">
      <div class="updatetime">更新时间:&nbsp;&nbsp;{{myform.updatetime}}</div>
      <div v-if="qflag" class="updateinfo" @click="$router.push('/patient/form')"><i
          class="iconfont icon-bianji"></i>&nbsp;更新信息
      </div>
      <div v-else class="updatetime">报告人:{{myform.reportername}}
      </div>
    </div>
    <div class="cardheader"></div>
    <div style="padding-left:10px;color:red"> <i class="iconfont icon-fengxian"></i>&nbsp;新冠肺炎高风险</div>
    <div>
      &nbsp; &nbsp; &nbsp; <mt-button type="primary" size="small" @click="showdetails()">查看风险详情</mt-button>
    </div>
    <div class="cardcontainer" id="id1">

      <div class="litext1"> <i class="iconfont icon-shugang"></i>基本信息</div>
      <div class="litext2">
        <div class="parent">
          <div class="stable">
            姓名
          </div>
          <div class="change">
            年龄
          </div>
        </div>
        <div class="parent">
          <div class="stable">
            性别
          </div>
          <div class="change">
            手机
          </div>
        </div>
        <div class="parent">
          <div class="stable">
            孕妇
          </div>
        </div>
      </div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>既往病史</div>
      <div class="litext2">无</div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>过敏史</div>
      <div class="litext2">无</div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>流行病学接触史
        <mt-button plain type="primary" size="small" style="float:right">查看详情
        </mt-button>
      </div>
      <div class="litext2">无</div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>临床表现
        <mt-button plain type="primary" size="small" style="float:right">查看详情
        </mt-button>
      </div>
      <div class="litext2">无</div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>实验室检查发现
        <mt-button plain type="primary" size="small" style="float:right">查看详情
        </mt-button>
      </div>
      <div class="litext2">无</div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>实验室检查发现
        <mt-button plain type="primary" size="small" style="float:right">查看详情
        </mt-button>
      </div>
      <div class="litext2">无</div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>影像学发现
        <mt-button plain type="primary" size="small" style="float:right">查看详情
        </mt-button>
      </div>
      <div class="litext2">无</div>
      <div class="litext1"> <i class="iconfont icon-shugang"></i>检验检查信息采集</div>
      <div class="litext2">没有没有
      </div>
      <br><br>
    </div>
  </div>
</template>
<script>
export default {
  props: ['reportId', 'qflag'],
  data () {
    return {
      myform: {
        updatetime: "2020年3月21日1点28分",
        reportername: "赵英浩",
      }
    }
  },
  mounted () {
    let h1 = document.getElementById("id1").offsetHeight
    console.log(h1)

  },
  methods: {
    showdetails () {
      console.log('查看详情')
      // 跳转到风险详情-sj
      this.$router.push('/patient/risk')
    }

  }

}
</script>
<style>
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
</style>