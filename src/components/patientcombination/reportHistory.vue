<template>
  <div>

    <div style="text-align:left;overflow:hidden">
      <mt-cell title="提交人" style="width:70%;float:left" @click.native="popupVisible=true">
        <span>{{currentTags?currentTags.name: '请选择'}}</span>
      </mt-cell>
      <div class="jilu"> <span>共5条记录</span></div>
    </div>

    <div v-for="item in reportlist" :key="item.reportid" @click="gotoPatEvaluation(item.reportid)">
      <div class="card">
        <div class="leftside"></div>
        <div class="iconside"> <i class="iconfont icon-fengxian" style="font-size:30px;"></i></div>
        <div class="rightside">
          <span>提交人：</span><span>{{item.name}}</span><br>
          <span>更新时间：{{item.updatetime}}</span>
        </div>

        <div class="righticon">
          <i class="iconfont icon-youjian" style="font-size:20px;"></i>


        </div>
      </div>
    </div>
    
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup" style="width:100%;height:30%">
      <mt-picker :slots="dataList" :show-toolbar="true" ref="picker" value-key="name">
        <div class="picker-toolbar-title">
          <div class="usi-btn-cancel" @click="popupVisible = !popupVisible">取消</div>
          <div class="">提交人</div>
          <div class="usi-btn-sure" @click="PickerSubBtn">确定</div>
        </div>
      </mt-picker>
    </mt-popup>

  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      popupVisible: false,
      currentTags: '',

      dataList: [
        {
          values: [
            {
              name: "张三",
              id: 123,
            },
            {
              name: "赵英浩",
              id: 1333,
            }
            , {
              name: "李四",
              id: 1455,
            }
          ]
        }
      ],
      currentTags: '',
      reportlist: [
        {
          name: "张三",
          reportid: '123',
          risk: 'H',
          updatetime: "2020年3月22日21：30"
        },
        {
          name: "张三",
          reportid: '1453',
          risk: 'H',
          updatetime: "2020年3月22日18：30"
        },
        {
          name: "张三",
          reportid: '4553',
          risk: 'H',
          updatetime: "2020年3月22日17：30"
        }
      ],








    }
  },
  mounted () {

  },
  methods: {
    backPopuphandleConfim () {

    },
    PickerSubBtn () {
      // console.log(this.$refs.picker.getValues()[0])
      this.currentTags = this.$refs.picker.getValues()[0]
      this.popupVisible = false

    },
    gotoPatEvaluation (val) {
      this.$router.push({
        path: '/patient/evaluation',
        query: {
          id: val
        }
      })
    }

  }
}
</script>
<style scoped>
.tt1 {
  display: inline;
  background-color: coral;
}
.jilu {
  float: right;
  height: 48px;
  line-height: 48px;
  padding-right: 20px;
}
.picker-toolbar-title {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.usi-btn-cancel,
.usi-btn-sure {
  color: #ff6600;
}
.card {
  text-align: left;
  margin: 10px;
  width: 100%;
  height: 60px;
  overflow: hidden;
}
.card .leftside {
  width: 8px;
  float: left;
  height: 60px;

  /* height: 30px; */
  border-radius: 8px 0px 0px 8px;
  background: red;
}
.card .iconside {
  padding: 0px 10px;
  float: left;
  height: 60px;
  line-height: 60px;
  color: red;
}
.card .rightside {
  float: left;
  padding: 5px;
}
.card .righticon {
  float: right;
  height: 60px;
  line-height: 60px;
  padding-right: 20px;
}
</style>