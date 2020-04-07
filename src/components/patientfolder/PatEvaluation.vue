<template>
  <!-- 患者具体评估记录页 -->
  <div>
    <mt-header title="评估记录">
      <router-link to="" slot="left">
        <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <assessmentReport :reportId="reportId"></assessmentReport>
  </div>
</template>

<script>
import assessmentReport from '../patientcombination/assessmentReport'
export default {
  components: {
    assessmentReport
  },
  data () {
    return {
      reportId: this.$route.query.evaluId,
    }
  },
  methods: {
  },
  mounted () {
    console.log(this.reportId, 'patevaluation')
  }
}
</script>

<style>
</style>