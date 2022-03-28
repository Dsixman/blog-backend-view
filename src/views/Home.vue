<template>
  <el-container class="wrapper">
    <el-header></el-header>
    <el-main >
      <div class="blog-title" >博客后台首页</div>
      <el-row type="flex" justify="center" class="main-content">
        <el-col>
          <el-row class="main-item" @click.native="routerTo('/editblog')">
            <el-col :span="16" class="item-top" >编辑博客</el-col>
            <el-col :span="8" class="item-top-icon"><i class="el-icon-edit-outline"></i></el-col>
            <el-col :span="24">
              <div class="item-bottom"><span>let’s go</span></div>
            </el-col>
          </el-row>
        </el-col>
                <el-col>
          <el-row class="main-item" @click.native="routerTo('/manageblog')">
            <el-col :span="16" class="item-top">管理博客</el-col>
            <el-col :span="8" class="item-top-icon"><i class="el-icon-s-management"></i></el-col>
            <el-col :span="24">
              <div class="item-bottom"><span>let’s go</span></div>
            </el-col>
          </el-row>
        </el-col>
                <el-col>
          <el-row class="main-item" @click.native="routerTo('/feedback')">
            <el-col :span="16" class="item-top">查看评论</el-col>
            <el-col :span="8" class="item-top-icon"><i class="el-icon-chat-dot-round"></i></el-col>
            <el-col :span="24">
              <div class="item-bottom"><span>let’s go</span></div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {},
  methods: {
    routerTo(router){
      this.$router.push(router)
    }
  },
  components: {
    // HelloWorld
  },
};
</script>
<style scoped lang="scss">
.wrapper{
  
  .blog-title{
    height:30px;
    margin-bottom:80px;
    width:100%;
    text-align: left;
    border-bottom:2px solid #b9b9b9
  }
}
.main-content {
  width: 100%;

  .main-item {
    cursor: pointer;
    height:150px;
    border-radius: 10px;
    width:300px;
    background-color: #20B2AA;
    color:#fff;
    .item-top{
      height:130px;
      line-height:130px;
      font-size:2rem;
    }
    .item-top-icon{
            height:130px;
      line-height:130px;
      font-size:5rem;
     color:#BEBEBE
    }
    .item-bottom{
      background-color:rgba(0,0,0,0.4);
      height:20px;
      border-radius:0 0 10px 10px;
      
    }
  }
}
</style>
