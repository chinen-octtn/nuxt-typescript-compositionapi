<template>
  <div class="top">
    <TopLogo />
    <TopButton />
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
.top {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
