<template>
    <el-container>
      <el-aside class="left" key="1" style="width:250px">
        <el-row class="left-title" >zzh blog</el-row>
        <el-row class="left-categroy">
          <div class="category">
            <el-row  v-for="(item,index) in left_nav" :key="index"  :class="selectIndex===index?'active':''">
              <el-col :span="6" style="text-align:center"><i :class="item.iclass"></i></el-col>
              <el-col :spam="18"> <el-button  @click="cateItem(item.router,index)" :class="selectIndex===index?'active':''">{{item.title}}</el-button></el-col>
            </el-row>
          </div>
        </el-row>
      </el-aside>
      <el-main key="2"><div class="blog-right"><router-view></router-view> </div> </el-main>
    </el-container>

</template>

<script>

export default {
components: {},
data() {
return {
  //isshow:'',
left_nav:[
        {iclass:'el-icon-edit-outline',title:'发布博客',router:'/editblog'},
        {iclass:'el-icon-s-management',title:'管理博客',router:'/manageblog'},
        {iclass:'el-icon-collection-tag',title:'分类管理',router:'/managecategory'},
        {iclass:'el-icon-collection-tag',title:'专题管理',router:'/managereport'},
        {iclass:'el-icon-s-flag',title:'评论管理',router:'/managetag'},
        ],
        selectIndex:null
};
},
computed: {
  // isShowLeft(){
  //   console.log(this.active)
  //    if(!this.active){
  //      return 'show-left'
  //    }else{
  //      return ''
  //    }
  // }
},
watch: {},
props:["active"],
methods: {
    cateItem(router,index){
      this.selectIndex=index
      this.$router.push(router)
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped lang="scss">
.show-left-enter,.show-left-leave-to{
  transition: width 0.5s
}
.show-left-active,.show-left-leave-active{
  width:50%;
}

  .el-main{
    padding:10px;
    .blog-right{
      border:1px solid #DCDFE6;
    }

  }
  .left {
  background-color: rgb(48, 65, 86);
  height:100vh;
  color: #fff;
  // display: flex;
  // justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow:hidden;
  .left-title {
    height: 50px;
    line-height: 50px;
    width: 100%;
  }

  .left-categroy {
    width: 100%;
    margin-top: 20px;
    font-size:1.1rem!important;
    .el-button{
      border:0 !important;
      background:none !important;
      color:#fff;
      width:100%;
      text-align:left;
      font-size:1.1rem!important;
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
      height: 60px;
      line-height: 60px;
    }
  }
}
</style>