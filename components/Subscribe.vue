<template>
  <section class="subscribe-area ptb-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="newsletter">
            <h4>Join Our Newsletter</h4>
            <form class="newsletter-form" data-toggle="validator">
              <input type="email" class="form-control" placeholder="Your Email Address" name="EMAIL" required autocomplete="off">
              <button class="btn btn-primary" type="submit">Subscribe</button>
              <div id="validator-newsletter" class="form-result"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Subscribe"
    }
</script>

<style scoped>

</style>
