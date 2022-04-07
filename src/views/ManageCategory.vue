<template>
  <el-container class="blog-container">
    <el-main class="blog-main">
      <el-row class="search-container" type="flex">
        <el-col :span="10">
          <el-input
            placeholder="请输入分类"
            v-model="search"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" @click="dialogVisible = true"
            >添加分类</el-button
          >
          <el-dialog
            title="添加分类"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <el-form ref="form" :model="form" size="small" label-width="100px">
              <el-row type="flex"> </el-row>
              <el-row>
                <el-col>
                  <el-form-item label="分类名：">
                    <el-input class="search-input" v-model="form.category" />
                  </el-form-item>
                  <el-form-item label="分类介绍：">
                    <el-input
                      type="textarea"
                      class="search-input"
                      v-model="form.categoryDes"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>

            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="addCategory">确 定</el-button>
            </span>
          </el-dialog>
        </el-col>
      </el-row>
      <el-row class="article-list-container">
        <el-col>
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="id" label="序号"> </el-table-column>
            <el-table-column prop="name" label="分类名"> </el-table-column>
            <el-table-column
              prop="description"
              label="分类介绍"
            ></el-table-column>
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  >Edit</el-button
                >
                <el-button
                  @click="delCategory(scope.$index, scope.row)"
                  size="small"
                  >删除类目</el-button
                >
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
  components: {},
  data() {
    return {
      search: "",
      currentPage: 5,
      form: {
        category: "",
        categoryDes: "",
      },
      dialogVisible: false,
      updateId: null,
    };
  },
  computed: {
    tableData() {
      let table = [];
      //  console.log(this.$store.state.computedCategory)
      if (this.$store.state.computedCategory) {
        console.log(this.$store.state.computedCategory);
        this.$store.state.computedCategory.list.forEach((element, index) => {
          table.push({
            id: index,
            name: element.name,
            description: element.description,
          });
        });
      }
      return table;
    },
  },
  watch: {},
  methods: {
    addCategory() {
      console.log("this.form.category " + this.form.category);
      if (!this.form.category) {
        let request = {
          title: "文章类目",
          list: {
            name: this.form.category,
            description: this.form.categoryDes,
          },
        };
        this.$store.dispatch("addCategory", request);
        this.tableData.push({
          id: 0,
          title: this.form.category,
          description: this.form.categoryDes,
        });
      } else {
        console.log("修改并更新 某个分类");
        console.log(this.form.categoryDes);
        (async () => {
          this.$store.dispatch("editorCategory", {
            name: this.form.category,
            description: this.form.categoryDes,
          });
          let computedCategory = this.$store.state.computedCategory;
          computedCategory.list[this.updateId].name = this.form.report;
          computedCategory.list[this.updateId].description =
            this.form.description;
          this.$store.dispatch("computedReports", computedCategory);
        })();
      }

      this.dialogVisible = false;
    },
    handleEdit(index, row) {
      this.form.category = row.name;
      this.form.categoryDes = row.description;
      this.updateId = index;
      // let computedCategory=JSON.stringify(this.$store.state.computedCategory)
      // computedCategory[index]={name:row.name,description:row.description}
      // this.$store.dispatch('computedCategory',computedCategory)
      console.log("this.form.category " + this.form.catefgory);
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((data) => {
          console.log(data);
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    delCategory(index, row) {
      console.log("index");
      console.log(index);
      console.log("row");
      console.log(row);
      this.$store.dispatch("deleteCategory", { name: row.name });
      let category = {};
      let computedCategoryList = this.$store.state.computedCategory.list;
      category["list"] = computedCategoryList.filter(function (
        computedCategoryList
      ) {
        return computedCategoryList.name !== row.name;
      });
      category.title = this.$store.state.computedCategory.title;
      this.$store.dispatch("computedCategory", category);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$store.dispatch("getAllCategory");
    // (async ()=>{
    //   await  this.$store.dispatch("getAllCategory")
    //     })()
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
<style scoped>
.search-container {
  margin-bottom: 10px;
}
</style>