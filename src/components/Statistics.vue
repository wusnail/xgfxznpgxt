<template>
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

</template>

<script>
export default {

}
</script>

<style>
header {
  color: white;
  height: 80px;
  background: blue;
}
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
</style>