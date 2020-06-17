<template>
  <div style="background: red">
    <el-menu :default-active="activeIndex" @select="handleSelect">
      <el-menu-item index="1">1</el-menu-item>
      <el-menu-item index="2">2</el-menu-item>
      <el-menu-item index="3">3</el-menu-item>
      <el-menu-item index="4">4</el-menu-item>
      <el-menu-item index="5">5</el-menu-item>
      <el-menu-item index="6">6</el-menu-item>
      <el-menu-item index="7">7</el-menu-item>
      <el-menu-item index="8">8</el-menu-item>
      <el-menu-item index="9">9</el-menu-item>
    </el-menu>
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
