<template>
  <section class="skill-area ptb-80 bg-f6f6f6">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="about-skill">
            <div class="section-title">
              <h2>Some of Our <span>Skills</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <h3 class="progress-title">Branding</h3>
            <div class="progress">
              <div class="progress-bar" style="width:92%;">
                <div class="progress-value">92%</div>
              </div>
            </div>

            <h3 class="progress-title">Marketing</h3>
            <div class="progress">
              <div class="progress-bar" style="width:97%;">
                <div class="progress-value">97%</div>
              </div>
            </div>

            <h3 class="progress-title">Design</h3>
            <div class="progress">
              <div class="progress-bar" style="width:90%;">
                <div class="progress-value">90%</div>
              </div>
            </div>

            <h3 class="progress-title">Development</h3>
            <div class="progress mb-0">
              <div class="progress-bar" style="width:95%;">
                <div class="progress-value">95%</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="skill-video">
            <img src="assets/img/video-img.jpg" alt="video-img">
            <div class="video-btn">
              <a href="https://www.youtube.com/watch?v=Pj80xAVP6QM" class="mediabox popup-youtube"><i class="fa fa-play"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Skill",
      mounted() {
        MediaBox('.mediabox');
      }
    }
</script>

<style scoped>

</style>
