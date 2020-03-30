<template>
  <div>
    <mt-header title="填写自查信息" fixed>
      <router-link to="" slot="left">
        <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <nav style="position:fixed;top:40px;width:100%;z-index:10">
      <a class="nav1" v-for="(item, index) in navList" :key="index" @click="jump(index)"
        :style="{color: activeStep === index ? '#1987e1' : '#000000'}">{{item}}</a>
    </nav>
    <div class="wrapper">
      <!-- <div class="section" style="height:500px;width:100%" v-for="(item, index) in list" :key="index"
        :style="{'height':index==0?'1000px':'500px'}">
        <div style="width:100%;height:100%;font-size:30px;text-align:center;font-weight:bold;color:#fff;"
          :style="{'background':item.backgroundcolor}">{{item.name}}</div>
      </div> -->
      <div class="section">
        <div class="section_title">基本信息</div>
        <div class="card">
          <div>
            <span class="text1">姓名</span>
            <input class="input1" v-model="form.name" placeholder="请填写姓名" />
          </div>
          <div>
            <span class="text1">年龄</span>
            <input class="input1" v-model="form.age" placeholder="请填写年龄" />
          </div>
          <div>
            <span class="text1">性别</span>
            <input type="radio" value="Male" v-model="form.sex">男
            <input type="radio" value="Female" v-model="form.sex">女
          </div>
          <div>
            <span class="text1">手机号</span>
            <input class="input1" type="number" pattern="[0-9]*" v-model="form.phone" placeholder="请填写手机号" />
          </div>
          <div v-show="form.sex=='Female'">
            <span class="text1">是否为孕妇</span>
            <input type="radio" value="No" v-model="form.pregnant">否
            <input type="radio" value="Yes" v-model="form.pregnant">是
            <input type="radio" value="Unknow" v-model="form.pregnant">不清楚
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section_title">健康问卷</div>
        <div class="card">
          <div class="sectionLine">流行病学调查</div>
          <div id="q1">
            <div class="text1">Q1：最近14天（两周内），是否有在以下新冠肺炎高发地区停留或旅游的经历？</div>
            <div> <input type="checkbox" :value="options1[0].value" v-model="form.question1">
              {{options1[0].label}}</div>
            <div> <input type="checkbox" :value="options1[1].value" v-model="form.question1">{{options1[1].label}}
            </div>
            <div> <input type="checkbox" :value="options1[2].value" v-model="form.question1">{{options1[2].label}}
            </div>
            <div v-show="form.question1.includes('C')">
              <input class="input1" placeholder="请填写" />
            </div>
            <div> <input type="checkbox" :value="options1[3].value" v-model="form.question1">{{options1[3].label}}
            </div>
          </div>
          <div id="q2">
            <div class="text1">Q2：最近14天（两周内），所居住的社区是否报告过确诊的新冠肺炎的情况？</div>
            <input type="radio" :value="options2[0].value" v-model="form.question2">{{options2[0].label}}
            <input type="radio" :value="options2[1].value" v-model="form.question2">{{options2[1].label}}

          </div>
          <div id="q3">
            <div class="text1">Q3：最近14天（两周内），是否接触过已确诊新冠肺炎（核酸检测阳性）的患者？</div>
            <input type="radio" :value="options3[0].value" v-model="form.question3">{{options3[0].label}}
            <input type="radio" :value="options3[1].value" v-model="form.question3">{{options3[1].label}}
          </div>
          <div id="q4">
            <div class="text1">Q4：最近14天（两周内），是否接触过来自新冠肺炎高发地区，发热或有呼吸道症状的人员？</div>
            <input type="radio" :value="options4[0].value" v-model="form.question4">{{options4[0].label}}
            <input type="radio" :value="options4[1].value" v-model="form.question4">{{options4[1].label}}
          </div>
          <div id="q5">
            <div class="text1">Q5：最近14天（两周内），是否您的家庭、办公室、学校班级等人员密集场所，出现2例及以上发热、或呼吸道症状的情况？</div>
            <input type="radio" :value="options5[0].value" v-model="form.question5">{{options5[0].label}}
            <input type="radio" :value="options5[1].value" v-model="form.question5">{{options5[1].label}}
          </div>
          <div class="sectionLine">症状问询</div>
          <div id="q6">
            <div class="text1">Q6：最近14天（两周内），您是否还有以下及其他旅行、接触情况？</div>
            <div> <input type="checkbox" :value="options6[0].value" v-model="form.question6">
              {{options1[0].label}}</div>
            <div> <input type="checkbox" :value="options6[1].value" v-model="form.question6">{{options6[1].label}}
            </div>
            <div> <input type="checkbox" :value="options6[2].value" v-model="form.question6">{{options6[2].label}}
            </div>
            <div> <input type="checkbox" :value="options6[3].value" v-model="form.question6">{{options6[3].label}}
            </div>
            <div v-show="form.question6.includes('D')">
              <input class="input1" placeholder="请填写" />
            </div>
            <div> <input type="checkbox" :value="options6[4].value" v-model="form.question6">{{options6[4].label}}
            </div>
          </div>
          <div id="q7">
            <div class="text1">Q7：最近14天（两周内），您是否出现过发热（体温高于37.3℃/99.1℉）的情况？</div>
            <div>
              <input type="radio" :value="options7[0].value" v-model="form.question7">{{options7[0].label}}
              <div style="float:right" @click="q7popupVisible=true">{{q7currentTags?q7currentTags.label: '请选择测量部位'}}
              </div>
            </div>
            <div v-show="form.question7=='Yes'">
              <input class="input1" placeholder="请输入最高体温" />℃
            </div>
            <input type="radio" :value="options7[1].value" v-model="form.question7">{{options7[1].label}}
          </div>

          <div id="q8">
            <div class="text1">Q8：最近14天（两周内），您是否出现以下呼吸道不适的情况？</div>
            <div>
              <input type="checkbox" :value="options8[0].value" v-model="form.question8">
              {{options8[0].label}}
              <input type="checkbox" :value="options8[1].value" v-model="form.question8">
              {{options8[1].label}}
              <input type="checkbox" :value="options8[2].value" v-model="form.question8">
              {{options8[2].label}}
              <input type="checkbox" :value="options8[3].value" v-model="form.question8">
              {{options8[3].label}}
              <input type="checkbox" :value="options8[4].value" v-model="form.question8">
              {{options8[4].label}}
              <input type="checkbox" :value="options8[5].value" v-model="form.question8">
              {{options8[5].label}}
              <input type="checkbox" :value="options8[6].value" v-model="form.question8">
              {{options8[6].label}}
              <input type="checkbox" :value="options8[7].value" v-model="form.question8">
              {{options8[7].label}}
              <br>
              <div>
                <input type="checkbox" :value="options8[8].value" v-model="form.question8"> {{options8[8].label}}
                <span style="float:right"
                  @click="q8popupVisible1=true">{{q8currentTags1?q8currentTags1.label: '请选择'}}</span>
              </div>
              <div>
                <input type="checkbox" :value="options8[9].value" v-model="form.question8">{{options8[9].label}}
                <span style="float:right"
                  @click="q8popupVisible2=true">{{q8currentTags2?q8currentTags2.label: '请选择'}}</span>
              </div>
              <input type="checkbox" :value="options8[10].value" v-model="form.question8">{{options8[10].label}}<br>
              <div v-show="form.question8.includes('K')">
                <input class="input1" placeholder="请输入" />
              </div>
              <input type="checkbox" :value="options8[11].value" v-model="form.question8">{{options8[11].label}}
            </div>
          </div>

          <div id="q9">
            <div class="text1">Q9：最近14天（两周内），您是否出现以下全身不适的情况？</div>
            <div v-for="(item,index) in options9" :key="index" class="qblock" v-if="index<18">
              <input type="checkbox" :value="item.value" v-model="form.question9">{{item.label}}

            </div>
            <br>
            <input type="checkbox" :value="options9[18].value" v-model="form.question9">{{options9[18].label}}<br>
            <div v-show="form.question9.includes('O')">
              <input class="input1" placeholder="请输入" />
            </div>

            <input type="checkbox" :value="options9[19].value" v-model="form.question9">{{options9[19].label}}<br>
            <div v-show="form.question9.includes('W')">
              <input class="input1" placeholder="请输入" />
            </div>

          </div>
          <div id="q10">
            <div class="text1">Q10：您是否有食物或药物过敏？</div>
            <div v-for="(item,index) in options10" :key="index" v-if="index<3">
              <input type="checkbox" :value="item.value" v-model="form.question10">{{item.label}}
              <div v-show="form.question10.includes(item.value)">
                <input class="input1" placeholder="请输入" />
              </div>
            </div>
            <input type="checkbox" :value="options10[3].value" v-model="form.question10">{{options10[3].label}}<br>

          </div>
          <div id="q11">
            <div class="text1">Q11：您是否还存在其他基础疾病？</div>
            <div v-for="(item,index) in options11" :key="index" v-if="index<options11.length-2" class="qblock">
              <input type="checkbox" :value="item.value" v-model="form.question11">{{item.label}}

            </div>
            <input type="checkbox" :value="options11[options11.length-2].value" v-model="form.question11">
            {{options11[options11.length-2].label}}<br>
            <div v-show="form.question11.includes(options11[options11.length-2].value)">
              <input class="input1" placeholder="请输入" />
            </div>
            <input type="checkbox" :value="options11[options11.length-1].value" v-model="form.question11">
            {{options11[options11.length-1].label}}<br>

          </div>
          <div id="q12">
            <div class="text2">Q12：请录入您当前的、或最近一次的生命体征测量结果：</div>
            <div class="qblock">
              <input type="checkbox" value="br" v-model="form.question12">心率（脉搏）
              <input class="input1" placeholder="请输入" /> 次/分
            </div>
            <div>
              <input type="checkbox" value="bp" v-model="form.question12">血压
              <input class="input1" placeholder="请输入" /> mmHg
            </div>
            <div>
              <input type="checkbox" value="bf" v-model="form.question12">呼吸频率
              <input class="input1" placeholder="请输入" /> 次/分
            </div>
            <div>
              <input type="checkbox" value="xy" v-model="form.question12">血氧饱和度
              <input class="input1" placeholder="请输入" /> %
            </div>
          </div>

        </div>
      </div>
      <div class="section">
        <div class="section_title">检验检查</div>
        <div class="card">
          <div>
            <span class="text1">姓名</span>
            <input class="input1" v-model="form.name" placeholder="请填写姓名" />
          </div>
          <div>
            <span class="text1">年龄</span>
            <input class="input1" v-model="form.age" placeholder="请填写年龄" />
          </div>
          <div>
            <span class="text1">性别</span>
            <input class="input1" v-model="form.sex" placeholder="请选择性别" />
          </div>
          <div>
            <span class="text1">手机号</span>
            <input class="input1" type="number" pattern="[0-9]*" v-model="form.phone" placeholder="请填写手机号" />
          </div>
        </div>
      </div>
    </div>

    <mt-popup v-model="q7popupVisible" position="bottom" class="mint-popup" style="width:100%;height:50%">
      <mt-picker :slots="q7positions" :show-toolbar="true" ref="Q7picker" value-key="label">
        <div class="picker-toolbar-title">
          <div class="usi-btn-cancel" @click="q7popupVisible = !q7popupVisible">取消</div>
          <div class="usi-btn-sure" @click="q7submit">确定</div>
        </div>
      </mt-picker>
    </mt-popup>
    <mt-popup v-model="q8popupVisible1" position="bottom" class="mint-popup" style="width:100%;height:50%">
      <mt-picker :slots="q8positions1" :show-toolbar="true" ref="Q8picker1" value-key="label">
        <div class="picker-toolbar-title">
          <div class="usi-btn-cancel" @click="q8popupVisible1 = !q8popupVisible1">取消</div>
          <div class="usi-btn-sure" @click="q8submit1">确定</div>
        </div>
      </mt-picker>
    </mt-popup>
    <mt-popup v-model="q8popupVisible2" position="bottom" class="mint-popup" style="width:100%;height:50%">
      <mt-picker :slots="q8positions2" :show-toolbar="true" ref="Q8picker2" value-key="label">
        <div class="picker-toolbar-title">
          <div class="usi-btn-cancel" @click="q8popupVisible2 = !q8popupVisible2">取消</div>
          <div class="usi-btn-sure" @click="q8submit2">确定</div>
        </div>
      </mt-picker>
    </mt-popup>

  </div>
