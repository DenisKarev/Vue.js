<template>
  <div class="home-banner">
    <section class="banner center-bg">
      <div class="banner-container">
        <img src="/Vue.js/img/banner-home.jpg" alt="Home banner picture" class="banner-container-back-pic">
        <div class="banner-container-content">
          <h1 class="banner-container-header">Let Your Home Be Unique</h1>
          <p class="banner-container-text">
            There are many variations of the passages of lorem Ipsum fromavailable, majority.
          </p>
          <router-link to="/projects">
            <div class="banner-container-button buttontype2">
              <p class="banner-container-button-text">Get Started</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                <path d="M1 8.43529L14.7232 8.29844M9.61818 1.91125L16.1412 8.43424L9.48677 15.0886" stroke="#CDA274"
                  stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
              </svg>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
}
</script>

<style lang='scss'></style>