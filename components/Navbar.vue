<template>
   <nav :class="`navbar navbar-expand-lg navbar-light bg-light header-sticky ${sticky ? 'is-sticky' : ''}`  ">

    <div class="container">
      <a class="navbar-brand" href="/index"><span>S</span>ilver</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
          <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#work">Work</a></li>
          <li class="nav-item"><a class="nav-link" href="#price">Price</a></li>
          <li class="nav-item"><a class="nav-link" href="#blog">Blog</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "Navbar",
      data(){
        return {
          sticky: false
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);

        this.mobileMenu();
      },

      methods: {

        handleScroll () {

          if (window.scrollY > 70) {
            this.sticky = true
          }
          else if (window.scrollY < 70) {
            this.sticky = false
          }
        },

        mobileMenu() {
          //Mobile Menu Toggle
          let mainNavToggler = document.querySelector(".navbar-toggler");
          let mainNav = document.querySelector(".collapse");

          mainNavToggler.addEventListener("click", function () {
            //mainNavToggler.classList.add('menu-opened');
            mainNav.style.display = ( (mainNav.style.display != "block" ? "block" : "none" ) );
          });
        }

      }
    }
</script>

<style scoped>

</style>
