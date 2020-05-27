<template>
  <div>
    <footer class="footer-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <h4><a href="/"><span>S</span>ilver</a></h4>
            <ul>
              <li><a href="#" class="fa fa-facebook"></a></li>
              <li><a href="#" class="fa fa-twitter"></a></li>
              <li><a href="#" class="fa fa-skype"></a></li>
              <li><a href="#" class="fa fa-instagram"></a></li>
              <li><a href="#" class="fa fa-linkedin"></a></li>
            </ul>
            <p>Copyright <i class="fa fa-copyright"></i> 2020 All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    <div @click="scrollTop" :class="`back-to-top ${scrollBtn ? 'show' : ''}`">
      <a href="#"><i class="fa fa-chevron-up"></i></a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Footer",
      data(){
        return {
          scrollBtn: false
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },

      methods: {

        handleScroll () {

          if (window.scrollY > 70) {
            this.scrollBtn = true
          }
          else if (window.scrollY < 70) {
            this.scrollBtn = false
          }
        },

        scrollTop () {
          window.scrollTo(0, 0);
        }


      }
    }
</script>

<style scoped>

</style>
