<template>
  <div class="blog-container">
    <div class="blog-top">发布博客</div>
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
        <el-input
          style="width: 200px; margin-left: 20px"
          placeholder="新增分类"
          v-model="newCategory"
          @change="addCategory"
        ></el-input>
      </div>
      <!-- <div></div> -->
      <div id="vditor"></div>
      <div class="submit">
        <el-button type="info" @click="saveBlog('draft')">保存成草稿</el-button>
        <el-button type="primary" @click="saveBlog('complete')"
          >发布文章</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Vditor from "vditor";
import "vditor/src/assets/scss/index.scss";
export default {
  components: {},
  data() {
    return {
      blog: {
        title: "",
        category: "",
        content: "",
      },
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
      if (this.$store.state.allCategory) {
        console.log("computed");
        console.log(this.$store.state.allCategory);
      }
      return this.$store.state.allCategory;
    },
  },
  watch: {},
  methods: {
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
    this.$store.dispatch("getAllCategory");
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
   let vditor =new Vditor("vditor");
    this.vditor=vditor
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
<style scoped lang="scss">
.blog-container {
  width: 100%;
  .blog-top {
    height: 40px;
    line-height: 40px;
    text-align: left;
    border-bottom: 2px solid #6d9eeb;
    padding: 0 10px;
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
  height: 500px;
}
</style>