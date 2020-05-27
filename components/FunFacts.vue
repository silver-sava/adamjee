<template>
  <div v-observe-visibility="onVisibilityChange" class="border-top pt-120 pb-80">
  <section class="funFacts-area ptb-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="funFact">
            <i class="fa fa-smile-o"></i>
            <h2 class="count">
              <countTo :startVal='0' :endVal='startCounter ? 540 : 0' :duration='3000'></countTo>
            </h2>
            <p>Happy Clients</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="funFact">
            <i class="fa fa-shield"></i>
            <h2 class="count">
              <countTo :startVal='0' :endVal='startCounter ? 980 : 0' :duration='3000'></countTo>
            </h2>
            <p>Completed Projects</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="funFact">
            <i class="fa fa-trophy"></i>
            <h2 class="count">
              <countTo :startVal='0' :endVal='startCounter ? 46 : 0' :duration='3000'></countTo>
            </h2>
            <p>Wining Awards</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="funFact">
            <i class="fa fa-users"></i>
            <h2><span class="count">
              <countTo :startVal='0' :endVal='startCounter ? 50 : 0' :duration='3000'></countTo>
            </span></h2>
            <p>Team Members</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
  import countTo from 'vue-count-to';
  import { ObserveVisibility } from 'vue-observe-visibility'
    export default {
        name: "FunFacts",
      components: { countTo },
      directives: {
        ObserveVisibility
      },
      data() {
        return{
          startCounter: false
        }
      },
      methods: {
        onVisibilityChange (isVisible) {
          if (isVisible){
            this.startCounter = true;
          }

        },
      },
    }
</script>

<style scoped>

</style>
