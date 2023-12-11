<template>
  <div class="projectsview">
    <BannersComponent :texts="{ h: 'Our Project', p: 'Home / Project' }" :breadcrumbs="true" target="projects" />
    <ProjectsComponent />
  </div>
</template>
  
<script>
import BannersComponent from '@/components/BannersComponent.vue';
import ProjectsComponent from '@/components/ProjectsComponent.vue';

export default {
  components: {
    BannersComponent,
    ProjectsComponent
  }
}
</script>