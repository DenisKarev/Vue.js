<template>
    <header class="header center-bg">
        <nav class="header-home">
            <router-link to="/" class="header-home__link">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                        fill="#CDA274" />
                </svg>
                <div class="header-home__title">Interno</div>
            </router-link>
        </nav>
        <nav class="header-menu">
            <div class="header-menu-item"><router-link to="/" class="header-menu-item-link">Home</router-link></div>
            <div class="header-menu-item"><router-link to="/projects" class="header-menu-item-link">Projects</router-link></div>
            <div class="header-menu-item"><router-link to="/blog" class="header-menu-item-link">Blog</router-link></div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderAndNavComponent',
}
</script>

<style lang="scss"></style>