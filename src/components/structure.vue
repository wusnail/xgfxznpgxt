<template>
  <div class="wrapper">
    <app-header></app-header>
    <app-navbar></app-navbar>
    <div class="section">section</div>
    <app-footer></app-footer>

  </div>

</template>

<script>
import footer from './common/footer'
import header from './common/header'
import evaluationNavBar from './common/evaluationNavBar'
export default {
  components: {
    'app-footer': footer,
    'app-header': header,
    'app-navbar': evaluationNavBar
  }
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
/* .header {
  flex: 0;
  color: black;
  height: 80px;
  background: #f7f7f7;
} */
.section {
  flex: 1;
  display: -webkit-box;
  width: 100%;
  height: 2rem;
  background: #fff;
}
/* .footer {
  flex: 0;
  background: #f7f7f7;
} */
/* header {
  color: black;
  height: 80px;
  background: white;
} */
/* .user {
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
} */
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