<template>
  <div class="page">
    <div class="page__hd">
      <h1 align="center" style="color:#07C160;font-size:20px;margin-bottom: 30px" class="page__title">在线培训</h1>
      <!-- <p class="page__desc">资料列表</p> -->
    </div>
    <div class="page__bd page__bd_spacing">
      <div class="weui-cells"
           v-for="(item,index) in PdfList">
        <a class="weui-cell  weui-cell_access" :href="item.path">
          <div class="weui-cell__bd">
            <p>{{item.FileName}}</p>
          </div>
          <div class="weui-cell__ft">
          </div>
        </a>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'Train',
  data() {
    return {
      PdfList: [],
    }
  },
  created() {
    this.getPdfList()
  },
  methods: {
    getPdfList() {
      axios.get('/getPdfList', {
        params: {
          //token:
        }
      }).then((response) => {
        if (response.status == 200) {
          for (var i = 0; i < response.data.results.length; i++) {
            this.PdfList.push({ 'SortNo': response.data.results[i].SortNo, 'FileName': response.data.results[i].FileName, path: '../static/pdfjs/web/viewer.html?file='+response.data.results[i].FileName+'.pdf' })
          }
        }
      }).catch(function (error) {
        console.log("error", error);
      });
    },
    gotofile:function(index){
      console.log(this.PdfList[index].FileName)
      this.$router.push({});
    }
  }
}
</script>

<style>
</style>