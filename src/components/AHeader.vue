<template>
  <div>
    <el-row>
      <el-col :span="22" :offset="2">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">消息</el-menu-item>
          <el-menu-item index="3">联系人</el-menu-item>
          <el-menu-item index="4">空间</el-menu-item>
          <el-menu-item index="5">图集</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>
