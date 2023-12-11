<template>
  <div class="bloglist">
    <BannersComponent :texts="{ h: 'Articles & News', p: 'Home / Blog' }" :breadcrumbs="true" target="blog" />
    <BlogListComponent />
  </div>
</template>
  
<script>
import BannersComponent from '@/components/BannersComponent.vue';
import BlogListComponent from '@/components/BlogListComponent.vue';
export default {
  components: {
    BannersComponent,
    BlogListComponent
  }
}
</script>