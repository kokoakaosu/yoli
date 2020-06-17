<template>
  <div>
    <el-image
      style="width: 500px; height: 400px"
      :src="url"
      :fit="fit"></el-image>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fit: 'fill',
      url: require('../assets/img/banner.jpg')
    }
  }
}
</script>
