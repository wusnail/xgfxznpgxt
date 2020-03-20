<template>
  <div>
    <!--患者选择医生列表页 -->
    <mt-header title="医生列表">
      <router-link to=""
                   slot="left">
        <mt-button icon="back"
                   @click.native="$router.back(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <div>患者选择医生列表页</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>