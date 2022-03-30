<template>
  <el-container class="loginWrapper">
    <div class="loginContainer">
      <el-row type="flex">
        <el-col :span="24" class="login-title"> zzh个人技术博客</el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-input placeholder="用户名" label="用户名" v-model="userName"></el-input>
          <el-input placeholder="密码" v-model="pwd"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-button type="primary" @click="login">登录</el-button>
        </el-col>
      </el-row>
    </div>
  </el-container>
</template>

<script>
//import Vue from 'vue'
export default {
  components: {},
  data() {
    return {
      userName:'',
      pwd:'',
    };
  },
  computed: {},
  watch: {},
  methods: {
    login(){
      this.$store.dispatch('getAuth',{user_name:this.userName,pwd:this.pwd})
      //this.$router.push('/')
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
.loginWrapper {
  width: 100%;
  height: 100vh;
  background: #627fe5;
  box-shadow: 10px 10px 5px #a2a2a2;
  justify-content: center;
  align-items: center;
  .loginContainer {
    display: flex;
    background: #fff;
    // margin:0 auto;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;
    width: 400px;
    height: 300px;
    border: 1px solid #e3e3e3;
    border-radius: 15px;
    .el-row {
      width: 90%;
      .el-col .el-input {
        margin: 0 0 15px 0;
      }
    }
    .login-title{
        font-size:1.8rem;
        font-weight: bold;
    }
  }
}
</style>