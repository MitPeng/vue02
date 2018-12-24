<template>
  <div>
    <div id="breadcrumb">
      <el-card class="box-card" style="height:50px;margin:10px 0px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>文章列表</el-breadcrumb-item>
          <el-breadcrumb-item>文章详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-card>
    </div>
    <div id="content">
      <el-row :gutter="10">
        <el-col :span="4">
          <el-card class="box-card">
            <div align="center">
              <img style="width:100px;height:100px;" src="../../static/image/user.jpg">
            </div>
            <div style="margin-top:20px" align="center">
              <span>Lv.1</span>
              <span>王小虎</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="16">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <h3>DOTA2 2019年国际邀请赛将在中国上海举办</h3>
              <el-button
                style="float: right; margin-top:-50px"
                type="text"
                icon="el-icon-star-off"
              >收藏</el-button>
            </div>
            <div>
              <p>当英雄驻足眺望远方，当神盾再度流转辉光。</p>
              <p>这是我们无限荣耀的过往，也是无畏前行的向往。</p>
              <p>2019年DOTA2国际邀请赛，中国上海。</p>
              <p>征战号角，已响彻全场！</p>
              <img style="width:550px;height:400px" src="../../static/image/ti9.jpg">
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card class="box-card">
            <div slot="header" class="clearfix" align="center">
              <h3>猜你喜欢</h3>
            </div>
            <div>
              <p>B神组建新DK</p>
              <p>国内俱乐部重新洗牌</p>
              <p>LGD痛失TI8冠军</p>
              <p>OG成功问鼎TI8</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    dynamicSegment() {
      return this.$route.params.title;
    }
  },
  watch: {
    $route(to, from) {
      // to表示的是你要去的那个组件，from 表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，它们也有一个param 属性
      console.log(to);
      console.log(from);
      this.dynamicSegment = to.params.title;
    }
  }
};
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: left;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: left;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
