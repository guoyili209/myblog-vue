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
      <a id="expandButton" href="#" @click="panelToggleCss()">
        <span></span>
        <span></span>
        <span></span>
      </a>
      <div id="content" style="height: 80%;overflow: auto;">
        <!-- <accordion> -->
        <template v-for="(value,key) in pages">
          <accordion-item :key="key" v-bind:accordionItemID="key">
            <div slot="item-title">{{value.catecory}}</div>
            <div v-for="(v,k) in value.content" :key="k">
              <a :href="v.url" target="iviewer" @click="jumpPage($event,v.url)">{{v.title}}</a>
            </div>
          </accordion-item>
        </template>
        <!-- </accordion> -->
      </div>
    </div>
    <iframe
      src="pages/webclient/htmllearn.html"
      id="viewer"
      name="iviewer"
      allowfullscreen
      onmousewheel
    ></iframe>
    <footer class="container">
      <p class="foot">
        <b-link href="http://www.beian.miit.gov.cn" target="_blank">蜀ICP备19026289号-1</b-link>
      </p>
    </footer>
  </div>
</template>

<script>
import Accordion from "components/collapsible/Accordion.vue";
import AccordionItem from "components/collapsible/AccordionItem.vue";
import pagesConfig from "./pages";

export default {
  name: "Blog",
  components: {
    Accordion,
    AccordionItem
  },
  props: {
    currectSelectObj: Object
  },
  data() {
    return {
      pages: pagesConfig
    };
  },
  methods: {
    jumpPage(e, url) {
      //   console.log(this);
      if (this.currectSelectObj && this.currectSelectObj != e.currentTarget) {
        this.currectSelectObj.classList.toggle("select");
      }
      this.currectSelectObj = e.currentTarget;
      var viewer = document.getElementById("viewer");
      //   window.location.hash = url;
      viewer.src = url;
      viewer.focus();
      e.currentTarget.classList.toggle("select");
    },
    panelToggleCss() {
      var panel = document.getElementById("panel");
      panel.classList.toggle("collapsed");
      event.preventDefault();
    }
  }
};
</script>

<style scoped>
@import "~assets/css/blog.css";

.foot {
  position: fixed;
  bottom: -1rem;
  left: 10%;
  font-size: 0.6rem;
}
.foot a {
    color:rgb(155, 151, 151);
}
.foot a:hover {
    color: rgb(160, 7, 7);
}
@media all and (max-width: 640px) {
  .foot {
    display: none;
  }
}
</style>
