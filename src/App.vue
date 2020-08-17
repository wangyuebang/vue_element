<template>
  <div id="app">
        <router-view></router-view>
  </div>
</template>

<script>
    import Vue from 'vue'
  export default {
      onLaunch: function() {
          uni.getSystemInfo({
              success: function(e) {
                  // #ifndef MP
                  Vue.prototype.StatusBar = e.statusBarHeight;
                  if (e.platform == 'android') {
                      Vue.prototype.CustomBar = e.statusBarHeight + 50;
                  } else {
                      Vue.prototype.CustomBar = e.statusBarHeight + 45;
                  };
                  // #endif
                  // #ifdef MP-WEIXIN
                  Vue.prototype.StatusBar = e.statusBarHeight;
                  let custom = wx.getMenuButtonBoundingClientRect();
                  Vue.prototype.Custom = custom;
                  Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
                  // #endif
                  // #ifdef MP-ALIPAY
                  Vue.prototype.StatusBar = e.statusBarHeight;
                  Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
                  // #endif
              }
          })
      },
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };

</script>

<style>
    @import "colorui/main.css";
    @import "colorui/icon.css";

      .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
      }

      .el-aside {
        color: #333;
      }
</style>
