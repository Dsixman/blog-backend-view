<template>
  <el-container class="blog-container">
    <el-main class="blog-main">
      <el-row class="search-container">
        <el-col :span="10">
          <el-input
            placeholder="请输入博客标题相关的词"
            v-model="search"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-row class="article-list-container">
        <el-col>
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="title" label="标题"> </el-table-column>
            <el-table-column prop="category" label="分类"> </el-table-column>
            <el-table-column prop="specail_report" label="专题">
            </el-table-column>
            <el-table-column prop="state" label="文章状态"> </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  type="text"
                  size="small"
                  >查看</el-button
                >
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="1000"
            >
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "manageblog",
  components: {},
  data() {
    return {
      search: "",
      currentPage: 5
    };
  },
  computed: {
    tableData() {
      let data = this.$store.state.allArticals;
      let tableData = [];
      if (data) {
        data.forEach((element) => {
          let article = {
            title: element.title,
            category: element.category,
            specail_report: element.specail_report,
            state: element.state,
          };
          tableData.push(article);
        });
      }

      return tableData;
      //  return [{
      // title:"php",
      // category:"php",
      // specail_report:'php',
      // state:'php',
      // }]
    },
  },
  watch: {},
  methods: {
          handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$store.dispatch("getAllArticals");
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
  .blog-main {
    background: #f5f5f5;
    .search-container {
      margin-bottom: 10px;
    }
    .artical-list-container {
    }
  }
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
}
</style>