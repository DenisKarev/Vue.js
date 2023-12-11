<template>
  <div class="projectdetailssview">
    <BannersComponent :breadcrumbs="false" target="project-details" />
    <ProjectDetailsComponent :pid="projId"/>
  </div>
</template>
  
<script>
import BannersComponent from '@/components/BannersComponent.vue';
import ProjectDetailsComponent from '@/components/ProjectDetailsComponent.vue';

export default {
  computed: {
    projId() {
      const projId = this.$route.params.pid;
      const res = parseInt(projId || 1);
      // console.log('this.$route');
      // console.log(this.$route);
      return res;
    }
  },
  components: {
    BannersComponent,
    ProjectDetailsComponent
  }
}
</script>