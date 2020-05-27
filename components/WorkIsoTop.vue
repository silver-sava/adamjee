<template>
  <div id="work" class="work-area ptb-80">
      <div class="container">
          <!-- Start Portfolio -page -->
          <div class="section-title">
            <h2>Our <span>Work</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="shorting-menu">
              <button class="filter" data-filter="all">All</button>
              <button class="filter" data-filter=".brand">Brand</button>
              <button class="filter" data-filter=".design">Design</button>
              <button class="filter" data-filter=".graphic">Graphic</button>
              <button class="filter" data-filter=".photoshop">Photoshop</button>
              <button class="filter" data-filter=".illustrator">Illustrator</button>
            </div>
          </div>
        </div>
      </div>

        <div class="project-content" >
          <div class="row m-0">
          <!-- single-awesome-project start -->
          <div class="col-lg-4 col-md-6 mix brand p-0 ">
            <div class="single-work">
              <img src="assets/img/work-img1.jpg" alt="work-img">

              <div class="work-content">
                <h4>Creative Design</h4>
                <ul>
                  <li><a href="#">Design</a></li>
                  <li>.</li>
                  <li><a href="#">Brand</a></li>
                </ul>
              </div>

              <a href="assets/img/work-img1.jpg" class="popup-btn"><i class="fa fa-plus"></i></a>
            </div>
          </div>
          <!-- single-awesome-project end -->
          <!-- single-awesome-project start -->
          <div class="col-lg-4 col-md-6 mix design p-0">
            <div class="single-work">
              <img src="assets/img/work-img2.jpg" alt="work-img">

              <div class="work-content">
                <h4>Creative Design</h4>
                <ul>
                  <li><a href="#">Design</a></li>
                  <li>.</li>
                  <li><a href="#">Brand</a></li>
                </ul>
              </div>

              <a href="assets/img/work-img2.jpg" class="popup-btn"><i class="fa fa-plus"></i></a>
            </div>
          </div>
          <!-- single-awesome-project end -->
          <!-- single-awesome-project start -->
          <div class="col-lg-4 col-md-6 mix graphic p-0">
            <div class="single-work">
              <img src="assets/img/work-img3.jpg" alt="work-img">

              <div class="work-content">
                <h4>Creative Design</h4>
                <ul>
                  <li><a href="#">Design</a></li>
                  <li>.</li>
                  <li><a href="#">Brand</a></li>
                </ul>
              </div>

              <a href="assets/img/work-img3.jpg" class="popup-btn"><i class="fa fa-plus"></i></a>
            </div>
          </div>
          <!-- single-awesome-project end -->
          <!-- single-awesome-project start -->
          <div class="col-lg-4 col-md-6 mix photoshop p-0">
            <div class="single-work">
              <img src="assets/img/work-img4.jpg" alt="work-img">

              <div class="work-content">
                <h4>Creative Design</h4>
                <ul>
                  <li><a href="#">Design</a></li>
                  <li>.</li>
                  <li><a href="#">Brand</a></li>
                </ul>
              </div>

              <a href="assets/img/work-img4.jpg" class="popup-btn"><i class="fa fa-plus"></i></a>
            </div>
          </div>
          <!-- single-awesome-project end -->
          <!-- single-awesome-project start -->
          <div class="col-lg-4 col-md-6 mix design p-0">
            <div class="single-work">
              <img src="assets/img/work-img5.jpg" alt="work-img">

              <div class="work-content">
                <h4>Creative Design</h4>
                <ul>
                  <li><a href="#">Design</a></li>
                  <li>.</li>
                  <li><a href="#">Brand</a></li>
                </ul>
              </div>

              <a href="assets/img/work-img5.jpg" class="popup-btn"><i class="fa fa-plus"></i></a>
            </div>
          </div>
          <!-- single-awesome-project end -->
          <!-- single-awesome-project start -->
          <div class="col-lg-4 col-md-6 mix illustrator p-0">
            <div class="single-work">
              <img src="assets/img/work-img6.jpg" alt="work-img">

              <div class="work-content">
                <h4>Creative Design</h4>
                <ul>
                  <li><a href="#">Design</a></li>
                  <li>.</li>
                  <li><a href="#">Brand</a></li>
                </ul>
              </div>

              <a href="assets/img/work-img6.jpg" class="popup-btn"><i class="fa fa-plus"></i></a>
            </div>
          </div>
          </div>
        </div>
    <!-- End main content -->
  </div>
</template>

<script>
    export default {
        name: "WorkIsoTop",
      mounted(){
        var containerEl = document.querySelector('.project-content');
        var mixer = mixitup(containerEl);
      },
    }
</script>

<style scoped>

</style>
