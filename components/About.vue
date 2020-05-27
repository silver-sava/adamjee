<template>
  <section id="about" class="about-area ptb-80 bg-f6f6f6">
    <div class="container">
      <div class="section-title">
        <h2>About <span>Addax</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="about-addax">
            <div class="section-title">
              <h2>We Are Digital <span>Marketing & Branding</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <ul class="pull-left">
              <li><i class="fa fa-check"></i>Creative Design</li>
              <li><i class="fa fa-check"></i>Retina Ready</li>
              <li><i class="fa fa-check"></i>Responsive Design</li>
            </ul>

            <ul>
              <li><i class="fa fa-check"></i>Modern Design</li>
              <li><i class="fa fa-check"></i>Awesome Design</li>
              <li><i class="fa fa-check"></i>Digital Marketing & Branding</li>
            </ul>

            <a href="#" class="btn btn-primary">Read More</a>
          </div>
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="about-video">
            <img src="assets/img/about.jpg" alt="about">
            <div class="video-btn">
              <a href="https://www.youtube.com/watch?v=GfLccvR0nVk" class="mediabox popup-youtube"><i class="fa fa-play"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "About",
      mounted() {
        MediaBox('.mediabox');
      }
    }
</script>

<style scoped>

</style>
