<template>
  <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.img">
            <img :src="item[imgsrc]" alt="" :class="[isfull ? 'full' : '']">
        </mt-swipe-item>
    </mt-swipe>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  props: ["list", "imgsrc", "isfull"]
};
</script>


<style lang="scss" scoped>
.mint-swipe {
  height: 180px;

  .mint-swipe-item {
    text-align: center;
    //   &:nth-child(1) {
    //     background-color: pink;
    //   }
    //   &:nth-child(2) {
    //     background-color: skyblue;
    //   }
    //   &:nth-child(3) {
    //     background-color: yellowgreen;
    //   }
  }
  .mint-swipe-items-wrap {
    img {

      height: 100%;
      vertical-align: middle;
    }
  }
}

.full {
  width: 100%;
}
</style>

