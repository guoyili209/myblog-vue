<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">博客</router-link>|
      <router-link to="/messageboard">留言板</router-link>|
      <router-link to="/curriculumvitae">简历</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import 'assets/css/base.css';

</style>
