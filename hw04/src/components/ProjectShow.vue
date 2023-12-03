<template>
    <div class="project-component">
        <div class="project-component-contents">
            <img :src="project.pictureUrl" alt="project.pictureAlt">
            <div class="project-component-wrapper">
                <div class="project-component-texts">
                    <h4 class="project-component-title">{{ project.projectSmallTitle }}</h4>
                    <p class="project-component-show-tags">
                        <span v-for="(tag, index) in project.projectShowTags" :key="index">
                            {{ tag }}
                        </span>
                    </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none"
                    class="buttontype1hover">
                    <circle cx="26" cy="26.2671" r="26" fill="#F4F0EC" />
                    <path d="M23.7715 32.9529L29.7144 26.2672L23.7715 19.5815" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectShow",
    props: {
        project: Object
    },
    data() {
        return {}
    },
    methods: {},
}
</script>

<style lang='scss'>
.project-component {
    display: inline-block;
    max-width: fit-content;
    max-height: fit-content;

    &-wrapper {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        padding-top: 24px;
        padding-bottom: 40px;
    }
    &-show-tags {
        &>span {
            &:not(:last-child)::after {
                content: "/";
            }
        }
    }
}
</style>