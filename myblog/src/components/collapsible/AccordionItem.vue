/*
 * author: guoyili
 * email:  guoyili209@gmail.com
 * date:   2020-03-03 10:46
*/
<template>
  <div id="accordion-item">
    <b-button class="m-1" block href="#" v-b-toggle="accordion_ItemID+''" variant="info">
      <slot name="item-title"></slot>
    </b-button>
    <!-- :visible="!accordion_ItemID" -->
    <b-collapse v-bind:id="accordion_ItemID+''" visible role="tabpanel">
      <b-card-body>
        <b-card-text>
          <slot></slot>
        </b-card-text>
      </b-card-body>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: "AccordionItem",
  props: {
    accordionItemID: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      accordion_ItemID: this.accordionItemID
    };
  }
};
</script>

<style scoped>

</style>
