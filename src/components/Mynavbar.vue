<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#ffffff"
      active-text-color="#ffd04b"
    >
      <el-row>
        <router-link id="Home" to="/Home">
          <el-col :span="2">
            <el-menu-item index="0" align="center">
              <img style="width:50px;height:50px" src="../../static/image/logo.jpg">
            </el-menu-item>
          </el-col>
        </router-link>
        <router-link id="User" to="/User/:123">
          <el-col :span="2">
            <el-menu-item index="1" align="center">个人中心</el-menu-item>
          </el-col>
        </router-link>
        <el-col :span="2">
          <el-menu-item index="2" align="center">我的发帖</el-menu-item>
        </el-col>
        <el-col :span="2">
          <el-menu-item index="3" align="center">消息中心</el-menu-item>
        </el-col>
        <el-col :span="2">
          <el-menu-item index="4" align="center">我的收藏</el-menu-item>
        </el-col>
        <el-col :span="10">
          <div>&nbsp;</div>
        </el-col>
        <router-link id="Login" to="/Login">
          <el-col :span="2">
            <el-menu-item index="5" align="center">登录</el-menu-item>
          </el-col>
        </router-link>
        <router-link id="Reg" to="/Reg">
          <el-col :span="2">
            <el-menu-item index="6" align="center">注册</el-menu-item>
          </el-col>
        </router-link>
      </el-row>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "0",
      activeIndex2: "0"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