</template>
<script>
export default {
  data () {
    return {
      activeStep: 0,
      scroll: '',
      list: [{
        name: "第一条",
        backgroundcolor: "#90B2A3"
      }, {
        name: "第二条",
        backgroundcolor: "#A593B2"
      }, {
        name: "第三条",
        backgroundcolor: "#A7B293"
      }],

      navList: ['基本信息', '健康问卷', '检验检查'],
      form: {
        name: '',
        sex: '',
        phone: '',
        age: '',
        pregnant: 'No',
        question1: [],
        question2: 'No',
        question3: 'No',
        question4: 'No',
        question5: 'No',
        question6: [],
        question7: 'No',
        question8: [],
        question9: [],
        question10: [],
        question11: [],
        question12: [],


      },
      options1: [
        {
          label: '当前美国境内的新冠肺炎高发地区，包括：纽约州、华盛顿州、加利福尼亚州、新泽西州、伊利诺伊州、乔治亚州、佛罗里达州、路易斯安那州、密歇根州、马萨诸塞州、科罗拉多州、宾夕法尼亚州等。',
          value: 'A',        },
        {
          label: '当前美国境外的新冠肺炎高发地区，包括： 西太平洋地区：中国、韩国， 欧洲地区：意大利、西班牙、德国、法国、瑞士、英国、荷兰、奥地利， 中东地区：伊朗。',
          value: 'B',        },
        {
          label: '除了上述罗列的、您最近曾旅行或停留过的其他地区',
          value: 'C'        },
        {
          label: '以上都无',
          value: 'D'        }

      ],
      options2: [{
        label: '是',
        value: 'Yes'
      }, {
        label: '否',
        value: 'No'      }
      ],
      options3: [
        {
          label: '是',
          value: 'Yes'        },
        {
          label: '否',
          value: 'No'        }
      ],
      options4: [
        {
          label: '是',
          value: 'Yes'        },
        {
          label: '否',
          value: 'No'        }
      ],
      options5: [
        {
          label: '是',
          value: 'Yes'        },
        {
          label: '否',
          value: 'No'        }
      ],
      options6: [
        {
          label: '接触过鸡鸭、鸟类等禽类以及禽类动物的粪便、笼子等物品',
          value: 'A'        },
        {
          label: '曾去过非洲，或在非洲转机、停留',
          value: 'B'        },
        {
          label: '曾接触过禽流感、埃博拉、SARS等确认或疑似感染者',
          value: 'C'        },
        {
          label: '其他补充说明',
          value: 'D'        },
        {
          label: '以上都无',
          value: 'E'        }
      ],
      options7: [
        {
          label: '是',
          value: 'Yes'        },
        {
          label: '否',
          value: 'No'        }
      ],
      q7currentTags: '',
      q7popupVisible: false,
      q7positions: [{
        values: [
          {
            label: '腋下',
            value: 'A'          },
          {
            label: '额头',
            value: 'B'          },
          {
            label: '耳朵(鼓膜)',
            value: 'C'          },
          {
            label: '口腔',
            value: 'D'          },
          {
            label: '肛门',
            value: 'E'          }
        ]
      }
      ],
      options8: [
        { label: '咳嗽', value: 'A' },
        { label: '鼻塞', value: 'B' },
        { label: '咽喉肿痛', value: 'C' },
        { label: '呼吸急促', value: 'D' },
        { label: '喷嚏', value: 'E' },
        { label: '胸闷', value: 'F' },
        { label: '呼吸困难', value: 'G' },
        { label: '咯血', value: 'H' },
        { label: '咳痰', value: 'I' },
        { label: '流涕', value: 'J' },
        { label: '其他', value: 'K' },
        { label: '以上都无', value: 'L' }
      ],
      q8currentTags1: '',
      q8popupVisible1: false,
      q8positions1: [{
        values: [
          { label: '普通白色痰', value: 'A' },
          { label: '痰中有脓液', value: 'B' },
          { label: '痰中有血', value: 'C' },
        ]
      }],
      q8currentTags2: '',
      q8popupVisible2: false,
      q8positions2: [{
        values: [
          { label: '普通清水样鼻涕', value: 'A' },
          { label: '鼻涕有脓液', value: 'B' },
          { label: '鼻涕中有血', value: 'C' },
        ]
      }],
      options9: [
        { label: '全身乏力', value: 0 },
        { label: '肌肉酸痛', value: 1 },
        { label: '腹泻', value: 2 },
        { label: '恶心', value: 3 },
        { label: '呕吐', value: 4 },
        { label: '头痛', value: 5 },
        { label: '结膜充血', value: 6 },
        { label: '关节疼痛', value: 7 },
        { label: '寒颤', value: 8 },
        { label: '眼眶眼球后等眼部疼痛', value: 9 },
        { label: '出血,包括鼻腔、口腔等部位', value: 10 },
        { label: '皮疹', value: 11 },
        { label: '口鼻出血', value: 12 },
        { label: '眼部疼痛', value: 13 },
        { label: '心悸', value: 14 },
        { label: '食欲不振', value: 15 },
        { label: '尿频尿急尿痛', value: 16 },
        { label: '尿道烧灼感', value: 17 },
        { label: '其他', value: 'O' },
        { label: '以上都无', value: 'W' },
      ],
      options10: [
        { label: '对某些药物过敏', value: 0 },
        { label: '对某些食物过敏', value: 1 },
        { label: '对其他东西过敏', value: 2 },
        { label: '以上都无', value: 'W' }
      ],
      options11: [
        { label: '高血压', value: 0 },
        { label: '糖尿病', value: 1 },
        { label: '冠心病', value: 2 },
        { label: '慢性咽炎', value: 3 },
        { label: '慢性支气管炎', value: 4 },
        { label: '哮喘', value: 5 },
        { label: '艾滋病', value: 6 },
        { label: '慢性阻塞性肺病', value: 7 },
        { label: '慢性肾病', value: 8 },
        { label: '癌症', value: 9 },
        { label: '脑血管病', value: 10 },
        { label: '其他', value: 'O' },
        { label: '以上都无', value: 'W' }
      ]
    }
  },
  methods: {
    dataScroll: function () {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
    },
    jump (index) {
      let jump = document.getElementsByClassName('section');
      // this.activeStep = index
      // 获取需要滚动的距离
      let total = jump[index].offsetTop - 80;
      console.log(total, 'jump')
      // Chrome
      document.body.scrollTop = total;
      // Firefox
      document.documentElement.scrollTop = total;
      // Safari
      window.pageYOffset = total;
      // $('html, body').animate({
      // 'scrollTop': total
      // }, 400);
    },
    loadSroll: function () {
      var self = this;
      var $navs = $(".nav1");
      var sections = document.getElementsByClassName('section');
      for (var i = sections.length - 1; i >= 0; i--) {
        if (self.scroll >= sections[i].offsetTop - 100) {
          console.log('执行一次')
          $navs.eq(i).addClass("current").siblings().removeClass("current")
          break;
        }


      }
    },
    onScroll () {

      let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop

      // 586、1063分别为第二个和第三个锚点对应的距离
      var sections = document.getElementsByClassName('section');

      if (scrolled <= sections[0].offsetTop + 80) {
        this.activeStep = 0

      }
      else if (scrolled > sections[0].offsetTop + 80) {
        this.activeStep = 1
      }
      else {
        this.activeStep = 2
      }

    },
    q7submit () {
      this.q7popupVisible = false
      this.q7currentTags = this.$refs.Q7picker.getValues()[0]
    },
    q8submit1 () {
      this.q8popupVisible = false
      this.q8currentTags1 = this.$refs.Q8picker1.getValues()[0]
    },
    q8submit2 () {
      this.q8popupVisible2 = false
      this.q8currentTags2 = this.$refs.Q8picker2.getValues()[0]
    }

  },
  watch: {
    scroll: function () {
      this.loadSroll()
    },
    form: function () {
      console.log(this.form.question1)
    }
  },
  mounted () {
    //window.addEventListener('scroll', this.dataScroll);
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
  }
}
</script>


