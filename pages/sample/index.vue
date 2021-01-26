<template>
  <div class="sample">
    <SampleBlock />
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
        title: 'サンプルページ',
        description: 'サンプルページの概要',
        image: '/assets/img/ogp.png',
        url: '/works/',
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.sample {
  //
}
</style>
