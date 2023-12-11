<template>
  <div class="home">
    <section class="project center-bg">
      <div class="project-container">
        <div class="project-contents center">
          <h1 class="project-contents-header">Follow Our Projects</h1>
          <p class="project-contents-paragraph">
            It is a long established fact that a reader will be distracted by the of readable content of page
            lookings
            at its layouts points.
          </p>
        </div>

        <HomeProjects :hProjs="homeProjects"/>
      </div>
    </section>
    <CounterComponent />
    <HomeBlogs :hBlogs="homeBlogs"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeProjects from './HomeProjects.vue'
import HomeBlogs from './HomeBlogs.vue'
import CounterComponent from './CounterComponent.vue';

export default {
  name: "HomeComponent",
  computed: {
    ...mapGetters(['blogArticles', 'projectArticles']),
    homeBlogs() {
      return this.blogArticles.slice(0, 3);
    },
    homeProjects() {
      return this.projectArticles.slice(0, 4);
    }
  },
  components: {
    CounterComponent,
    HomeProjects,
    HomeBlogs
  }
}
</script>

<style lang='scss'></style>