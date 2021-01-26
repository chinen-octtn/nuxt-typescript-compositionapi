<template>
  <div class="l-contentes">
    <Header />
    <main class="l-main">
      <Nuxt />
    </main>
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
