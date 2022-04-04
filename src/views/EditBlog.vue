<template>
    <el-container class="blog-container">
          <el-aside class="aside-left" :style="{width:width,transform:transform}">
     <left></left>  
    </el-aside>
    <el-container>
      <el-header>
        <div class="nav-button" @click="showLeft($event)">
          <span class="nav_icon" ></span>
        </div>
        <div class="blog-title">编辑博客</div>
      </el-header>
      <el-main style="background: #f5f5f5">
        <div class="blog-main">
          <div class="blog-title">
            <el-input placeholder="文章标题" v-model="title"></el-input>
          </div>
          <div class="select-category">
            <el-select
              v-model="value"
              placeholder="请选择分类"
              @change="clearnewcategory"
            >
              <el-option
                v-for="item in selectCategory"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div id="v"> </div>
          <div class="submit">
            <el-button type="info" @click="saveBlog('draft')"
              >保存成草稿</el-button
            >
            <el-button type="primary" @click="saveBlog('complete')"
              >发布文章</el-button
            >
          </div>
        </div>
      </el-main>
    </el-container>
    </el-container>

</template>

<script>
import Vditor from "vditor";
import "vditor/src/assets/scss/index.scss";
import left from "../components/left.vue";
//import Vue from 'vue'
export default {
  components: { 
    left
   },
  data() {
    return {
      blog: {
        title: "",
        category: "",
        content: "",
      },
      width: "250px",
      transform: "",
      defaultVule: "",
      newCategory: "",
      vditor: null,
      title: "",

      value: "",
    };
  },

  computed: {
    selectCategory() {
      //if()
      let allCategory = [];
      if (this.$store.state.allCategory) {
        console.log("computed");
        console.log(this.$store.state.allCategory);
        this.$store.state.allCategory.forEach((element) => {
          allCategory.push({ value: element, label: element });
        });
      }
      return allCategory;
    },
  },
  watch: {},
  methods: {
    showLeft(event) {
      this.isactive = !this.isactive;
      if (!this.isactive) {
        this.width = "70px";
        event.target.style = "transform:rotate(90deg)";
      } else {
        this.width = "250px";
        event.target.style = "transform:rotate(0)";
      }
    },
    saveBlog(state) {
      //this.blog={}
      this.blog.content = this.vditor.getHTML();
      this.blog.title = this.title;
      this.blog.category = this.category || this.newCategory;
      this.blog.state = state;
      let request = {
        blog: this.blog,
        category: this.newCategory,
      };
      this.$store.dispatch("saveBlog", request);
      console.log(this.$store.state.blog);
    },
    addCategory() {
      if (this.newCategory) {
        this.value = "";
      }
    },
    clearnewcategory() {
      this.newCategory = "";
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

    //this.vditor = vditor;

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.vditor = new Vditor("v",{
      //mode:"wysiwyg",
      upload:{
        url:'http://localhost:3000/upload/',
        linkToImgUrl:'http://localhost:3000/upload/',
       
        success(editor,msg){
           let path=JSON.parse(msg).path
          document.execCommand("insertHTML",false,'!["avatar"]('+path+')')
        }
      }
    });
  
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scope lang="scss">
.blog-container {
  width: 100%;
  .aside-left {
    transition: all 1s;
    overflow: hidden;
  }

  .el-header {
    background: #fff;
    height: 60px;
    padding: 0px;
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
    .nav-button {
      height: 60px;
      position: relative;
      width: 30px;
      line-height: 50px;
      margin: 0 15px;
      .nav_icon {
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
  .blog-main {
    padding: 20px;
    .select-category {
      margin: 15px 0;
      width: 100%;
      text-align: left;
    }
    .submit {
      width: 100%;
      text-align: right;
      margin-top: 15px;
    }
  }
}
#vditor {
  min-height: 300px;
}
</style>