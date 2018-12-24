<template>
  <div class="hello">
    <h1 align="center">{{ msg }}</h1>
    <div style="width:60%;margin:0 auto">
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select" clearable>
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="标题" value="1"></el-option>
            <el-option label="分类" value="2"></el-option>
            <el-option label="发帖用户" value="3"></el-option>
            <el-option label="发帖日期" value="4"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div style="margin-top:30px">
        <el-card class="box-card">
          <el-table :data="tableData" style="width: 100%" align="center">
            <el-table-column prop="category" label="分类" width="100">
              <template slot-scope="scope">
                <p>{{scope.row.category}}</p>
              </template>
            </el-table-column>
            <el-table-column prop="title" label="标题">
              <template slot-scope="scope">
                <router-link id="Detail" to="/Detail/123">
                  <p>{{scope.row.title}}</p>
                </router-link>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="日期" width="150">
              <template slot-scope="scope">
                <p>{{scope.row.date}}</p>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="用户名" width="150">
              <template slot-scope="scope">
                <router-link id="User" to="/User/123">
                  <p>{{scope.row.name}}</p>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </div>
      <div class="block" style="margin-top:20px">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000"
          background
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "欢迎来到主页",
      tableData: [
        {
          category: "口嗨",
          date: "2016-05-02",
          name: "王小虎",
          title: "全文啊是第一恶气请问哦"
        },
        {
          category: "口嗨",
          date: "2016-05-04",
          name: "王小虎",
          title: "啊速度一切额我全文庆功会"
        },
        {
          category: "口嗨",
          date: "2016-05-01",
          name: "王小虎",
          title: "为啊苏东坡青河绝恋"
        },
        {
          category: "口嗨",
          date: "2016-05-03",
          name: "王小虎",
          title: "皮肤科上帝热量前面轻微疼痛"
        }
      ],
      input: "",
      select: "标题"
    };
  }
};
</script>
<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
