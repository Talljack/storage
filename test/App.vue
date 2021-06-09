<template>
  <div>
    <button @click="onStore">store</button>
    <button @click="onRemove">remove</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import storage from '../src/index'
export default defineComponent({
  setup () {
    const key = 'store'
    const onStore = () => {
      storage.setItem('sessionStorage', key, '123')
    }
    const onRemove = () => {
      storage.removeItem('sessionStorage', key)
    }
    return {
      onStore,
      onRemove
    }
  }
})
</script>

<style scoped>

</style>