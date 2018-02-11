<template>
  <div>
    
    <textarea placeholder="请输入评论的内容" maxlength="120" v-model="cmtMsg"></textarea>
    <mt-button type="primary" size="large" @click="postCmt">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in cmtlist" :key="i">
          <div class="cmt-title">第{{ i+1 }}楼&nbsp;用户：{{ item.user_name }}&nbsp;发表时间：{{ item.add_time | dateFormat }}</div>
          <div class="cmt-body">{{ item.content }}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      pageindex: 1,
      cmtlist: [], // 评论列表数组
      cmtMsg: "",
      isover: false
    };
  },
  created() {
    this.getcmtlist();
  },
  methods: {
    async getcmtlist() {
      // 在调用Ajax获取数据之前，先判断isover是否为true
      if (this.isover) return;
      const { data } = await this.$http.get(
        "/api/getcomments/" + this.id + "?pageindex=" + this.pageindex
      );
      console.log(data);
      if (data.status === 0) {
        if (data.message.length <= 0) return (this.isover = true);
        this.cmtlist = this.cmtlist.concat(data.message);
        // this.cmtlist= data.message
      }
    },
    getMore() {
      this.pageindex++;
      this.getcmtlist();
    },
    async postCmt() {
      if (this.cmtMsg.trim().length <= 0) return Toast("评论内容不能为空");
      const { data } = await this.$http.post("/api/postcomment/" + this.id, {
        content: this.cmtMsg.trim()
      });
      if (data.status === 0) {
        Toast("发表成功");
        // 自己在客户端拼接出一个新的评论对象
        const newCmt = {
          user_name: "匿名用户",
          add_time: new Date(),
          content: this.cmtMsg.trim()
        };
        // 将 自己拼接的评论对象，手动 unshift 到 评论列表的第一项；这样，能够节省一次Ajax网络请求；
        this.cmtlist.unshift(newCmt);
        // 清空评论内容
        this.cmtMsg = "";
        // 从新加载 评论列表
      }
    }
  },
  props: ["id"]
};
</script>


<style lang="scss" scoped>
textarea {
  margin: 0;
  font-size: 14px;
}

.cmt-list {
  margin: 5px 0;
  .cmt-item {
    .cmt-title {
      font-size: 14px;
      line-height: 30px;
      background-color: #ddd;
    }
    .cmt-body {
      font-size: 13px;
      line-height: 35px;
      text-indent: 2em;
    }
  }
}
</style>
