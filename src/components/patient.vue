<template>
  <div>
    <div class="weui-flex"
         style="margin:30px;">
      <div class="weui-flex__item">
        <img style="height:60px;"
             src="../assets/images/logo1_1.png" />
      </div>
      <div class="weui-flex__item">
        <img style="height:60px;"
             src="../assets/images/logo2.jpg" />
      </div>
    </div>
    <div class="weui_cell_bd weui_cell_primary">
      <span style="color:#07C160;font-size:20px;">新冠风险智能评估系统</span><br>
      <span style="color:#07C160;font-size:20px;">患者登录</span>
    </div><br>
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">手机号</label>
        </div>
        <div class="weui-cell__bd weui-cell_primary">
          <input v-model="loginForm.username"
                 class="weui-input"
                 type="number"
                 placeholder="请输入手机号" />
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">密码</label>
        </div>
        <div class="weui-cell__bd weui-cell_primary">
          <input v-model="loginForm.password"
                 class="weui-input"
                 show-password
                 clearable
                 type="password"
                 placeholder="请输入密码" />
        </div>
      </div>
    </div>

    <div class="weui-flex "
         style="margin:5px">
      <div class="weui-flex__item">
        <a href="#/PatForgetpwd">
          忘记密码
        </a>
      </div>
      <div class="weui-flex__item">
        <a href="#/PatRegister">
          去注册
        </a>
      </div>
    </div>
    <!-- <label for="weuiAgree" class="weui-agree">
      <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox" />
      <span class="weui-agree__text">
        阅读并同意《相关条款》
      </span>
    </label> -->
    <div class="weui-btn-area">
      <a class="weui-btn weui-btn_primary"
         @click="handelLogin()">确&nbsp;&nbsp;&nbsp;定</a>
    </div>
    <div class="js_dialog"
         id="iosDialog2"
         v-show="showtips"
         style="display: none;">
      <div class="weui-mask"></div>
      <div class="weui-dialog">
        <div class="weui-dialog__bd">{{tips}}</div>
        <div class="weui-dialog__ft">
          <a href="javascript:;"
             class="weui-dialog__btn weui-dialog__btn_primary"
             @click="showtips=false">确定</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import global from './global.vue'
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },

      tips: "",
      showtips: false,
      token: '',
      loading:''
    };
  },
  methods: {
    handelLogin() {
      this.showtips = false;
      var phoneReg = /^1[3456789]\d{9}$/.test(this.loginForm.username);

      if (!phoneReg) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.tips = "请输入正确的手机号";
        this.showtips = true;
      }

      else {
        var that = this
        that.loading =weui.loading('loading');
        setTimeout(function () {
          that.loading.hide(function() {
            weui.topTips('请填写正确的字段', 2000);
          });
        }, 5000);
        axios.post("/checkPatientPassword", {
          userId: that.loginForm.username,
          pwd: that.loginForm.password
        })
          .then(response => {
            that.loading.hide()
            // 登录成功
            if (response.data.results == "密码正确") {
              // this.loginresult = true;
              that.tips = "登录成功";
              that.token = response.data.token;
              // this.$router.push("/MainPage");
              // console.log(global.patientURL)
              window.location.href = global.patientSystemURL + '?token=' + that.token;
            } else {
              // this.loginresult = true;
              document.body.scrollTop = document.documentElement.scrollTop = 0;
              that.showtips = true;
              that.tips = response.data.results;

            }
          })
          .catch(function (error) {
            console.log("error", error);
          });
      }
    }
  }
};
</script>
<style>
.tips {
  font-size: 14px;
  color: red;
  margin-bottom: 5px;
}
.weui-label {
  text-align: left;
}
.weui-input {
  text-align: left;
}
</style>