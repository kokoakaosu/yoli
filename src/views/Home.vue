<template>
  <div id="home">
    <el-container>
        <el-header class="bannner" height="58px"><a-banner/></el-header>
        <hr style="border:1px solid #EBEEF5;" />
        <el-header class="header" height="61px"><a-header/></el-header>
        <el-row>
          <el-col :span="20" :offset="2">
            <el-container>
                <el-aside width="100px"><a-aside/></el-aside>
                <el-main><a-main/></el-main>
            </el-container>
          </el-col>
        </el-row>
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
.el-footer {
  padding: 0px;
}
.banner {
  padding: 0px;
  line-height: 58px;
}
.header {
  padding: 0px;
  line-height: 61px;
}
.el-aside {
  padding: 0px;
}
.el-main {
  padding: 0px;
}
</style>
