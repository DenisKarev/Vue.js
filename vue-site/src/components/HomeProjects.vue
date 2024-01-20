<template>
  <div class="project-project-container">
    <!-- <div class="project-project" v-for="(proj, index) in hProjs" :key="index">
      <img :src="proj.pictureUrl" :alt="proj.pictureAlt" class="project-project-image" />
      <div class="project-project-description">
        <div class="container">
          <h3 class="project-project-title">Modern Kitchan</h3>
          <p class="project-project-text">Decor / Artchitecture</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none"
          class="buttontype1hover">
          <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
          <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div> -->

    <div class="project-project">
      <img src="/Vue.js/img/project01.jpg" alt="Project image" class="project-project-image" />
      <div class="project-project-description">
        <div class="container">
          <h3 class="project-project-title">Modern Kitchan</h3>
          <p class="project-project-text">Decor / Artchitecture</p>
        </div>
        <router-link to="/projects">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none"
            class="buttontype1hover">
            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </router-link>
      </div>
    </div>

    <div class="project-project">
      <img src="/Vue.js/img/project02.jpg" alt="Project image" class="project-project-image" />
      <div class="project-project-description">
        <div class="container">
          <h3 class="project-project-title">Modern Kitchan</h3>
          <p class="project-project-text">Decor / Artchitecture</p>
        </div>
        <router-link to="/projects">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none"
            class="buttontype1hover">
            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </router-link>
      </div>
    </div>

    <div class="project-project">
      <img src="/Vue.js/img/project03.jpg" alt="Project image" class="project-project-image" />
      <div class="project-project-description">
        <div class="container">
          <h3 class="project-project-title">Modern Kitchan</h3>
          <p class="project-project-text">Decor / Artchitecture</p>
        </div>
        <router-link to="/projects">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none"
            class="buttontype1hover">
            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </router-link>
      </div>
    </div>

    <div class="project-project">
      <img src="/Vue.js/img/project04.jpg" alt="Project image" class="project-project-image" />
      <div class="project-project-description">
        <div class="container">
          <h3 class="project-project-title project-project-button">Modern Kitchan</h3>
          <p class="project-project-text">Decor / Artchitecture</p>
        </div>
        <router-link to="/projects">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none"
            class="buttontype1hover">
            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "HomeComponent",
  props: {
    hProjs: Array
  }
}
</script>

<style lang='scss'>
.project {
  // &-container {}

  &-contents {
    text-align: center;
    max-width: 737px;
    flex-direction: column;
    padding-top: 96px;
    padding-bottom: 92px;

    &-header {
      padding-bottom: 8px;
    }

    // &-paragraph {}
  }

  &-project-container {
    display: flex;
    flex-wrap: wrap;
    gap: 56px;
    justify-content: space-between;
    padding-bottom: 96px;
  }

  &-project {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-description {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    // &-title {}

    // &-text {}

    &-image {
      max-width: 524px;
    }

    &:nth-child(1) {
      &>img {
        border-radius: 0px 80px 0px 0px;
      }
    }

    &:nth-child(2) {
      &>img {
        border-radius: 80px 0px 0px 0px;
      }
    }

    &:nth-child(3) {
      &>img {
        border-radius: 0px 0px 80px 0px;
      }
    }

    &:nth-child(4) {
      &>img {
        border-radius: 0px 0px 0px 80px;
      }
    }

  }
}

// .pr01 {
//   border-radius: 80px 0px 0px 0px;
// }

// .pr02 {
//   border-radius: 0px 80px 0px 0px;
// }

// .pr03 {
//   border-radius: 0px 0px 80px 0px;
// }

// .pr04 {
//   border-radius: 0px 0px 0px 80px;
// }
</style>