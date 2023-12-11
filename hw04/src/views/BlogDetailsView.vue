<template>
  <div class="blogdetails">
    <BannersComponent :breadcrumbs="false" target="blog-details" />
    <BlogDetailsComponent />
  </div>
</template>

<script>
import BannersComponent from '@/components/BannersComponent.vue';
import BlogDetailsComponent from '@/components/BlogDetailsComponent.vue';
export default {
  components: {
    BannersComponent,
    BlogDetailsComponent
  }
}
</script>