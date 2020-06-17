<template>
  <div class="banner">
    <el-row :gutter="10">
      <el-col :span="2" :offset="2">
        <el-image
          style="width: 131px; height: 58px"
          :src="url"
          :fit="fit">
        </el-image>
      </el-col>
      <el-col :span="1" :offset="16">
        <el-button>登录</el-button>
      </el-col>
      <el-col :span="3">
        <el-button type="primary">快速注册</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 也可以使用import加载图片
// import url from '@/assets/img/banner.jpg'
// fill / contain / cover / none / scale-down
export default {
  name: 'aBanner',
  data () {
    return {
      fit: 'fill',
      url: require('../assets/img/banner.jpg')
    }
  }
}
</script>

<style scoped>
.banner {
  text-align: left;
}
</style>
