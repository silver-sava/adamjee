<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<style>

</style>
<script>
  import Navbar from "~/components/Navbar";
  import Footer from "~/components/Footer";
  export default {
    components: {
      Footer,
      Navbar
    },
    head(){
      return{
        title: 'silver | Digital Agency Landing Page'
      }
    },
  }
</script>
