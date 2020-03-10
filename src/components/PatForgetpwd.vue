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
      <span style="color:#07C160;font-size:20px;">忘&nbsp;记&nbsp;密&nbsp;码</span>
    </div>
    <div class="weui-form">
      <div class="weui-form__control-area">
        <div class="weui-cells__group weui-cells__group_form">
          <div class="weui-cells weui-cells_form">
            <div class="weui-cell weui-cell_active">
              <div class="weui-cell__hd"><label class="weui-label">手机号</label></div>
              <div class="weui-cell__bd">
                <input class="weui-input"
                       type="number"
                       pattern="[0-9]*"
                       v-model="ForgetpwdForm.phoneNumber"
                       placeholder="请输入手机号" />
              </div>
            </div>
            <div class="weui-cell weui-cell_active">
              <div class="weui-cell__hd"><label class="weui-label">新密码</label></div>
              <div class="weui-cell__bd">
                <input class="weui-input"
                       v-model="ForgetpwdForm.passward"
                       placeholder="请输入密码" />
              </div>
            </div>
            <div class="weui-cell weui-cell_active">
              <div class="weui-cell__hd"><label class="weui-label">确认密码</label></div>
              <div class="weui-cell__bd">
                <input class="weui-input"
                       v-model="ForgetpwdForm.confirmpwd"
                       placeholder="请再次输入密码" />
              </div>
            </div>
            <div class="weui-cell weui-cell_active weui-cell_vcode">
              <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
              <div class="weui-cell__bd">
                <input autofocus
                       class="weui-input"
                       type="text"
                       pattern="[0-9]*"
                       id="js_input"
                       placeholder="输入验证码"
                       v-model="ForgetpwdForm.vcode"
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
          <a href="#/patient">
            去登录
          </a>
        </div>
      </div>
      <div class="weui-btn-area">
        <a class="weui-btn weui-btn_primary "
           @click="Forgetpwd()">确定</a>
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
  name: 'PatForgetpwd',
  data() {
    return {
      ifSuccess: false,
      showDialog: false,
      tips: "",
      ForgetpwdForm: {
        phoneNumber: '',
        passward: '',
        confirmpwd: '',
        vcode: ''
      },
      codeText: '获取验证码',
      codeTextisdisabled: false,
      VerCode: '',//验证码
      Verphone: '',//获取验证码的手机号
    }
  },
  methods: {

    //患者端重置密码，还要检查验证码
    Forgetpwd() {
      this.ifSuccess = false
      this.tips = ''
      var phoneReg = /^1[34578]\d{9}$/.test(this.ForgetpwdForm.phoneNumber)
      var pwdReg = ((this.ForgetpwdForm.passward == this.ForgetpwdForm.confirmpwd) && this.ForgetpwdForm.passward != '') ? true : false
      var vcodeReg = ((this.ForgetpwdForm.vcode == this.VerCode) && this.ForgetpwdForm.vcode != '') ? true : false
      //  var vcodeRge=
      this.VerCode = ''//清除储存的验证码
      var VerphoneReg = (this.ForgetpwdForm.phoneNumber == this.Verphone) ? true : false
      if (!phoneReg) {
        this.showDialog = true
        this.tips = "请确认输入手机号是否正确！"
      } else if (!pwdReg) {
        this.showDialog = true
        this.tips = "请确认输入密码是否正确！"
      }
      else if (!vcodeReg) {
        this.showDialog = true
        this.tips = "请确认输入验证码是否正确！"
      }
      else if (!VerphoneReg) {
        this.showDialog = true;
        this.tips = "请确认输入手机号与获取验证码手机号是否相符并重新获取验证码！";
      }
      else {
        this.checkpat()
      }



      //向后端请求数据
    },
    checkpat() {
      axios.post("/getPatientInfo", {
        "phone": this.ForgetpwdForm.phoneNumber
      })
        .then(response => {
          if (response.data.results.length > 0) {
            axios.post("/changePatPwd", {
              "phone": this.ForgetpwdForm.phoneNumber,
              "pwd": this.ForgetpwdForm.passward
            })
              .then(response => {
                if (response.data.results == "修改成功") {
                  this.tips = "修改成功,确认后跳转到登录页面重新登录";
                  this.showDialog = true
                  this.ifSuccess = true
                } else {
                  this.tips = "修改失败";
                  this.showDialog = true
                }

              }

              )
              .catch(function (error) {
                console.log("error", error);
              })

          } else {
            this.tips = "用户不存在";
            this.showDialog = true
          }
        })
        .catch(function (error) {
          console.log("error", error);
        });

    },
    //患者端获取验证码，只检查验证码是否正确
    getCode: function (e) {
      console.log("获取验证码");
      this.tips = ''
      var phoneReg = /^1[34578]\d{9}$/.test(this.ForgetpwdForm.phoneNumber)
      if (!phoneReg) {
        this.showDialog = true
        this.tips = "请确认输入手机号是否正确！"
      }
      else {
        this.setTime();
      }

    },
    //设置60s倒计时时钟
    setTime: function () {
      let time = 60;
      let i = 0;
      let that = this;
      that.codeTextisdisabled = true
      that.getVerificationCode();
      //1.在60秒之内，button上倒计时60秒，并显示
      //2.向controller请求验证码，并发送到指定的手机号上面
      let set = setInterval(function () {
        that.codeText = (--time) + "秒后重发";
        i++;
      }, 1000);
      //60秒之后需要做的事情
      setTimeout(function () {
        //恢复获取验证码按钮可点击
        that.codeTextisdisabled = false
        that.codeText = "获取验证码";
        clearInterval(set);//清除计时器
      }, time * 1000); //60000  
    },
    getVerificationCode: function () {
      //向服务器获取验证码
      this.Verphone = this.ForgetpwdForm.phoneNumber
      axios.post("/getVerificationCode", {
        "phone": this.ForgetpwdForm.phoneNumber
      })
        .then(response => {
          if (response.data.results) {
            this.tips = response.data.results;
            this.showDialog = true
          } else {
            this.VerCode = response.data.code;//暂时存储后端传回的验证码
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
    },
  }

}
</script>

<style>
</style>