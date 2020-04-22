<template>
  <div id="app">
    <main>
      <!-- <n-header> </n-header> -->
      <nav
        class="navbar container"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a
            class="navbar-item is-size-4 has-text-weight-bold has-text-black-ter"
            href="https://bulma.io"
          >
            Nelson.
          </a>
        </div>
        <div class="navbar-end">
          <!-- navbar items -->
          <a
            href="mailto:hi@nelsonmfinda.dev?subject=Hi Nelson!"
            class="navbar-item is-size-6 has-text-weight-bold has-text-grey-dark"
            >Contact</a
          >
        </div>
      </nav>
      <n-banner> </n-banner>
      <footer class="is-fixed-bottom">
        <div class="container">
          <div class="social-links">
            <a
              href="https://www.linkedin.com/in/nelsonmfinda"
              target="_blank"
              class="nav-item"
            >
              <linkedin-icon
                size="1.5x"
                class="has-text-black-bis"
              ></linkedin-icon>
            </a>
            <a
              href="https://twitter.com/@nelsonmfinda"
              target="_blank"
              class="nav-item"
            >
              <twitter-icon
                size="1.5x"
                class="has-text-black-bis"
              ></twitter-icon>
            </a>
            <a
              href="https://github.com/nelsonmfinda"
              target="_blank"
              class="nav-item"
            >
              <github-icon size="1.5x" class="has-text-black-bis"></github-icon>
            </a>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
// import Header from './components/home/Header.vue'
import Banner from "./components/home/Banner.vue";
import { LinkedinIcon, TwitterIcon, GithubIcon } from "vue-feather-icons";

export default {
  name: "app",
  components: {
    // 'n-header': Header,
    "n-banner": Banner,
    LinkedinIcon,
    TwitterIcon,
    GithubIcon,
  },
};
</script>

<style scoped lang="sass">
main
  position: relative
  display: table
  width: 100%
  background-color: #FFF
  background-size: cover
  height: 100vh
  padding-top: 2.5em;

  .is-fixed-bottom
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;

    .social-links
      float: right;
      padding-bottom: 2.5em;

      .nav-item
        padding-right: 0.7em;
</style>
