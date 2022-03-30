<template>
  <div id="app">
    <el-container>
      <el-aside class="left">
        <el-row class="left-title">zzh blog</el-row>
        <el-row class="left-ava"></el-row>
        <el-row class="left-categroy">
          <div class="category-title">管理模块</div>
          <div class="category" >
            <el-row  v-for="(item,index) in left_nav" :key="index"  :class="selectIndex===index?'active':''">
              <el-col :span="6" offset=2><i :class="item.iclass"></i></el-col>
              <el-col :spam="16"> <el-button @click="cateItem(item.router,index)" :class="selectIndex===index?'active':''">{{item.title}}</el-button></el-col>
            </el-row>
          </div>
        </el-row>
      </el-aside>
      <el-main><div class="blog-right"><router-view></router-view> </div> </el-main>
    </el-container>

  </div>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  data(){
    return {
      left_nav:[
        {iclass:'el-icon-edit-outline',title:'发布博客',router:'/editblog'},
        {iclass:'el-icon-s-management',title:'管理博客',router:'/manageblog'},
        {iclass:'el-icon-collection-tag',title:'分类管理',router:'/managecategory'},
        {iclass:'el-icon-s-flag',title:'标签管理',router:'/managetag'},
        {iclass:'el-icon-chat-dot-round',title:'评论管理',router:'/feedback'} 
        ],
        selectIndex:null
    //  classobj:['el-icon-s-management','el-icon-edit-outline','el-icon-collection-tag','el-icon-s-flag','el-icon-chat-dot-round']
    }
  },
  computed:{

  },
  methods:{
    cateItem(router,index){
      this.selectIndex=index
      this.$router.push(router)
    }
  },
  components: {
    // HelloWorld
  },
};
</script>

<style lang="scss">
body {
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f5f5f5;
  .el-main{
    padding:10px;
    .blog-right{
      border:1px solid #DCDFE6;
    }

  }
  .left {
  background: #303643;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .left-title {
    height: 50px;
    line-height: 50px;
    width: 100%;
  }
  .left-ava {
    height: 200px;
    background: url("./assets/ava.jpg") no-repeat center center;
    width: 200px;
    border-radius: 50%;
  }

  .left-categroy {
    width: 100%;
    margin-top: 20px;
        .el-button{
      border:0 !important;
      background:none !important;
      color:#fff;
      width:100%;
      text-align:left;
    }
          .active{
        background:#fff;
        color:#303643!important
      }
    .category{

    }
    .category-title {
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      line-height: 30px;
      width: 90%;
      height: 30px;
      margin: 0 auto;
    }
    .category > div {
      margin: 0 auto;
      text-align: left;
      display: flex;
      width: 90%;
      height: 40px;
      line-height: 40px;
    }
  }
}
}
</style>
