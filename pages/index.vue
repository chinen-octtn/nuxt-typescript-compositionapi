<template>
  <div class="container">
    <div class="logo">
      <Logo />
    </div>
    <div class="button">
      <SampleButton />
    </div>
    <h1 class="title">Nuxt-Composition API</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import headTag from '~/assets/js/head'

export default Vue.extend({
  mixins: [headTag],
  layout: 'default',

  data() {
    return {
      meta: {
        title: 'TOPページ',
        description: 'TOPページの概要',
        image: '/assets/img/ogp.png',
        url: '/',
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.button {
  margin-top: 2em;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
