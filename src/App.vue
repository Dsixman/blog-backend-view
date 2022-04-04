<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  data(){
    return {
      
    //  classobj:['el-icon-s-management','el-icon-edit-outline','el-icon-collection-tag','el-icon-s-flag','el-icon-chat-dot-round']
    }
  },
  computed:{

  },
  methods:{

  },
  components: {
    // HelloWorld
  },
  created(){
    
  }
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
  height:100vh;
}
</style>
