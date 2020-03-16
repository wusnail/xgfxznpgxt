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
                       maxlength="6" />
              </div>
              <div class="weui-cell__ft">
                <button class="weui-btn weui-btn_default weui-vcode-btn">获取验证码</button>
              </div>
            </div>
          </div>
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
             @click="showDialog=false">确定</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Forgetpwd',
  data() {
    return {
      showDialog: false,
      tips: "",
      ForgetpwdForm: {
        phoneNumber: '',
        passward: '',
        confirmpwd: '',
        vcode: ''
      },
    }
  },
  methods: {
    Forgetpwd() {
      this.tips = ''
      var phoneReg = /^1[34578]\d{9}$/.test(this.ForgetpwdForm.phoneNumber)
      var pwdReg = ((this.ForgetpwdForm.passward == this.ForgetpwdForm.confirmpwd) && this.ForgetpwdForm.passward != '') ? true : false
      //  var vcodeRge=
      if (!phoneReg) {
        this.showDialog = true
        this.tips = "请确认输入手机号是否正确！"
      } else if (!pwdReg) {
        this.showDialog = true
        this.tips = "请确认输入密码是否正确！"
      }
      // else if(!vcodeReg){
      //   this.showDialog=true
      //   this.tips="验证码输入有误！"
      // }
      else {

      }
    }
  }

}
</script>

<style>
</style>