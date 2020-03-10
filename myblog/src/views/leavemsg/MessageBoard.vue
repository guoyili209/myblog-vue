/*
 * author: guoyili
 * email:  guoyili209@gmail.com
 * date:   2020-03-02 19:49
*/
<template>
  <div>
    <section id="leaveMessage" style="margin:4rem;">
      <div class="container">
        <div class="text-center msgboardTop title">
          <h5>
            ^_^
            <a href="#leavemsg">欢迎给我留言</a>^_^
          </h5>
        </div>
        <div>
          <template v-for="site in sites">
            <leave-message v-bind:message="site" v-bind:key="site"></leave-message>
          </template>
        </div>
        <ul class="pagination mx-auto">
          <div class="mx-auto">
            <template v-for="index in pages">
              <pagination v-bind:pagecount="index" v-bind:key="index"></pagination>
            </template>
          </div>
        </ul>
        <div id="leavemsg" class="mb-2">
          <form onsubmit="return false;">
            <div class="form-group">
              <label for="form_message" class="title">留言：</label>
              <textarea id="form_message" class="form-control" rows="5"></textarea>
            </div>
            <div class="text-right">
              <button id="submit_btn" type="submit" class="btn btn-primary" @click="submitMsg()">提交</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LeaveMessage from "components/leaveMessage/LeaveMessage.vue";
import Pagination from "components/pagination/Pagination.vue";
export default {
  name: "MessageBoard",
  components: {
    LeaveMessage,
    Pagination
  },
  computed: {
      sites: function(){return this.$store.getters.leaveMsgData},
      pages: function(){return this.$store.getters.pageCountData}
  },
  mounted() {
    this.$store.dispatch("requestLeaveMessage").then(res => {
      //   console.log(res);
    });
    this.$store.dispatch("requestPagesCount").then(res => {
      //   console.log(res);
    });
  },
  methods: {
    submitMsg() {
      var str = this.jquery("#form_message").val();
      if (str == "") {
        return alert("请输入留言内容!");
      }
      this.jquery("#form_message").val("");
      this.$store.dispatch("submitMsg", str);
    }
  }
};
</script>

<style scoped>
</style>
