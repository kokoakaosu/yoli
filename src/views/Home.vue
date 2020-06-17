<template>
  <div id="home">
    <el-container>
        <el-header><a-banner/></el-header>
        <el-header><a-header/></el-header>
        <el-container>
            <el-aside width="200px"><a-aside/></el-aside>
            <el-main><a-main/></el-main>
        </el-container>
        <el-footer><a-footer/></el-footer>
    </el-container>
  </div>
</template>

<script>
import ABanner from '@/components/ABanner'
import AHeader from '@/components/AHeader'
import AAside from '@/components/AAside'
import AMain from '@/components/AMain'
import AFooter from '@/components/AFooter'
export default {

  name: 'home',
  data () {
    return {
    }
  },
  components: {
    ABanner,
    AHeader,
    AAside,
    AMain,
    AFooter
  }
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
  }
  .el-aside {
    background-color: #D3DCE6;
  }
  .el-main {
    background-color: #E9EEF3;
  }
</style>
