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
      <span style="color:#07C160;font-size:20px;">医生登录</span>
    </div>
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">用户名</label>
        </div>
        <div class="weui-cell__bd weui-cell_primary">
          <input v-model="LoginForm.username"
                 class="weui-input"
                 placeholder="请输入" />
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">密码</label>
        </div>
        <div class="weui-cell__bd weui-cell_primary">
          <input v-model="LoginForm.password"
                 class="weui-input"
                 show-password
                 type="password"
                 placeholder="请输入" />
        </div>
      </div>
    </div>
    <!-- <label for="weuiAgree"
           class="weui-agree">
      <input id="weuiAgree"
             type="checkbox"
             v-model="termAgree"
             class="weui-agree__checkbox" />
      <span class="weui-agree__text">
        阅读并同意
        <a href>《相关条款》</a>
      </span>
    </label> -->
    <div class="weui-flex "
         style="margin:5px">
      <div class="weui-flex__item">
        <a href="#/DrForgetpwd">
          忘记密码
        </a>
      </div>
      <div class="weui-flex__item">
        <a href="#/DrRegister">
          去注册
        </a>
      </div>
    </div>
    <div class="weui-btn-area">
      <a class="weui-btn weui-btn_primary"
         @click="handelLogin()">确&nbsp;&nbsp;&nbsp;定</a>
    </div>
    <div class="js_dialog"
         id="iosDialog2"
         v-show="loginresult"
         style="display: none;">
      <div class="weui-mask"></div>
      <div class="weui-dialog">
        <div class="weui-dialog__bd">{{tips}}</div>
        <div class="weui-dialog__ft">
          <a href="javascript:;"
             class="weui-dialog__btn weui-dialog__btn_primary"
             @click="loginresult=false">确定</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      tips: "",
      // termAgree: false,
      loginresult: false,
      LoginForm: {
        username: "",
        password: ""
      },
    }
  },
  methods: {
    handelLogin() {
      this.loginresult = false;
      var phoneReg = /^1[34578]\d{9}$/.test(this.LoginForm.username)

      if (!phoneReg) {
        this.loginresult = true;
        this.tips = "请输入正确的手机号";
      }
      // else if (!this.termAgree) {
      //   this.loginresult = true;
      //   this.tips = "请阅读并同意《相关条款》";
      // }
      // else if (this.LoginForm.password.length < 6) {
      //   this.loginresult = true;
      //   this.tips = "密码不能小于6位";
      // } 
      else {
        axios.post('/checkDoctorPassword', {
          userId: this.LoginForm.username,
          pwd: this.LoginForm.password
        }).then((response) => {
          if (response.data.results == "密码正确") {
            this.$router.push({ name: "Split" });
          }
          else {
            this.loginresult = true;
            this.tips = response.data.results
          }
        }).catch(function (error) {
          console.log("error", error);
        });
      }
    }
  }

}
</script>

<style>
</style>