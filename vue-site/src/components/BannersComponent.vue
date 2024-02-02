<template>
    <section class="banners">
        <div class="banners-container">
            <img class="banners-container-back-pic" :src='imageSrc' :alt="imageAlt">
            <div class="banners-container-content" v-if="breadcrumbs">
                <h1 class="banners-container-header">{{ texts.h }}</h1>
                <p class="banners-container-text">
                    {{ texts.p }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BannersComponent',
    props: {
        breadcrumbs: Boolean,
        texts: Object,
        target: {
            type: String,
            require: true,
            validator: function (value) {
                return 'blog blog-details projects project-details'.includes(value)
            }
        }
    },
    data() {
        return {
            images: {
                'blog': `${process.env.BASE_URL}img/banner-blog.jpg`,
                'blog-details': `${process.env.BASE_URL}img/banner-blog-details.jpg`,
                'projects': `${process.env.BASE_URL}img/banner-projects.jpg`,
                'project-details': `${process.env.BASE_URL}img/banner-project-details.jpg`,
             }
        }
    },
    computed: {
        imageSrc() {
            return this.images[this.target]
        },
        imageAlt() {
            return this.target + ' background image'
        }
    }
}
</script>

<style lang="scss">
.banners {
    position: relative;
    height: 356px;

    &-container {
        display: flex;
        height: 100%;
        align-items: flex-end;
        justify-content: center;

        &-back-pic {
            position: absolute;
            height: 100%;
            width: 100%;
            object-position: bottom center;
            object-fit: cover;
        }

        &-content {
            min-width: 504px;;
            display: flex;
            flex-direction: column;
            align-items: center;

            position: relative;

            border-radius: 36px 36px 0px 0px;
            padding: 41px 78px;

            background-color: white;
            &:hover > svg > path {
                fill: white;
            }
        }
    }
}
</style>