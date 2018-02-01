<template>
  <div class="app-container">
    <mt-header fixed title="我的Vue">
        <span slot="left">
          <mt-button icon="back">返回</mt-button>
        </span>
    </mt-header>


    <router-view></router-view>



  </div>
</template>

<script>

import { Header } from 'mint-ui'

export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  watch: {}
};
</script>


<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
}
</style>

