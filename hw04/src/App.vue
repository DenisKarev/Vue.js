<template>
  <div id="app">
    <div class="app-selector">
      <div class="app-selector-box">
        <label for="blog"> blog
          <input type="checkbox" id="blog" name="selectpage" v-model="components2Show.blog">
        </label>
        <label for="blogdetails"> blog-details
          <input type="checkbox" id="blogdetails" name="selectpage" v-model="components2Show.blogdetails">
        </label>
        <label for="projects"> projects
          <input type="checkbox" id="projects" name="selectpage" v-model="components2Show.projects">
        </label>
        <label for="projectdetails"> project-details
          <input type="checkbox" id="projectdetails" name="selectpage" v-model="components2Show.projectdetails">
        </label>
      </div>
    </div>

    <HeaderAndNavComponent />

    <BannersComponent v-if="components2Show.blog" :texts="{ h: 'Articles & News', p: 'Home / Blog' }" :breadcrumbs="true" target="blog" />
    <BlogListComponent v-if="components2Show.blog" :listArtiles="blogArticles" />


    <BannersComponent v-if="components2Show.blogdetails" :breadcrumbs="false" target="blog-details" />
    <BlogDetailsComponent v-if="components2Show.blogdetails" :detailArticles="blogArticles" />


    <BannersComponent v-if="components2Show.projects" :texts="{ h: 'Our Project', p: 'Home / Project' }" :breadcrumbs="true" target="projects" />
    <ProjectsComponent v-if="components2Show.projects" :listProjects="projectArticles" @projectSelectClick="pid => projectSelectClick(pid)" />

    <BannersComponent v-if="components2Show.projectdetails" :breadcrumbs="false" target="project-details" />
    <ProjectDetailsComponent v-if="components2Show.projectdetails" :project="projectDetails" />

    <FooterComponent />

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import HeaderAndNavComponent from './components/HeaderAndNavComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import BannersComponent from './components/BannersComponent.vue';

import BlogListComponent from './components/BlogListComponent.vue';
import BlogDetailsComponent from './components/BlogDetailsComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import ProjectDetailsComponent from './components/ProjectDetailsComponent.vue';

export default {
  name: 'App',
  data() {
    return {
      projectDetails: null,
      components2Show: {
        blog: false,
        blogdetails: false,
        projects: true,
        projectdetails: false
      },

    };
  },
  components: {
    HeaderAndNavComponent,
    BannersComponent,
    FooterComponent,
    BlogListComponent,
    BlogDetailsComponent,
    ProjectsComponent,
    ProjectDetailsComponent
  },
  methods: {
    ...mapActions(['fetchDataFrom']),
    projectSelectClick(pid) {
      this.components2Show.projects = false;
      this.components2Show.projectdetails = true;
      // console.log(pid);
      this.projectDetails = this.projectById(pid);
    }
  },
  computed: {
    ...mapGetters(['blogArticles', 'projectArticles', 'projectById']),
  },
  mounted() {
    this.fetchDataFrom();
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:ital,wght@0,400;0,600;0,700;1,400&display=swap');
@import './assets/global.scss';

:root {
  --pri1: #CDA274;
  --pri2: #F4F0EC;
  --pri3: #292F36;
}

.app-selector {
  position: relative;
  font-family: 1;

  &-box {
    position: absolute;
    display: flex;
    flex-direction: column;
    font-size: 200%;

    background-color: var(--pri1);

    padding: 8px;
    border-radius: 16px;

    & input[type=checkbox] {
      transform: scale(2);
    }
  }
}</style>
