<template>
  <div class="Button">
    <button @click="countUp('カウント：')">count up : {{ counter }}</button>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from '@nuxtjs/composition-api'

export default {
  name: 'Button',

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

<style lang="scss">
.Button {
  font-weight: bold;

  button {
    border: none;
    padding: 1em;
    border-radius: 4px;
    box-shadow: 1px 1px 3px #fff inset, -1px -1px 3px #000 inset;

    &:hover {
      box-shadow: -1px -1px 3px #fff inset, 1px 1px 3px #000 inset;
    }
  }
}
</style>
