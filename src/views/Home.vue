<template>
  <el-container>
    <el-aside class="aside-left" :style="{width:width,transform:transform}">
     <left></left>  
    </el-aside>
    <el-container>
      <el-header>
        <div class="nav-button" @click="showLeft($event)">
          <span class="nav_icon" ></span>
        </div>
        <div class="blog-title">{{title}}</div>
      </el-header>
      <el-main>
        <el-row v-if="isHome" type="flex" justify="center" class="main-content">
          <el-col class="main-item-container">
            <el-row class="main-item" @click.native="routerTo('/editblog')">
              <el-col :span="16" class="item-top">编辑博客</el-col>
              <el-col :span="8" class="item-top-icon"
                ><i class="el-icon-edit-outline"></i
              ></el-col>
              <el-col :span="24">
                <div class="item-bottom"><span>let’s go</span></div>
              </el-col>
            </el-row>
          </el-col>
          <el-col class="main-item-container">
            <el-row class="main-item" @click.native="routerTo('/manageblog')">
              <el-col :span="16" class="item-top">管理博客</el-col>
              <el-col :span="8" class="item-top-icon"
                ><i class="el-icon-s-management"></i
              ></el-col>
              <el-col :span="24">
                <div class="item-bottom"><span>let’s go</span></div>
              </el-col>
            </el-row>
          </el-col>
          <el-col class="main-item-container">
            <el-row class="main-item" @click.native="routerTo('/feedback')">
              <el-col :span="16" class="item-top">分类管理</el-col>
              <el-col :span="8" class="item-top-icon"
                ><i class="el-icon-chat-dot-round"></i
              ></el-col>
              <el-col :span="24">
                <div class="item-bottom"><span>let’s go</span></div>
              </el-col>
            </el-row>
          </el-col>
          <el-col class="main-item-container">
            <el-row class="main-item" @click.native="routerTo('/feedback')">
              <el-col :span="16" class="item-top">专题管理</el-col>
              <el-col :span="8" class="item-top-icon"
                ><i class="el-icon-chat-dot-round"></i
              ></el-col>
              <el-col :span="24">
                <div class="item-bottom"><span>let’s go</span></div>
              </el-col>
            </el-row>
          </el-col>
          <el-col class="main-item-container">
            <el-row class="main-item" @click.native="routerTo('/feedback')">
              <el-col :span="16" class="item-top">评论管理</el-col>
              <el-col :span="8" class="item-top-icon"
                ><i class="el-icon-chat-dot-round"></i
              ></el-col>
              <el-col :span="24">
                <div class="item-bottom"><span>let’s go</span></div>
              </el-col>
            </el-row>
          </el-col>
          <el-col class="main-item-container">
            <el-row class="main-item" @click.native="routerTo('/feedback')">
              <el-col :span="16" class="item-top">访问管理</el-col>
              <el-col :span="8" class="item-top-icon"
                ><i class="el-icon-chat-dot-round"></i
              ></el-col>
              <el-col :span="24">
                <div class="item-bottom"><span>let’s go</span></div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

//// @ is an alias to /src
import left from "@/components/left.vue";

export default {
  name: "Home",
  data() {
    return {
      isactive:true,
      width:'250px',
      //translate:'0px'
      transform:''
    };
  },
  computed: {
    title(){
      let title
      switch (this.$route.path){
        case '/editblog':
          title="文章编辑"
          break;
        case '/manageblog':
          title="博客管理"
          break;          
        case '/managecategory':
          title="分类管理"
          break;
        case '/specialreport':
          title="专题管理"
          break;
        case '/feedback':
          title="留言管理"
          break;
        default :
          title="博客后台首页"

      }
      return title
    },
    isHome:function(){
      let isHome;
      if(this.$route.path=='/'||this.$route.path=='/home'){
        isHome=true
      }else{
        isHome=false
      }
      return isHome
    },
  },
  methods: {
    showLeft(event){

       this.isactive=!this.isactive
       if(!this.isactive){
         this.width='70px';
         
         event.target.style="transform:rotate(90deg)"
        
       }else{
         this.width='250px';
         event.target.style="transform:rotate(0)"       
       }
       
    },
    routerTo(router) {
      this.$router.push(router);
    },
  },
  components: {
    left,
  },
  created(){
   // new Vditor("vditor")
  }
};
</script>
<style scoped lang="scss">
.wrapper {
}
.aside-left{
  transition:all 1s;
  overflow: hidden;
}

.el-header {
  background:#fff;
  height:60px;
  padding:0px;
  display: flex;
  .blog-title {
     height: 60px;
    margin-bottom: 80px;
    width: 100%;
    line-height: 60px;
    text-align: left;
    border-bottom: 2px solid #b9b9b9;
    padding: 0px;

  }
  .nav-button{
      height:60px;
      position:relative;
      width:30px;
      line-height:50px;
      margin:0 15px;
      .nav_icon{
      display: inline-block;
      position: relative;
      width: 25px;
      height: 3px;
      
      background-color: #303643;
    }
    .nav_icon:before {
      margin-top: -6px;
    }
    .nav_icon:after {
      margin-top: 6px;
    }
    .nav_icon:before,
    .nav_icon:after {
      content: "";
      display: block;
      width: 25px;
      height: 3px;
      position: absolute;
      background: #303643;
    }
    }
}
.main-content div.main-item-container:nth-child(1) {
  background: #7da3da;
}
.main-content div.main-item-container:nth-child(2) {
  background: #81d969;
}
.main-content div.main-item-container:nth-child(3) {
  background: #dd7e6b;
}
.main-content div.main-item-container:nth-child(4) {
  background: #a889da;
}
.main-content div.main-item-container:nth-child(5) {
  background: #69cbc5;
}
.main-content div.main-item-container:nth-child(6) {
  background: #cbc269;
}

.main-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .main-item-container {
    width: 30%;
    margin-bottom: 20px;
    border-radius: 0 0 10px 10px;
  }

  .main-item {
    cursor: pointer;
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    width: 100%;

    color: #fff;
    .item-top {
      height: 130px;
      line-height: 130px;
      font-size: 2rem;
      width: 60%;
    }
    .item-top-icon {
      height: 130px;
      line-height: 130px;
      font-size: 5rem;
      color: #bebebe;
    }
    .item-bottom {
      width: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      height: 20px;
      border-radius: 0 0 10px 10px;
    }
  }
}
</style>
