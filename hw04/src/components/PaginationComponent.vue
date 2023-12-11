<template>
    <div class="pagination">
        <div class="pagination-container" v-if="max > 0">
            <div class="pagination-button" v-for="i in max" :key="i" :class="{ 'pagination-current': currentPage === i }">
                <router-link :to="(target + i)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <circle cx="26" cy="26" r="25.5" fill="none" stroke="var(--pri3)" />
                        <text x="16" y="32" class="pagination-text" fill="var(--pri2)"> {{ ('' + i).padStart(2, '0') }}
                        </text>
                    </svg>
                </router-link>
            </div>
            <div class="pagination-button">
                <router-link :to="nextPage">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <circle cx="26" cy="26" r="25.5" stroke="var(--pri1)" />
                        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </router-link>
            </div>
        </div>
        <!-- <div v-else style="text-align: center;">No Pages were counted</div> -->
    </div>
</template>

<script>
export default {
    name: "PaginationComponent",
    data() {
        return {
            target: ''
        }
    },
    props: {
        current: {
            type: Number,
            required: true
            // validation ?
        },
        max: {
            type: Number,
            required: true
        }
    },
    methods: {},
    computed: {
        currentPage() {
            const page = this.$route.params.page;
            return +page || 1;
        },
        nextPage() {
            let next = this.currentPage;
            next++;
            if (next >= this.max) {
                return this.target + this.max;
            }
            return this.target + next;
        }
    },
    mounted() {
        this.target = this.$route.path + "/";
    },
}
</script>

<style lang='scss'>
.pagination {
    padding-bottom: 200px;

    &-container {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    &-button {
        position: relative;

        font-family: 'Jost', sans-serif;
        font-size: 16px;
        color: var(--pri2);
        line-height: 150%;
        font-weight: 600;
        letter-spacing: .22px;

        // cursor: pointer;

        &:hover {
            & circle {
                fill: var(--pri2);
            }

            & path {
                stroke: var(--pri1);

                &::before {
                    color: var(--pri3);
                }
            }

            .pagination-text {
                fill: var(--pri3)
            }

            &::before {
                color: var(--pri3);
            }
        }
    }

    &-current {
        & circle {
            fill: var(--pri3)
        }
    }

    &-text {
        font-family: 'Jost', sans-serif;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: .22px;
        color: var(--pri2);
    }
}
</style>