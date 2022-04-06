<template>
  <el-container class="blog-container">
    <el-main class="blog-main">
      <el-row class="search-container">
        <el-col :span=3>
            <el-button type="primary" @click="dialogVisible = true"
            >添加专题</el-button>

          <el-dialog
            title="添加专题"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <el-form ref="form" :model="form" size="small" label-width="100px">
              <el-row type="flex">
                <!-- <el-col  style="display:flex; align-items:center;justify-content:end;width:100px"> <span>上传图片：</span></el-col>
                <el-col>
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                  >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-col> -->
              </el-row>
              <el-row>
                <el-col>
                  <el-form-item label="专题名：">
                    <el-input class="search-input" v-model="form.report" />
                  </el-form-item>
                  <el-form-item label="专题介绍：">
                    <el-input
                      type="textarea"
                      class="search-input"
                      v-model="form.reportDes"
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
      <el-row class="article-list-container"> </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dialogVisible: false,
      imageUrl: "",
      form: {
        report: "",
        reportDes: "",
      },
    };
  },
  computed: {
    allReport() {
      let allReports = [];
      if (this.$store.state.allReport) {
        console.log("computed");
        console.log(this.$store.state.allReports);
        this.$store.state.allCategory.forEach((element) => {
          allReports.push({ value: element, label: element });
        });
      }
      return allReports;
    },
  },
  watch: {},
  methods: {
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
    addReport() {
      let request = {
        title: "文章专题",
        list: 
          {
            report: this.form.report,
            reportDescription: this.form.reportDes,
          },
        
      };
      this.$store.dispatch("addReport", request);
      console.log("aaa");
      this.dialogVisible = false;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$store.dispatch("getAllReports");
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