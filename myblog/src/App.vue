<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="#">My Blog</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">
            博客
            <!-- <router-link to="/">博客</router-link> -->
          </b-nav-item>
          <b-nav-item to="/messageboard">
            留言板
            <!-- <router-link to="/messageboard">留言板</router-link> -->
          </b-nav-item>
          <b-nav-item to="/curriculumvitae">
            简历
            <!-- <router-link to="/curriculumvitae">简历</router-link> -->
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "assets/css/base.css";
</style>
