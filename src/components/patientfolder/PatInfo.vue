<template>
  <!-- 患者填写自查信息页 -->
  <div>
    <mt-header title="填写自查信息">
      <router-link to="" slot="left">
        <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <div>
      <mt-navbar v-model="selectedformtype" style="postion:sticky">
        <mt-tab-item id="1" href="#a">基本信息</mt-tab-item>
        <mt-tab-item id="2" href="#b">健康问卷</mt-tab-item>
        <mt-tab-item id="3" href="#c">检验检查</mt-tab-item>
      </mt-navbar>
      <div id="a">哈<br>哈<br>哈<br>哈<br>哈<br>哈<br>哈<br>哈<br>哈哈哈</div>

      <div id="b">则<br>饿<br>饿<br>饿则<br>饿<br>饿<br>饿</div>
      <div id="c">钱<br>钱<br>钱<br>钱<br>钱钱钱<br>钱<br>钱<br>钱<br>钱钱</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedformtype: 1

    }
  }

}
</script>

<style>
</style>