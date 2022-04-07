<template>
  <el-container class="blog-container">
    <el-main class="blog-main">
      <el-row class="search-container" type="flex">
        <el-col :span="10">
          <el-input
            placeholder="请输入专题"
            v-model="search"
            class="input-with-select"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="searchReport(search)"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" @click="dialogVisible = true;dealType='添加专题'"
            >添加专题</el-button
          >
          <el-dialog title="添加专题" :visible.sync="dialogVisible" width="30%">
            <el-form ref="form" :model="form" size="small" label-width="100px">
              <el-row type="flex"> </el-row>
              <el-row>
                <el-col>
                  <el-form-item label="专题名：">
                    <el-input class="search-input" v-model="form.name" />
                  </el-form-item>
                  <el-form-item label="专题介绍：">
                    <el-input
                      type="textarea"
                      class="search-input"
                      v-model="form.description"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>

            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="addReport">确 定</el-button>
            </span>
          </el-dialog>
        </el-col>
      </el-row>
      <el-row class="article-list-container">
        <el-col>
          <el-table :data="pagetable" stripe style="width: 100%">
            <el-table-column prop="id" label="序号"> </el-table-column>
            <el-table-column prop="name" label="专题名"> </el-table-column>
            <el-table-column
              prop="description"
              label="专题介绍"
            ></el-table-column>
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button
                >
                <el-button
                  @click="delReport(scope.$index, scope.row)"
                  size="small"
                  >删除专题</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="pageSize"
              layout="prev, pager, next, jumper"
              :total="totalRecord"
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
      dialogVisible: false,
      search: "",
      currentPage: 1,
      imageUrl: "",
      form: {
        report: "",
        description: "",
      },
      updateId: null,
      pageSize: 10,
      dealType:'',
      //totalRecord:0
    };
  },
  computed: {
    tableData() {
      let table = [];
      //  let showtable=[]
      console.log('tabelData computedReports')
    console.log(this.$store.state.computedReports)
    console.log('search')
    console.log(this.search)
      if (this.$store.state.computedReports.list && this.search==="") {
     //   console.log("tabelData computedReports");
       // console.log(this.$store.state.computedReports);
       console.log('无搜索')
        this.$store.state.computedReports.list.forEach((element, index) => {
          table.push({
            id: index,
            name: element.name,
            description: element.description,
          });
        });
      }
      if (this.search!=="" && this.$store.state.computedReports.list) {
           console.log('有搜索')
        this.$store.state.computedReports.list.forEach((element, index) => {
          console.log(element, index);
          if (element.name.indexOf(this.search) !== -1) {
            table.push({
              id: index,
              name: element.name,
              description: element.description,
            });
          }
        });
      }
     console.log('tableData')
      console.log(table)
      return table
    },
    pagetable(){
      let endIndex;
      let startIndex = (this.currentPage - 1) * this.pageSize;
     console.log('pagetable')
       console.log(this.tableData)
      if (this.tableData.length > startIndex + this.pageSize) {
        endIndex = startIndex + this.pageSize;
         return this.tableData.slice(startIndex, endIndex);
      } else {
         return this.tableData.slice(startIndex);
      }
     // console.log(startIndex);

      ///this.totalRecord=table.length;
     
    },
    totalRecord() {
        console.log( 'tableData length')
      console.log(this.tableData)
      return this.tableData.length;
    },
  },
  watch: {},
  methods: {
    searchReport(value) {
      this.search = value;
    },
    // handleClose(done) {
    //   this.$confirm("确认关闭？")
    //     .then((data) => {
    //       console.log(data);
    //       done();
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    delReport(index, row) {
      (async () => {
        await this.$store.dispatch("deleteReport", { name: row.name });
        let report = {};
        console.log(this.$store.state.computedReports);
        let computedReportList = this.$store.state.computedReports.list;
        report["list"] = computedReportList.filter(function (
          computedReportList
        ) {
          return computedReportList.name !== row.name;
        });
        report.title = this.$store.state.computedReports.title;
        this.$store.dispatch("computedReports", report);
        //    this.total=this.total-1;
      })();
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleEdit(index, row) {
      this.updateId = index;
      this.form.name = row.name;
      this.form.description = row.description;
      this.dealType="更新专题"
      this.dialogVisible = true;
    },
    addReport() {
        console.log(this.dealType)
      if (this.dealType=="添加专题") {
        let request = {
          title: "文章专题",
          list: {
            name: this.form.name,
            description: this.form.description,
          },
        };
        (async () => {
          await this.$store.dispatch("addReport", request);
          
          let computedReports=JSON.parse(JSON.stringify(this.$store.state.computedReports))
          console.log(computedReports.list)
          computedReports.list.push(request.list)
          console.log(computedReports.list)
        this.$store.dispatch('computedReports',computedReports)
       // console.log(this.$store.state.)
            this.form.name = "";
          this.form.description = "";
          //      this.tatal=this.total+1
          this.dialogVisible = false;
        })();
      } else {
        console.log("修改并更新 某个专题");
        (async () => {
          await this.$store.dispatch("updateReport", {
            name: this.form.name,
            description: this.form.description,
          });
          console.log("自执行外面");
          let computedReports = this.$store.state.computedReports;
          console.log(computedReports)
          //computedReports.list[this.updateId]={name:this.form.name,description:this.form.description}computed属性不能这样写。否则不能动态改变
          if (computedReports.list.length === 0) {
              computedReports.list[0]={}
            computedReports.list[0].name = this.form.name;
            computedReports.list[0].description = this.form.description;
          } else {
            computedReports.list[this.updateId].name = this.form.name;
            computedReports.list[this.updateId].description =
              this.form.description;
          }

          this.$store.dispatch("computedReports", computedReports);
          console.log(this.$store.state.computedReports);
          this.form.name = "";
          this.form.description = "";
          //      this.tatal=this.total+1
          this.dialogVisible = false;
        })();
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$store.dispatch("getAllReports");
    // this.total = this.$store.state.computedReports.list.length;
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
<style >
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>