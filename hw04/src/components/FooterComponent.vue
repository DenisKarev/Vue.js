<template>
    <footer class="footer center-bg">
        <div class="footer-container">
            <div class="footer-logo-and-links">
                <nav class="footer-home">
                    <a href="#" class="footer-home-link">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                                fill="#CDA274" />
                        </svg>
                        <div class="footer-home-title">Interno</div>
                    </a>
                    <p class="footer-about-text">
                        It is a long established fact that a reader will be distracted lookings.
                    </p>
                </nav>
                <nav class="footer-social-media">
                    <a href="" class="footer-social-media-twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 30 30">
                            <path
                                d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z">
                            </path>
                        </svg>
                    </a>
                    <a href="" class="footer-social-media-linkedin">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="16" height="16" viewBox="0 0 16 16">
                            <path
                                d="M4 14.6h-3v-9h3zM2.5 4.4c-.828 0-1.5-.672-1.5-1.5 0-.828.672-1.5 1.5-1.5.828 0 1.5.672 1.5 1.5 0 .828-.672 1.5-1.5 1.5zM14.8 14.6h-2.886v-4.38c0-1.044-.018-2.388-1.5-2.388-1.5 0-1.734 1.14-1.734 2.31v4.458h-2.886v-9.006h2.766v1.23h.042c.384-.708 1.326-1.452 2.73-1.452 2.922 0 3.462 1.866 3.462 4.29 0 0 0 4.938 0 4.938z">
                            </path>
                        </svg>
                    </a>
                </nav>
            </div>
            <div class="footer-pages">
                <h3 class="footer-pages-title">Pages</h3>
                <nav class="footer-pages-links">
                    <p class="footer-pages-link-item"><a href="#" class="footer-pages-link">Home</a></p>
                    <p class="footer-pages-link-item"><a href="#" class="footer-pages-link">Project</a></p>
                    <p class="footer-pages-link-item"><a href="#" class="footer-pages-link">Blog</a></p>
                </nav>
            </div>
            <div class="footer-services"></div>

            <div class="footer-contact">
                <h3 class="footer-contact-title">Contact</h3>
                <p class="footer-contact-texta">55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <a class="footer-contact-email" href="mailto:contact@interno.com">contact@interno.com</a>
                <!-- <p class="footer-contact-textpm">contact@interno.com</p> -->
                <p class="footer-contact-textpm">(123) 456 - 7890</p>
            </div>

        </div>
        <div class="footer-copyright"></div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
}
</script>

<style lang="scss">
.footer {
    min-height: 272px;
    padding-bottom: 120px;

    &-container {
        display: flex;
        justify-content: space-between;
    }

    &-logo-and-links {
        width: 393px;
    }

    // &-about-text {}

    &-home {
        font-size: 40px;
        font-family: 'DM Serif Display', serif;
        padding-bottom: 32px;

        &-link {
            display: flex;
            align-items: center;
            gap: 10px;
            padding-bottom: 18px;

            &:hover {
                &>svg>path {
                    fill: var(--pri2);
                }
            }
        }

        // &-title {}
    }

    &-social-media {
        display: flex;
        gap: 54px;

        &-twitter {
            &:hover {
                & path {
                    fill: var(--pri1);
                }
            }
        }

        &-linkedin {
            &:hover {
                & path {
                    fill: var(--pri1);
                }
            }
        }
    }

    &-pages {
        width: 125px;

        &-title {
            padding-bottom: 24px;
        }

        &-links {
            display: flex;
            flex-direction: column;

        }

        &-link {
            line-height: 300%;

            // &-item {}
        }
    }

    &-services {
        width: 120px;
    }

    &-contact {
        width: 258px;

        &-title {
            padding-bottom: 24px;
        }

        &-texta {
            min-width: 258px;
        }

        &-textpm {
            min-width: 258px;
            line-height: 300%;
        }

        &-email {
            display: block;

            font-family: "Jost", sans-serif;
            font-size: 22px;
            letter-spacing: 0.22px;
            color: #4D5053;
            min-width: 258px;
            line-height: 300%;
        }
    }

    // &-copyright {}
}
</style>
