<template>
  <section class="faq-area ptb-80">
    <div class="container">
      <div class="section-title">
        <h2>Frequently Asked <span>Question</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div class="row">
        <div class="col-lg-7 col-md-12">
          <div class="accordion" >

            <div class="card">
              <div class="accordion">
                <div class="card-header" >
                  <a aria-expanded="true" aria-controls="collapseOne">
                    <h5 class="mb-0">
                      Where should I incorporate my business? <i class="fa fa-plus"></i>
                    </h5>
                  </a>
                </div>
              </div>
              <div  class="collapse show" >
                <div class="card-body">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </div>
              </div>
            </div>

            <div class="card">
              <div class="accordion">
                <div class="card-header"  >
                  <a class="collapsed"  >
                    <h5 class="mb-0">
                      How much should I capitalize my business with at the beginning? <i class="fa fa-plus"></i>
                    </h5>
                  </a>
                </div>
              </div>
              <div class="collapse" >
                <div class="card-body">
                  Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Ut tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio. Phasellus auctor velit at lacus blandit, commodo iaculis justo viverra. Etiam vitae est arcu. Mauris vel congue dolor. Aliquam eget mi mi.
                </div>
              </div>
            </div>

            <div class="card">
              <div class="accordion">
                <div class="card-header" >
                  <a class="collapsed" >
                    <h5 class="mb-0">
                      How big should a stock option pool for employees be? <i class="fa fa-plus"></i>
                    </h5>
                  </a>
                </div>
              </div>
              <div  class="collapse"  >
                <div class="card-body">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </div>
              </div>
            </div>

            <div class="card">
              <div class="accordion">
                <div class="card-header"  >
                  <a class="collapsed"  >
                    <h5 class="mb-0">
                      How can I get a venture capitalist to pay attention to me? <i class="fa fa-plus"></i>
                    </h5>
                  </a>
                </div>
              </div>
              <div class="collapse" >
                <div class="card-body">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </div>
              </div>
            </div>

            <div class="card mb-0">
              <div class="accordion">
                <div class="card-header"  >
                  <a class="collapsed"  >
                    <h5 class="mb-0">
                      How can I come up with a great name for my business <i class="fa fa-plus"></i>
                    </h5>
                  </a>
                </div>
              </div>
              <div class="collapse" >
                <div class="card-body">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-md-12">
          <div class="image"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Faq",
      mounted() {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }
      }

    }
</script>

<style scoped>

</style>
