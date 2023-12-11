<template>
  <div class="notfound center-bg">
    <div class="notfound-container">
      <div class="notfound-left">
        <h1 class="notfound-title">404</h1>
        <h2 class="notfound-text">
          We are sorry, but the page you requested was not found
        </h2>
        <router-link to="/">
          <span class="notfound-button buttontype2">
            <p>Back To Home</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
              <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274"
                stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
            </svg>
          </span>
        </router-link>
      </div>
      <div class="notfound-right">
        <img class="notfound-right-pic" src="/img/not-found-or-404.jpg" alt="not-found-or-404">
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.notfound {
  // display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  position: relative;
  min-height: 1042px;
  margin-bottom: 200px;

  &-container {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
  }

  &-left {
    min-width: 570px;
  }

  &-right {
    &-pic {
      border-radius: 0px 0px 0px 353px;
      object-position: top left;
      object-fit: cover;
    }
  }

  &-title {
    font-size: 250px;
    color: var(--pri1);
    padding-bottom: 16px;
  }

  &-text {
    font-family: 'DM Serif Display';
    font-weight: 400;
    line-height: 150%;
    padding-bottom: 24px;
  }

  &-button {
    display: flex;
    align-items: center;
    gap: 10px;

    background-color: var(--pri2);
    padding: 26px 54px;

    &>p {
      color: white;
    }
  }
}
</style>