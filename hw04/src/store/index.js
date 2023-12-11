import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogArticles: [],
    projectArticles: [],
  },
  getters: {
    blogArticles(state) {
      return state.blogArticles;
    },
    projectArticles(state) {
      return state.projectArticles;
    },
    projectById: (state) => (pid) => {
      // const res = state.projectArticles.filter((proj)=> parseInt(proj.projectid) === pid)[0] || [];
      return state.projectArticles.filter((proj)=> parseInt(proj.projectid) === pid)[0] || [];
    },
    blogsCount(state) {
      return state.blogArticles.length
    },
    projectsCount(state) {
      return state.projectArticles.length
    }
  },
  mutations: {  
    SET_ALL_ITEMS(state, payload) {
      state.blogArticles = payload.blogs;
      state.projectArticles = payload.projects;
    },
  },
  actions: {
    fetchDataFrom(s) {
      setTimeout(() => {
        s.commit("SET_ALL_ITEMS", {
          blogs: [  // x2 (12)
            {
              articleid: "01",
              pictureUrl: "/img/article01pic.jpg",
              pictureAlt: "Article number 1 picture",
              articleTitle: "Let’s Get Solution For Building Construction Work",
              articleText:
                "<b>Lorem ipsum dolor sit amet,</b> adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              articleTag: "Kitchen Design",
              articleDate: "26 December, 2022",
            },
            {
              articleid: "02",
              pictureUrl: "/img/article02pic.jpg",
              pictureAlt: "Article number 2 picture",
              articleTitle:
                "Low Cost Latest Invented Interior Designing Ideas.",
              articleText:
                "Lorem ipsum dolor sit amet, adipiscing <b>Aliquam</b> eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              articleTag: "Living Design",
              articleDate: "22 December, 2022",
            },
            {
              articleid: "03",
              pictureUrl: "/img/article03pic.jpg",
              pictureAlt: "Article number 3 picture",
              articleTitle: "Best For Any Office & Business Interior Solution",
              articleText:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              articleTag: "Interior Design",
              articleDate: "25 December, 2022",
            },
            {
              articleid: "04",
              pictureUrl: "/img/article04pic.jpg",
              pictureAlt: "Article number 4 picture",
              articleTitle: "Let’s Get Solution For Building Construction Work",
              articleText:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              articleTag: "Kitchen Design",
              articleDate: "26 December, 2022",
            },
            {
              articleid: "05",
              pictureUrl: "/img/article05pic.jpg",
              pictureAlt: "Article number 5 picture",
              articleTitle:
                "Low Cost Latest Invented Interior Designing Ideas.",
              articleText:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              articleTag: "Living Design",
              articleDate: "22 December, 2022",
            },
            {
              articleid: "06",
              pictureUrl: "/img/article06pic.jpg",
              pictureAlt: "Article number 6 picture",
              articleTitle: "Best For Any Office & Business Interior Solution",
              articleText:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              articleTag: "Interior Design",
              articleDate: "25 December, 2022",
            },
            {
              articleid: "07",
              pictureUrl: "/img/article01pic.jpg",
              pictureAlt: "Article number 1 picture",
              articleTitle: "Let’s Get Solution For Building Construction Work",
              articleText:
                "<b>Lorem ipsum dolor sit amet,</b> adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              articleTag: "Kitchen Design",
              articleDate: "26 December, 2022",
            },
            {
              articleid: "08",
              pictureUrl: "/img/article02pic.jpg",
              pictureAlt: "Article number 2 picture",
              articleTitle:
                "Low Cost Latest Invented Interior Designing Ideas.",
              articleText:
                "Lorem ipsum dolor sit amet, adipiscing <b>Aliquam</b> eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              articleTag: "Living Design",
              articleDate: "22 December, 2022",
            },
            {
              articleid: "09",
              pictureUrl: "/img/article03pic.jpg",
              pictureAlt: "Article number 3 picture",
              articleTitle: "Best For Any Office & Business Interior Solution",
              articleText:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              articleTag: "Interior Design",
              articleDate: "25 December, 2022",
            },
            {
              articleid: "10",
              pictureUrl: "/img/article04pic.jpg",
              pictureAlt: "Article number 4 picture",
              articleTitle: "Let’s Get Solution For Building Construction Work",
              articleText:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              articleTag: "Kitchen Design",
              articleDate: "26 December, 2022",
            },
            {
              articleid: "11",
              pictureUrl: "/img/article05pic.jpg",
              pictureAlt: "Article number 5 picture",
              articleTitle:
                "Low Cost Latest Invented Interior Designing Ideas.",
              articleText:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              articleTag: "Living Design",
              articleDate: "22 December, 2022",
            },
            {
              articleid: "12",
              pictureUrl: "/img/article06pic.jpg",
              pictureAlt: "Article number 6 picture",
              articleTitle: "Best For Any Office & Business Interior Solution",
              articleText:
                "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              articleTag: "Interior Design",
              articleDate: "25 December, 2022",
            },
          ],
          projects: [   // x2  (16)
            {
              projectid: "01",
              pictureUrl: "/img/projects-bedroom-01.jpg",
              pictureAlt: "Project number 1 picture",
              projectSmallTitle: "Minimal Bedroom",
              projectTitle: "Minimal Look Bedrooms",
              projectText: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
                "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
              ],
              projectTag: "Bedroom",
              projectShowTags: ["Decor", "Architecture"],
              projectDetailPics: ["/img/project-01-details-01.jpg", "/img/project-01-details-02.jpg", "/img/project-01-details-03.jpg"],
              projectDate: "26 December, 2022",
              projectStarred: true,
            },
            {
              projectid: "02",
              pictureUrl: "/img/projects-bedroom-02.jpg",
              pictureAlt: "Project number 2 picture",
              projectSmallTitle: "Minimal Bedroom",
              projectTitle: "Minimal Look Bedrooms",
              projectText: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
                "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
              ],
              projectTag: "Bedroom",
              projectShowTags: ["Decor", "Architecture"],
              projectDetailPics: ["/img/project-01-details-01.jpg", "/img/project-01-details-02.jpg", "/img/project-01-details-03.jpg"],
              articleDate: "22 December, 2022",
              projectStarred: false,
            },
            {
              projectid: "03",
              pictureUrl: "/img/projects-bedroom-03.jpg",
              pictureAlt: "Project number 3 picture",
              projectSmallTitle: "Minimal Bedroom",
              projectTitle: "Minimal Look Bedrooms",
              projectText: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
                "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
              ],
              projectTag: "Bedroom",
              projectShowTags: ["Decor", "Architecture"],
              projectDetailPics: ["/img/project-01-details-01.jpg", "/img/project-01-details-02.jpg", "/img/project-01-details-03.jpg"],
              articleDate: "25 December, 2022",
              projectStarred: false,
            },
            {
              projectid: "04",
              pictureUrl: "/img/projects-bedroom-04.jpg",
              pictureAlt: "Project number 4 picture",
              projectSmallTitle: "Classic Minimal Bedroom",
              projectTitle: "Classic Minimal Look Bedrooms",
              projectText: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
                "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
              ],
              projectTag: "Bedroom",
              projectShowTags: ["Decor", "Architecture"],
              projectDetailPics: ["/img/project-01-details-01.jpg", "/img/project-01-details-02.jpg", "/img/project-01-details-03.jpg"],
              articleDate: "26 December, 2022",
              projectStarred: false,
            },
            {
              projectid: "05",
              pictureUrl: "/img/projects-bedroom-05.jpg",
              pictureAlt: "Project number 5 picture",
              projectSmallTitle: "Minimal Bedroom table",
              projectTitle: "Minimal Look Bedroom Table",
              projectText:
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
                "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
              ],
              projectTag: "Bedroom",
              projectShowTags: ["Decor", "Architecture"],
              projectDetailPics: ["/img/project-01-details-01.jpg", "/img/project-01-details-02.jpg", "/img/project-01-details-03.jpg"],
              articleDate: "22 December, 2022",
              projectStarred: false,
            },
            {
              projectid: "06",
              pictureUrl: "/img/projects-bedroom-06.jpg",
              pictureAlt: "Project number 6 picture",
              projectSmallTitle: "System Table",
              projectTitle: "Minimal Look System Table",
              projectText: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
                "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
              ],
              projectTag: "Bedroom",
              projectShowTags: ["Decor", "Architecture"],
              projectDetailPics: ["/img/project-01-details-01.jpg", "/img/project-01-details-02.jpg", "/img/project-01-details-03.jpg"],
              articleDate: "25 December, 2022",
              projectStarred: false,
            },
            {
              projectid: "07",
              pictureUrl: "/img/projects-bedroom-07.jpg",
              pictureAlt: "Project number 7 picture",
              projectSmallTitle: "Modern Bedroom",
              projectTitle: "Modern Look Bedrooms",
              projectText:
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
                "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
              ],
              projectTag: "Bedroom",
              projectShowTags: ["Decor", "Architecture"],
              projectDetailPics: ["/img/project-01-details-01.jpg", "/img/project-01-details-02.jpg", "/img/project-01-details-03.jpg"],
              articleDate: "25 December, 2022",
              projectStarred: false,
            },
            {
              projectid: "08",
              pictureUrl: "/img/projects-bedroom-08.jpg",
              pictureAlt: "Project number 8 picture",
              projectSmallTitle: "Modern Bedroom",
              projectTitle: "Modern Look Bedrooms",
              projectText:
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
                "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
              ],
              projectTag: "Bedroom",
              projectShowTags: ["Decor", "Architecture"],
              projectDetailPics: ["/img/project-01-details-01.jpg", "/img/project-01-details-02.jpg", "/img/project-01-details-03.jpg"],
              articleDate: "25 December, 2022",
              projectStarred: false,
            },
            {
              projectid: "09",
              pictureUrl: "/img/projects-bedroom-01.jpg",
              pictureAlt: "Project number 1 picture",
              projectSmallTitle: "Minimal Bedroom",
              projectTitle: "Minimal Look Bedrooms",
              projectText: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
                "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
              ],
              projectTag: "Bedroom",
              projectShowTags: ["Decor", "Architecture"],
              projectDetailPics: ["/img/project-01-details-01.jpg", "/img/project-01-details-02.jpg", "/img/project-01-details-03.jpg"],
              projectDate: "26 December, 2022",
              projectStarred: true,
            },
            {
              projectid: "10",
              pictureUrl: "/img/projects-bedroom-02.jpg",
              pictureAlt: "Project number 2 picture",
              projectSmallTitle: "Minimal Bedroom",
              projectTitle: "Minimal Look Bedrooms",
              projectText: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
                "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
              ],
              projectTag: "Bedroom",
              projectShowTags: ["Decor", "Architecture"],
              projectDetailPics: ["/img/project-01-details-01.jpg", "/img/project-01-details-02.jpg", "/img/project-01-details-03.jpg"],
              articleDate: "22 December, 2022",
              projectStarred: false,
            },
            {
              projectid: "11",
              pictureUrl: "/img/projects-bedroom-03.jpg",
              pictureAlt: "Project number 3 picture",
              projectSmallTitle: "Minimal Bedroom",
              projectTitle: "Minimal Look Bedrooms",
              projectText: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
                "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
              ],
              projectTag: "Bedroom",
              projectShowTags: ["Decor", "Architecture"],
              projectDetailPics: ["/img/project-01-details-01.jpg", "/img/project-01-details-02.jpg", "/img/project-01-details-03.jpg"],
              articleDate: "25 December, 2022",
              projectStarred: false,
            },
            {
              projectid: "12",
              pictureUrl: "/img/projects-bedroom-04.jpg",
              pictureAlt: "Project number 4 picture",
              projectSmallTitle: "Classic Minimal Bedroom",
              projectTitle: "Classic Minimal Look Bedrooms",
              projectText: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
                "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
              ],
              projectTag: "Bedroom",
              projectShowTags: ["Decor", "Architecture"],
              projectDetailPics: ["/img/project-01-details-01.jpg", "/img/project-01-details-02.jpg", "/img/project-01-details-03.jpg"],
              articleDate: "26 December, 2022",
              projectStarred: false,
            },
            {
              projectid: "13",
              pictureUrl: "/img/projects-bedroom-05.jpg",
              pictureAlt: "Project number 5 picture",
              projectSmallTitle: "Minimal Bedroom table",
              projectTitle: "Minimal Look Bedroom Table",
              projectText:
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
                "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
              ],
              projectTag: "Bedroom",
              projectShowTags: ["Decor", "Architecture"],
              projectDetailPics: ["/img/project-01-details-01.jpg", "/img/project-01-details-02.jpg", "/img/project-01-details-03.jpg"],
              articleDate: "22 December, 2022",
              projectStarred: false,
            },
            {
              projectid: "14",
              pictureUrl: "/img/projects-bedroom-06.jpg",
              pictureAlt: "Project number 6 picture",
              projectSmallTitle: "System Table",
              projectTitle: "Minimal Look System Table",
              projectText: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
                "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
              ],
              projectTag: "Bedroom",
              projectShowTags: ["Decor", "Architecture"],
              projectDetailPics: ["/img/project-01-details-01.jpg", "/img/project-01-details-02.jpg", "/img/project-01-details-03.jpg"],
              articleDate: "25 December, 2022",
              projectStarred: false,
            },
            {
              projectid: "15",
              pictureUrl: "/img/projects-bedroom-07.jpg",
              pictureAlt: "Project number 7 picture",
              projectSmallTitle: "Modern Bedroom",
              projectTitle: "Modern Look Bedrooms",
              projectText:
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
                "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
              ],
              projectTag: "Bedroom",
              projectShowTags: ["Decor", "Architecture"],
              projectDetailPics: ["/img/project-01-details-01.jpg", "/img/project-01-details-02.jpg", "/img/project-01-details-03.jpg"],
              articleDate: "25 December, 2022",
              projectStarred: false,
            },
            {
              projectid: "16",
              pictureUrl: "/img/projects-bedroom-08.jpg",
              pictureAlt: "Project number 8 picture",
              projectSmallTitle: "Modern Bedroom",
              projectTitle: "Modern Look Bedrooms",
              projectText:
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
                "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
              ],
              projectTag: "Bedroom",
              projectShowTags: ["Decor", "Architecture"],
              projectDetailPics: ["/img/project-01-details-01.jpg", "/img/project-01-details-02.jpg", "/img/project-01-details-03.jpg"],
              articleDate: "25 December, 2022",
              projectStarred: false,
            }
          ],
        });
      }, 1000); // TIMEMOUT
    },
  },
  modules: {},
});
