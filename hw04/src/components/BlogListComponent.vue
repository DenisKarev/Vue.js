<template>
    <div>
        <div class="blog-list-articles">
            <div class="blog-article-card" v-for="article in listArtiles" :key="article.articleid">
                <div class="blog-article-card-inner">
                    <div class="blog-article-card-inner-img">
                        <img :src="article.pictureUrl" :alt="article.pictureAlt" class="blog-article-card-inner-img" />
                        <p class="blog-article-card-inner-tag">
                            {{ article.articleTag }}
                        </p>
                    </div>
                    <div class="blog-article-card-inner-description">
                        <h4 class="blog-article-card-inner-description-title">
                            {{ article.articleTitle }}
                        </h4>
                        <div class="blog-article-card-inner-description-button-container">
                            <p class="blog-article-card-inner-description-text">{{ article.articleDate }}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none"
                                class="buttontype1hover">
                                <circle cx="26" cy="26.2671" r="26" fill="#F4F0EC" />
                                <path d="M23.7715 32.9529L29.7144 26.2672L23.7715 19.5815" stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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


export default {
    name: 'BlogListComponent',
    props: {
        listArtiles: Array
    }
}
</script>

<style lang="scss" scoped></style>
