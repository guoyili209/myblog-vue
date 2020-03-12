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
              <a
                :class="{select:v.title=='html教程'}"
                :href="v.url"
                target="iviewer"
                @click="jumpPage($event,v.url)"
              >{{v.title}}</a>
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
    <footer class="foot">
      <p style="color:#ababab;">
        ©2019-2020 ylyz2019.top
        <b-link href="http://www.beian.miit.gov.cn" target="_blank">蜀ICP备19026289号-1</b-link>
      </p>
    </footer>
  </div>
</template>

<script>
import AccordionItem from "components/collapsible/AccordionItem.vue";
import pagesConfig from "./pages";

export default {
  name: "Blog",
  components: {
    AccordionItem
  },
  props: {
    // currectSelectObj: Object
  },
  computed: {
    curSelectDomPageObj: {
      get: function() {
        return this.currectSelectObj;
      },
      set: function(val) {
        this.currectSelectObj = val;
      }
    }
  },
  data() {
    return {
      pages: pagesConfig,
      currectSelectObj: null
    };
  },
  methods: {
    jumpPage(e, url) {
      document.getElementsByClassName("select")[0].classList.toggle("select");
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
    },
    getMsg(data) {
      console.log(data);
    }
  }
};
</script>

<style scoped>
@import "~assets/css/blog.css";

.foot {
  position: absolute;
  bottom: 0;
  font-size: 0.6rem;
  width: 100%;
  background-color: #555;
  line-height: 1rem;
}
.foot p {
  color: #ababab;
  text-align: center;
  margin:1px auto;
}
.foot a {
  color: #ababab;
}
.foot a:hover {
  color: rgb(230, 225, 225);
  text-decoration: none;
}
@media all and (max-width: 640px) {
  .foot {
    display: none;
  }
}
</style>
