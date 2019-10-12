<template>
  <div id="nav-bar" class="is-transparent">
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://nelsonmfinda.me">
            <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
            <span>N.</span>
          </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item">
              Home
            </a>
            <a class="navbar-item">
              Sobre
            </a>
            <a class="navbar-item">
              Portfólio
            </a>
            <a class="navbar-item">
              Blog
            </a>
            <a class="navbar-item">
              Contacto
            </a>
            <a class="navbar-item">
              <i class="fab fa-github"></i>
            </a>
            <a class="navbar-item">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="navbar-item">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  components: {
    
  }
}

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
</script>

<style scoped lang="sass">
#nav-bar
  margin-top: 40px

.navbar
  background-color: transparent

  .navbar-item
    color: #FFF
</style>