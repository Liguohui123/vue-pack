//轮播图子组件
<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- 将来谁使用此轮播图组件，谁为我们传递LunbotuList -->
      <!-- 此时，LunbotuList应该是父组件向子组件传值来设置 -->
      <mt-swipe-item v-for="item in LunbotuList" :key="item.id">
        <img :src="item.img" alt="" :class="{'full':isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {},
  props: ['LunbotuList', "isfull"]
}

</script>
<style lang='scss' scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    text-align: center;
    img {
      // width: 100%;
      height: 100%;
    }
  }
}
.full {
  width: 100%;
}
</style>