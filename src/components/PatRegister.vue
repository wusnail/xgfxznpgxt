<template>
  <div class="page">
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
      <span style="color:#07C160;font-size:20px;">患&nbsp;者&nbsp;注&nbsp;册</span>
    </div>
    <div class="weui-form">
      <div class="weui-form__control-area">
        <div class="weui-cells__group weui-cells__group_form">
          <div class="weui-cells weui-cells_form">
            <div class="weui-cell weui-cell_active">
              <div class="weui-cell__hd">
                <label class="weui-label">手机号</label>
              </div>
              <div class="weui-cell__bd">
                <input class="weui-input"
                       type="number"
                       pattern="[0-9]*"
                       v-model="RegisterForm.phoneNumber"
                       placeholder="请输入手机号" />
              </div>
            </div>
            <div class="weui-cell weui-cell_active">
              <div class="weui-cell__hd">
                <label class="weui-label">密码</label>
              </div>
              <div class="weui-cell__bd">
                <input class="weui-input"
                       v-model="RegisterForm.passward"
                       show-password
                       clearable
                       type="password"
                       placeholder="请输入密码" />
              </div>
            </div>
            <div class="weui-cell weui-cell_active">
              <div class="weui-cell__hd">
                <label class="weui-label">确认密码</label>
              </div>
              <div class="weui-cell__bd">
                <input class="weui-input"
                       v-model="RegisterForm.confirmpwd"
                       show-password
                       clearable
                       type="password"
                       placeholder="请再次输入密码" />
              </div>
            </div>
            <div class="weui-cell weui-cell_active weui-cell_vcode">
              <div class="weui-cell__hd">
                <label class="weui-label">验证码</label>
              </div>
              <div class="weui-cell__bd">
                <input class="weui-input"
                       type="number"
                       pattern="[0-9]*"
                       id="js_input"
                       placeholder="输入验证码"
                       v-model="RegisterForm.vcode"
                       maxlength="4" />
              </div>
              <div class="weui-cell__ft">
                <button class="weui-btn weui-btn_default weui-vcode-btn"
                        style="width:120px"
                        @click="getCode"
                        :disabled="codeTextisdisabled">{{codeText}}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-flex "
           style="margin:5px">
        <div class="weui-flex__item">
          <a href="#/patient"
             style="float:left;font-size:15px;padding:12px">
            去登录
          </a>
        </div>
      </div>
      <div class="weui-btn-area">
        <a class="weui-btn weui-btn_primary"
           @click="Register()">确定</a>
      </div>
    </div>
    <div class="js_dialog"
         id="iosDialog2"
         v-show="showDialog"
         style="display: none;">
      <div class="weui-mask"></div>
      <div class="weui-dialog">
        <div class="weui-dialog__bd">{{tips}}</div>
        <div class="weui-dialog__ft">
          <a href="javascript:;"
             class="weui-dialog__btn weui-dialog__btn_primary"
             @click="checkSuccess()">确定</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PatRegister",
  data() {
    return {
      showDialog: false,
      tips: "",
      RegisterForm: {
        phoneNumber: "",
        passward: "",
        confirmpwd: "",
        vcode: ""
      },
      codeText: "获取验证码",
      codeTextisdisabled: false,
      VerCode: "", //验证码
      ifSuccess: false,//确认是否注册成功
      Verphone: "",
      loading:''
    };
  },
  methods: {
    Register() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.tips = "";
      this.ifSuccess = false
      var phoneReg = /^1[3456789]\d{9}$/.test(this.RegisterForm.phoneNumber);
      var pwdReg = ((this.RegisterForm.passward == this.RegisterForm.confirmpwd && this.RegisterForm.passward != "")) ? true : false;
      var vcodeReg = ((this.RegisterForm.vcode == this.VerCode && this.RegisterForm.vcode != "")) ? true : false;
      //  var vcodeRge=
      this.VerCode = ''//清除储存的验证码
      var VerphoneReg = (this.RegisterForm.phoneNumber == this.Verphone) ? true : false
      if (!phoneReg) {
        this.showDialog = true;
        this.tips = "请确认输入手机号是否正确！";
      } else if (!pwdReg) {
        this.showDialog = true;
        this.tips = "请确认输入密码是否正确！";
      } else if (!vcodeReg) {
        this.showDialog = true;
        this.tips = "请确认输入验证码是否正确！";
      } else if (!VerphoneReg) {
        this.showDialog = true;
        this.tips = "请确认输入手机号与获取验证码手机号是否相符并重新获取验证码！";
      } else {
        this.checkpat();
      }
    },
    checkpat() {
      var that = this
        that.loading =weui.loading('loading');
        setTimeout(function () {
          that.loading.hide(function() {
            weui.topTips('网络异常请稍后再试', 2000);
          });
        }, 5000);
      axios
        .post("/getPatientInfo", {
          phone: that.RegisterForm.phoneNumber
        })
        .then(response => {
          if (response.data.results.length > 0) {
            that.loading.hide()
            that.tips = "用户已存在";
            that.showDialog = true;
          } else {
            axios
              .post("/newPatient", {
                phone: that.RegisterForm.phoneNumber,
                pwd: that.RegisterForm.passward
              })
              .then(response => {
                that.loading.hide()
                if (response.data.results == "新建成功") {
                  that.tips = "注册成功,确认后跳转到登录页面重新登录";
                  that.showDialog = true;
                  that.ifSuccess = true;
                } else {
                  that.tips = "注册失败";
                  that.showDialog = true;
                }
              })
              .catch(function (error) {
                console.log("error", error);
              });
          }
        })
        .catch(function (error) {
          console.log("error", error);
        });
    },

    //获取验证码只检查手机号就好了
    getCode: function (e) {
      console.log("获取验证码");
      this.tips = "";
      var phoneReg = /^1[3456789]\d{9}$/.test(this.RegisterForm.phoneNumber);

      if (!phoneReg) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.showDialog = true;
        this.tips = "请确认输入手机号是否正确！";
      } else {
        this.setTime();
      }
    },
    setTime: function () {
      let time = 60;
      let i = 0;
      let that = this;
      that.codeTextisdisabled = true;
      that.getVerificationCode();
      //1.在60秒之内，button上倒计时60秒，并显示
      //2.向controller请求验证码，并发送到指定的手机号上面
      let set = setInterval(function () {
        that.codeText = --time + "秒后重发";
        i++;
      }, 1000);
      //60秒之后需要做的事情
      setTimeout(function () {
        //恢复获取验证码按钮可点击
        that.codeTextisdisabled = false;
        that.codeText = "获取验证码";
        clearInterval(set); //清除计时器
      }, time * 1000); //60000
    },
    getVerificationCode: function () {
      this.Verphone = this.RegisterForm.phoneNumber
      axios
        .post("/getVerificationCode", {
          phone: this.RegisterForm.phoneNumber
        })
        .then(response => {
          if (response.data.results) {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            this.tips = response.data.results;
            this.showDialog = true;
          } else {
            this.VerCode = response.data.code; //暂时存储后端传回的验证码
          }
        })
        .catch(function (error) {
          console.log("error", error);
        });
    },
    checkSuccess() {
      this.showDialog = false
      if (this.ifSuccess) {
        this.$router.push({ name: "patient" });
      }
    }
  }
};
</script>

<style>
.weui-label {
  text-align: left;
}
.weui-input {
  text-align: left;
}
</style>