<style>
* {
  padding: 0;
  margin: 0;
}
.wrapper {
  background: #f5f5f9;
}
.section {
  width: 100%;
  text-align: left;
}
.card {
  margin: 10px;
  padding: 10px;
  border: 1px solid white;
  background: white;
  border-radius: 5px;
  text-align: left;
}
.sectionLine {
  font-size: 0.87rem;
  color: rgb(0, 153, 255);
  border-bottom-color: rgb(0, 153, 255);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
.nav1 {
  display: inline-block;
  width: 33%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: #eee;
  /* margin: 10px 0; */
}
/* input[type="checkbox"] {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 21px;
  height: 21px;
} */
.section:first-child {
  margin-top: 80px;
  padding-top: 10px;
}
.text1 {
  padding: 5px;
}
.text1:before {
  content: "*";
  color: red;
  margin-right: 4px;
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
input[type="checkbox"]:checked:after {
  content: "✓";
  font-size: 14px;
  font-weight: 600;
  background-color: #36aeff;
}
input[type="radio"] {
  margin-right: 10px;
  line-height: 12px;
  cursor: pointer;
  font-size: 12px;
  width: 12px;
  height: 12px;
  position: relative;
}
input[type="radio"]:after {
  position: absolute;
  width: 12px;
  height: 12px;
  top: 0;
  content: " ";
  color: #fff;
  display: inline-block;
  visibility: visible;
  padding: 0px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #36aeff;
}
input[type="radio"]:checked:after {
  content: "";
  font-size: 12px;

  font-weight: 600;
  background-color: #36aeff;
}
.picker-toolbar-title {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
}
.usi-btn-cancel,
.usi-btn-sure {
  color: #ff6600;
}
.qblock {
  display: inline;
  margin-right: 10px;
}
.text2 {
  padding: 5px;
}
.section_title {
  border-left: 0.2em solid rgb(242, 156, 57);
  /* padding-left: 0.2em; */
  line-height: 1;
  font-size: 0.96rem;
  margin-left: 20px;
}
</style>

