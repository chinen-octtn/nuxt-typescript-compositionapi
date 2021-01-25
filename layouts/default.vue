<template>
  <div class="l-contentes">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
