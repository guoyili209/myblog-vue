/*
 * author: guoyili
 * email:  guoyili209@gmail.com
 * date:   2020-03-02 19:53
*/
<template>
  <div>
    <div id="panel" class="collapsed">
      <h1>
        <a href="http://www.ylyz2019.top">Tick's博客</a>
      </h1>
      <a id="expandButton" href="#">
        <span></span>
        <span></span>
        <span></span>
      </a>
      <div id="content" style="height: 80%;overflow: auto;">
        <accordion>
          <template v-for="(value,key) in pages">
            <accordion-item :key="key">
              <div slot="item-title">{{value.catecory}}</div>
              <div v-for="(v,k) in value.content" :key="k">
                <a :href="v.url" target="iviewer" @click="jumpPage(v.url)">{{v.title}}</a>
              </div>
            </accordion-item>
          </template>
        </accordion>
      </div>
    </div>
    <iframe id="viewer" name="iviewer" allowfullscreen onmousewheel></iframe>
  </div>
</template>

<script>
import Accordion from "components/collapsible/Accordion.vue";
import AccordionItem from "components/collapsible/AccordionItem.vue";

export default {
  name: "Blog",
  components: {
    Accordion,
    AccordionItem
  },
  data() {
    return {
      pages: [
        {
          catecory: "Web客户端",
          content: [
            { title: "html教程", url: "pages/webclient/htmllearn.html" },
            { title: "gulp教程", url: "pages/webclient/learngulp.html" },
            { title: "vuex官方教程笔记", url: "pages/webclient/vuexlearn.html" },
            { title: "js教程", url: "pages/webclient/jslearn.html" }
          ]
        }
      ]
    };
  },
  methods: {
    jumpPage(url) {
        console.log(url);
      var viewer = document.getElementById("viewer");
    //   window.location.hash = url;
      viewer.src = url;
      viewer.focus();
    }
  }
};
</script>

<style scoped>
@import "~assets/css/blog.css";
</style>
