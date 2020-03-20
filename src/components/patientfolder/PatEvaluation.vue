<template>
  <!-- 患者具体评估记录页 -->
  <div>
    <mt-header title="评估记录">
      <router-link to=""
                   slot="left">
        <mt-button icon="back"
                   @click.native="$router.back(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <div>
      患者具体评估记录页
      <mt-button type="danger"
                 size="small"
                 @click.native="$router.push('/patient/risk')">查看风险详情
      </mt-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style>
</style>