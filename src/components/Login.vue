<template>
  <div class="hello">
    <h1 align="center">登&nbsp;&nbsp;录</h1>
    <div style="width:25%;margin:0 auto">
      <el-card class="box-card">
        <el-form label-position="top" label-width="80px" :model="formLabelAlign">
          <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <br>
          <el-form-item align="center">
            <el-button type="primary" @click="onSubmit" icon="el-icon-circle-check-outline">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
  }
};
</script>
