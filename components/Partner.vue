<template>
  <div class="partner-area ptb-80 bg-f6f6f6">
    <div class="container">
      <div class="">
        <div class="partner-slider">
          <swiper :options="swiperOptions">
            <swiper-slide>
          <div class="col-lg-12 col-md-12">
            <div class="item">
              <a href="#"><img src="assets/img/partner-1.png" alt="partner"></a>
            </div>
          </div>
            </swiper-slide>
            <swiper-slide>
          <div class="col-lg-12 col-md-12">
            <div class="item">
              <a href="#"><img src="assets/img/partner-2.png" alt="partner"></a>
            </div>
          </div>
            </swiper-slide>
            <swiper-slide>
          <div class="col-lg-12 col-md-12">
            <div class="item">
              <a href="#"><img src="assets/img/partner-3.png" alt="partner"></a>
            </div>
          </div>
            </swiper-slide>
            <swiper-slide>
          <div class="col-lg-12 col-md-12">
            <div class="item">
              <a href="#"><img src="assets/img/partner-4.png" alt="partner"></a>
            </div>
          </div>
            </swiper-slide>
            <swiper-slide>
          <div class="col-lg-12 col-md-12">
            <div class="item">
              <a href="#"><img src="assets/img/partner-5.png" alt="partner"></a>
            </div>
          </div>
            </swiper-slide>
            <swiper-slide>
          <div class="col-lg-12 col-md-12">
            <div class="item">
              <a href="#"><img src="assets/img/partner-6.png" alt="partner"></a>
            </div>
          </div>
            </swiper-slide>
            <swiper-slide>
          <div class="col-lg-12 col-md-12">
            <div class="item">
              <a href="#"><img src="assets/img/partner-1.png" alt="partner"></a>
            </div>
          </div>
            </swiper-slide>
            <swiper-slide>
          <div class="col-lg-12 col-md-12">
            <div class="item">
              <a href="#"><img src="assets/img/partner-2.png" alt="partner"></a>
            </div>
          </div>
            </swiper-slide>
            <swiper-slide>
          <div class="col-lg-12 col-md-12">
            <div class="item">
              <a href="#"><img src="assets/img/partner-3.png" alt="partner"></a>
            </div>
          </div>
            </swiper-slide>
            <swiper-slide>
          <div class="col-lg-12 col-md-12">
            <div class="item">
              <a href="#"><img src="assets/img/partner-4.png" alt="partner"></a>
            </div>
          </div>
            </swiper-slide>
            <swiper-slide>
          <div class="col-lg-12 col-md-12">
            <div class="item">
              <a href="#"><img src="assets/img/partner-5.png" alt="partner"></a>
            </div>
          </div>
            </swiper-slide>
            <swiper-slide>
          <div class="col-lg-12 col-md-12">
            <div class="item">
              <a href="#"><img src="assets/img/partner-6.png" alt="partner"></a>
            </div>
          </div>
            </swiper-slide>
          </swiper>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
    export default {
        name: "Partner",
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
            slidesPerView : 6,
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
                slidesPerView : 6
              },
              768:{
                slidesPerView : 4
              },
              640:{
                slidesPerView : 3
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
