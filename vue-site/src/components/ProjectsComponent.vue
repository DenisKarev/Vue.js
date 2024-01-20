<template>
    <div class="projects center-bg">
        <ProjectsSelector @selectorChanged="data => selectorChanged(data)" :current="selectedProj" />

        <ProjectsList :showProjects="paginatedProjects" />

        <PaginationComponent :current="currentPage" :max="totalPages" />

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProjectsSelector from './ProjectsSelector.vue'
import ProjectsList from './ProjectsList.vue'
import PaginationComponent from './PaginationComponent.vue'

export default {
    name: 'ProjectsComponent',
    data() {
        return {
            selectedProj: 'Bedroom',
            projectsPerPage: 6
        }
    },
    methods: {
        selectorChanged(selected) {
            this.selectedProj = selected;
            // console.log(this.$route.params.page);
            if (this.$route.params.page) {
                this.$router.push('/'+this.$route.name)
            }
        },
    },
    computed: {
        ...mapGetters(['projectArticles']),
        selectedProjects() {
            const selected = this.projectArticles.filter((project) => project.projectTag === this.selectedProj);
            const odd = selected.filter((project) => +project.projectid % 2);
            const even = selected.filter((project) => !(+project.projectid % 2));
            return [...odd, ...even];
        },
        totalPages() {
            return Math.ceil(this.selectedProjects.length / this.projectsPerPage);
        },
        paginatedProjects() {
            const startIndex = (this.currentPage - 1) * this.projectsPerPage;
            const endIndex = startIndex + this.projectsPerPage;
            return this.selectedProjects.slice(startIndex, endIndex);
        },
        currentPage() {
            const page = this.$route.params.page;
            return +page || 1;
        },
    },
    components: {
        ProjectsSelector,
        ProjectsList,
        PaginationComponent
    },
    mounted() {
        if (this.$route.params.page > this.totalPages) {
            this.$router.replace({ name: '404' })
        }
    },
}
</script>

<style lang='scss'>
.projects {
    padding-top: 200px;
    padding-bottom: 60px;
}
</style>