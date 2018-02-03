<template>
  <div >
   
    <ul class="mui-table-view" v-for="item in newlist" :key="item.id">
				<li class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newlist/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class="mui-ellipsis">{{item.zhaiyao}}</p>
						</div>
					</router-link>
				</li>
			</ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      newlist: []
    };
  },
  created() {
    this.getnewinfo();
  },
  methods: {
    async getnewinfo() {
      const { data } = await this.$http.get("/api/getnewslist");
      console.log(data);
      if (data.status === 0) {
        this.newlist = data.message;
      }
    }
  }
};
</script>


<style lang="sass" scoped>

</style>

