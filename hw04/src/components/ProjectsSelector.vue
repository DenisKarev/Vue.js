<template>
    <div class="selector">
        <div class="selector-container">
            <div class="selector-container center">
                <div class="selector-selectors center">
                    <p class="selector-selector" v-for="(cat, index) in categories" :key="index"
                        :class="{ 'selector-selected': selectedProject === cat }" @click="selectProject(cat)">{{ cat }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectsSelector",
    props: {
        current: String
    },
    data() {
        return {
            categories: ['Bathroom', 'Bedroom', 'Kitchen', 'Livingroom'],
            selectedProject: this.current
        }
    },
    methods: {
        selectProject(cat) {
            this.selectedProject = cat;
            this.$emit('selectorChanged', this.selectedProject);
        }
    },
    computed: {

    }
}
</script>

<style lang='scss'>
.selector {
    padding-bottom: 60px;
    font-weight: 600;
    color: var(--pri3);

    &-container {
        display: flex;
        justify-content: center;
    }

    &-selected {
        color: white;
        background-color: var(--pri1);
        border: 1px solid var(--pri1);
        border-radius: 18px;
    }

    &-selectors {
        display: flex;
        justify-content: center;

        border: 1px solid var(--pri1);
        border-radius: 18px;

    }

    &-selector {
        padding: 26px 66px;
        border: 1px solid transparent;

        &:hover {
            border-radius: 18px;
            background-color: var(--pri3);
            color: var(--pri2);
            cursor: pointer;
        }
    }
}
</style>