<template>
  <section class="blog-details center-bg">
    <div class="blog-details-container" v-if="filteredBlogs.length !== 0">
      <div class="blog-details-blogs">
        <div class="blog-details-blog" v-for="(blog) in filteredBlogs" :key="blog.artcleid">
          <h1 class="blog-details-blog-header">{{ blog.articleTitle }}</h1>
          <img v-if="blog.pictureUrl" :src="blog.pictureUrl" :alt="blog.pictureAlt" class="blog-details-blog-image" />
          <div v-if="blog.pictureUrl" class="blog-details-blog-dateandtags">
            <p>{{ blog.articleDate }}</p>
            <p>{{ blog.articleTag }}</p>
            <!-- <p>Interior / Home / Decore</p> -->
          </div>
          <p v-if="blog.pictureUrl" class="blog-details-blog-text" v-html="blog.articleText"></p>
          <div v-if="blog.pictureUrl" class="blog-details-quote">
            <div class="blog-details-quote-header">“</div>
            <div class="blog-details-quote-text"> The details are not the details. They make the design.</div>
          </div>
        </div>
      </div>
      <div class="blog-details-filters">
        <h3 class="blog-details-filters-header">Tags</h3>
        <div class="blog-details-filters-container">
          <p @click="filterHandler(filter)" :class="{ active: activeFilter === filter }" v-for="filter in blogFilters"
            :key="filter.id">{{ filter }}</p>
        </div>
      </div>
    </div>
    <div class="blog-details-container" v-else>
      <div class="blog-details-blog">
        <h1 class="blog-details-blog-header">no blogs matching criteria</h1>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BlogDetailsComponent',
  data() {
    return {
      blogFilters: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Kitchen Design', 'Living Design', 'Interior Design'],
      activeFilter: 'Kitchen Design'
    }
  },
  methods: {
    filterHandler(id) {
      // console.log(id);
      this.activeFilter = id
    }
  },
  computed: {
    ...mapGetters(['blogArticles']),
    filteredBlogs() {
      const filtered = this.blogArticles.filter((blog) => blog.articleTag === this.activeFilter)
      if (filtered.length === 0) {
        return [{ articleTitle: 'No blogs matching filter criteria' }]
      }
      return filtered
    }
  }
}
</script>

<style lang="scss"></style>
