<template>
  <div style="margin-top:50px">
    <el-col :span="2">&nbsp;</el-col>
    <el-col :span="8">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <img style="width:40px;height:40px;margin-left:30px" src="../../static/image/user.jpg">
          <el-button
            style="float: right; padding: 15px 0;margin-right:30px"
            type="text"
            icon="el-icon-edit"
          ></el-button>
        </div>
        <div v-for="value in user" :key="value" class="text item">{{value}}</div>
      </el-card>
    </el-col>
  </div>
</template>


<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
  margin-left: 30px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
<script>
export default {
  computed: {
    dynamicSegment() {
      return this.$route.params.id;
    }
  },
  data() {
    return {
      user: {
        username: "王小虎",
        sex: "男",
        age: "18",
        sign: "请啊手机电话去围殴企鹅"
      }
    };
  },
  watch: {
    $route(to, from) {
      // to表示的是你要去的那个组件，from 表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，它们也有一个param 属性
      console.log(to);
      console.log(from);
      this.dynamicSegment = to.params.id;
    }
  }
};
</script>
