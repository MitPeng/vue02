<template>
  <div align="center">
    <el-button @click="getCustomers">获取数据</el-button>
    <el-table :data="tableData" stripe style="width: 60%">
      <!-- <el-table-column
        prop="source"
        label="来源"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="ptime"
        label="时间"
        width="180">
      </el-table-column>-->
      <el-table-column prop="id" label="id" width="180"></el-table-column>
      <el-table-column prop="desc" label="内容"></el-table-column>
      <el-table-column prop="name" label="名字" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [null],
      // apiUrl:'https://www.apiopen.top/journalismApi'
      apiUrl: "http://127.0.0.1:9999/api/mock/parse/test"
    };
  },
  methods: {
    getCustomers: function() {
      // var _this=this;
      // _this.$http.get(_this.apiUrl)
      // .then(function(response) {
      //   _this.tableData=response.data.data.auto;
      // });
      // this.$http.get(this.apiUrl)
      //   .then((response) => {
      //     this.tableData=response.data.data.auto
      //   })
      //   .catch(function(response) {
      //     console.log(response)
      //   })
      var _this = this;
      _this.$http.get(_this.apiUrl).then(function(response) {
        console.info(response);
        _this.tableData = response.data.data;
      });
    }
  }
};
</script>
