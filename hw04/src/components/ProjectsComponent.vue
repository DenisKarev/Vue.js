<template>
    <div class="projects center-bg">
        <ProjectsSelector @selectorChanged="data => selectedProj = data" :current="selectedProj" />

        <ProjectsList :showProjects="selectedProjects" @projectSelectClick="pid => projectSelectClick(pid)"/>

        <div class="blog-list-pagination">
            <div class="blog-list-pagination-container">
                <div class="blog-list-pagination-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none"
                        class="blog-list-pagination-button">
                        <circle cx="26" cy="26" r="25.5" fill="#F4F0EC" />
                    </svg>
                </div>
                <div class="blog-list-pagination-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none"
                        class="blog-list-pagination-button">
                        <circle cx="26" cy="26" r="25.5" stroke="#CDA274" />
                    </svg>
                </div>
                <div class="blog-list-pagination-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none"
                        class="blog-list-pagination-button">
                        <circle cx="26" cy="26" r="25.5" stroke="#CDA274" />
                    </svg>
                </div>
                <div class="blog-list-pagination-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none"
                        class="blog-list-pagination-button">
                        <circle cx="26" cy="26" r="25.5" stroke="#CDA274" />
                        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectsSelector from './ProjectsSelector.vue'
import ProjectsList from './ProjectsList.vue'

export default {
    name: 'ProjectsComponent',
    props: {
        listProjects: Array
    },
    data() {
        return {
            selectedProj: 'Bedroom'
        }
    },
    methods: {
        selectorChanged(selected) {
            this.selectedProj = selected;
        },
        projectSelectClick(pid) {
            this.$emit('projectSelectClick', pid);
        }
    },
    computed: {
        selectedProjects() {
            return this.listProjects.filter((project) => project.projectTag === this.selectedProj);
        }
    },
    components: {
        ProjectsSelector,
        ProjectsList,
    }
}
</script>

<style lang='scss'>
.projects {
    padding-top: 200px;
    padding-bottom: 60px;
}
</style>