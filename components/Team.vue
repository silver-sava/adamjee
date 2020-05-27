<template>
  <section id="team" class="team-area ptb-80">
    <div class="container">
      <div class="section-title">
        <h4>Meet Addax</h4>
        <h2>Our Creative <span>Team</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div class="">
        <div class="team-slider">
          <swiper :options="swiperOptions">
            <swiper-slide>
              <div class="col-lg-12">
                <div class="our-team">
                  <div class="pic">
                    <img src="assets/img/team-1.jpg" alt="team-img">
                  </div>

                  <div class="team-content">
                    <h3 class="title">Jisan Smith</h3>
                    <span class="post">CEO</span>
                  </div>

                  <div class="social">
                    <ul>
                      <li><a href="#" class="fa fa-facebook"></a></li>
                      <li><a href="#" class="fa fa-google-plus"></a></li>
                      <li><a href="#" class="fa fa-instagram"></a></li>
                      <li><a href="#" class="fa fa-linkedin"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="col-lg-12">
                <div class="our-team">
                  <div class="pic">
                    <img src="assets/img/team-2.jpg" alt="team-img">
                  </div>

                  <div class="team-content">
                    <h3 class="title">John Ahmed</h3>
                    <span class="post">Web Developer</span>
                  </div>

                  <div class="social">
                    <ul>
                      <li><a href="#" class="fa fa-facebook"></a></li>
                      <li><a href="#" class="fa fa-google-plus"></a></li>
                      <li><a href="#" class="fa fa-instagram"></a></li>
                      <li><a href="#" class="fa fa-linkedin"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="col-lg-12">
                <div class="our-team">
                  <div class="pic">
                    <img src="assets/img/team-3.jpg" alt="team-img">
                  </div>

                  <div class="team-content">
                    <h3 class="title">Arif John</h3>
                    <span class="post">Back-End Developer</span>
                  </div>

                  <div class="social">
                    <ul>
                      <li><a href="#" class="fa fa-facebook"></a></li>
                      <li><a href="#" class="fa fa-google-plus"></a></li>
                      <li><a href="#" class="fa fa-instagram"></a></li>
                      <li><a href="#" class="fa fa-linkedin"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="col-lg-12">
                <div class="our-team">
                  <div class="pic">
                    <img src="assets/img/team-4.jpg" alt="team-img">
                  </div>

                  <div class="team-content">
                    <h3 class="title">Sakib Johan</h3>
                    <span class="post">Front-End Developer</span>
                  </div>

                  <div class="social">
                    <ul>
                      <li><a href="#" class="fa fa-facebook"></a></li>
                      <li><a href="#" class="fa fa-google-plus"></a></li>
                      <li><a href="#" class="fa fa-instagram"></a></li>
                      <li><a href="#" class="fa fa-linkedin"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="col-lg-12">
                <div class="our-team">
                  <div class="pic">
                    <img src="assets/img/team-5.jpg" alt="team-img">
                  </div>

                  <div class="team-content">
                    <h3 class="title">John Doe</h3>
                    <span class="post">Web Developer</span>
                  </div>

                  <div class="social">
                    <ul>
                      <li><a href="#" class="fa fa-facebook"></a></li>
                      <li><a href="#" class="fa fa-google-plus"></a></li>
                      <li><a href="#" class="fa fa-instagram"></a></li>
                      <li><a href="#" class="fa fa-linkedin"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="col-lg-12">
                <div class="our-team">
                  <div class="pic">
                    <img src="assets/img/team-6.jpg" alt="team-img">
                  </div>

                  <div class="team-content">
                    <h3 class="title">Olivia Smith</h3>
                    <span class="post">Photographer</span>
                  </div>

                  <div class="social">
                    <ul>
                      <li><a href="#" class="fa fa-facebook"></a></li>
                      <li><a href="#" class="fa fa-google-plus"></a></li>
                      <li><a href="#" class="fa fa-instagram"></a></li>
                      <li><a href="#" class="fa fa-linkedin"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
    export default {
        name: "Team",
      components: {
        Swiper,
        SwiperSlide
      },
      directives: {
        swiper: directive
      },
      data() {
        return {
          swiperOptions: {
            slidesPerView : 3,
            loop: true,
            speed: 1000,
            spaceBetween : 20,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false
            },

            // Responsive breakpoints
            breakpoints: {
              1024:{
                slidesPerView : 3
              },
              768:{
                slidesPerView : 2
              },
              640:{
                slidesPerView : 2
              },
              320:{
                slidesPerView : 1
              }
            }
          }
        }
      },
    }
</script>

<style scoped>

</style>
