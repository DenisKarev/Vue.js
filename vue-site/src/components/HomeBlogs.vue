<template>
  <section class="blog center-bg">
    <div class="blog-container">
      <div class="blog-contents center">
        <h1 class="blog-contents-header">Follow Our Projects</h1>
        <p class="blog-contents-paragraph">
          It is a long established fact that a reader will be distracted by the of readable content of page
          lookings at its layouts points.
        </p>
      </div>
      <div class="blog-articles">
        <div class="blog-article-card">
          <div class="blog-article-card-inner">
            <div class="blog-article-card-inner-img">
              <img src="/Vue.js/img/article01pic.jpg" alt="Article picture" class="blog-article-card-inner-img" />
              <p class="blog-article-card-inner-tag">
                Kitchen Design
              </p>
            </div>
            <div class="blog-article-card-inner-description">
              <h4 class="blog-article-card-inner-description-title">
                Let’s Get Solution For Building Construction Work
              </h4>
              <div class="blog-article-card-inner-description-button-container">
                <p class="blog-article-card-inner-description-text">26 December,2022</p>

                <router-link to="/blog">
                  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none"
                    class="buttontype1hover">
                    <circle cx="26" cy="26.2671" r="26" fill="#F4F0EC" />
                    <path d="M23.7715 32.9529L29.7144 26.2672L23.7715 19.5815" stroke="#292F36" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </router-link>

              </div>
            </div>
          </div>
        </div>

        <div class="blog-article-card">
          <div class="blog-article-card-inner">
            <div class="blog-article-card-inner-img">
              <img src="/Vue.js/img/article02pic.jpg" alt="Article picture" class="blog-article-card-inner-img" />
              <p class="blog-article-card-inner-tag">
                Living Design
              </p>
            </div>
            <div class="blog-article-card-inner-description">
              <h4 class="blog-article-card-inner-description-title">
                Low Cost Latest Invented Interior Designing Ideas.
              </h4>
              <div class="blog-article-card-inner-description-button-container">
                <p class="blog-article-card-inner-description-text">22 December,2022</p>

                <router-link to="/blog">
                  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none"
                    class="buttontype1hover">
                    <circle cx="26" cy="26.2671" r="26" fill="#F4F0EC" />
                    <path d="M23.7715 32.9529L29.7144 26.2672L23.7715 19.5815" stroke="#292F36" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </router-link>

              </div>
            </div>
          </div>
        </div>

        <div class="blog-article-card">
          <div class="blog-article-card-inner">
            <div class="blog-article-card-inner-img">
              <img src="/Vue.js/img/article03pic.jpg" alt="Article picture" class="blog-article-card-inner-img" />
              <p class="blog-article-card-inner-tag">
                Interior Design
              </p>
            </div>
            <div class="blog-article-card-inner-description">
              <h4 class="blog-article-card-inner-description-title">
                Best For Any Office & Business Interior Solution
              </h4>
              <div class="blog-article-card-inner-description-button-container">
                <p class="blog-article-card-inner-description-text">25 December,2022</p>

                <router-link to="/blog">
                  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none"
                    class="buttontype1hover">
                    <circle cx="26" cy="26.2671" r="26" fill="#F4F0EC" />
                    <path d="M23.7715 32.9529L29.7144 26.2672L23.7715 19.5815" stroke="#292F36" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </router-link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "HomeComponent",
}
</script>

<style lang='scss'></style>