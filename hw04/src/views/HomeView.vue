<template>
  <div class="app-home">
    <HomeBanner/>
    <HomeComponent />
  </div>
</template>

<script>
import HomeBanner from '@/components/HomeBanner.vue';
import HomeComponent from '@/components/HomeComponent.vue';

// @ is an alias to /src

export default {
  name: 'HomeView',
  props: {
    props: Array
  },
  components: {
    HomeBanner,
    HomeComponent
  }
}
</script>
