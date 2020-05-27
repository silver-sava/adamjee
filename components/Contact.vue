<template>
  <section id="contact" class="contact-area ptb-80 bg-f6f6f6">
    <div class="container">
      <div class="section-title">
        <h4>Get in Touch</h4>
        <h2>Let's <span>Contact</span> Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
              class="google-map__contact" allowFullScreen="">
            </iframe>
          </div>

          <div class="contact-info">
            <ul>
              <li><i class="fa fa-map-marker"></i> Exercisplan 4, 111 49 Stockholm, Sweden</li>
              <li><i class="fa fa-envelope"></i> <a href="#">addax@gmail.com</a></li>
              <li><i class="fa fa-phone"></i> <a href="#">(+124)412-2445515</a></li>
              <li><i class="fa fa-fax"></i> <a href="#">617-241-60055</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="contact-form">
            <h4>Stay Connected</h4>
            <form id="contactForm">
              <div class="row">
                <div class="col-lg-12 col-md-6">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" name="name" id="name" required data-error="Please enter your name">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="col-lg-12 col-md-6">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" name="email" id="email" required data-error="Please enter your email">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <label for="number">Phone Number</label>
                    <input type="text" class="form-control" name="number" id="number" required data-error="Please enter your number">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <label for="message">Message</label>
                    <textarea name="message" class="form-control" id="message" cols="30" rows="4" required data-error="Write your message"></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="col-lg-12 col-md-12">
                  <button type="submit" class="btn btn-primary">Send Message</button>
                  <div id="msgSubmit" class="h3 text-center hidden"></div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>
  .google-map__contact {
    width: 100%;
    height: 91%;
  }
  .google-map__contact[data-v-115426d6] {
    width: 100%;
    height: 91%;
    border: 3px solid #FF2C57;
  }
</style>
