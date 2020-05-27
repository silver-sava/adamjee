<template>
  <section id="blog" class="blog-area ptb-80">
    <div class="container">
      <div class="section-title">
        <h4>Our News</h4>
        <h2>Latest Blog <span>Posts</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div class="blog-slider">
        <swiper :options="swiperOptions">
          <swiper-slide>
            <div class="col-lg-12 col-md-12">
              <div class="single-blog-item" style="background-image: url(assets/img/services-img1.jpg)">
                <span>Business & Idea</span>
                <h4><a href="single-post.html">The best gear for starting a small business</a></h4>
                <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>
                <a href="single-post.html" title="Read More" class="link-btn"><i class="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="col-lg-12 col-md-12">
              <div class="single-blog-item" style="background-image: url(assets/img/services-img2.jpg)">
                <span>Business & Deplopment</span>
                <h4><a href="single-post.html">Get your first business suit right with these tips</a></h4>
                <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>
                <a href="single-post.html" title="Read More" class="link-btn"><i class="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="col-lg-12 col-md-12">
              <div class="single-blog-item" style="background-image: url(assets/img/services-img3.jpg)">
                <span>Design & IT</span>
                <h4><a href="single-post.html">How to Make a Font - Font Design Full Process</a></h4>
                <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>
                <a href="single-post.html" title="Read More" class="link-btn"><i class="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="col-lg-12 col-md-12">
              <div class="single-blog-item" style="background-image: url(assets/img/services-img4.jpg)">
               <span>Marketing & Trend</span>
               <h4><a href="single-post.html">How to Be a Work From Home Professional</a></h4>
               <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>
                <a href="single-post.html" title="Read More" class="link-btn"><i class="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="col-lg-12 col-md-12">
              <div class="single-blog-item" style="background-image: url(assets/img/services-img5.jpg)">
                <span>Business & Tech</span>
                <h4><a href="single-post.html">How to Be a Work From Home Professional</a></h4>
                <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>
                <a href="single-post.html" title="Read More" class="link-btn"><i class="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </swiper-slide>
        </swiper>
          <div class="swiper-pagination owl-dots" slot="pagination"></div>
      </div>
    </div>
  </section>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
    export default {
        name: "Blog",
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
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
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
