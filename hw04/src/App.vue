<template>
  <div id="app">

    <HeaderAndNavComponent />
    
    <BannersComponent :texts="{ h: 'Articles & News', p: 'Home / Blog' }" :breadcrumbs="true" target="blog" />

    <BlogListComponent :listArtiles="blogArticles" />

    <BannersComponent :breadcrumbs="false" target="blog-details" />

    <BlogDetailsComponent :detailArticles="blogArticles" />

    <FooterComponent />

  </div>
</template>

<script>
import BlogListComponent from './components/BlogListComponent.vue';
import BlogDetailsComponent from './components/BlogDetailsComponent.vue'
import BannersComponent from './components/BannersComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HeaderAndNavComponent from './components/HeaderAndNavComponent.vue';

export default {
  name: 'App',
  data() {
    return {
      blogArticles: [
        {
          articleid: '01',
          pictureUrl: './img/article01pic.png',
          pictureAlt: 'Article number 1 picture',
          articleTitle: 'Let’s Get Solution For Building Construction Work',
          articleText: "<b>Lorem ipsum dolor sit amet,</b> adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
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
          articleDate: '22 December, 2022'
        },
        {
          articleid: '03',
          pictureUrl: './img/article03pic.png',
          pictureAlt: 'Article number 3 picture',
          articleTitle: 'Best For Any Office & Business Interior Solution',
          articleText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          articleTag: 'Interior Design',
          articleDate: '25 December, 2022'
        },
        {
          articleid: '04',
          pictureUrl: './img/article04pic.png',
          pictureAlt: 'Article number 4 picture',
          articleTitle: 'Let’s Get Solution For Building Construction Work',
          articleText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          articleTag: 'Kitchen Design',
          articleDate: '26 December, 2022'
        },
        {
          articleid: '05',
          pictureUrl: './img/article05pic.png',
          pictureAlt: 'Article number 5 picture',
          articleTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
          articleText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          articleTag: 'Living Design',
          articleDate: '22 December, 2022'
        },
        {
          articleid: '06',
          pictureUrl: './img/article06pic.png',
          pictureAlt: 'Article number 6 picture',
          articleTitle: 'Best For Any Office & Business Interior Solution',
          articleText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          articleTag: 'Interior Design',
          articleDate: '25 December, 2022'
        }
      ]
    };
  },
  components: {
    BlogListComponent,
    BlogDetailsComponent,
    BannersComponent,
    FooterComponent,
    HeaderAndNavComponent
  },
  methods: {
    // changeComponent() {
    //   this.componentName = 'BlogDetailsComponent'
    // }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:ital,wght@0,400;0,600;0,700;1,400&display=swap');
@import './assets/global.scss';
</style>
