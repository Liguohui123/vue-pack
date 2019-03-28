//商品评论页面
<template>
  <div>
    <cmtbox :id="$route.params.id"></cmtbox>
  </div>
</template>

<script>
import cmtbox from '../subcomponents/comment.vue'

export default {
  data () {
    return {
    };
  },
  methods: {},
  components:{
    cmtbox
  }
}

</script>
<style lang='scss' scoped>
</style>