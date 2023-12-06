<template>
    <div class="projects-list">
        <div class="projects-list-container">
            <ProjectShow v-for="item in showProjects" :key="item.id" :project="item" @projectSelectClick="pid => projectSelectClick(pid)"/>
        </div>
    </div>
</template>

<script>
import ProjectShow from './ProjectShow.vue';

export default {
    name: "ProjectsListComponent",
    props: {
        showProjects: Array
    },
    data() {
        return {};
    },
    methods: {
        projectSelectClick(pid) {
            this.$emit('projectSelectClick', pid);
        }
    },
    computed: {},
    components: {
        ProjectShow
    }
}
</script>

<style lang='scss'>
.projects-list-container {
    display: inline-block;
    // display: flexbox;
    // flex-direction: column;
    // flex-wrap: wrap;
    // justify-content: space-between;
    // display: grid;
    column-count: 2;
    column-gap: 30px;
    // grid-template-columns: repeat(2, 50%);
    // grid-auto-flow: column dense;
    // gap: 30px;
}
</style>