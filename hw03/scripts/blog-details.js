Vue.component('blog-details', {
    template: `
    <div class="blog-details-container">
    <div class="blog-details-blogs">
        <div class="blog-details-blog" v-if="filteredBlogs.length !== 0" v-for="(blog, ind) in filteredBlogs" :key="blog.artcleid">
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
        <div class="blog-details-blog" v-else>
            <h1 class="blog-details-blog-header">no blogs matching criteria</h1>
        </div>
    </div>
    <div class="blog-details-filters">
        <h3 class="blog-details-filters-header">Tags</h3>
        <div class="blog-details-filters-container">
            <p @click="filterHandler(filter)" :class="{ active: activeFilter === filter }" v-for="filter in blogFilters" :key="filter.id">{{ filter }}</p>
        </div>
    </div>
</div>
    `,
    props: {
        blogArticles: Array
    },
    data() {
        return {
            blogFilters: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Kitchen Design', 'Living Design', 'Interior Design'],
            activeFilter: 'Kitchen Design'
        }
    },
    methods: {
        filterHandler(id) {
            // console.log(id);
            this.activeFilter = id;
        }
    },
    computed:{
        filteredBlogs() {
            const filtered = [...this.blogArticles].filter((blog) => blog.articleTag === this.activeFilter);
            if (filtered.length === 0) {
                return [{articleTitle: 'No blogs matching filter criteria'}]
            }
            return filtered
        }
    }
});

const v = new Vue({
  el: '.blog-details-vue',
  data: {
    blogArticles: [
      {
        articleid: '01',
        pictureUrl: './img/article01pic.png',
        pictureAlt: 'Article number 1 picture',
        articleTitle: 'Let’s Get Solution For Building Construction Work',
        articleText: `<b>Lorem ipsum dolor sit amet,</b> adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        articleTag: 'Kitchen Design',
        articleDate: '26 December, 2022'
      },
      {
        articleid: '02',
        pictureUrl: './img/article02pic.png',
        pictureAlt: 'Article number 2 picture',
        articleTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
        articleText: "Lorem ipsum dolor sit amet, adipiscing <b>Aliquam</b> eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        articleTag: 'Living Design',
        articleDate: '22 December, 2022',
      },
      {
        articleid: '03',
        pictureUrl: './img/article03pic.png',
        pictureAlt: 'Article number 3 picture',
        articleTitle: 'Best For Any Office & Business Interior Solution',
        articleText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        articleTag: 'Interior Design',
        articleDate: '25 December, 2022',
      },
      {
        articleid: '04',
        pictureUrl: './img/article04pic.png',
        pictureAlt: 'Article number 4 picture',
        articleTitle: 'Let’s Get Solution For Building Construction Work',
        articleText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        articleTag: 'Kitchen Design',
        articleDate: '26 December, 2022',
      },
      {
        articleid: '05',
        pictureUrl: './img/article05pic.png',
        pictureAlt: 'Article number 5 picture',
        articleTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
        articleText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        articleTag: 'Living Design',
        articleDate: '22 December, 2022',
      },
      {
        articleid: '06',
        pictureUrl: './img/article06pic.png',
        pictureAlt: 'Article number 6 picture',
        articleTitle: 'Best For Any Office & Business Interior Solution',
        articleText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        articleTag: 'Interior Design',
        articleDate: '25 December, 2022',
      },
    ],
  },
  methods: {},
  computed: {},
});
