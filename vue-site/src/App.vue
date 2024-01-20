<template>
  <div id="app">
    <HeaderAndNavComponent />

    <router-view></router-view>

    <FooterComponent />
  </div>
</template>

<script>
import { mapActions } from 'vuex'; // mapGetters

import HeaderAndNavComponent from './components/HeaderAndNavComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  data() {
    return {
      projectDetails: null,
    };
  },
  components: {
    HeaderAndNavComponent,
    FooterComponent,
  },
  methods: {
    ...mapActions(['fetchDataFrom'])
  },
  computed: {},
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
  --pri2: #292F36;
  --pri3: #F4F0EC;
}
</style>
