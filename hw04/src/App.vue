<template>
  <div id="app">

    <HeaderAndNavComponent />

    <BannersComponent v-if="components.blog" :texts="{ h: 'Articles & News', p: 'Home / Blog' }" :breadcrumbs="true" target="blog" />
    <BlogListComponent v-if="components.blog" :listArtiles="blogArticles" />


    <BannersComponent v-if="components.blogdetails" :breadcrumbs="false" target="blog-details" />
    <BlogDetailsComponent v-if="components.blogdetails" :detailArticles="blogArticles" />


    <BannersComponent v-if="components.projects" :texts="{ h: 'Our Projects', p: 'Home / Projects' }" :breadcrumbs="true" target="projects" />
    <ProjectsComponent v-if="components.projects" :listProjects="projectArticles" />
    
    <BannersComponent v-if="components.projectdetails" :breadcrumbs="false" target="project-details" />
    <BlogDetailsComponent v-if="components.projectdetails" :detailArticles="blogArticles" />

    <FooterComponent />

  </div>
</template>

<script>
import HeaderAndNavComponent from './components/HeaderAndNavComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import BannersComponent from './components/BannersComponent.vue';

import BlogListComponent from './components/BlogListComponent.vue';
import BlogDetailsComponent from './components/BlogDetailsComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';

export default {
  name: 'App',
  data() {
    return {
      components: {
        blog: false,
        blogdetails: false,
        projects: true,
        projectdetails: false
      },
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
      ],
    projectArticles: [
        {
          projectid: '01',
          pictureUrl: './img/projects-bedroom-01.png',
          pictureAlt: 'Project number 1 picture',
          projectSmallTitle: 'Minimal Bedroom',
          projectTitle: 'Minimal Look Bedrooms',
          projectText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
          projectTag: 'Bedroom',
          projectShowTags: ['Decor', 'Architecture'],
          projectDate: '26 December, 2022',
          projectStarred: true
        },
        {
          projectid: '03',
          pictureUrl: './img/projects-bedroom-03.png',
          pictureAlt: 'Project number 3 picture',
          projectSmallTitle: 'Minimal Bedroom',
          projectTitle: 'Minimal Look Bedrooms',
          projectText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
          projectTag: 'Bedroom',
          projectShowTags: ['Decor', 'Architecture'],
          articleDate: '25 December, 2022',
          projectStarred: false
        },
        {
          projectid: '05',
          pictureUrl: './img/projects-bedroom-05.png',
          pictureAlt: 'Project number 5 picture',
          projectSmallTitle: 'Minimal Bedroom table',
          projectTitle: 'Minimal Look Bedroom Table',
          projectText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
          projectTag: 'Bedroom',
          projectShowTags: ['Decor', 'Architecture'],
          articleDate: '22 December, 2022',
          projectStarred: false
        },
        {
          projectid: '07',
          pictureUrl: './img/projects-bedroom-07.png',
          pictureAlt: 'Project number 7 picture',
          projectSmallTitle: 'Modern Bedroom',
          projectTitle: 'Modern Look Bedrooms',
          projectText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
          projectTag: 'Bedroom',
          projectShowTags: ['Decor', 'Architecture'],
          articleDate: '25 December, 2022',
          projectStarred: false
        },
        {
          projectid: '02',
          pictureUrl: './img/projects-bedroom-02.png',
          pictureAlt: 'Project number 2 picture',
          projectSmallTitle: 'Minimal Bedroom',
          projectTitle: 'Minimal Look Bedrooms',
          projectText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
          projectTag: 'Bedroom',
          projectShowTags: ['Decor', 'Architecture'],
          articleDate: '22 December, 2022',
          projectStarred: false
        },
        {
          projectid: '04',
          pictureUrl: './img/projects-bedroom-04.png',
          pictureAlt: 'Project number 4 picture',
          projectSmallTitle: 'Classic Minimal Bedroom',
          projectTitle: 'Classic Minimal Look Bedrooms',
          projectText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
          projectTag: 'Bedroom',
          projectShowTags: ['Decor', 'Architecture'],
          articleDate: '26 December, 2022',
          projectStarred: false
        },

        {
          projectid: '06',
          pictureUrl: './img/projects-bedroom-06.png',
          pictureAlt: 'Project number 6 picture',
          projectSmallTitle: 'System Table',
          projectTitle: 'Minimal Look System Table',
          projectText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
          projectTag: 'Bedroom',
          projectShowTags: ['Decor', 'Architecture'],
          articleDate: '25 December, 2022',
          projectStarred: false
        },
        {
          projectid: '08',
          pictureUrl: './img/projects-bedroom-08.png',
          pictureAlt: 'Project number 8 picture',
          projectSmallTitle: 'Modern Bedroom',
          projectTitle: 'Modern Look Bedrooms',
          projectText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
          projectTag: 'Bedroom',
          projectShowTags: ['Decor', 'Architecture'],
          articleDate: '25 December, 2022',
          projectStarred: false
        }
      ]
    };
  },
  components: {
    HeaderAndNavComponent,
    FooterComponent,
    BannersComponent,
    BlogListComponent,
    BlogDetailsComponent,
    ProjectsComponent,
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

:root {
    --pri1: #CDA274;
    --pri2: #F4F0EC;
    --pri3: #292F36;
}
</style>
