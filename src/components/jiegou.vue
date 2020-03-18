<template>
  <!-- <div class="page"
       style="height:100%">
    <div class="page__bd"
         style="height: 100%;">
      <div class="weui-tab">
        <div class="weui-tab__panel">
          <header>
            <div class="user">
              <img style="height:40px;vertical-align: middle;"
                   src="../assets/images/用户.png">
            </div>
            <div class="userinfo">
              <div class="username">测试用户1 </div>
            </div>
            <div class="right_icon">
              <img style="height:30px;vertical-align: middle;"
                   src="../assets/images/设置.png">
            </div>
          </header>
          <section>

          </section>
        </div>
        <div class="weui-tabbar"
             style="position: fixed;">
          <div class="weui-tabbar__item weui-bar__item_on">
            <div style="display: inline-block; position: relative;">
              <img src="../assets/logo.png"
                   alt=""
                   class="weui-tabbar__icon">
            </div>
            <p class="weui-tabbar__label">新冠自查</p>
          </div>
          <div class="weui-tabbar__item">
            <img src="../assets/logo.png"
                 alt=""
                 class="weui-tabbar__icon">
            <p class="weui-tabbar__label">预约面诊</p>
          </div>

        </div>
      </div>
    </div>
  </div> -->
  <div class="wrapper">
    <div class="header">
      <div class="user">
        <img style="height:40px;vertical-align: middle;"
             src="../assets/images/用户.png">
      </div>
      <div class="userinfo">
        <div class="username">测试用户1 </div>
      </div>
      <div class="right_icon">
        <img style="height:30px;vertical-align: middle;"
             src="../assets/images/设置.png">
      </div>
    </div>
    <div class="section">section</div>
    <div class="footer">
      <div class="weui-tabbar">
        <div class="weui-tabbar__item weui-bar__item_on">
          <div style="display: inline-block; position: relative;">
            <img src="../assets/images/wenduji.png"
                 alt=""
                 class="weui-tabbar__icon">
          </div>
          <p class="weui-tabbar__label">新冠自查</p>
        </div>
        <div class="weui-tabbar__item">
          <img src="../assets/images/yisheng.png"
               alt=""
               class="weui-tabbar__icon">
          <p class="weui-tabbar__label">预约面诊</p>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>
html,
body {
  height: 100%;
}
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.header {
  flex: 0;
  color: black;
  height: 80px;
  background: #f7f7f7;
}
.section {
  flex: 1;
  display: -webkit-box;
  width: 100%;
  height: 2rem;
  background: #fff;
}
.footer {
  flex: 0;
  background: #f7f7f7;
}
/* header {
  color: black;
  height: 80px;
  background: white;
} */
.user {
  vertical-align: middle;
  height: 100%;
  width: 20%;
  float: left;
  line-height: 80px;
}
.userinfo {
  height: 80px;
  float: left;
  width: 50%;
}
.username {
  display: block;
  float: left;
  margin-block-start: 25px;
  margin-block-end: 20px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.right_icon {
  font-size: 8px;
  float: left;
  width: 26%;
  line-height: 80px;
  text-align: right;
  padding-right: 4%;
}
/* section {
  display: -webkit-box;
  width: 100%;
  height: 2rem;
  background: #fff;
} */
a {
  color: #777;
  text-decoration: none;
  outline: 0;
}
</style>