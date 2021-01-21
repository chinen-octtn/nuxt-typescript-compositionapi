<template>
  <button @click="countUp('カウント：')">count up : {{ counter }}</button>
</template>

<script lang="ts">
import { onMounted, ref } from '@nuxtjs/composition-api'

export default {
  name: 'Samplebutton',

  setup() {
    onMounted(() => {
      console.log('onMounted')
    })

    const counter = ref(0)

    const countUp = (msg: string) => {
      counter.value++
      console.log(msg + counter.value)
    }

    return {
      counter,
      countUp,
    }
  },
}
</script>
