/*
 * author: guoyili
 * email:  guoyili209@gmail.com
 * date:   2020-03-03 10:46
*/
<template>
  <div id='accordion-item'>
    <div class="card">
      <div class="card-header" id="headingOne">
        <h2 class="mb-0">
          <button
            class="btn btn-link btn-block text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          ><slot name="item-title"></slot></button>
        </h2>
      </div>

      <div
        id="collapseOne"
        class="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionID"
      >
        <div
          class="card-body"
        ><slot></slot></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionItem",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
