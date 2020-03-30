<template>
  <div>
<!-- 
    <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__hd">
            <select v-model="way" style="height:30px">
                <option v-for="x in searchway" :key="x.wayid">{{x.wayname}}</option>
            </select>
        </div>
        <div class="weui-cell__bd">
            <mt-field  v-model="content" placeholder="请输入"></mt-field> 
        </div>
        <div class="weui-cell__ft" style="margin:10px">
            <mt-button size="small" type="primary" @click="search(way,content)">搜&nbsp;索</mt-button>
        </div>
    </div> -->

    <div v-for="item in unprocessedlist" :key="item.unprocessedid">
        <a href="javascript:void(0);" @click="todetail()" style="color:black">
            <div class="card">
                <div v-if="item.risk == 'H'">
                    <div class="leftside" style="background:red"></div>
                    <div class="iconside" style="color:red"> <i class="iconfont icon-fengxian" style="font-size:30px"></i></div>
                    <div class="rightside">
                        <span>{{item.name+"&nbsp;&nbsp;&nbsp;&nbsp;"+item.sex+"&nbsp;&nbsp;&nbsp;&nbsp;"+item.age+'岁'+"&nbsp;&nbsp;&nbsp;&nbsp;"+'风险：高'}}</span><br>
                        <span>更新时间：{{item.updatetime}}</span>           
                    </div>            
                </div>
                <div v-if="item.risk == 'M'">
                    <div class="leftside" style="background:blue"></div>
                    <div class="iconside" style="color:blue"> <i class="iconfont icon-fengxian" style="font-size:30px;"></i></div>
                    <div class="rightside">
                        <span>{{item.name+"&nbsp;&nbsp;&nbsp;&nbsp;"+item.sex+"&nbsp;&nbsp;&nbsp;&nbsp;"+item.age+'岁'+"&nbsp;&nbsp;&nbsp;&nbsp;"+'风险：中'}}</span><br>
                        <span>更新时间：{{item.updatetime}}</span>           
                    </div> 
                </div>
                <div v-if="item.risk == 'L'">
                    <div class="leftside" style="background:green"></div> 
                    <div class="iconside" style="color:green"> <i class="iconfont icon-fengxian" style="font-size:30px;"></i></div>
                    <div class="rightside">
                        <span>{{item.name+"&nbsp;&nbsp;&nbsp;&nbsp;"+item.sex+"&nbsp;&nbsp;&nbsp;&nbsp;"+item.age+'岁'+"&nbsp;&nbsp;&nbsp;&nbsp;"+'风险：低'}}</span><br>
                        <span>更新时间：{{item.updatetime}}</span>           
                    </div> 
                </div>    
                <div class="righticon">
                    <i class="iconfont icon-youjian" style="font-size:20px;"></i>     
                </div>
            </div>
        </a>
    </div>
  </div>
</template>

<script>

export default {
    data(){
        return{
            searchway:[
                {wayid:"01",wayname:"按姓名搜索"},
                {wayid:"02",wayname:"按手机号搜索"},
            ],
            way:'',
            content:'',
            unprocessedlist: [
            {
            name: "广坤",
            sex:'男',
            age:'56',
            telephonenumber:'13312345678',
            unprocessedid: '123',
            risk: 'H',
            updatetime: "2020年3月22日21：30"
            },
            {
            name: "赵四",
            sex:'男',
            age:'56',
            telephonenumber:'13312345678',
            unprocessedid: '1453',
            risk: 'M',
            updatetime: "2020年3月22日18：30"
            },
            {name: "大个",
            sex:'女',
            age:'65',
            telephonenumber:'13312345678',
            unprocessedid: '1463',
            risk: 'L',
            updatetime: "2020年3月22日18：20"
            },
            { name: "大脚",
            sex:'女',
            age:'58',
            telephonenumber:'13812345678',
            unprocessedid: '1455',
            risk: 'M',
            updatetime: "2020年3月22日18：45"
            },
            {
            name: "刘能",
            sex:'男',
            age:'56',
            telephonenumber:'13712345678',
            unprocessedid: '4553',
            risk: 'L',
            updatetime: "2020年3月22日17：30"
            }
            ],
        }      
    },
    methods: {
        search(way,content){
           
        },
        todetail(){
            this.$router.push({name:"/doctor/patdetailmod",params:{}})
        }
    }
}
</script>

<style>

.card {
  text-align: left;
  margin: 10px;
  width: 100%;
  height:60px;
  overflow:hidden
}
.card .leftside {
  width: 8px;
  float: left;
  height:60px;
  
  /* height: 30px; */
  border-radius: 8px 0px 0px 8px;
}
.card .iconside{
   padding:0px 10px;
   float: left;
  height:60px;
  line-height:60px;
}
.card .rightside {
  float: left;
  padding: 5px;
}
.card .righticon{
  float:right;
   height:60px;
  line-height:60px;
  padding-right:20px;
}
</style>