<template>
    <section class="blog-list center-bg">
        <div class="blog-list-container">
            <h1 class="blog-list-contents-header">Latest Post</h1>

            <div class="blog-list-blog-latest">
                <div class="blog-list-blog-latest-inner">
                    <div class="blog-list-blog-latest-inner-img">
                        <img src="/img/blogs-latest.png" alt="Latest blog picture"
                            class="blog-list-blog-latest-inner-img" />
                    </div>
                    <div class="blog-list-blog-latest-inner-description">
                        <h3 class="blog-list-blog-latest-inner-description-title">
                            Low Cost Latest Invented Interior Designing Ideas
                        </h3>
                        <p class="blog-list-blog-latest-inner-description-text">
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere
                            in.Contrary
                            to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                        </p>
                        <div class="blog-list-blog-latest-inner-description-button-container">
                            <p class="blog-list-blog-latest-inner-description-date">26 December, 2022</p>
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

            <div class="blog-list-contents">
                <h1 class="blog-list-contents-header">Articles & News</h1>

                <div class="blog-list-articles">
                    <div>
                        <div class="blog-list-articles">
                            <div class="blog-article-card" v-for="article in listArtiles" :key="article.articleid">
                                <div class="blog-article-card-inner">
                                    <div class="blog-article-card-inner-img">
                                        <img :src="article.pictureUrl" :alt="article.pictureAlt"
                                            class="blog-article-card-inner-img" />
                                        <p class="blog-article-card-inner-tag">
                                            {{ article.articleTag }}
                                        </p>
                                    </div>
                                    <div class="blog-article-card-inner-description">
                                        <h4 class="blog-article-card-inner-description-title">
                                            {{ article.articleTitle }}
                                        </h4>
                                        <div class="blog-article-card-inner-description-button-container">
                                            <p class="blog-article-card-inner-description-text">{{ article.articleDate }}
                                            </p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52"
                                                viewBox="0 0 52 52" fill="none" class="buttontype1hover">
                                                <circle cx="26" cy="26.2671" r="26" fill="#F4F0EC" />
                                                <path d="M23.7715 32.9529L29.7144 26.2672L23.7715 19.5815" stroke="#292F36"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="blog-list-pagination">
                            <div class="blog-list-pagination-container">
                                <div class="blog-list-pagination-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"
                                        fill="none" class="blog-list-pagination-button">
                                        <circle cx="26" cy="26" r="25.5" fill="#F4F0EC" />
                                    </svg>
                                </div>
                                <div class="blog-list-pagination-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"
                                        fill="none" class="blog-list-pagination-button">
                                        <circle cx="26" cy="26" r="25.5" stroke="#CDA274" />
                                    </svg>
                                </div>
                                <div class="blog-list-pagination-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"
                                        fill="none" class="blog-list-pagination-button">
                                        <circle cx="26" cy="26" r="25.5" stroke="#CDA274" />
                                    </svg>
                                </div>
                                <div class="blog-list-pagination-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"
                                        fill="none" class="blog-list-pagination-button">
                                        <circle cx="26" cy="26" r="25.5" stroke="#CDA274" />
                                        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
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
